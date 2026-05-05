// ============================================
// THE KOHLMANN FAMILY HERITAGE
// Interactive Script — biography panel data
// ============================================
// Placeholder bios pending verification of names, spellings, dates, places, and family history.
// Where a fact hasn't been confirmed, the bio carries a [PLACEHOLDER: ...] token rather than a guess.

const personData = {
    alvin: {
        name: "Alvin Kohlmann",
        subtitle: "Thomas's father — Generation 1",
        tags: ["Direct Line", "Generation 1", "Deceased"],
        description: `Alvin Kohlmann was Thomas Kohlmann's father, and so Valeria Kohlmann's paternal grandfather. He is deceased. [PLACEHOLDER: where and when Alvin was born, where he lived, what he did for a living, the story of his marriage, when and where he died, and any wartime, professional, or family history worth preserving. Living siblings or relatives of Alvin's, if any are known, also belong here.]`,
        details: {
            "Born": "[PLACEHOLDER: birth date and place]",
            "Died": "[PLACEHOLDER: death date and place]",
            "Wife": "[PLACEHOLDER: name — Thomas's mother]",
            "Children": "Thomas Kohlmann (b. 1956, Radebeul), Matthias Kohlmann, Sabine Kohlmann",
            "Occupation": "[PLACEHOLDER]"
        }
    },
    alvin_wife: {
        name: "[PLACEHOLDER: Thomas's mother]",
        subtitle: "Alvin Kohlmann's wife — Generation 1",
        tags: ["Spouse", "Generation 1"],
        description: `Thomas Kohlmann's mother and Alvin Kohlmann's wife. [PLACEHOLDER: her full name, maiden name, birth date and place, death date and place, family of origin, and anything known about her life — including whether she was from East or West Germany originally, and how she and Alvin met.]`,
        details: {
            "Name": "[PLACEHOLDER]",
            "Maiden Name": "[PLACEHOLDER]",
            "Born": "[PLACEHOLDER]",
            "Died": "[PLACEHOLDER]",
            "Children": "Thomas (b. 1956, Radebeul), Matthias, Sabine"
        }
    },
    rita_father: {
        name: "[PLACEHOLDER: first name] Werner",
        subtitle: "Father of Rita — Generation 1",
        tags: ["Direct Line", "Generation 1", "Werner"],
        description: `Rita Kohlmann's father. His surname Werner is the surname Rita's was changed to from her birth surname Woltmann (her mother Brigitte's surname; Brigitte and Rita's father were not married at the time of Rita's birth). Father of Rita, and — depending on the timing of his relationship with Brigitte — likely also of Heide and Annette. [PLACEHOLDER: first name, birth and death dates and places, occupation, where the family lived in East Germany, whether he and Brigitte ever married.]`,
        details: {
            "First Name": "[PLACEHOLDER]",
            "Surname": "Werner",
            "Born": "[PLACEHOLDER]",
            "Died": "[PLACEHOLDER]",
            "Partner": "Brigitte Woltmann (mother of Rita; marital status TBC)",
            "Children": "Rita Werner (b. 1956, Döbeln), and likely Heide and Annette"
        }
    },
    rita_mother: {
        name: "Brigitte Woltmann",
        subtitle: "Mother of Rita, Heide, and Annette — Generation 1",
        tags: ["Spouse", "Generation 1", "Woltmann"],
        description: `Rita Kohlmann's mother. Her surname Woltmann is the name she carried at the time of Rita's birth — she and Rita's father were not married then, and Rita took her mother's surname at birth before it was later changed to Werner. Whether Brigitte's surname changed later (to Werner if she ever married Rita's father, or otherwise) is not yet known. Mother of Rita, Heide, and Annette. [PLACEHOLDER: maiden surname if Woltmann was already a married name, dates, location, anything known about her life.]`,
        details: {
            "First Name": "Brigitte",
            "Surname at Rita's birth": "Woltmann",
            "Maiden Name": "[PLACEHOLDER — possibly Woltmann itself]",
            "Born": "[PLACEHOLDER]",
            "Died": "[PLACEHOLDER]",
            "Children": "Rita (b. 1956, Döbeln), Heide, Annette"
        }
    },
    thomas: {
        name: "Thomas Kohlmann",
        subtitle: "Valeria's father — Generation 2",
        tags: ["Direct Line", "Living", "Born 1956, Radebeul", "Escaped East Germany"],
        description: `Thomas Kohlmann is Valeria Kohlmann's father, born in 1956 in Radebeul, Saxony, in East Germany. He is the son of Alvin Kohlmann, and brother to Matthias and Sabine. Thomas escaped from East Germany to West Germany — his story is the first half of the family's two-part escape narrative. After he made it across, he helped his future wife Rita escape as well. They married in 1980 in Munich. Together they had two daughters, Valeria (1990) and Elisa (1994). [PLACEHOLDER: exact birth date, the route and date of his escape, what he did in West Germany after escaping, his career, and the city in Germany where he and Rita live now.]`,
        details: {
            "Born": "1956, Radebeul, Saxony, East Germany",
            "Father": "Alvin Kohlmann",
            "Mother": "[PLACEHOLDER]",
            "Siblings": "Matthias Kohlmann, Sabine Kohlmann",
            "Escape": "[PLACEHOLDER: date and route of escape from East to West Germany — before 1980]",
            "Married": "Rita Werner — 1980, Munich",
            "Children": "Valeria Kohlmann (b. 1990), Elisa Kohlmann (b. 1994)",
            "Lives": "[PLACEHOLDER: current city]"
        }
    },
    matthias: {
        name: "Matthias Kohlmann",
        subtitle: "Thomas's brother — Generation 2",
        tags: ["Sibling", "Living"],
        description: `Thomas Kohlmann's brother. Son of Alvin Kohlmann. [PLACEHOLDER: birth year and place, where he lives, occupation, marriage, any children, and any role in the family's East-to-West Germany story.]`,
        details: {
            "Born": "[PLACEHOLDER]",
            "Father": "Alvin Kohlmann",
            "Mother": "[PLACEHOLDER]",
            "Siblings": "Thomas Kohlmann (b. 1956), Sabine Kohlmann",
            "Lives": "[PLACEHOLDER]"
        }
    },
    sabine: {
        name: "Sabine Kohlmann",
        subtitle: "Thomas's sister — Generation 2",
        tags: ["Sibling", "Living"],
        description: `Thomas Kohlmann's sister. Daughter of Alvin Kohlmann. [PLACEHOLDER: birth year and place, married name if any, where she lives, occupation, family, and any role in the family's East-to-West Germany story.]`,
        details: {
            "Born": "[PLACEHOLDER]",
            "Father": "Alvin Kohlmann",
            "Mother": "[PLACEHOLDER]",
            "Siblings": "Thomas Kohlmann (b. 1956), Matthias Kohlmann",
            "Lives": "[PLACEHOLDER]"
        }
    },
    rita: {
        name: "Rita Kohlmann",
        subtitle: "Valeria's mother — Generation 2",
        tags: ["Direct Line", "Living", "Born 1956, Döbeln", "Escaped East Germany"],
        description: `Rita Kohlmann is Valeria Kohlmann's mother, born in 1956 in Döbeln, Saxony, in East Germany. She is the sister of Heide and Annette. Her birth surname was Woltmann — taken from her mother Brigitte, who was not married to Rita's father at the time of her birth. Her surname was later changed to Werner, her father's surname; Werner is the maiden name she carried into marriage. After Thomas escaped from East Germany to West Germany, he helped Rita escape as well — her crossing was the second half of the family's two-part escape story. She married Thomas in 1980 in Munich. Together they had two daughters, Valeria (1990) and Elisa (1994). [PLACEHOLDER: exact birth date, when and how Thomas helped her escape, her career, the city in Germany where she and Thomas live now.]`,
        details: {
            "Born": "1956, Döbeln, Saxony, East Germany",
            "Birth Surname": "Woltmann (mother's surname; parents not married at her birth)",
            "Maiden Name": "Werner (her father's surname; carried into marriage)",
            "Parents": "[PLACEHOLDER: father's first name] Werner &amp; Brigitte Woltmann",
            "Sisters": "Heide, Annette",
            "Escape": "[PLACEHOLDER: date and route — Thomas helped get her out, after his own escape, before 1980]",
            "Married": "Thomas Kohlmann — 1980, Munich",
            "Children": "Valeria Kohlmann (b. 1990), Elisa Kohlmann (b. 1994)",
            "Lives": "[PLACEHOLDER: current city]"
        }
    },
    heide: {
        name: "Heide",
        subtitle: "Rita's sister — Generation 2",
        tags: ["Sibling", "Living"],
        description: `Rita Kohlmann's sister. Her maiden surname was either Woltmann or Werner depending on whether she was born before or after Rita's surname change (which followed her parents' marital status changing or the father acknowledging paternity). [PLACEHOLDER: birth year and place, married name if any, where she lives, marriage and children, and any role in the family's East-to-West Germany story.]`,
        details: {
            "Born": "[PLACEHOLDER]",
            "Maiden Name": "[PLACEHOLDER — Woltmann or Werner, TBC]",
            "Married Name": "[PLACEHOLDER, if any]",
            "Parents": "[PLACEHOLDER: father's first name] Werner &amp; Brigitte Woltmann",
            "Sisters": "Rita Kohlmann (b. 1956, Döbeln), Annette",
            "Lives": "[PLACEHOLDER]"
        }
    },
    annette: {
        name: "Annette",
        subtitle: "Rita's sister — Generation 2",
        tags: ["Sibling", "Living"],
        description: `Rita Kohlmann's sister. Her maiden surname was either Woltmann or Werner depending on whether she was born before or after Rita's surname change (which followed her parents' marital status changing or the father acknowledging paternity). [PLACEHOLDER: birth year and place, married name if any, where she lives, marriage and children, and any role in the family's East-to-West Germany story.]`,
        details: {
            "Born": "[PLACEHOLDER]",
            "Maiden Name": "[PLACEHOLDER — Woltmann or Werner, TBC]",
            "Married Name": "[PLACEHOLDER, if any]",
            "Parents": "[PLACEHOLDER: father's first name] Werner &amp; Brigitte Woltmann",
            "Sisters": "Rita Kohlmann (b. 1956, Döbeln), Heide",
            "Lives": "[PLACEHOLDER]"
        }
    },
    valeria: {
        name: "Valeria Kohlmann",
        subtitle: "Daughter of Thomas and Rita — Generation 3",
        tags: ["Direct Line", "Living", "Born 1990, Munich"],
        description: `Valeria Kohlmann was born on 27 June 1990 in Munich, the daughter of Thomas and Rita Kohlmann and the older sister of Elisa. She married Sebastian Belfiore in September 2022 in Munich. They have a son, Enzo, born January 2026 in Tampa, Florida. [PLACEHOLDER: education, career, when and how she met Sebastian.]`,
        details: {
            "Born": "27 June 1990, Munich",
            "Parents": "Thomas Kohlmann &amp; Rita Kohlmann",
            "Sister": "Elisa Kohlmann (b. 1994)",
            "Married": "Sebastian Belfiore — September 2022, Munich",
            "Children": "Enzo Belfiore (b. January 2026, Tampa, FL)",
            "Lives": "Tampa, FL"
        }
    },
    elisa: {
        name: "Elisa Kohlmann",
        subtitle: "Valeria's sister — Generation 3",
        tags: ["Sibling", "Living", "Born 1994, Munich"],
        description: `Elisa Kohlmann was born on 25 March 1994 in Munich, the daughter of Thomas and Rita Kohlmann and the younger sister of Valeria. [PLACEHOLDER: education, career, marriage and family if any, current city.]`,
        details: {
            "Born": "25 March 1994, Munich",
            "Parents": "Thomas Kohlmann &amp; Rita Kohlmann",
            "Sister": "Valeria Kohlmann (b. 1990)",
            "Lives": "[PLACEHOLDER]"
        }
    },
    sebastian: {
        name: "Sebastian Belfiore",
        subtitle: "Valeria's husband — Generation 3 (by marriage)",
        tags: ["Spouse", "Living", "Researcher"],
        description: `Sebastian Belfiore married Valeria Kohlmann in September 2022 in Munich. They have a son, Enzo, born January 2026 in Tampa, Florida. He is the researcher behind this site, working to document Valeria's German maternal family. He holds US and UK citizenship.`,
        details: {
            "Born": "1991, United Kingdom",
            "Citizenship": "US, UK",
            "Married": "Valeria Kohlmann — September 2022, Munich",
            "Children": "Enzo Belfiore (b. January 2026, Tampa, FL)",
            "Lives": "Tampa, FL"
        }
    },
    enzo: {
        name: "Enzo Belfiore",
        subtitle: "Son of Valeria and Sebastian — Generation 4",
        tags: ["Newest Generation", "Tampa", "Triple Citizenship"],
        description: `Enzo Belfiore was born in January 2026 in Tampa, Florida, the son of Valeria Kohlmann and Sebastian Belfiore. He holds triple citizenship: US, UK, and German. He is the newest generation in this family.`,
        details: {
            "Born": "January 2026, Tampa, Florida",
            "Parents": "Valeria Kohlmann &amp; Sebastian Belfiore",
            "Citizenship": "US, UK, German",
            "Generation": "4 (from Alvin Kohlmann)"
        }
    }
};


