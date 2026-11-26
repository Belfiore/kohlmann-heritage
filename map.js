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
        // A view has to exist before a circle can measure itself.
        map.setView([50.6, 12.4], 6);
        var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        var tileOk = false;
        tiles.on('tileload', function () { tileOk = true; });
        window.setTimeout(function () {
            if (!tileOk) document.getElementById('mapMiss').hidden = false;
        }, 8000);

        var bounds = [];
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
            bounds.push([place.lat, place.lng]);
        });

        if (bounds.length) map.fitBounds(bounds, { padding: [36, 36], maxZoom: 11 });
    }).catch(function (err) {
        var p = document.getElementById('mapMiss');
        p.hidden = false;
        p.textContent = 'The map could not be read. ' + err.message;
    });
})();
