// ============================================
// THE KOHLMANN FAMILY HERITAGE
// Interactive Script — biography panel data
// ============================================
// Placeholder bios pending verification of names, spellings, dates, places, and family history.
// Where a fact hasn't been confirmed, the bio carries a [PLACEHOLDER: ...] token rather than a guess.

const personData = {
    alvin: {
        name: "Alvin Kohlmann",
        subtitle: "Thomas's father, Generation 1",
        tags: ["Direct Line", "Generation 1", "Deceased"],
        description: `Alvin Kohlmann was Thomas Kohlmann's father, and so Valeria Kohlmann's paternal grandfather. He married <strong>Elise Christa Eifler</strong> on 24 July 1952 in Bautzen (her father, Alwin Eifler, was sole proprietor of the steel wire mattress factory Weickert &amp; Eifler, also in Bautzen). He is not on the maternal Eifler/Becker Ahnentafel because that chart documents only Christa's bloodline, and so much of his own life remains a placeholder. [PLACEHOLDER: where and when Alvin was born, where he lived, what he did for a living, when and where he died, his siblings if any, and any wartime, professional, or family history worth preserving. The Bautzen civil marriage record from 24 July 1952 is the cleanest single source to chase: it would name his parents, birthplace, and occupation.]`,
        details: {
            "Born": "[PLACEHOLDER: birth date and place]",
            "Died": "[PLACEHOLDER: date and place]",
            "Wife": "Elise Christa Kohlmann, née Eifler (b. 25 Nov 1928, Bautzen; d. 21 May 2006, Starnberg)",
            "Father-in-law": "Alwin Eifler (1892–1968), proprietor, Weickert &amp; Eifler",
            "Married": "24 July 1952, Bautzen",
            "Children": "Thomas Kohlmann (b. 1956, Radebeul), Matthias Kohlmann, Sabine Kohlmann",
            "Occupation": "[PLACEHOLDER]"
        }
    },
    christa: {
        name: "Elise Christa Kohlmann (née Eifler)",
        subtitle: "Thomas's mother, Generation 1",
        tags: ["Direct Line", "Generation 1", "Eifler", "Bautzen"],
        description: `<strong>Elise Christa Kohlmann</strong>, called Christa, was Thomas Kohlmann's mother. She was born <strong>25 November 1928 in Bautzen</strong>, Saxony, the younger daughter of <strong>Ernst Alwin Eifler</strong> (1892–1968), sole proprietor of the steel wire mattress factory <strong>Weickert &amp; Eifler</strong> in Bautzen, and <strong>Gertrud Elise Eifler</strong>, née Becker (1905–1973), who worked alongside Alwin in the firm's office. Her older sister was <strong>Sigrid</strong> (b. 20 July 1927, Bautzen), who married a Michaelis on 20 August 1953 in Bautzen. Christa married <strong>Alvin Kohlmann</strong> on <strong>24 July 1952 in Bautzen</strong>. Together they had Thomas, Matthias, and Sabine. She died on <strong>21 May 2006 in Starnberg</strong>, Bavaria, of cancer (<em>Krebs</em>), aged 77. The 2007 Eifler/Becker <em>Ahnentafel</em> from which much of this is drawn was almost certainly compiled in the months following her death.`,
        details: {
            "Full Name": "Elise Christa Kohlmann",
            "Maiden Name": "Eifler",
            "Called": "Christa",
            "Born": "25 November 1928, Bautzen, Saxony",
            "Died": "21 May 2006, Starnberg, Bavaria (cancer)",
            "Father": "Ernst Alwin Eifler (1892–1968), proprietor, Weickert &amp; Eifler, Bautzen",
            "Mother": "Gertrud Elise Eifler, née Becker (1905–1973)",
            "Sister": "Sigrid Michaelis, née Eifler (b. 1927)",
            "Married": "Alvin Kohlmann, 24 July 1952, Bautzen",
            "Children": "Thomas (b. 1956, Radebeul), Matthias, Sabine"
        }
    },
    sigrid: {
        name: "Gertrud Sigrid Michaelis (née Eifler)",
        subtitle: "Thomas's maternal aunt — Generation 1",
        tags: ["Eifler", "Bautzen", "Living status TBC"],
        description: `<strong>Sigrid</strong> (full name <strong>Gertrud Sigrid Michaelis</strong>, née Eifler) was Thomas Kohlmann's maternal aunt — the older sister of his mother Christa. She was born <strong>20 July 1927 in Bautzen</strong>, the elder daughter of Ernst Alwin Eifler and Gertrud Elise Eifler (née Becker). She married a <strong>Michaelis</strong> on <strong>20 August 1953 in Bautzen</strong> — his first name is not given on page 1 of the 2007 Ahnentafel. As of the chart's compilation date (18 January 2007) she was presumably still living. Her current status is unknown without further research; she would be 98 in 2025. [PLACEHOLDER: husband's first name, current status (living/deceased), any children, where she has lived since marriage.]`,
        details: {
            "Full Name": "Gertrud Sigrid Michaelis",
            "Maiden Name": "Eifler",
            "Called": "Sigrid",
            "Born": "20 July 1927, Bautzen",
            "Father": "Ernst Alwin Eifler (1892–1968)",
            "Mother": "Gertrud Elise Eifler, née Becker (1905–1973)",
            "Sister": "Christa Kohlmann, née Eifler (b. 1928)",
            "Married": "[PLACEHOLDER: first name] Michaelis — 20 August 1953, Bautzen",
            "Status": "[PLACEHOLDER: living or deceased]"
        }
    },
    ernst_alwin: {
        name: "Ernst Alwin Eifler",
        subtitle: "Thomas's maternal grandfather, Generation 0",
        tags: ["Eifler", "Fabrikant", "Bautzen", "Weickert &amp; Eifler"],
        description: `<strong>Ernst Alwin Eifler</strong>, known as <strong>Alwin</strong> (the Rufname underlined on the chart, and the form he used in business), was Thomas Kohlmann's maternal grandfather. He was born on <strong>7 October 1892 in Sohland</strong>, almost certainly <strong>Sohland an der Spree</strong> in Upper Lusatia, about 25 km south of Bautzen. By the 1930s and 1940s he was sole proprietor (<em>Inhaber</em>) of <strong>Stahldrahtmatratzen-Fabrik Weickert &amp; Eifler</strong>, the steel wire mattress factory based in Bautzen. The firm's office was at <strong>Martin-Mutschmann-Straße 19</strong> (a Nazi-period street name) in central Bautzen, and the factory itself sat on the <em>Industriegelände Singwitz</em> south of town, with a private rail siding at Gnaschwitz. The firm name preserves a founding partner Weickert who was no longer active by this period; circumstances of Weickert's exit are not yet known. He married <strong>Gertrud Elise Becker</strong> on <strong>2 October 1926 in Dresden</strong>, twelve years her senior at the marriage. Their two daughters were Sigrid (1927) and Christa (1928). He died on <strong>18 December 1968 in Bautzen</strong>, aged 76, from a <em>Schädelbasisbruch</em>, a basilar skull fracture sustained in a car accident. He had three siblings on the chart: brothers <strong>Max</strong> and <strong>Alfred</strong> and sister <strong>Martha</strong> (no further details on page 1).`,
        details: {
            "Full Name": "Ernst Alwin Eifler",
            "Rufname": "Alwin",
            "Born": "7 October 1892, Sohland an der Spree (almost certainly), Upper Lusatia",
            "Died": "18 December 1968, Bautzen (Schädelbasisbruch, car accident)",
            "Occupation": "Fabrikant; sole proprietor (Inhaber) of Weickert &amp; Eifler",
            "Firm Address": "Martin-Mutschmann-Straße 19, Bautzen (office); Industriegelände Singwitz (factory)",
            "Married": "Gertrud Elise Becker, 2 October 1926, Dresden",
            "Children": "Sigrid (b. 1927), Christa (b. 1928)",
            "Siblings": "Max, Alfred, Martha (no further details on page 1)",
            "Sources": "2007 Eifler/Becker Ahnentafel; Weickert &amp; Eifler letterhead (1933–45); Weickert &amp; Eifler invoice 9 April 1943"
        }
    },
    gertrud_becker: {
        name: "Gertrud Elise Eifler (née Becker)",
        subtitle: "Thomas's maternal grandmother, Generation 0",
        tags: ["Eifler", "Becker", "Dresden", "Bookkeeper, Weickert &amp; Eifler"],
        description: `<strong>Gertrud Elise Eifler</strong>, née Becker, known as <strong>Gertrud</strong> (the Rufname underlined on the chart), was Thomas Kohlmann's maternal grandmother. She was born on <strong>22 January 1905 in Dresden</strong>, the daughter of <strong>Richard Hermann Becker</strong> (a <em>Kaufmann</em>, born 1875 in Herzberg) and <strong>Elise Becker</strong>, née Just (born 1880). She married <strong>Ernst Alwin Eifler</strong> on <strong>2 October 1926 in Dresden</strong>, aged 21 (twelve years younger than her husband). Their two daughters were Sigrid (1927) and Christa (1928). She also worked alongside Alwin in the firm's office: a <strong>Weickert &amp; Eifler invoice from 9 April 1943</strong> survives in family hands carrying her ink signature, acknowledging payment received three weeks later, &ldquo;<em>Betrag dankend erhalten. Gertrud Eifler. d. 28.4.1943.</em>&rdquo; She would have been 38. Whether Alwin was absent for war service or simply on the factory floor while she handled the office is not known, but her active role in the firm's bookkeeping by 1943 is documented fact. She died on <strong>11 December 1973 in Bautzen</strong>, aged 68, of cancer (<em>Krebs</em>), the same illness that would kill her younger daughter Christa 33 years later.`,
        details: {
            "Full Name": "Gertrud Elise Eifler",
            "Maiden Name": "Becker",
            "Rufname": "Gertrud",
            "Born": "22 January 1905, Dresden",
            "Died": "11 December 1973, Bautzen (cancer)",
            "Father": "Richard Hermann Becker (1875–1938)",
            "Mother": "Elise Becker, née Just (1880–1954)",
            "Married": "Ernst Alwin Eifler, 2 October 1926, Dresden",
            "Children": "Sigrid (b. 1927), Christa (b. 1928)",
            "Role in the firm": "Bookkeeping side of Weickert &amp; Eifler; signed receipt acknowledgment 28 April 1943",
            "Sources": "2007 Eifler/Becker Ahnentafel; Weickert &amp; Eifler invoice 9 April 1943 (signed)"
        }
    },
    richard_becker: {
        name: "Richard Hermann Becker",
        subtitle: "Thomas's maternal great-grandfather — Generation -1",
        tags: ["Becker", "Kaufmann", "Dresden"],
        description: `<strong>Richard Hermann Becker</strong> — known as <strong>Richard</strong> (the Rufname underlined on the chart) — was Thomas Kohlmann's maternal great-grandfather, the father of Gertrud Elise Eifler (née Becker). He was born on <strong>9 January 1875</strong> in <strong>Herzberg</strong> — most plausibly Herzberg/Elster in Brandenburg, given the family's Saxon-region context, though Herzberg am Harz and Bad Herzberg are not yet ruled out. He worked as a <em>Kaufmann</em> (merchant). He married <strong>Elise Just</strong>; their daughter Gertrud was born in 1905 in Dresden. He died on <strong>5 January 1938 in Dresden</strong>, four days short of his 63rd birthday, of <em>Lungenentzündung</em> (pneumonia). The chart records that he had <strong>two sisters</strong>; a handwritten annotation names one of them as <strong>Marie</strong>, with an uncertain married surname (Wettlitz, Wettlich, or Wettnitz) and an address at <strong>Rothermundtstraße 5 in Dresden-Striesen</strong>. That address is real and verifiable; the surname is a research lead, not yet confirmed. [PLACEHOLDER: confirmation of which Herzberg, Marie's married surname, the second sister's name.]`,
        details: {
            "Full Name": "Richard Hermann Becker",
            "Rufname": "Richard",
            "Born": "9 January 1875, Herzberg [PLACEHOLDER: most plausibly Herzberg/Elster, Brandenburg]",
            "Died": "5 January 1938, Dresden (pneumonia / Lungenentzündung)",
            "Occupation": "Kaufmann (merchant)",
            "Married": "Elise Just",
            "Children": "Gertrud Elise Becker (b. 22 Jan 1905, Dresden)",
            "Sisters": "Two; one possibly Marie [Wettlitz?] of Rothermundtstraße 5, Dresden-Striesen (handwritten note, low confidence)",
            "Source": "2007 Eifler/Becker Ahnentafel, page 1"
        }
    },
    elise_just: {
        name: "Elise Becker (née Just)",
        subtitle: "Thomas's maternal great-grandmother — Generation -1",
        tags: ["Becker", "Just", "Bautzen"],
        description: `<strong>Elise Becker</strong>, née Just, was Thomas Kohlmann's maternal great-grandmother — the mother of Gertrud Elise Eifler (née Becker). She was born on <strong>1 December 1880</strong> (her birthplace is not given on page 1 of the Ahnentafel). She came from a large Just family of <strong>eight children</strong>: two sisters and five brothers. She married <strong>Richard Hermann Becker</strong>; their daughter Gertrud was born in 1905 in Dresden. She died on <strong>27 December 1954 in Bautzen</strong>, aged 74, of <em>Herzversagen</em> (heart failure). [PLACEHOLDER: birthplace, names of the seven Just siblings, the marriage date and place to Richard.]`,
        details: {
            "Full Name": "Elise Becker",
            "Maiden Name": "Just",
            "Born": "1 December 1880, [PLACEHOLDER: birthplace]",
            "Died": "27 December 1954, Bautzen (heart failure / Herzversagen)",
            "Married": "Richard Hermann Becker",
            "Children": "Gertrud Elise Becker (b. 22 Jan 1905, Dresden)",
            "Just Siblings": "8 children total: 2 sisters, 5 brothers (no names on page 1)",
            "Source": "2007 Eifler/Becker Ahnentafel, page 1"
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
        subtitle: "Valeria's father, Generation 2",
        tags: ["Direct Line", "Living", "Born 1956, Radebeul", "Escaped East Germany"],
        description: `Thomas Kohlmann is Valeria Kohlmann's father, born in 1956 in Radebeul, Saxony, in East Germany. He is the son of <strong>Alvin Kohlmann</strong> and <strong>Elise Christa Kohlmann</strong> (née Eifler). Through his mother he descends from the Eifler family of Bautzen, where his maternal grandfather <strong>Alwin Eifler</strong> ran the steel wire mattress factory <strong>Weickert &amp; Eifler</strong> through the 1930s and 1940s, and from the Becker family of Dresden. He has a brother, Matthias, and a sister, Sabine. Thomas escaped from East Germany to West Germany; his story is the first half of the family's two-part escape narrative. After he made it across, he helped his future wife Rita escape as well. They married in 1980 in Munich. Together they had two daughters, Valeria (1990) and Elisa (1994). [PLACEHOLDER: exact birth date, the route and date of his escape, what he did in West Germany after escaping, his career, and the city in Germany where he and Rita live now.]`,
        details: {
            "Born": "1956, Radebeul, Saxony, East Germany",
            "Father": "Alvin Kohlmann",
            "Mother": "Elise Christa Kohlmann, née Eifler (1928–2006)",
            "Maternal Line": "Eifler (Bautzen, Weickert &amp; Eifler) &rarr; Becker (Dresden) &rarr; Just",
            "Siblings": "Matthias Kohlmann, Sabine Kohlmann",
            "Escape": "[PLACEHOLDER: date and route of escape from East to West Germany; before 1980]",
            "Married": "Rita Werner, 1980, Munich",
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