// ============================================
// NAVIGATION
// ============================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.tree-generation').forEach(el => {
    observer.observe(el);
});

// ============================================
// TREE FILTER
// ============================================
document.querySelectorAll('.tree-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tree-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const view = btn.dataset.view;
        document.querySelectorAll('.tree-person').forEach(person => {
            const side = person.dataset.side;
            if (view === 'full') {
                person.style.opacity = '1';
                person.style.transform = 'scale(1)';
            } else if (side === view) {
                person.style.opacity = '1';
                person.style.transform = 'scale(1)';
            } else {
                person.style.opacity = '0.2';
                person.style.transform = 'scale(0.95)';
            }
        });
    });
});

// ============================================
// SIDEBAR BIO PANEL (desktop)
// ============================================
const sidebar = document.getElementById('bioSidebar');
const bioContent = document.getElementById('bioContent');

function showBio(id) {
    const data = personData[id];
    if (!data) return;

    // Mark active
    document.querySelectorAll('.tree-person').forEach(p => p.classList.remove('active'));
    const activeCard = document.querySelector(`[data-id="${id}"]`);
    if (activeCard) activeCard.classList.add('active');

    let tagsHTML = data.tags.map(t => `<span class="bio-tag">${t}</span>`).join('');
    let detailsHTML = '';
    if (data.details) {
        detailsHTML = '<div class="bio-details">';
        for (const [label, value] of Object.entries(data.details)) {
            detailsHTML += `<div class="bio-detail-row"><span class="bio-detail-label">${label}</span><span class="bio-detail-value">${value}</span></div>`;
        }
        detailsHTML += '</div>';
    }

    let imageHTML = '';
    if (data.image) {
        imageHTML = `<img class="bio-image" src="${data.image}" alt="${data.name}">`;
    }

    let linksHTML = '';
    if (data.links && data.links.length > 0) {
        linksHTML = '<div class="bio-links"><h4>Related Documents</h4>';
        data.links.forEach(link => {
            linksHTML += `<a class="bio-link" href="${link.url}" target="_blank"><span class="bio-link-label">${link.label}</span> &rarr;</a>`;
        });
        linksHTML += '</div>';
    }

    bioContent.innerHTML = `
        ${imageHTML}
        <h3 class="bio-name">${data.name}</h3>
        <p class="bio-subtitle">${data.subtitle}</p>
        <div class="bio-tags">${tagsHTML}</div>
        <p class="bio-description">${data.description}</p>
        ${detailsHTML}
        ${linksHTML}
    `;

    // On mobile, open sidebar drawer
    if (window.innerWidth <= 768 && sidebar) {
        sidebar.classList.add('has-bio');
        // Small delay so the display:block takes effect before the transform transition
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                sidebar.classList.add('open');
            });
        });
        const overlay = document.getElementById('sidebarOverlay');
        if (overlay) overlay.classList.add('active');
    }
}

