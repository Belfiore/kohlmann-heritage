/* Checks the interactive tree against the family recorded on the site.
 *
 *   python3 /path/to/family-site-engine/build/build_site.py --site . --out _site
 *   node tests/verify-canvas.js
 *   DIST=path/to/build node tests/verify-canvas.js
 *   SHOTS=1 node tests/verify-canvas.js    writes screenshots under tests/screenshots/
 *
 * Every person in data/people.json must be a card. Parent, child and spouse links
 * must match the list below (the family-data.js relationships, with Rita's parents
 * kept as partners because the site does not record a marriage). A child sits
 * below their parents. The two families sit on the sides named in site.config.json.
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const ROOT = path.join(__dirname, '..');
const DIST = path.resolve(process.env.DIST || path.join(ROOT, '_site'));
if (!fs.existsSync(path.join(DIST, 'engine-build.json'))) {
    console.error('No built site at ' + DIST + '. Build it first, or set DIST.');
    process.exit(2);
}
const SHOTS = process.env.SHOTS ? path.join(__dirname, 'screenshots') : null;
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.woff': 'font/woff', '.woff2': 'font/woff2' };

// Ids are the converted family-data.js ids. Links are the ones that file records.
const EXPECTED = {
    'richard-becker': { parents: [], spouses: ['elise-just'], children: ['gertrud-becker'], side: 'left' },
    'elise-just': { parents: [], spouses: ['richard-becker'], children: ['gertrud-becker'], side: 'left' },
    'ernst-alwin': { parents: [], spouses: ['gertrud-becker'], children: ['sigrid', 'christa'], side: 'left' },
    'gertrud-becker': { parents: ['richard-becker', 'elise-just'], spouses: ['ernst-alwin'], children: ['sigrid', 'christa'], side: 'left' },
    'alvin': { parents: [], spouses: ['christa'], children: ['thomas', 'matthias', 'sabine'], side: 'left' },
    'christa': { parents: ['ernst-alwin', 'gertrud-becker'], spouses: ['alvin'], children: ['thomas', 'matthias', 'sabine'], side: 'left' },
    'sigrid': { parents: ['ernst-alwin', 'gertrud-becker'], spouses: [], children: [], side: 'left' },
    'rita-father': { parents: [], spouses: ['rita-mother'], partner: true, children: ['rita', 'heide', 'annette'], side: 'right' },
    'rita-mother': { parents: [], spouses: ['rita-father'], partner: true, children: ['rita', 'heide', 'annette'], side: 'right' },
    'thomas': { parents: ['alvin', 'christa'], spouses: ['rita'], children: ['valeria', 'elisa'], side: 'left' },
    'matthias': { parents: ['alvin', 'christa'], spouses: [], children: [], side: 'left' },
    'sabine': { parents: ['alvin', 'christa'], spouses: [], children: [], side: 'left' },
    'rita': { parents: ['rita-father', 'rita-mother'], spouses: ['thomas'], children: ['valeria', 'elisa'], side: 'right' },
    'heide': { parents: ['rita-father', 'rita-mother'], spouses: [], children: [], side: 'right' },
    'annette': { parents: ['rita-father', 'rita-mother'], spouses: [], children: [], side: 'right' },
    'valeria': { parents: ['thomas', 'rita'], spouses: ['sebastian'], children: ['enzo'], side: 'right' },
    'elisa': { parents: ['thomas', 'rita'], spouses: [], children: [], side: 'right' },
    'sebastian': { parents: [], spouses: ['valeria'], children: ['enzo'], side: 'right' },
    'enzo': { parents: ['valeria', 'sebastian'], spouses: [], children: [], side: 'right' },
    // Leads kept beside the person they may belong to (tree.suspectedRelatives), no proven link.
    'ernst-eifler-sr': { parents: [], spouses: [], children: [], side: 'left', lead: 'ernst-alwin' },
    'alwin-kohlmann-butcher': { parents: [], spouses: [], children: [], side: 'left', lead: 'alvin' },
};

function serve() {
    return new Promise(res => {
        const srv = http.createServer((req, rsp) => {
            let p = decodeURIComponent(req.url.split('?')[0].split('#')[0]);
            if (p.endsWith('/')) p += 'index.html';
            const f = path.join(DIST, p);
            if (!f.startsWith(DIST) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { rsp.writeHead(404); return rsp.end('not found'); }
            rsp.writeHead(200, { 'content-type': TYPES[path.extname(f).toLowerCase()] || 'application/octet-stream' });
            fs.createReadStream(f).pipe(rsp);
        });
        srv.listen(0, '127.0.0.1', () => res(srv));
    });
}

const failures = [];
const fail = (m) => { failures.push(m); console.log('  FAIL ' + m); };
const ok = (m) => console.log('  ok   ' + m);
const same = (a, b) => a.length === b.length && a.every(x => b.includes(x));

(async () => {
    const people = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/people.json'))).people;
    const ids = people.map(p => p.id).sort();
    const want = Object.keys(EXPECTED).sort();
    if (ids.join() !== want.join()) fail('people.json ids differ from the expected family: ' + ids.join(', '));
    else ok(people.length + ' people in the data');

    for (const p of people) {
        const e = EXPECTED[p.id];
        if (!e) continue;
        if (!same(p.parents, e.parents)) fail(p.id + ' parents ' + p.parents.join(', ') + ' expected ' + e.parents.join(', '));
        if (!same(p.children, e.children)) fail(p.id + ' children ' + p.children.join(', ') + ' expected ' + e.children.join(', '));
        const sps = (p.spouses || []).map(s => s.id);
        if (!same(sps, e.spouses)) fail(p.id + ' spouses ' + sps.join(', ') + ' expected ' + e.spouses.join(', '));
        if (e.partner) {
            const rel = (p.spouses || []).map(s => s.relation);
            if (rel.some(r => r !== 'partner')) fail(p.id + ' should be a partner link, not a marriage');
        }
        const blob = JSON.stringify(p);
        if (blob.includes('\u2014')) fail(p.id + ' has an em dash in the record');
    }
    if (!failures.length) ok('parent, child and spouse links match the recorded family');

    const srv = await serve();
    const base = 'http://127.0.0.1:' + srv.address().port + '/';
    const browser = await chromium.launch();
    if (SHOTS) fs.mkdirSync(SHOTS, { recursive: true });

    for (const [w, h, name] of [[1280, 800, 'desktop'], [768, 1024, 'tablet'], [390, 844, 'phone']]) {
        const ctx = await browser.newContext({ viewport: { width: w, height: h }, hasTouch: w < 800, isMobile: w < 800 });
        const page = await ctx.newPage();
        const errs = [];
        page.on('pageerror', e => errs.push(e.message));
        page.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
        await page.goto(base + 'tree-canvas.html', { waitUntil: 'networkidle' });
        await page.waitForFunction(() => window.__tree && document.querySelectorAll('.card').length > 0);
        await page.evaluate(() => document.fonts.ready);
        await page.waitForTimeout(500);
        if (errs.length) fail(w + 'px: page errors: ' + errs.join(' | ')); else ok(w + 'px: no page errors');

        const report = await page.evaluate((expected) => {
            const t = window.__tree;
            const cards = Array.from(document.querySelectorAll('.card')).map(c => c.dataset.id);
            const over = [];
            document.querySelectorAll('.card').forEach(c => {
                [c, ...c.querySelectorAll('.c-name,.c-dis,.c-dates,.c-place,.c-foot')].forEach(n => {
                    if (n.scrollWidth > n.clientWidth + 1 || n.scrollHeight > n.clientHeight + 1)
                        over.push(c.dataset.id + ' ' + n.className);
                });
            });
            const pos = t.L.pos, side = t.L.sideOf || {};
            const by = {};
            t.D.people.forEach(p => { by[p.id] = p; });
            const geom = [];
            Object.keys(expected).forEach(id => {
                const e = expected[id], p = by[id], q = pos[id];
                if (!p || !q) { geom.push(id + ' has no card position'); return; }
                // A spouse with no parents of his own is drawn in his wife's block. The engine
                // does not give him a side tag; the card still has to sit beside her.
                if (e.lead) {
                    const hq = pos[e.lead];
                    if (!hq || Math.abs(q.y - hq.y) > 8) geom.push(id + ' is not on the same row as ' + e.lead);
                } else if (id === 'sebastian' && !(side[id])) {
                    const v = pos.valeria;
                    if (!v || Math.abs(q.y - v.y) > 8 || Math.abs((q.x + 100) - (v.x + 100)) > 320)
                        geom.push('sebastian is not beside Valeria');
                } else if ((side[id] || '') !== e.side) geom.push(id + ' is on the ' + (side[id] || 'unset') + ' side, expected ' + e.side);
                e.parents.forEach(pid => {
                    const pq = pos[pid];
                    if (!pq) geom.push(id + ' parent ' + pid + ' is not on the canvas');
                    else if (!(q.y > pq.y + 20)) geom.push(id + ' is not below parent ' + pid);
                });
                e.spouses.forEach(sid => {
                    const sq = pos[sid];
                    if (sq && Math.abs(q.y - sq.y) > 8) geom.push(id + ' is not on the same row as spouse ' + sid);
                });
            });
            const ids = Object.keys(pos);
            for (let i = 0; i < ids.length; i++) {
                for (let j = i + 1; j < ids.length; j++) {
                    const a = pos[ids[i]], b = pos[ids[j]];
                    const ox = Math.min(a.x + t.CW, b.x + t.CW) - Math.max(a.x, b.x);
                    const oy = Math.min(a.y + t.CH, b.y + t.CH) - Math.max(a.y, b.y);
                    if (ox > 2 && oy > 2) geom.push(ids[i] + ' overlaps ' + ids[j]);
                }
            }
            const rows = {};
            Object.entries(pos).forEach(([id, q]) => {
                rows[id] = { name: by[id].displayName, x: Math.round(q.x), y: Math.round(q.y), gen: by[id].generation, side: side[id] || '' };
            });
            return { cards, over, geom, rows, n: cards.length };
        }, EXPECTED);

        if (report.n !== want.length) fail(w + 'px: ' + report.n + ' cards, expected ' + want.length);
        else ok(w + 'px: all ' + report.n + ' people are on the canvas');
        const missing = want.filter(id => !report.cards.includes(id));
        if (missing.length) fail(w + 'px: missing cards: ' + missing.join(', '));
        if (report.over.length) report.over.forEach(o => fail(w + 'px overflow: ' + o));
        else ok(w + 'px: no card text overflows');
        if (w === 1280) {
            if (report.geom.length) report.geom.forEach(g => fail('layout: ' + g));
            else ok('every child is below their parents, couples share a row, and the two families sit on their own sides');
            fs.writeFileSync('/tmp/canvas-positions.json', JSON.stringify(report.rows, null, 1));
        }
        if (SHOTS) {
            await page.evaluate(() => window.__tree.fitView());
            await page.waitForTimeout(400);
            await page.screenshot({ path: path.join(SHOTS, 'tree-' + name + '-' + w + '.png') });
            await page.goto(base + 'index.html', { waitUntil: 'networkidle' });
            await page.waitForTimeout(300);
            await page.screenshot({ path: path.join(SHOTS, 'home-' + name + '-' + w + '.png'), fullPage: false });
        }
        await ctx.close();
    }

    await browser.close();
    srv.close();
    console.log(failures.length ? '\n' + failures.length + ' problem(s) found.' : '\nAll checks passed.');
    process.exit(failures.length ? 1 : 0);
})().catch(err => { console.error(err); process.exit(1); });
