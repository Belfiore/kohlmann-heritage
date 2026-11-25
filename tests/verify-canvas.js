/* Checks for the Kohlmann site, run against the site as the engine built it.
 *
 *   python3 path/to/family-site-engine/build/build_site.py --site . --out _site
 *   node tests/verify-canvas.js              (needs Playwright with Chromium)
 *   DIST=path/to/build node tests/verify-canvas.js   checks a build somewhere else (the publish workflow does this)
 *   SHOTS=1 node tests/verify-canvas.js      also writes screenshots to tests/screenshots/
 *
 * Checks:
 *   the data: every family link goes both ways, every cited source is in sources.json;
 *   the tree: no card text spills out of its card at 1440, 1024 and 390 px, every #/person/ link opens that person;
 *   every page: no page errors, and every local link, image, stylesheet and script resolves;
 *   the navigation bar: in the same place on every page, the current page's link lit, the menu opens and closes on a phone.
 * The site's web fonts load from Google Fonts as for any visitor; every other request to another site (map tiles) is
 * blocked, so the checks never depend on it.
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const ROOT = path.join(__dirname, '..');                                   // the site as written: its data
const DIST = path.resolve(process.env.DIST || path.join(ROOT, '_site'));  // the site as built by the engine
if (!fs.existsSync(path.join(DIST, 'engine-build.json'))) {
    console.error('No built site at ' + DIST + '. Build it first (see the top of this file), or set DIST.');
    process.exit(2);
}
const SHOTS = process.env.SHOTS ? path.join(__dirname, 'screenshots') : null;
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.pdf': 'application/pdf', '.svg': 'image/svg+xml', '.pbf': 'application/x-protobuf' };

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

(async () => {
    const srv = await serve();
    const base = 'http://127.0.0.1:' + srv.address().port + '/';
    const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
    if (SHOTS) fs.mkdirSync(SHOTS, { recursive: true });
    async function open(file, w, h) {
        const ctx = await browser.newContext({ viewport: { width: w || 1440, height: h || 900 }, isMobile: (w || 1440) < 800, hasTouch: (w || 1440) < 800 });
        // the site's web fonts load as they do for a visitor (the card checks depend on them); FONTS_CSS=file serves a
        // local copy of that stylesheet instead, for a machine that cannot reach Google Fonts
        if (process.env.FONTS_CSS) await ctx.route('https://fonts.googleapis.com/**', r => r.fulfill({ contentType: 'text/css', body: fs.readFileSync(process.env.FONTS_CSS, 'utf8') }));
        await ctx.route(/^https?:\/\/(?!127\.0\.0\.1|fonts\.googleapis\.com|fonts\.gstatic\.com)/, r => r.abort());
        const page = await ctx.newPage();
        page.errs = [];
        page.on('pageerror', e => page.errs.push(e.message));
        // a blocked request to another site is not the page's fault; anything else logged as an error is
        page.on('console', m => { if (m.type() === 'error' && (m.location().url || '').startsWith(base)) page.errs.push(m.text()); });
        await page.goto(base + file, { waitUntil: 'load' });
        return page;
    }

    // ---------------------------------------------------------------- the data
    console.log('The data');
    const people = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/people.json'))).people;
    const sources = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/sources.json'))).sources;
    const by = Object.fromEntries(people.map(p => [p.id, p]));
    const sid = new Set(sources.map(s => s.id));
    let links = 0;
    for (const p of people) {
        for (const q of p.parents) { links++; if (!by[q] || !by[q].children.includes(p.id)) fail(`${p.id} lists ${q} as a parent, but not the other way round`); }
        for (const c of p.children) { links++; if (!by[c] || !by[c].parents.includes(p.id)) fail(`${p.id} lists ${c} as a child, but not the other way round`); }
        for (const s of p.spouses) { links++; if (!by[s.id] || !by[s.id].spouses.some(x => x.id === p.id)) fail(`${p.id} lists ${s.id} as a spouse, but not the other way round`); }
    }
    if (!failures.length) ok(`all ${links} family links go both ways`);
    let refs = 0;
    const before = failures.length;
    const cite = (ids, where) => (ids || []).forEach(i => { refs++; if (!sid.has(i)) fail(`${where}: cites "${i}", which is not in sources.json`); });
    const walk = (o, where) => {
        if (Array.isArray(o)) o.forEach((v, i) => walk(v, `${where}[${i}]`));
        else if (o && typeof o === 'object') Object.entries(o).forEach(([k, v]) => {
            if (k === 'sourceIds') cite(v, where); else if (k === 'sourceId') cite(v ? [v] : [], where); else walk(v, `${where}.${k}`);
        });
    };
    for (const p of people) {
        walk(p, p.id);
        (String(p.story || '').match(/\[\^([a-z0-9-]+)\]/g) || []).forEach(m => cite([m.slice(2, -1)], p.id + '.story'));
    }
    if (failures.length === before) ok(`all ${refs} source citations are in sources.json (${sid.size} sources)`);

    // ---------------------------------------------------------------- the tree at three widths
    console.log('The interactive tree');
    for (const [w, h] of [[1440, 900], [1024, 768], [390, 844]]) {
        const page = await open('tree-canvas.html', w, h);
        await page.waitForFunction(() => window.__tree && document.querySelectorAll('.card').length > 0, null, { timeout: 20000 });
        await page.evaluate(() => document.fonts.ready);
        await page.waitForTimeout(500);
        const n = await page.evaluate(() => document.querySelectorAll('.card').length);
        if (n !== people.length) fail(`${w}px: ${n} cards for ${people.length} people`); else ok(`${w}px: a card for each of the ${n} people`);
        const over = await page.evaluate(() => {
            const out = [];
            document.querySelectorAll('.card').forEach(c => {
                [c, ...c.querySelectorAll('.c-name,.c-dis,.c-dates,.c-place,.c-foot')].forEach(n => {
                    if (n.scrollWidth > n.clientWidth + 1 || n.scrollHeight > n.clientHeight + 1)
                        out.push(`${c.dataset.id} ${n.className} (${n.scrollWidth}x${n.scrollHeight} in ${n.clientWidth}x${n.clientHeight})`);
                });
            });
            return out;
        });
        if (over.length) over.forEach(o => fail(`${w}px: text spills out of a card: ${o}`)); else ok(`${w}px: no card text spills out`);

        if (w === 1440) {
            const bad = [];
            for (const p of people) {
                await page.evaluate(id => { location.hash = '#/person/' + id; }, p.id);
                const got = await page.waitForFunction(id => { const d = document.getElementById('drawer'); return !d.hidden && window.__tree.S.drawerFor === id && document.querySelector('#drawerBody .pf-name'); }, p.id, { timeout: 4000 }).then(() => true, () => false);
                if (!got) { bad.push(p.id + ' did not open'); continue; }
                const name = await page.evaluate(() => document.querySelector('#drawerBody .pf-name').textContent);
                if (name !== p.displayName) bad.push(`${p.id}: heading "${name}"`);
            }
            if (bad.length) bad.forEach(b => fail('person link: ' + b)); else ok(`all ${people.length} tree-canvas.html#/person/ links open the right person`);
            await page.evaluate(() => { history.pushState('', '', location.pathname); dispatchEvent(new HashChangeEvent('hashchange')); });
        }
        if (SHOTS) await page.screenshot({ path: path.join(SHOTS, `canvas-${w}.png`) });
        if (page.errs.length) fail(`${w}px: page errors on the tree: ${page.errs.join(' | ')}`); else ok(`${w}px: no page errors on the tree`);
        await page.context().close();
    }

    // ---------------------------------------------------------------- every page
    console.log('Every page');
    const pages = fs.readdirSync(DIST).filter(f => f.endsWith('.html')).sort();
    const linkErrs = [], pageErrs = [], bars = {};
    for (const f of pages) {
        const page = await open(f);
        await page.waitForTimeout(f === 'map.html' ? 2500 : 600);
        if (page.errs.length) pageErrs.push(`${f}: ${page.errs.join(' | ')}`);
        bars[f] = await page.evaluate(() => {
            const nav = document.querySelector('nav.main-nav'), r = nav && nav.getBoundingClientRect();
            const lit = Array.from(document.querySelectorAll('.nav-links a.active')).map(a => a.getAttribute('href'));
            return { n: document.querySelectorAll('nav.main-nav').length, top: r && Math.round(r.top), h: r && Math.round(r.height), lit };
        });
        const refs = await page.evaluate(() => Array.from(document.querySelectorAll('a[href], img[src], link[rel=stylesheet][href], script[src]'))
            .map(n => n.getAttribute('href') || n.getAttribute('src')).filter(h => h && !/^(https?:|mailto:|data:|#\/|tel:)/.test(h)));
        for (const l of new Set(refs)) {
            const [file, hash] = l.split('#');
            if (file) {
                const r = await page.evaluate(async u => (await fetch(u, { method: 'HEAD' })).status, new URL(l, base + f).href.split('#')[0]);
                if (r !== 200) linkErrs.push(`${f}: ${l} (${r})`);
            }
            if (hash && !hash.startsWith('/')) {
                const target = file || f;
                const html = fs.readFileSync(path.join(DIST, target), 'utf8');
                if (!new RegExp('id=["\']' + hash.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '["\']').test(html)) linkErrs.push(`${f}: ${l} (no element #${hash})`);
            }
        }
        if (SHOTS) await page.screenshot({ path: path.join(SHOTS, `page-${f.replace('.html', '')}.png`), fullPage: !['tree-canvas.html', 'map.html'].includes(f) });
        await page.context().close();
    }
    if (pageErrs.length) pageErrs.forEach(e => fail('page errors: ' + e)); else ok(`no page errors on ${pages.length} pages`);
    if (linkErrs.length) linkErrs.forEach(e => fail('link: ' + e)); else ok(`every local link, image, stylesheet and script resolves on ${pages.length} pages`);

    // ---------------------------------------------------------------- the navigation bar
    console.log('The navigation bar');
    const navErrs = [];
    const first = bars[pages[0]];
    for (const f of pages) {
        const b = bars[f];
        if (b.n !== 1) navErrs.push(`${f}: ${b.n} navigation bars`);
        if (b.top !== first.top || b.h !== first.h) navErrs.push(`${f}: bar at ${b.top}px, ${b.h}px tall; ${pages[0]} has ${first.top}px, ${first.h}px`);
        if (b.lit.length !== 1 || b.lit[0] !== f) navErrs.push(`${f}: lit link ${JSON.stringify(b.lit)}`);
    }
    if (navErrs.length) navErrs.forEach(e => fail('bar: ' + e)); else ok(`one bar on every page, in the same place, with the page's own link lit`);
    {
        const page = await open('index.html', 390, 844);
        await page.waitForTimeout(300);
        const shown = () => page.evaluate(() => { const l = document.querySelector('.nav-links'); return !!l && getComputedStyle(l).display !== 'none' && l.getBoundingClientRect().height > 0; });
        const closed0 = !(await shown());
        await page.click('.nav-toggle'); await page.waitForTimeout(200);
        const opened = await shown();
        await page.click('.nav-toggle'); await page.waitForTimeout(200);
        const closed1 = !(await shown());
        if (closed0 && opened && closed1) ok('390px: the menu opens and closes'); else fail(`390px: menu closed ${closed0}, opened ${opened}, closed again ${closed1}`);
        await page.context().close();
    }

    await browser.close();
    srv.close();
    console.log(failures.length ? `\n${failures.length} problem(s) found.` : '\nAll checks passed.');
    process.exit(failures.length ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
