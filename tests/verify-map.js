/* Checks the family map against data/places.json.
 *
 *   DIST=path/to/build node tests/verify-map.js
 *   SHOTS=1 node tests/verify-map.js
 *
 * Living people are never drawn. A mapped place is a circle, not a door pin.
 * Every title on the map uses "Person: what, year". Places that could not be
 * located are listed under "Not yet on the map". Tiles are OpenStreetMap, with no key.
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
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg' };
const TITLE = /^[^:]+: [^,]+, .+$/;

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
    const people = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/people.json'))).people;
    const placesDoc = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/places.json')));
    const living = new Set(people.filter(p => p.isLiving).map(p => p.id));
    const text = fs.readFileSync(path.join(ROOT, 'data/places.json'), 'utf8')
        + fs.readFileSync(path.join(ROOT, 'map.js'), 'utf8')
        + fs.readFileSync(path.join(ROOT, 'map.html'), 'utf8');
    if (/\u2014|&mdash;/.test(text)) fail('em dash in the map page or the places file');
    else ok('no em dash in the map copy');
    if (/api[_-]?key|maptiler|google/i.test(fs.readFileSync(path.join(ROOT, 'map.js'), 'utf8'))) fail('map.js names a key or a keyed map service');
    else ok('map.js asks only OpenStreetMap for tiles');

    const mappedEvents = [];
    for (const pl of placesDoc.places) {
        for (const ev of pl.events || []) {
            const who = ev.personIds.filter(id => living.has(id));
            if (pl.status === 'mapped' && who.length) fail(pl.id + ' is mapped and names living ' + who.join(', '));
            if (pl.status === 'mapped' && ev.summary && !TITLE.test(ev.summary)) fail('bad title: ' + ev.summary);
            if (pl.status === 'mapped') mappedEvents.push(ev.summary);
        }
        if (pl.status === 'mapped' && pl.drawAs === 'pin') fail(pl.id + ' is an exact pin');
        if (pl.status === 'mapped' && (typeof pl.lat !== 'number' || typeof pl.lng !== 'number')) fail(pl.id + ' is mapped without coordinates');
    }
    if (!failures.length) ok(mappedEvents.length + ' mapped titles, none for a living person, none an exact pin');

    const srv = await serve();
    const base = 'http://127.0.0.1:' + srv.address().port + '/';
    const browser = await chromium.launch();
    if (SHOTS) fs.mkdirSync(SHOTS, { recursive: true });

    for (const [w, h, name] of [[1280, 800, 'desktop'], [768, 1024, 'tablet'], [390, 844, 'phone']]) {
        const ctx = await browser.newContext({ viewport: { width: w, height: h }, isMobile: w < 800, hasTouch: w < 800 });
        const page = await ctx.newPage();
        const errs = [];
        page.on('pageerror', e => errs.push(e.message));
        await page.goto(base + 'map.html', { waitUntil: 'networkidle' });
        await page.waitForFunction(() => window.__familyMap && document.querySelectorAll('#onMap .pin-title').length > 0);
        await page.waitForTimeout(600);
        if (errs.length) fail(w + 'px: ' + errs.join(' | ')); else ok(w + 'px: no page errors');

        const report = await page.evaluate(() => {
            const titles = Array.from(document.querySelectorAll('#onMap .pin-title')).map(n => n.textContent);
            const notYet = document.querySelector('#notYet').innerText;
            const held = document.querySelector('#withheld').innerText;
            const nav = document.querySelector('.nav-links a[href="map.html"]');
            const circles = document.querySelectorAll('#familyMap path.leaflet-interactive').length;
            const pins = document.querySelectorAll('#familyMap .leaflet-marker-icon').length;
            const tile = (document.querySelector('#familyMap .leaflet-tile') || {}).src || '';
            return { titles, notYet, held, nav: !!(nav && nav.classList.contains('active')), circles, pins, tile };
        });
        if (report.titles.length !== mappedEvents.length) fail(w + 'px: ' + report.titles.length + ' titles on the page, ' + mappedEvents.length + ' in the data');
        else ok(w + 'px: ' + report.titles.length + ' titles on the page');
        const bad = report.titles.filter(t => !TITLE.test(t));
        if (bad.length) fail(w + 'px: titles off the pattern: ' + bad.join(' | '));
        const livingNames = people.filter(p => p.isLiving).map(p => p.displayName);
        const leaked = report.titles.filter(t => livingNames.some(n => t.startsWith(n)));
        if (leaked.length) fail(w + 'px: living person on the map: ' + leaked.join(' | '));
        else ok(w + 'px: no living person in the mapped titles');
        if (!/Alvin Kohlmann/.test(report.notYet)) fail(w + 'px: Alvin Kohlmann is missing from Not yet on the map');
        if (!/Richard Hermann Becker: birth/.test(report.titles.join(' '))) fail(w + 'px: Herzberg birth is missing from the map');
        if (!/Sigrid/.test(report.held) || !/Enzo/.test(report.held) || !/Thomas Kohlmann/.test(report.held)) fail(w + 'px: withheld list is missing Sigrid, Enzo, or Thomas');
        else ok(w + 'px: not-yet and living lists are on the page');
        if (report.pins !== 0) fail(w + 'px: ' + report.pins + ' exact pins');
        else if (report.circles < 7) fail(w + 'px: expected a circle for each mapped place, found ' + report.circles);
        else ok(w + 'px: ' + report.circles + ' circles and no exact pins');
        if (report.tile && !/tile\.openstreetmap\.org/.test(report.tile)) fail(w + 'px: unexpected tile host ' + report.tile);
        if (report.tile && /[?&](key|apikey|api_key)=/i.test(report.tile)) fail(w + 'px: tile URL carries a key');
        if (!report.nav && w >= 1180) fail(w + 'px: Map is not the active nav link');
        if (SHOTS) {
            await page.waitForSelector('#familyMap .leaflet-tile', { timeout: 8000 }).catch(() => {});
            await page.waitForTimeout(400);
            await page.screenshot({ path: path.join(SHOTS, 'map-' + name + '-' + w + '.png'), fullPage: true });
        }
        await ctx.close();
    }

    await browser.close();
    srv.close();
    console.log(failures.length ? '\n' + failures.length + ' problem(s) found.' : '\nAll map checks passed.');
    process.exit(failures.length ? 1 : 0);
})().catch(err => { console.error(err); process.exit(1); });