// Close mobile sidebar drawer
function closeMobileSidebar() {
    if (sidebar) {
        sidebar.classList.remove('open');
        const overlay = document.getElementById('sidebarOverlay');
        if (overlay) overlay.classList.remove('active');
        // Remove has-bio after transition ends to hide it
        sidebar.addEventListener('transitionend', function handler() {
            if (!sidebar.classList.contains('open')) {
                sidebar.classList.remove('has-bio');
                document.querySelectorAll('.tree-person').forEach(p => p.classList.remove('active'));
            }
            sidebar.removeEventListener('transitionend', handler);
        });
    }
}

const sidebarClose = document.getElementById('sidebarClose');
if (sidebarClose) {
    sidebarClose.addEventListener('click', closeMobileSidebar);
}
const sidebarOverlay = document.getElementById('sidebarOverlay');
if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeMobileSidebar);
}

document.querySelectorAll('.tree-person').forEach(person => {
    person.addEventListener('click', () => {
        const id = person.dataset.id;
        showBio(id);
    });
});

// Close mobile sidebar on tap outside
if (sidebar) {
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 &&
            sidebar.classList.contains('open') &&
            !sidebar.contains(e.target) &&
            !e.target.closest('.tree-person')) {
            sidebar.classList.remove('open');
        }
    });
}

// ============================================
// MODAL (fallback for pages without sidebar)
// ============================================
const modal = document.getElementById('personModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

if (modal && !sidebar) {
    document.querySelectorAll('.tree-person').forEach(person => {
        person.addEventListener('click', () => {
            const id = person.dataset.id;
            const data = personData[id];
            if (!data) return;

            let tagsHTML = data.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');
            modalBody.innerHTML = `
                <h3>${data.name}</h3>
                <p class="modal-subtitle">${data.subtitle}</p>
                <div style="margin-bottom: 1rem;">${tagsHTML}</div>
                <p>${data.description}</p>
            `;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

function closeModal() {
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ============================================
// SMOOTH SCROLL FOR NAV
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const position = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: position, behavior: 'smooth' });
        }
    });
});
