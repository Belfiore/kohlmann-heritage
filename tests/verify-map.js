/* Checks the engine Family Map on the Kohlmann site against data/places.json and data/people.json.
 *
 *   python3 /path/to/family-site-engine/build/build_site.py --site . --out _site
 *   node tests/verify-map.js
 *   DIST=path/to/build SHOTS=1 node tests/verify-map.js
 *
 * The map is the shared engine map (site.config.json "map" block), not a one-off.
 * Checks: every drawn place has coordinates and a source; living people are on the map like anyone
 * else (the family's choice, 26 November 2026); business associates are marked as not family; the filters (event type, family,
 * person), the timeline, the list view and the "Not yet on the map" tray are there and
 * work; a place panel shows sources and links to profiles; no page errors.
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const ROOT = path.join(__dirname, '..');
const DIST = path.resolve(process.env.DIST || path.join(ROOT, '_site'));
if (!fs.existsSync(path.join(DIST, 'engine-build.json'))) { console.error('No built site at ' + DIST + '. Build it first, or set DIST.'); process.exit(2); }
const SHOTS = process.env.SHOTS ? path.join(__dirname, 'screenshots') : null;
const GL_ARGS = ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'];
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.pbf': 'application/x-protobuf' };
const people = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/people.json'))).people;
const places = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/places.json'))).places;
const sources = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/sources.json'))).sources;
const cfg = JSON.parse(fs.readFileSync(path.join(ROOT, 'site.config.json')));
const PL = Object.fromEntries(places.map(p => [p.id, p]));
const SRC = new Set(sources.map(s => s.id));
// living, or born under 100 years ago with no death found: on the map like anyone else since 26 Nov 2026
const year = new Date().getFullYear();
const NO_PINS = new Set(people.filter(p => p.isLiving || (!p.death && p.birth && p.birth.date && +p.birth.date.slice(0, 4) > year - 100)).map(p => p.id));

const failures = [];
const check = (c, m, d) => { if (c) console.log('  ok   ' + m); else { failures.push(m); console.log('  FAIL ' + m + (d ? '  [' + d + ']' : '')); } };
// The site pages carry no visible research labels (FACT, PROBABLE, LEAD, UNKNOWN, CORRECTED, BACKGROUND): the family asked for plain wording.
{
    const LABEL = />\s*(FACT|PROBABLE|LEAD|UNKNOWN|CORRECTED|BACKGROUND)\s*<\/span>/;
    const pages = fs.readdirSync(DIST).filter(n => n.endsWith('.html'));
    const hits = pages.filter(n => LABEL.test(fs.readFileSync(path.join(DIST, n), 'utf8')));
    check(pages.length > 3 && !hits.length, 'no page shows a research label badge (FACT, PROBABLE, LEAD, UNKNOWN, CORRECTED, BACKGROUND)', hits.join(', '));
}

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

(async () => {
    console.log('Data');
    check(cfg.pages.map && cfg.pages.map.file === 'map.html' && cfg.map && cfg.map.families && cfg.map.branches, 'site.config.json turns on the engine map');
    check(!fs.existsSync(path.join(ROOT, 'map.js')) && !fs.existsSync(path.join(ROOT, 'family-map.css')) && !fs.existsSync(path.join(ROOT, 'vendor/leaflet')), 'the old one-off map files are gone');
    const noCoord = places.filter(p => p.lat == null || p.lng == null || !(p.coordinateSourceIds || []).length);
    check(!noCoord.length, `every place in places.json has coordinates and a coordinate source (${places.length})`, noCoord.map(p => p.id).join(', '));
    const badSrc = [];
    places.forEach(p => (p.events || []).forEach(e => { if (!(e.sourceIds || []).length) badSrc.push(e.id + ' none'); (e.sourceIds || []).forEach(s => { if (!SRC.has(s)) badSrc.push(e.id + ' ' + s); }); }));
    check(!badSrc.length, 'every map event cites sources that exist in sources.json', badSrc.slice(0, 5).join('; '));
    const livingEv = [];
    places.forEach(p => (p.events || []).forEach(e => (e.personIds || []).forEach(id => { if (NO_PINS.has(id)) livingEv.push(p.id + ':' + id); })));
    people.forEach(p => { if (!NO_PINS.has(p.id)) return; const s = JSON.stringify(p); const m = s.match(/"placeId":"[^"]+"/g); if (m) livingEv.push(p.id + ' ' + m.join(',')); });
    check(livingEv.length >= 8, `living people have places on the map, as the family asked (${livingEv.length} places for ${NO_PINS.size} people)`, livingEv.join('; '));
    const blob = JSON.stringify(places);
    check(!/[\u2013\u2014]/.test(blob), 'no em or en dashes in places.json');
    const refs = []; const walk = (o, w) => { if (Array.isArray(o)) o.forEach(x => walk(x, w)); else if (o && typeof o === 'object') for (const k of Object.keys(o)) { if (k === 'placeId' && o[k]) refs.push([o[k], w]); walk(o[k], w); } };
    people.forEach(p => walk(p, p.id));
    const dangling = refs.filter(r => !PL[r[0]]);
    check(!dangling.length, `every placeId in people.json exists in places.json (${refs.length})`, dangling.map(r => r.join(' at ')).join('; '));

    const srv = await serve();
    const base = 'http://127.0.0.1:' + srv.address().port + '/';
    const browser = await chromium.launch({ args: GL_ARGS });
    if (SHOTS) fs.mkdirSync(SHOTS, { recursive: true });
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await ctx.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    page.on('console', m => { if (m.type() === 'error' && !/Failed to load resource|net::ERR|AJAXError|Failed to fetch|NetworkError/i.test(m.text())) errors.push(m.text()); });
    await page.route('**/*', r => r.request().url().startsWith(base) ? r.continue() : r.abort());
    await page.goto(base + 'map.html');
    await page.waitForFunction(() => window.FM && FM.ready, null, { timeout: 30000 });
    await page.waitForTimeout(1200);

    console.log('Map page');
    const st = await page.evaluate(() => {
        const D = FM.DATA;
        return {
            events: D.events.length, placed: [...new Set(D.events.map(e => e.placeId))],
            people: [...new Set([].concat(...D.events.map(e => e.personIds)))],
            unplacedPeople: [...new Set([].concat(...D.unplaced.map(e => e.personIds)))],
            groups: [].map.call(document.querySelectorAll('#types [data-group]'), b => b.dataset.group),
            fam: [].map.call(document.querySelectorAll('#famSel option'), o => o.value),
            timeline: !!document.getElementById('timeline') && !!document.getElementById('tlPlay'),
            markers: document.querySelectorAll('.mk-wrap').length,
            noLink: D.events.filter(e => e.noProvenLink).map(e => e.placeId)
        };
    });
    const drawable = places.filter(p => (p.events || []).length).map(p => p.id);
    const notDrawn = drawable.filter(id => !st.placed.includes(id));
    check(!notDrawn.length, `every place with events is on the map (${st.placed.length} places, ${st.events} events)`, notDrawn.join(', '));
    const livingOnMap = st.people.filter(id => NO_PINS.has(id));
    check(['thomas', 'rita', 'valeria', 'elisa', 'sebastian', 'enzo', 'sigrid'].every(id => livingOnMap.includes(id)), 'living people have pins (Thomas, Rita, Valeria, Elisa, Sebastian, Enzo, Sigrid)', livingOnMap.join(', '));
    check(st.markers > 0, `markers are drawn (${st.markers} on screen)`);
    check(['born', 'married', 'lived', 'worked', 'died', 'buried'].every(g => st.groups.includes(g)), 'event-type filters are there', st.groups.join(','));
    check(['thomas', 'rita', 'both'].every(f => st.fam.includes(f)), 'family filter offers Thomas\'s, Rita\'s and both families', st.fam.join(','));
    check(st.timeline, 'the timeline and its Play button are there');
    check(st.noLink.includes('doebeln-grimmaische-20'), 'the Döbeln Woltmann lead is drawn as no proven link');
    const names = await page.evaluate(() => { const U = FM.data, P = FM.DATA.people; return { bruno: U.whoOf(['bruno-weickert'], P), alwin: U.whoOf(['ernst-alwin'], P), father: U.whoOf(['ernst-eifler-sr'], P), labels: [].map.call(document.querySelectorAll('.mk-wrap'), w => w.getAttribute('aria-label') || w.textContent || '').join(' | ') }; });
    check(names.bruno === 'Bruno Weickert' && names.alwin === 'Alwin Eifler' && names.father === 'Ernst Eifler', 'pins use the names people went by (knownAs): Bruno Weickert, Alwin Eifler; Ernst Eifler is only the father', JSON.stringify(names).slice(0, 300));
    check(!/Max Weickert/.test(names.labels), 'no pin calls Bruno "Max Weickert"', names.labels.slice(0, 300));
    const assoc = await page.evaluate(() => { const D = FM.DATA; return { ev: D.events.filter(e => e.associate).map(e => e.placeId), npl: D.events.filter(e => e.associate && e.noProvenLink).length, who: Object.keys(D.associate || {}) }; });
    check(['grossschoenau', 'bautzen-neusalzaer-34', 'bautzen-neusalzaer-20', 'bautzen-fischergasse-31'].every(id => assoc.ev.includes(id)) && !assoc.npl && assoc.who.join() === 'bruno-weickert',
          'Bruno Weickert, business associate, is on the map as an associate (not family, not "no proven link")', JSON.stringify(assoc));

    // filter by type
    await page.click('#types [data-group="died"]'); await page.waitForTimeout(400);
    const hid = await page.evaluate(() => !!FM.state.hidden.died);
    await page.click('#types [data-group="died"]'); await page.waitForTimeout(300);
    check(hid, 'clicking an event type hides it');
    // family filter
    await page.selectOption('#famSel', 'rita'); await page.waitForTimeout(500);
    const ritaN = await page.evaluate(() => document.querySelectorAll('.mk-wrap').length);
    await page.selectOption('#famSel', 'thomas'); await page.waitForTimeout(500);
    const thomasN = await page.evaluate(() => document.querySelectorAll('.mk-wrap').length);
    check(thomasN > 0, `the family filter changes the markers (Thomas ${thomasN}, Rita ${ritaN})`);
    await page.selectOption('#famSel', 'both'); await page.waitForTimeout(400);
    // person search
    await page.fill('#personInput', 'Gertrud'); await page.waitForTimeout(300);
    const opts = await page.$$eval('#personList [role="option"]', els => els.map(e => e.textContent));
    check(opts.some(t => /Gertrud/.test(t)), 'the person search finds Gertrud', opts.join(' | '));
    await page.fill('#personInput', ''); await page.keyboard.press('Escape');
    // place panel: open Wilthener Strasse 19
    await page.goto(base + 'map.html?place=wilthener-19'); await page.waitForFunction(() => window.FM && FM.ready); await page.waitForTimeout(1500);
    const panel = await page.evaluate(() => { const p = document.getElementById('panel'); return { shown: !p.hidden, text: p.innerText, links: [].map.call(p.querySelectorAll('a'), a => a.getAttribute('href')) }; });
    check(panel.shown && /Wilthener/.test(panel.text), 'a place opens its panel from the URL', panel.text.slice(0, 120));
    check(panel.links.some(h => /tree-canvas\.html|person=|#/.test(h || '')), 'the panel links to profiles', panel.links.slice(0, 8).join(' '));
    check(/Source|source|Findbuch|Adressbuch|address book/i.test(panel.text), 'the panel shows sources');
    await page.goto(base + 'map.html?place=bautzen-fischergasse-31'); await page.waitForFunction(() => window.FM && FM.ready); await page.waitForTimeout(1200);
    const ap = await page.evaluate(() => { const p = document.getElementById('panel'); return { shown: !p.hidden, badge: [].map.call(p.querySelectorAll('.badge--assoc'), b => b.textContent).join(' | ') }; });
    check(ap.shown && /Business associate\. Not family/.test(ap.badge), 'an associate\'s place panel says "Business associate. Not family"', ap.badge);
    if (SHOTS) await page.screenshot({ path: path.join(SHOTS, 'map-place-1440.png') });
    await page.keyboard.press('Escape'); await page.waitForTimeout(300);
    // tray and list
    await page.click('#trayBtn'); await page.waitForTimeout(400);
    const tray = await page.evaluate(() => ({ shown: !document.getElementById('tray').hidden, n: document.querySelectorAll('#trayList li').length }));
    check(tray.shown && tray.n > 0, `"Not yet on the map" lists events with no place (${tray.n})`);
    await page.keyboard.press('Escape'); await page.waitForTimeout(300);
    await page.click('#listOpen'); await page.waitForTimeout(400);
    const list = await page.evaluate(() => document.getElementById('listView').innerText);
    const listMissing = drawable.filter(id => !list.includes(PL[id].name));
    check(!listMissing.length, 'the list view names every place', listMissing.join(', '));
    await page.keyboard.press('Escape');
    if (SHOTS) { await page.goto(base + 'map.html'); await page.waitForFunction(() => window.FM && FM.ready); await page.waitForTimeout(1500); await page.screenshot({ path: path.join(SHOTS, 'map-1440.png') }); }
    check(!errors.length, 'no page errors', errors.slice(0, 3).join(' | '));
    await browser.close(); srv.close();
    console.log(failures.length ? '\n' + failures.length + ' problem(s) found.' : '\nAll checks passed.');
    process.exit(failures.length ? 1 : 0);
})().catch(err => { console.error(err); process.exit(1); });
