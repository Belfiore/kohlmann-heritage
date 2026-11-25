# The Kohlmann family heritage

Valeria Kohlmann's German family, from Saxony to Munich and Tampa: the home page, the family tree as a list, the interactive family tree, the family map, the escape from East Germany, the Weickert & Eifler factory in Bautzen, and the research and records behind them.

Live at <https://belfiore.github.io/kohlmann-heritage/>.

## How the site is built

The interactive family tree (`tree-canvas.html`), the family map (`map.html`) and the navigation bar come from the shared engine, [Belfiore/family-site-engine](https://github.com/Belfiore/family-site-engine). This repository holds only what belongs to this family:

| | |
| --- | --- |
| `site.config.json` | The site's settings: its name, pages and navigation, the tree's root person, generation numbers and opening view, the map's home region, and the theme that gives the engine's tree and map the site's colours and type. See the engine's `docs/site-config.md` |
| `data/` | `people.json`, `sources.json` and `places.json`: the family, the records, and the places (none yet). See the engine's `docs/data-format.md` |
| `index.html` and the story pages | The home page, The Escape, Weickert & Eifler, Research & Records |
| `family-tree.html`, `script.js` | The family tree as a list. Its biographies are kept in `script.js`, not in `data/` |
| `styles.css` | The site's own look, for its own pages |
| `images/`, `pdfs/` | Records and scans |
| `tests/verify-canvas.js` | This site's checks, run against every build before it is published |

`tree-canvas.html` and `map.html` are not in the repository: the build makes them from the engine's templates and this site's settings.

On every push to `main`, GitHub Actions checks the data, builds the site with the engine version this site's channel points to (`engine.channel`: `stable`), runs `tests/verify-canvas.js` against the build, and publishes it. If anything fails, nothing is published and the live site stays as it was. A pull request gets the same checks without publishing. For this to work, **Settings > Pages > Source** must be **GitHub Actions**.

## Changing the site

- **A person on the interactive tree**: edit `data/people.json` (cite records from `data/sources.json`). The build checks every change: a broken link between people, an id used twice or a date that is not a date stops it, with a message saying what to fix. Keep the `[PLACEHOLDER: ...]` convention for anything not yet confirmed.
- **A person on the list view**: `family-tree.html` (the card) and `script.js` (the biography). These are separate from `data/`, so a fact changed in one place has to be changed in the other too.
- **A place on the map**: add it to `data/places.json` (see the engine's `docs/map.md`). Facts in `people.json` that name the place with a `placeId` then appear on the map by themselves.
- **A story page**: write it like the others, with `styles.css`, and add it to `nav` in `site.config.json`. The navigation bar on every page comes from `nav`; whatever bar a page has is replaced at build time.

## Seeing it before it is published

With a copy of the engine next to this folder:

```sh
python3 ../family-site-engine/build/validate.py --site .                 # check the data
python3 ../family-site-engine/build/build_site.py --site . --out _site   # build
python3 -m http.server -d _site 8000                                      # open http://localhost:8000
```

The checks (they need Node and Playwright with Chromium, and test the build in `_site`):

```sh
node tests/verify-canvas.js
```

## Rolling back

If an engine release breaks something here: **Actions > Build and publish the site > Run workflow**, with the engine version that last worked. To stay on it until a fix is out, set `"engine": { "version": "1.0.1" }` in `site.config.json`, and remove it afterwards. To undo a change to the site itself, revert its commit on `main`; the next publish puts the site back.
