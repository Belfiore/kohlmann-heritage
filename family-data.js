// Family data for the Kohlmann family — Valeria Kohlmann's maternal-side German family,
// extending through her marriage to Sebastian Belfiore to their son Enzo.
// Many fields remain placeholders pending further research.
//
// Naming notes:
//   - Rita's birth surname was Woltmann (her mother's surname; her parents were not
//     married at the time of her birth). Her surname was later changed to Werner
//     (her father's surname). Werner is the maiden name she carried into marriage
//     with Thomas Kohlmann. Both surnames are preserved on her record.
//   - Heide's and Annette's maiden surnames are recorded as a placeholder pending
//     confirmation of whether they were born under Woltmann or Werner.
//
// Sources:
//   - Family testimony from Thomas Kohlmann, Rita Kohlmann, Sebastian Belfiore.
//   - Eifler/Becker maternal Ahnentafel, page 1, dated 18 January 2007 (compiler
//     unidentified, likely a family member shortly after Christa Kohlmann's death
//     on 21 May 2006). Page 2 forthcoming. Provides the entire Eifler / Becker /
//     Just maternal line beyond Christa.

const FAMILY_DATA = {
    rootPersonId: 'valeria',

    people: [
        /* ===== GENERATION -1 — MATERNAL GREAT-GREAT-GRANDPARENTS (Becker / Just) ===== */
        {
            id: 'richard_becker',
            firstName: 'Richard Hermann',
            lastName: 'Becker',
            aka: 'Richard',
            birthYear: 1875,
            birthDate: '9 January 1875',
            birthPlace: 'Herzberg [PLACEHOLDER: most plausibly Herzberg/Elster, Brandenburg, but not yet confirmed]',
            deathYear: 1938,
            deathDate: '5 January 1938',
            deathPlace: 'Dresden',
            isLiving: false,
            primaryLocation: 'Dresden',
            confidence: 'high',
            generation: -1,
            notes: "Father of Gertrud Elise Becker (Christa's mother), so Thomas Kohlmann's maternal great-grandfather. Kaufmann (merchant). Died of Lungenentzündung (pneumonia) four days before his 63rd birthday. Had two sisters; one named Marie (married surname uncertain — possibly Wettlitz / Wettlich / Wettnitz) lived at Rothermundtstraße 5 in Dresden-Striesen per a handwritten note on the Ahnentafel. Rufname underlined on the chart was 'Richard'.",
            source: '2007 Eifler/Becker Ahnentafel (page 1)'
        },
        {
            id: 'elise_just',
            firstName: 'Elise',
            lastName: 'Becker',
            aka: 'née Just',
            birthYear: 1880,
            birthDate: '1 December 1880',
            birthPlace: '[PLACEHOLDER: birthplace not on page 1]',
            deathYear: 1954,
            deathDate: '27 December 1954',
            deathPlace: 'Bautzen',
            isLiving: false,
            primaryLocation: 'Dresden / Bautzen',
            confidence: 'high',
            generation: -1,
            notes: "Mother of Gertrud Elise Becker (Christa's mother), so Thomas Kohlmann's maternal great-grandmother. Born into the Just family, one of eight children: two sisters and five brothers. Died of Herzversagen (heart failure).",
            source: '2007 Eifler/Becker Ahnentafel (page 1)'
        },

        /* ===== GENERATION 0 — MATERNAL GRANDPARENTS (Eifler) ===== */
        {
            id: 'ernst_alwin',
            firstName: 'Ernst Alwin',
            lastName: 'Eifler',
            aka: 'Alwin (Rufname)',
            birthYear: 1892,
            birthDate: '7 October 1892',
            birthPlace: 'Sohland [almost certainly Sohland an der Spree, Upper Lusatia]',
            deathYear: 1968,
            deathDate: '18 December 1968',
            deathPlace: 'Bautzen',
            isLiving: false,
            primaryLocation: 'Bautzen',
            confidence: 'high',
            generation: 0,
            notes: "Father of Christa Kohlmann and Sigrid Michaelis. Thomas Kohlmann's maternal grandfather. Fabrikant (factory owner) — almost certainly the 'Eifler' in the firm Weickert & Eifler, though documentary confirmation (Handelsregister entry, company materials, or family testimony) is still being sought. Married Gertrud Elise Becker on 2 October 1926 in Dresden (the chart types 'Dresdan' — a typo). Twelve years older than her at marriage. Died of a Schädelbasisbruch (basilar skull fracture) in a car accident, aged 76. Had three siblings: brothers Max and Alfred and sister Martha (no further details on page 1). Rufname underlined on the chart was 'Alwin'.",
            source: '2007 Eifler/Becker Ahnentafel (page 1)'
        },
        {
            id: 'gertrud_becker',
            firstName: 'Gertrud Elise',
            lastName: 'Eifler',
            aka: 'née Becker; Gertrud (Rufname)',
            birthYear: 1905,
            birthDate: '22 January 1905',
            birthPlace: 'Dresden',
            deathYear: 1973,
            deathDate: '11 December 1973',
            deathPlace: 'Bautzen',
            isLiving: false,
            primaryLocation: 'Dresden / Bautzen',
            confidence: 'high',
            generation: 0,
            notes: "Mother of Christa Kohlmann and Sigrid Michaelis. Thomas Kohlmann's maternal grandmother. Daughter of Richard Hermann Becker and Elise Becker (née Just). Twenty-one years old at her marriage to Ernst Alwin Eifler on 2 October 1926 in Dresden. Died of cancer (Krebs) at age 68. Rufname underlined on the chart was 'Gertrud'.",
            source: '2007 Eifler/Becker Ahnentafel (page 1)'
        },

        /* ===== GENERATION 1 — GRANDPARENTS (Kohlmann) AND PARALLEL BRANCHES ===== */
        {
            id: 'alvin',
            firstName: 'Alvin',
            lastName: 'Kohlmann',
            birthYear: null,
            deathYear: null,
            isLiving: false,
            primaryLocation: '[PLACEHOLDER: where Alvin lived]',
            confidence: 'low',
            generation: 1,
            notes: "Thomas's father. Married Christa Eifler on 24 July 1952 in Bautzen. Deceased. Not on the maternal Ahnentafel because that chart only documents Christa's bloodline. [PLACEHOLDER: birth date and place, death date and place, occupation, siblings, anything about his life.]",
            source: 'Family knowledge'
        },
        {
            id: 'christa',
            firstName: 'Elise Christa',
            lastName: 'Kohlmann',
            aka: 'née Eifler; called Christa',
            birthYear: 1928,
            birthDate: '25 November 1928',
            birthPlace: 'Bautzen, Saxony',
            deathYear: 2006,
            deathDate: '21 May 2006',
            deathPlace: 'Starnberg, Bavaria',
            isLiving: false,
            primaryLocation: 'Bautzen → Starnberg',
            confidence: 'verified',
            generation: 1,
            notes: "Thomas Kohlmann's mother. Daughter of Ernst Alwin Eifler and Gertrud Elise Eifler (née Becker). Younger sister of Sigrid Michaelis (née Eifler). Married Alvin Kohlmann on 24 July 1952 in Bautzen. Died of cancer (Krebs) at age 77. Mother of Thomas, Matthias, and Sabine.",
            source: '2007 Eifler/Becker Ahnentafel (page 1)'
        },
        {
            id: 'sigrid',
            firstName: 'Gertrud Sigrid',
            lastName: 'Michaelis',
            aka: 'née Eifler; called Sigrid',
            birthYear: 1927,
            birthDate: '20 July 1927',
            birthPlace: 'Bautzen, Saxony',
            deathYear: null,
            isLiving: false,
            primaryLocation: '[PLACEHOLDER: location]',
            confidence: 'high',
            generation: 1,
            notes: "Thomas's maternal aunt. Older sister of Christa. Daughter of Ernst Alwin Eifler and Gertrud Elise Eifler (née Becker). Married a Michaelis on 20 August 1953 in Bautzen — husband's first name not given on page 1 of the Ahnentafel. As of the chart's compilation date (18 January 2007) she was presumably still living; current status unknown without further research. Would be 98 in 2025.",
            source: '2007 Eifler/Becker Ahnentafel (page 1)'
        },
        {
            id: 'rita_father',
            firstName: '[PLACEHOLDER: first name]',
            lastName: 'Werner',
            birthYear: null,
            deathYear: null,
            isLiving: false,
            primaryLocation: '[PLACEHOLDER: where he lived]',
            confidence: 'high',
            generation: 1,
            notes: "Rita's father. His surname Werner is the surname Rita's was changed to from Woltmann. Father of Rita, Heide, and Annette. [PLACEHOLDER: first name, dates, location, occupation, whether he and Brigitte ever married.]",
            source: 'Family testimony'
        },
        {
            id: 'rita_mother',
            firstName: 'Brigitte',
            lastName: 'Woltmann',
            birthYear: null,
            deathYear: null,
            isLiving: false,
            primaryLocation: '[PLACEHOLDER: where she lived]',
            confidence: 'high',
            generation: 1,
            notes: "Rita's mother. Surname Woltmann is the name she carried at the time of Rita's birth (she and Rita's father were not married then). Whether her surname later changed — to Werner if she married Rita's father, or otherwise — is not yet known. Mother of Rita, Heide, and Annette. [PLACEHOLDER: maiden surname if Woltmann was already a married name, dates, location.]",
            source: 'Family testimony'
        },

        /* ===== GENERATION 2 — PARENTS, AUNTS, UNCLES ===== */
        {
            id: 'thomas',
            firstName: 'Thomas',
            lastName: 'Kohlmann',
            birthYear: 1956,
            birthPlace: 'Radebeul, Saxony, East Germany',
            deathYear: null,
            isLiving: true,
            primaryLocation: '[PLACEHOLDER: current city]',
            confidence: 'verified',
            generation: 2,
            notes: "Valeria's father. Born 1956 in Radebeul, Saxony (East Germany). Son of Alvin Kohlmann and Elise Christa Kohlmann (née Eifler). Brother of Matthias and Sabine. Escaped from East Germany to West Germany; later helped Rita escape. Married Rita in 1980 in Munich. [PLACEHOLDER: exact birth date, escape date and route, current city, occupation.]",
            source: 'Family testimony'
        },
        {
            id: 'matthias',
            firstName: 'Matthias',
            lastName: 'Kohlmann',
            birthYear: null,
            deathYear: null,
            isLiving: true,
            primaryLocation: '[PLACEHOLDER: location]',
            confidence: 'high',
            generation: 2,
            notes: "Thomas's brother. Son of Alvin Kohlmann and Elise Christa Kohlmann (née Eifler). [PLACEHOLDER: birth year, location, occupation, marriage and any children.]",
            source: 'Family testimony'
        },
        {
            id: 'sabine',
            firstName: 'Sabine',
            lastName: 'Kohlmann',
            birthYear: null,
            deathYear: null,
            isLiving: true,
            primaryLocation: '[PLACEHOLDER: location]',
            confidence: 'high',
            generation: 2,
            notes: "Thomas's sister. Daughter of Alvin Kohlmann and Elise Christa Kohlmann (née Eifler). [PLACEHOLDER: birth year, location, married name if any, family.]",
            source: 'Family testimony'
        },
        {
            id: 'rita',
            firstName: 'Rita',
            lastName: 'Kohlmann',
            aka: 'née Werner (born Woltmann)',
            birthYear: 1956,
            birthPlace: 'Döbeln, Saxony, East Germany',
            deathYear: null,
            isLiving: true,
            primaryLocation: '[PLACEHOLDER: current city]',
            confidence: 'verified',
            generation: 2,
            notes: "Valeria's mother. Born 1956 in Döbeln, Saxony (East Germany). Sister of Heide and Annette. Birth surname was Woltmann (her mother Brigitte's surname; her parents were not married at the time of her birth). Surname later changed to Werner (her father's surname) — Werner is the maiden name she carried into marriage. Escaped from East Germany to West Germany after Thomas, who helped her get out. Married Thomas in 1980 in Munich. [PLACEHOLDER: exact birth date, escape date and route, current city.]",
            source: 'Family testimony'
        },
        {
            id: 'heide',
            firstName: 'Heide',
            lastName: '[PLACEHOLDER: married surname, if any]',
            aka: '[PLACEHOLDER: maiden surname — Woltmann or Werner depending on whether she was born before or after Rita\'s name change]',
            birthYear: null,
            deathYear: null,
            isLiving: true,
            primaryLocation: '[PLACEHOLDER: location]',
            confidence: 'low',
            generation: 2,
            notes: "Rita's sister. Maiden surname was either Woltmann or Werner depending on her birth year relative to Rita's surname change — to be confirmed. [PLACEHOLDER: birth year, location, marriage and any children.]",
            source: 'Family testimony'
        },
        {
            id: 'annette',
            firstName: 'Annette',
            lastName: '[PLACEHOLDER: married surname, if any]',
            aka: '[PLACEHOLDER: maiden surname — Woltmann or Werner depending on whether she was born before or after Rita\'s name change]',
            birthYear: null,
            deathYear: null,
            isLiving: true,
            primaryLocation: '[PLACEHOLDER: location]',
            confidence: 'low',
            generation: 2,
            notes: "Rita's sister. Maiden surname was either Woltmann or Werner depending on her birth year relative to Rita's surname change — to be confirmed. [PLACEHOLDER: birth year, location, marriage and any children.]",
            source: 'Family testimony'
        },

        /* ===== GENERATION 3 — VALERIA, ELISA, SEBASTIAN ===== */
        {
            id: 'valeria',
            firstName: 'Valeria',
            lastName: 'Kohlmann',
            birthYear: 1990,
            birthDate: '27 June 1990',
            birthPlace: 'Munich, West Germany',
            deathYear: null,
            isLiving: true,
            primaryLocation: 'Tampa, FL',
            confidence: 'verified',
            generation: 3,
            notes: "Daughter of Thomas and Rita Kohlmann. Born 27 June 1990 in Munich. Sister of Elisa. Married Sebastian Belfiore in September 2022 in Munich. Mother of Enzo.",
            source: 'Family knowledge'
        },
        {
            id: 'elisa',
            firstName: 'Elisa',
            lastName: 'Kohlmann',
            birthYear: 1994,
            birthDate: '25 March 1994',
            birthPlace: 'Munich, West Germany',
            deathYear: null,
            isLiving: true,
            primaryLocation: '[PLACEHOLDER: location]',
            confidence: 'verified',
            generation: 3,
            notes: "Daughter of Thomas and Rita Kohlmann. Born 25 March 1994 in Munich. Valeria's sister. [PLACEHOLDER: current location, occupation, marriage and family if any.]",
            source: 'Family knowledge'
        },
        {
            id: 'sebastian',
            firstName: 'Sebastian',
            lastName: 'Belfiore',
            birthYear: 1991,
            deathYear: null,
            isLiving: true,
            primaryLocation: 'Tampa, FL',
            confidence: 'verified',
            generation: 3,
            notes: "Valeria's husband. Married Valeria Kohlmann in September 2022 in Munich. Father of Enzo. Holds US and UK citizenship. The researcher behind this site.",
            source: 'Self'
        },

        /* ===== GENERATION 4 — ENZO ===== */
        {
            id: 'enzo',
            firstName: 'Enzo',
            lastName: 'Belfiore',
            birthYear: 2026,
            deathYear: null,
            isLiving: true,
            primaryLocation: 'Tampa, FL',
            confidence: 'verified',
            generation: 4,
            notes: "Born January 2026 in Tampa, Florida. Son of Valeria Kohlmann and Sebastian Belfiore. Holds triple citizenship: US, UK, and German.",
            source: 'Family knowledge'
        }
    ],

    relationships: [
        /* ===== Spouse relationships ===== */
        { type: 'spouse', fromPersonId: 'richard_becker', toPersonId: 'elise_just' },
        { type: 'spouse', fromPersonId: 'ernst_alwin', toPersonId: 'gertrud_becker', startYear: 1926 },
        { type: 'spouse', fromPersonId: 'alvin', toPersonId: 'christa', startYear: 1952 },
        { type: 'spouse', fromPersonId: 'rita_father', toPersonId: 'rita_mother' },
        { type: 'spouse', fromPersonId: 'thomas', toPersonId: 'rita', startYear: 1980 },
        { type: 'spouse', fromPersonId: 'valeria', toPersonId: 'sebastian', startYear: 2022 },

        /* ===== Parent-child relationships ===== */
        // Richard & Elise Just -> Gertrud
        { type: 'parent_child', fromPersonId: 'richard_becker', toPersonId: 'gertrud_becker' },
        { type: 'parent_child', fromPersonId: 'elise_just', toPersonId: 'gertrud_becker' },

        // Ernst Alwin & Gertrud -> Christa, Sigrid
        { type: 'parent_child', fromPersonId: 'ernst_alwin', toPersonId: 'christa' },
        { type: 'parent_child', fromPersonId: 'gertrud_becker', toPersonId: 'christa' },
        { type: 'parent_child', fromPersonId: 'ernst_alwin', toPersonId: 'sigrid' },
        { type: 'parent_child', fromPersonId: 'gertrud_becker', toPersonId: 'sigrid' },

        // Alvin & Christa -> Thomas, Matthias, Sabine
        { type: 'parent_child', fromPersonId: 'alvin', toPersonId: 'thomas' },
        { type: 'parent_child', fromPersonId: 'christa', toPersonId: 'thomas' },
        { type: 'parent_child', fromPersonId: 'alvin', toPersonId: 'matthias' },
        { type: 'parent_child', fromPersonId: 'christa', toPersonId: 'matthias' },
        { type: 'parent_child', fromPersonId: 'alvin', toPersonId: 'sabine' },
        { type: 'parent_child', fromPersonId: 'christa', toPersonId: 'sabine' },

        // Rita's parents -> Rita, Heide, Annette
        { type: 'parent_child', fromPersonId: 'rita_father', toPersonId: 'rita' },
        { type: 'parent_child', fromPersonId: 'rita_mother', toPersonId: 'rita' },
        { type: 'parent_child', fromPersonId: 'rita_father', toPersonId: 'heide' },
        { type: 'parent_child', fromPersonId: 'rita_mother', toPersonId: 'heide' },
        { type: 'parent_child', fromPersonId: 'rita_father', toPersonId: 'annette' },
        { type: 'parent_child', fromPersonId: 'rita_mother', toPersonId: 'annette' },

        // Thomas & Rita -> Valeria, Elisa
        { type: 'parent_child', fromPersonId: 'thomas', toPersonId: 'valeria' },
        { type: 'parent_child', fromPersonId: 'rita', toPersonId: 'valeria' },
        { type: 'parent_child', fromPersonId: 'thomas', toPersonId: 'elisa' },
        { type: 'parent_child', fromPersonId: 'rita', toPersonId: 'elisa' },

        // Valeria & Sebastian -> Enzo
        { type: 'parent_child', fromPersonId: 'valeria', toPersonId: 'enzo' },
        { type: 'parent_child', fromPersonId: 'sebastian', toPersonId: 'enzo' }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = FAMILY_DATA;
}
