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

const FAMILY_DATA = {
    rootPersonId: 'valeria',

    people: [
        /* ===== GENERATION 1 — GRANDPARENTS ===== */
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
            notes: "Thomas's father. Deceased. [PLACEHOLDER: birth date and place, death date and place, occupation, anything about his life.]",
            source: 'Family knowledge'
        },
        {
            id: 'alvin_wife',
            firstName: '[PLACEHOLDER: first name]',
            lastName: 'Kohlmann',
            aka: '[PLACEHOLDER: maiden name]',
            birthYear: null,
            deathYear: null,
            isLiving: false,
            primaryLocation: '[PLACEHOLDER: where she lived]',
            confidence: 'low',
            generation: 1,
            notes: "Thomas's mother. Married to Alvin Kohlmann. [PLACEHOLDER: name, maiden name, birth/death dates, locations, anything about her life.]",
            source: 'Family knowledge — name to be confirmed'
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
            notes: "Valeria's father. Born 1956 in Radebeul, Saxony (East Germany). Son of Alvin Kohlmann. Brother of Matthias and Sabine. Escaped from East Germany to West Germany; later helped Rita escape. Married Rita in 1980 in Munich. [PLACEHOLDER: exact birth date, escape date and route, current city, occupation.]",
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
            notes: "Thomas's brother. Son of Alvin Kohlmann. [PLACEHOLDER: birth year, location, occupation, marriage and any children.]",
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
            notes: "Thomas's sister. Daughter of Alvin Kohlmann. [PLACEHOLDER: birth year, location, married name if any, family.]",
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
        { type: 'spouse', fromPersonId: 'alvin', toPersonId: 'alvin_wife' },
        { type: 'spouse', fromPersonId: 'rita_father', toPersonId: 'rita_mother' },
        { type: 'spouse', fromPersonId: 'thomas', toPersonId: 'rita' },
        { type: 'spouse', fromPersonId: 'valeria', toPersonId: 'sebastian' },

        /* ===== Parent-child relationships ===== */
        // Alvin & wife -> Thomas, Matthias, Sabine
        { type: 'parent_child', fromPersonId: 'alvin', toPersonId: 'thomas' },
        { type: 'parent_child', fromPersonId: 'alvin_wife', toPersonId: 'thomas' },
        { type: 'parent_child', fromPersonId: 'alvin', toPersonId: 'matthias' },
        { type: 'parent_child', fromPersonId: 'alvin_wife', toPersonId: 'matthias' },
        { type: 'parent_child', fromPersonId: 'alvin', toPersonId: 'sabine' },
        { type: 'parent_child', fromPersonId: 'alvin_wife', toPersonId: 'sabine' },

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
