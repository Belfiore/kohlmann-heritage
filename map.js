/* Family map. Reads data/places.json and data/people.json.
   Draws a circle for a town or an uncertain street. Never a door pin.
   Never draws a living person, or a place marked withheld. */
(function () {
    'use strict';

    var TITLE = /^[^:]+: [^,]+, .+$/;

    function esc(s) {
        return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
        });
    }

    function load(url) {
        return fetch(url).then(function (r) {
            if (!r.ok) throw new Error(url + ' ' + r.status);
            return r.json();
        });
    }

    function livingIds(peopleDoc) {
        var ids = {};
        (peopleDoc.people || []).forEach(function (p) { if (p.isLiving) ids[p.id] = p.displayName; });
        return ids;
    }

    function involvesLiving(place, living) {
        return (place.events || []).some(function (e) {
            return (e.personIds || []).some(function (id) { return !!living[id]; });
        });
    }

    function titles(place) {
        return (place.events || []).map(function (e) { return e.summary; }).filter(Boolean);
    }

    function addItem(list, title, why) {
        var li = document.createElement('li');
        var strong = document.createElement('strong');
        strong.className = 'pin-title';
        strong.textContent = title;
        li.appendChild(strong);
        if (why) {
            var small = document.createElement('span');
            small.className = 'why';
            small.textContent = why;
            li.appendChild(small);
        }
        list.appendChild(li);
    }

    function fillList(list, places, whyOf) {
        places.forEach(function (place) {
            var lines = titles(place);
            if (!lines.length) {
                addItem(list, place.name, place.blurb || '');
                return;
            }
            lines.forEach(function (title) {
                var ev = (place.events || []).filter(function (e) { return e.summary === title; })[0];
                addItem(list, title, whyOf(place, ev));
            });
        });
        if (!list.children.length) {
            var li = document.createElement('li');
            li.textContent = 'None.';
            list.appendChild(li);
        }
    }

    Promise.all([load('data/places.json'), load('data/people.json')]).then(function (docs) {
        var places = docs[0].places || [];
        var living = livingIds(docs[1]);
        var mapped = [];
        var unlocated = [];
        var withheld = [];

        places.forEach(function (place) {
            var held = place.status === 'withheld' || involvesLiving(place, living);
            if (held) { withheld.push(place); return; }
            var located = place.status === 'mapped' && typeof place.lat === 'number' && typeof place.lng === 'number';
            if (located) mapped.push(place);
            else unlocated.push(place);
        });

        fillList(document.getElementById('onMap'), mapped, function (place) {
            return place.name + (place.drawAs === 'pin' ? '' : '. A circle, not an exact address.');
        });
        fillList(document.getElementById('notYet'), unlocated, function (place, ev) {
            return (ev && ev.note) || place.blurb || '';
        });
        fillList(document.getElementById('withheld'), withheld, function (place, ev) {
            return (ev && ev.note) || place.blurb || '';
        });

        document.querySelectorAll('#onMap .pin-title').forEach(function (n) {
            if (!TITLE.test(n.textContent)) n.dataset.badTitle = '1';
        });
        window.__familyMap = { mapped: mapped, unlocated: unlocated, withheld: withheld, living: living };

        var map = L.map('familyMap', { scrollWheelZoom: true });
        // A view has to exist before a circle can measure itself. The opening
        // frame below replaces this as soon as the map has a size.
        map.setView([51.15, 14.35], 9);
        var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        var tileOk = false;
        tiles.on('tileload', function () { tileOk = true; });
        window.setTimeout(function () {
            if (!tileOk) document.getElementById('mapMiss').hidden = false;
        }, 8000);

        mapped.forEach(function (place) {
            if (place.drawAs === 'pin') return; // this site does not use exact pins
            var work = place.kind === 'workplace';
            var colour = work ? '#7C1F1F' : '#1E3A8A';
            var circle = L.circle([place.lat, place.lng], {
                radius: place.uncertaintyMetres || 1500,
                color: colour,
                weight: 1.6,
                dashArray: '5 4',
                fillColor: colour,
                fillOpacity: 0.16
            }).addTo(map);
            var lines = titles(place).map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('');
            circle.bindPopup(
                '<h3>' + esc(place.name) + '</h3>' +
                (place.blurb ? '<p>' + esc(place.blurb) + '</p>' : '') +
                '<ul>' + lines + '</ul>',
                { maxWidth: 320 }
            );
            circle.bindTooltip(titles(place).join(' · '), { sticky: true });
        });

        // Frame the main group of places (Saxony and Lausitz, and places near
        // them). One far place, such as a death in Bavaria, stays on the map
        // and in the list, and does not pull the opening view across the country.
        function kmBetween(a, b) {
            var dLat = (b[0] - a[0]) * Math.PI / 180;
            var dLng = (b[1] - a[1]) * Math.PI / 180;
            var la1 = a[0] * Math.PI / 180, la2 = b[0] * Math.PI / 180;
            var h = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(la1) * Math.cos(la2) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
            return 2 * 6371 * Math.asin(Math.min(1, Math.sqrt(h)));
        }
        function openingGroup(list) {
            if (list.length < 3) return list;
            var lats = list.map(function (p) { return p.lat; }).sort(function (a, b) { return a - b; });
            var lngs = list.map(function (p) { return p.lng; }).sort(function (a, b) { return a - b; });
            var mid = [lats[Math.floor(lats.length / 2)], lngs[Math.floor(lngs.length / 2)]];
            var near = list.filter(function (p) { return kmBetween(mid, [p.lat, p.lng]) <= 220; });
            return near.length >= 2 ? near : list;
        }
        function frame() {
            var box = map.getContainer();
            if (!box || box.clientHeight < 40) return;
            var group = openingGroup(mapped);
            if (!group.length) return;
            var b = L.latLngBounds(group.map(function (p) { return [p.lat, p.lng]; }));
            group.forEach(function (p) {
                var metres = p.uncertaintyMetres || 0;
                var dLat = metres / 111320;
                var dLng = metres / (111320 * Math.max(0.2, Math.cos(p.lat * Math.PI / 180)));
                b.extend([p.lat + dLat, p.lng + dLng]);
                b.extend([p.lat - dLat, p.lng - dLng]);
            });
            map.invalidateSize();
            map.fitBounds(b, { padding: [28, 28], maxZoom: 14 });
            window.__familyMap.zoom = map.getZoom();
            window.__familyMap.center = map.getCenter();
        }
        map.whenReady(frame);
        window.setTimeout(frame, 60);
    }).catch(function (err) {
        var p = document.getElementById('mapMiss');
        p.hidden = false;
        p.textContent = 'The map could not be read. ' + err.message;
    });
})();
