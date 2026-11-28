// ============================================
// THE KOHLMANN FAMILY HERITAGE
// Interactive Script; biography panel data
// ============================================
// Placeholder bios pending verification of names, spellings, dates, places, and family history.
// Where a fact hasn't been confirmed, the bio carries a [PLACEHOLDER: ...] token rather than a guess.

const personData = {
    alvin: {
        name: "Herbert Kohlmann",
        subtitle: "Thomas's father, Generation 1",
        tags: ["Direct Line", "Generation 1", "Deceased"],
        description: "Herbert Kohlmann, known in the family in English as Herbert Coleman, was Thomas Kohlmann's father, and so Valeria Kohlmann's paternal grandfather. He married <strong>Elise Christa Eifler</strong> on <strong>24 July 1952 in Bautzen</strong>; the date is on the 2007 family chart. Christa was the daughter of Alwin and Gertrud Eifler of the mattress firm Weickert &amp; Eifler. Earlier versions of this site gave his first name wrongly, a mix-up with Christa's father Alwin Eifler that the family corrected on 26 November 2026. [PLACEHOLDER: where and when Herbert was born, his parents, where he lived, what he did for a living, when and where he died.]",
        details: {
            Born: "[PLACEHOLDER: birth date and place]",
            Died: "[PLACEHOLDER: date and place]",
            Wife: "Elise Christa Kohlmann, née Eifler (b. 25 Nov 1928, Bautzen; d. 21 May 2006, Starnberg)",
            "Father-in-law": "Alwin Eifler (1892 to 1968), proprietor, Weickert &amp; Eifler",
            Married: "24 July 1952, Bautzen",
            Children: "Thomas Kohlmann (b. 1956, Radebeul), Matthias Kohlmann, Sabine Kohlmann",
            Occupation: "[PLACEHOLDER]"
        },
        subtitle_de: "Thomas' Vater, Generation 1",
        tags_de: ["Direkte Linie", "Generation 1", "Verstorben"],
        description_de: "Herbert Kohlmann, in der Familie auf Englisch als Herbert Coleman bekannt, war der Vater von Thomas Kohlmann und damit der Großvater väterlicherseits von Valeria Kohlmann. Er heiratete <strong>Elise Christa Eifler</strong> am <strong>24. Juli 1952 in Bautzen</strong>; das Datum steht auf der Familientafel von 2007. Christa war die Tochter von Alwin und Gertrud Eifler von der Matratzenfirma Weickert &amp; Eifler. Frühere Versionen dieser Website gaben seinen Vornamen falsch an, eine Verwechslung mit Christas Vater Alwin Eifler, die die Familie am 26. November 2026 korrigierte. [PLACEHOLDER: wo und wann Herbert geboren wurde, seine Eltern, wo er lebte, womit er seinen Lebensunterhalt verdiente, wann und wo er starb.]",
        details_de: {
            Geboren: "[PLACEHOLDER: Geburtsdatum und Geburtsort]",
            Gestorben: "[PLACEHOLDER: Datum und Ort]",
            Ehefrau: "Elise Christa Kohlmann, geb. Eifler (geb. 25. Nov. 1928, Bautzen; gest. 21. Mai 2006, Starnberg)",
            Schwiegervater: "Alwin Eifler (1892 bis 1968), Inhaber, Weickert &amp; Eifler",
            Geheiratet: "24. Juli 1952, Bautzen",
            Kinder: "Thomas Kohlmann (geb. 1956, Radebeul), Matthias Kohlmann, Sabine Kohlmann",
            Beruf: "[PLACEHOLDER]"
        }
    },
    christa: {
        name: "Elise Christa Kohlmann (née Eifler)",
        subtitle: "Thomas's mother, Generation 1",
        tags: ["Direct Line", "Generation 1", "Eifler", "Bautzen"],
        description: "<strong>Elise Christa Kohlmann</strong>, called Christa, was Thomas Kohlmann's mother. She was born <strong>25 November 1928 in Bautzen</strong>, Saxony, the younger daughter of <strong>Ernst Alwin Eifler</strong> (1892 to 1968), sole proprietor of the steel wire mattress factory <strong>Weickert &amp; Eifler</strong> in Bautzen, and <strong>Gertrud Elise Eifler</strong>, née Becker (1905 to 1973), who worked alongside Alwin in the firm's office. Her older sister was <strong>Sigrid</strong> (b. 20 July 1927, Bautzen), who married a Michaelis on 20 August 1953 in Bautzen. Christa married <strong>Herbert Kohlmann</strong> on <strong>24 July 1952 in Bautzen</strong>. Together they had Thomas, Matthias, and Sabine. She died on <strong>21 May 2006 in Starnberg</strong>, Bavaria, of cancer (<em>Krebs</em>), aged 77. The 2007 Eifler/Becker <em>Ahnentafel</em> from which much of this is drawn was almost certainly compiled in the months following her death.",
        details: {
            "Full Name": "Elise Christa Kohlmann",
            "Maiden Name": "Eifler",
            Called: "Christa",
            Born: "25 November 1928, Bautzen, Saxony",
            Died: "21 May 2006, Starnberg, Bavaria (cancer)",
            Father: "Ernst Alwin Eifler (1892 to 1968), proprietor, Weickert &amp; Eifler, Bautzen",
            Mother: "Gertrud Elise Eifler, née Becker (1905 to 1973)",
            Sister: "Sigrid Michaelis, née Eifler (b. 1927)",
            Married: "Herbert Kohlmann, 24 July 1952, Bautzen",
            Children: "Thomas (b. 1956, Radebeul), Matthias, Sabine"
        },
        subtitle_de: "Thomas' Mutter, Generation 1",
        tags_de: ["Direkte Linie", "Generation 1", "Eifler", "Bautzen"],
        description_de: "<strong>Elise Christa Kohlmann</strong>, genannt Christa, war die Mutter von Thomas Kohlmann. Sie wurde am <strong>25. November 1928 in Bautzen</strong>, Sachsen, geboren, als jüngere Tochter von <strong>Ernst Alwin Eifler</strong> (1892 bis 1968), Alleininhaber der Stahldrahtmatratzenfabrik <strong>Weickert &amp; Eifler</strong> in Bautzen, und von <strong>Gertrud Elise Eifler</strong>, geborene Becker (1905 bis 1973), die zusammen mit Alwin im Büro der Firma arbeitete. Ihre ältere Schwester war <strong>Sigrid</strong> (geb. 20. Juli 1927, Bautzen), die am 20. August 1953 in Bautzen einen Michaelis heiratete. Christa heiratete <strong>Herbert Kohlmann</strong> am <strong>24. Juli 1952 in Bautzen</strong>. Zusammen hatten sie Thomas, Matthias und Sabine. Sie starb am <strong>21. Mai 2006 in Starnberg</strong>, Bayern, an Krebs (<em>Krebs</em>), im Alter von 77 Jahren. Die Eifler/Becker-<em>Ahnentafel</em> von 2007, aus der vieles hiervon stammt, wurde höchstwahrscheinlich in den Monaten nach ihrem Tod zusammengestellt.",
        details_de: {
            "Vollständiger Name": "Elise Christa Kohlmann",
            Geburtsname: "Eifler",
            Rufname: "Christa",
            Geboren: "25. November 1928, Bautzen, Sachsen",
            Gestorben: "21. Mai 2006, Starnberg, Bayern (Krebs)",
            Vater: "Ernst Alwin Eifler (1892 bis 1968), Inhaber, Weickert &amp; Eifler, Bautzen",
            Mutter: "Gertrud Elise Eifler, geb. Becker (1905 bis 1973)",
            Schwester: "Sigrid Michaelis, geb. Eifler (geb. 1927)",
            Geheiratet: "Herbert Kohlmann, 24. Juli 1952, Bautzen",
            Kinder: "Thomas (geb. 1956, Radebeul), Matthias, Sabine"
        }
    },
    sigrid: {
        name: "Gertrud Sigrid Michaelis (née Eifler)",
        subtitle: "Thomas's maternal aunt; Generation 1",
        tags: ["Eifler", "Bautzen", "Living status TBC"],
        description: "<strong>Sigrid</strong> (full name <strong>Gertrud Sigrid Michaelis</strong>, née Eifler) was Thomas Kohlmann's maternal aunt; the older sister of his mother Christa. She was born <strong>20 July 1927 in Bautzen</strong>, the elder daughter of Ernst Alwin Eifler and Gertrud Elise Eifler (née Becker). She married a <strong>Michaelis</strong> on <strong>20 August 1953 in Bautzen</strong>; his first name is not given on page 1 of the 2007 Ahnentafel. As of the chart's compilation date (18 January 2007) she was presumably still living. Her current status is unknown without further research; she would be 98 in 2025. [PLACEHOLDER: husband's first name, current status (living/deceased), any children, where she has lived since marriage.]",
        details: {
            "Full Name": "Gertrud Sigrid Michaelis",
            "Maiden Name": "Eifler",
            Called: "Sigrid",
            Born: "20 July 1927, Bautzen",
            Father: "Ernst Alwin Eifler (1892 to 1968)",
            Mother: "Gertrud Elise Eifler, née Becker (1905 to 1973)",
            Sister: "Christa Kohlmann, née Eifler (b. 1928)",
            Married: "[PLACEHOLDER: first name] Michaelis; 20 August 1953, Bautzen",
            Status: "[PLACEHOLDER: living or deceased]"
        },
        subtitle_de: "Thomas' Tante mütterlicherseits; Generation 1",
        tags_de: ["Eifler", "Bautzen", "Lebensstatus unbestätigt"],
        description_de: "<strong>Sigrid</strong> (vollständiger Name <strong>Gertrud Sigrid Michaelis</strong>, geborene Eifler) war die Tante mütterlicherseits von Thomas Kohlmann, die ältere Schwester seiner Mutter Christa. Sie wurde am <strong>20. Juli 1927 in Bautzen</strong> geboren, als ältere Tochter von Ernst Alwin Eifler und Gertrud Elise Eifler (geborene Becker). Sie heiratete am <strong>20. August 1953 in Bautzen</strong> einen <strong>Michaelis</strong>; sein Vorname ist auf Seite 1 der Ahnentafel von 2007 nicht angegeben. Zum Erstellungsdatum der Tafel (18. Januar 2007) lebte sie vermutlich noch. Ihr gegenwärtiger Status ist ohne weitere Forschung unbekannt; 2025 wäre sie 98 Jahre alt. [PLACEHOLDER: Vorname des Ehemanns, gegenwärtiger Status (lebend/verstorben), etwaige Kinder, wo sie seit der Heirat gelebt hat.]",
        details_de: {
            "Vollständiger Name": "Gertrud Sigrid Michaelis",
            Geburtsname: "Eifler",
            Rufname: "Sigrid",
            Geboren: "20. Juli 1927, Bautzen",
            Vater: "Ernst Alwin Eifler (1892 bis 1968)",
            Mutter: "Gertrud Elise Eifler, geb. Becker (1905 bis 1973)",
            Schwester: "Christa Kohlmann, geb. Eifler (geb. 1928)",
            Geheiratet: "[PLACEHOLDER: Vorname] Michaelis; 20. August 1953, Bautzen",
            Stand: "[PLACEHOLDER: lebend oder verstorben]"
        }
    },
    ernst_alwin: {
        name: "Ernst Alwin Eifler",
        subtitle: "Thomas's maternal grandfather, Generation 0",
        tags: ["Eifler", "Fabrikant", "Bautzen", "Weickert &amp; Eifler"],
        description: "<strong>Ernst Alwin Eifler</strong>, known as <strong>Alwin</strong> (the Rufname underlined on the chart, and the form he used in business), was Thomas Kohlmann's maternal grandfather. He was born on <strong>7 October 1892 in Sohland an der Spree</strong> in Upper Lusatia, south of Bautzen (his 1926 marriage entry). From at least 1928 to at least 1943 he was sole proprietor (<em>Inhaber</em>) of <strong>Stahldrahtmatratzen-Fabrik Weickert &amp; Eifler</strong>, the steel wire mattress factory based in Bautzen. The firm's office was at <strong>Martin-Mutschmann-Straße 19</strong> (a Nazi-period street name) in central Bautzen, and the factory itself sat on the <em>Industriegelände Singwitz</em> south of town, with a private rail siding at Gnaschwitz. The firm began by 1921 as the saddlery of the master saddler Bruno Weickert at Löbauer Straße 10; by 1928 Alwin was sole owner. He married <strong>Gertrud Elise Becker</strong> on <strong>2 October 1926 in Dresden</strong> (Dresden V 1926 Nr. 352), twelve years her senior; he was then a <em>Fabrikant</em> living at Wendischer Graben 3, Bautzen. Their two daughters were Sigrid (1927) and Christa (1928). The family chart says he died on <strong>18 December 1968</strong>, aged 76 (registered at Zittau, Nr. 1169/1968, according to a 1969 note on his marriage entry), from a <em>Schädelbasisbruch</em>, a basilar skull fracture sustained in a car accident. He had three siblings on the chart: brothers <strong>Max</strong> and <strong>Alfred</strong> and sister <strong>Martha</strong> (no further details on page 1).",
        details: {
            "Full Name": "Ernst Alwin Eifler",
            Rufname: "Alwin",
            Born: "7 October 1892, Sohland an der Spree, Upper Lusatia (Dresden V marriage entry 1926 Nr. 352)",
            Died: "18 December 1968, Bautzen (Schädelbasisbruch, car accident)",
            Occupation: "Fabrikant; sole proprietor (Inhaber) of Weickert &amp; Eifler",
            "Firm Address": "Löbauer Straße 10 (1921); Neusalzaer Straße 38 (1928 to 1932); Martin-Mutschmann-Straße 19 (1935 to 1945); factory Gnaschwitz / Industriegelände Singwitz",
            Married: "Gertrud Elise Becker, 2 October 1926, Dresden",
            Children: "Sigrid (b. 1927), Christa (b. 1928)",
            Siblings: "Max, Alfred, Martha (no further details on page 1)",
            Sources: "Dresden V marriage register 1926 Nr. 352; Bautzen directories 1921 to 1938; 2007 Eifler/Becker Ahnentafel; Weickert &amp; Eifler letterhead (1933 to 1945); invoice 9 April 1943"
        },
        subtitle_de: "Thomas' Großvater mütterlicherseits, Generation 0",
        tags_de: ["Eifler", "Fabrikant", "Bautzen", "Weickert &amp; Eifler"],
        description_de: "<strong>Ernst Alwin Eifler</strong>, bekannt als <strong>Alwin</strong> (der auf der Tafel unterstrichene Rufname und die Form, die er geschäftlich gebrauchte), war der Großvater mütterlicherseits von Thomas Kohlmann. Er wurde am <strong>7. Oktober 1892 in Sohland an der Spree</strong> in der Oberlausitz geboren, südlich von Bautzen (sein Heiratseintrag von 1926). Von mindestens 1928 bis mindestens 1943 war er Alleininhaber (<em>Inhaber</em>) der <strong>Stahldrahtmatratzen-Fabrik Weickert &amp; Eifler</strong>, der Stahldrahtmatratzenfabrik mit Sitz in Bautzen. Das Büro der Firma lag in der <strong>Martin-Mutschmann-Straße 19</strong> (ein Straßenname aus der NS-Zeit) im Zentrum von Bautzen, und die Fabrik selbst lag auf dem <em>Industriegelände Singwitz</em> südlich der Stadt, mit einem privaten Gleisanschluss in Gnaschwitz. Die Firma bestand spätestens 1921 als Sattlerei des Sattlermeisters Bruno Weickert in der Löbauer Straße 10; spätestens 1928 war Alwin Alleineigentümer. Er heiratete <strong>Gertrud Elise Becker</strong> am <strong>2. Oktober 1926 in Dresden</strong> (Dresden V 1926 Nr. 352) und war zwölf Jahre älter als sie; er war damals <em>Fabrikant</em> und wohnte in Wendischer Graben 3, Bautzen. Ihre beiden Töchter waren Sigrid (1927) und Christa (1928). Die Familientafel gibt an, dass er am <strong>18. Dezember 1968</strong> im Alter von 76 Jahren starb (eingetragen in Zittau, Nr. 1169/1968, laut einer Notiz von 1969 auf seinem Heiratseintrag), an einem <em>Schädelbasisbruch</em>, einem Bruch der Schädelbasis, den er bei einem Autounfall erlitten hatte. Auf der Tafel hat er drei Geschwister: die Brüder <strong>Max</strong> und <strong>Alfred</strong> und die Schwester <strong>Martha</strong> (keine weiteren Angaben auf Seite 1).",
        details_de: {
            "Vollständiger Name": "Ernst Alwin Eifler",
            Rufname: "Alwin",
            Geboren: "7. Oktober 1892, Sohland an der Spree, Oberlausitz (Heiratseintrag Dresden V 1926 Nr. 352)",
            Gestorben: "18. Dezember 1968, Bautzen (Schädelbasisbruch, Autounfall)",
            Beruf: "Fabrikant; Alleininhaber (Inhaber) von Weickert &amp; Eifler",
            "Anschrift der Firma": "Löbauer Straße 10 (1921); Neusalzaer Straße 38 (1928 bis 1932); Martin-Mutschmann-Straße 19 (1935 bis 1945); Fabrik Gnaschwitz / Industriegelände Singwitz",
            Geheiratet: "Gertrud Elise Becker, 2. Oktober 1926, Dresden",
            Kinder: "Sigrid (geb. 1927), Christa (geb. 1928)",
            Geschwister: "Max, Alfred, Martha (keine weiteren Angaben auf Seite 1)",
            Quellen: "Heiratsregister Dresden V 1926 Nr. 352; Adressbücher Bautzen 1921 bis 1938; Eifler/Becker-Ahnentafel 2007; Briefkopf Weickert &amp; Eifler (1933 bis 1945); Rechnung 9. April 1943"
        }
    },
    gertrud_becker: {
        name: "Gertrud Elise Eifler (née Becker)",
        subtitle: "Thomas's maternal grandmother, Generation 0",
        tags: ["Eifler", "Becker", "Dresden", "Bookkeeper, Weickert &amp; Eifler"],
        description: "<strong>Gertrud Elise Eifler</strong>, née Becker, known as <strong>Gertrud</strong> (the Rufname underlined on the chart), was Thomas Kohlmann's maternal grandmother. She was born on <strong>22 January 1905</strong> at Ziegelstraße 2 in Dresden (Dresden I 1905 Nr. 165), the daughter of <strong>Richard Hermann Becker</strong> (a <em>Kaufmann</em>, born 1875 in Herzberg) and <strong>Clara Elise Becker</strong>, née Just (born 1880 in Raun). She married <strong>Ernst Alwin Eifler</strong> on <strong>2 October 1926 in Dresden</strong>, aged 21 (twelve years younger than her husband). Their two daughters were Sigrid (1927) and Christa (1928). She also worked alongside Alwin in the firm's office: a <strong>Weickert &amp; Eifler invoice from 9 April 1943</strong> survives in family hands carrying her ink signature, acknowledging payment received three weeks later, &ldquo;<em>Betrag dankend erhalten. Gertrud Eifler. d. 28.4.1943.</em>&rdquo; She would have been 38. The receipt shows she signed for the firm; whether she kept its books is not recorded. She died a widow on <strong>11 December 1973</strong> at Wilthener Straße 19, Bautzen, aged 68 (Bautzen 1973 Nr. 1052); the family chart gives cancer (<em>Krebs</em>), the same illness that would kill her younger daughter Christa 33 years later.",
        details: {
            "Full Name": "Gertrud Elise Eifler",
            "Maiden Name": "Becker",
            Rufname: "Gertrud",
            Born: "22 January 1905, Ziegelstraße 2, Dresden (Dresden I 1905 Nr. 165)",
            Died: "11 December 1973, Wilthener Straße 19, Bautzen (Bautzen 1973 Nr. 1052)",
            Father: "Richard Hermann Becker (1875 to 1938)",
            Mother: "Clara Elise Becker, née Just (1880 to 1954)",
            Married: "Ernst Alwin Eifler, 2 October 1926, Dresden",
            Children: "Sigrid (b. 1927), Christa (b. 1928)",
            "Role in the firm": "Signed the payment receipt on a Weickert &amp; Eifler invoice, 28 April 1943",
            Sources: "2007 Eifler/Becker Ahnentafel; Weickert &amp; Eifler invoice 9 April 1943 (signed)"
        },
        subtitle_de: "Thomas' Großmutter mütterlicherseits, Generation 0",
        tags_de: ["Eifler", "Becker", "Dresden", "Buchhalterin, Weickert &amp; Eifler"],
        description_de: "<strong>Gertrud Elise Eifler</strong>, geborene Becker, bekannt als <strong>Gertrud</strong> (der auf der Tafel unterstrichene Rufname), war die Großmutter mütterlicherseits von Thomas Kohlmann. Sie wurde am <strong>22. Januar 1905</strong> in Ziegelstraße 2 in Dresden geboren (Dresden I 1905 Nr. 165), als Tochter von <strong>Richard Hermann Becker</strong> (einem <em>Kaufmann</em>, geboren 1875 in Herzberg) und <strong>Clara Elise Becker</strong>, geborene Just (geboren 1880 in Raun). Sie heiratete <strong>Ernst Alwin Eifler</strong> am <strong>2. Oktober 1926 in Dresden</strong>, im Alter von 21 Jahren (zwölf Jahre jünger als ihr Ehemann). Ihre beiden Töchter waren Sigrid (1927) und Christa (1928). Sie arbeitete außerdem zusammen mit Alwin im Büro der Firma: eine <strong>Rechnung von Weickert &amp; Eifler vom 9. April 1943</strong> ist im Familienbesitz erhalten und trägt ihre Tintenunterschrift, mit der sie drei Wochen später den Erhalt der Zahlung bestätigte, &ldquo;<em>Betrag dankend erhalten. Gertrud Eifler. d. 28.4.1943.</em>&rdquo; Sie wäre 38 gewesen. Der Beleg zeigt, dass sie für die Firma unterschrieb; ob sie die Bücher führte, ist nicht überliefert. Sie starb als Witwe am <strong>11. Dezember 1973</strong> in Wilthener Straße 19, Bautzen, im Alter von 68 Jahren (Bautzen 1973 Nr. 1052); die Familientafel gibt Krebs (<em>Krebs</em>) an, dieselbe Krankheit, an der ihre jüngere Tochter Christa 33 Jahre später sterben sollte.",
        details_de: {
            "Vollständiger Name": "Gertrud Elise Eifler",
            Geburtsname: "Becker",
            Rufname: "Gertrud",
            Geboren: "22. Januar 1905, Ziegelstraße 2, Dresden (Dresden I 1905 Nr. 165)",
            Gestorben: "11. Dezember 1973, Wilthener Straße 19, Bautzen (Bautzen 1973 Nr. 1052)",
            Vater: "Richard Hermann Becker (1875 bis 1938)",
            Mutter: "Clara Elise Becker, geb. Just (1880 bis 1954)",
            Geheiratet: "Ernst Alwin Eifler, 2. Oktober 1926, Dresden",
            Kinder: "Sigrid (geb. 1927), Christa (geb. 1928)",
            "Rolle in der Firma": "Unterzeichnete den Zahlungsbeleg auf einer Rechnung von Weickert &amp; Eifler, 28. April 1943",
            Quellen: "Eifler/Becker-Ahnentafel 2007; Rechnung Weickert &amp; Eifler 9. April 1943 (unterschrieben)"
        }
    },
    richard_becker: {
        name: "Richard Hermann Becker",
        subtitle: "Thomas's maternal great-grandfather; Generation -1",
        tags: ["Becker", "Kaufmann", "Dresden"],
        description: "<strong>Richard Hermann Becker</strong>; known as <strong>Richard</strong> (the Rufname underlined on the chart); was Thomas Kohlmann's maternal great-grandfather, the father of Gertrud Elise Eifler (née Becker). He was born on <strong>5 January 1875</strong> in <strong>Herzberg, Kreis Schweinitz</strong> (Herzberg on the Black Elster), according to his civil death entry; the family chart has 9 January. He worked as a <em>Kaufmann</em> (merchant). He married <strong>Elise Just</strong>; their daughter Gertrud was born in 1905 in Dresden. He kept an ironmonger's shop at Rothermundtstraße 5 in Dresden-Striesen, where he died on <strong>9 January 1938</strong>, aged 63 (Dresden V 1938 Nr. 52); the family chart gives <em>Lungenentzündung</em> (pneumonia). He was cremated at the Dresden crematorium. The chart records that he had <strong>two sisters</strong>; a handwritten annotation names one of them as <strong>Marie</strong>, with an uncertain married surname (Wettlitz, Wettlich, or Wettnitz) and an address at <strong>Rothermundtstraße 5 in Dresden-Striesen</strong>. That address is real and verifiable; the surname is a research lead, not yet confirmed. [Still open: Marie's married surname, the second sister's name.]",
        details: {
            "Full Name": "Richard Hermann Becker",
            Rufname: "Richard",
            Born: "5 January 1875, Herzberg (Elster), Kreis Schweinitz (Dresden V death entry 1938 Nr. 52; the family chart has 9 January)",
            Died: "9 January 1938, Rothermundtstraße 5, Dresden (pneumonia per the family chart); cremated Dresden, certificate 60603",
            Occupation: "Kaufmann (merchant)",
            Married: "Clara Elise Just",
            Children: "Gertrud Elise Becker (b. 22 Jan 1905, Dresden)",
            Sisters: "Two; one possibly Marie [Wettlitz?] of Rothermundtstraße 5, Dresden-Striesen (handwritten note, low confidence)",
            Source: "Dresden V death register 1938 Nr. 52; Dresden crematorium register 1938; Dresden I birth register 1905 Nr. 165; 2007 Eifler/Becker Ahnentafel"
        },
        subtitle_de: "Thomas' Urgroßvater mütterlicherseits; Generation -1",
        tags_de: ["Becker", "Kaufmann", "Dresden"],
        description_de: "<strong>Richard Hermann Becker</strong>, bekannt als <strong>Richard</strong> (der auf der Tafel unterstrichene Rufname), war der Urgroßvater mütterlicherseits von Thomas Kohlmann, der Vater von Gertrud Elise Eifler (geborene Becker). Er wurde am <strong>5. Januar 1875</strong> in <strong>Herzberg, Kreis Schweinitz</strong> geboren (Herzberg an der Schwarzen Elster), laut seinem standesamtlichen Sterbeeintrag; die Familientafel nennt den 9. Januar. Er arbeitete als <em>Kaufmann</em>. Er heiratete <strong>Elise Just</strong>; ihre Tochter Gertrud wurde 1905 in Dresden geboren. Er führte eine Eisenwarenhandlung in Rothermundtstraße 5 in Dresden-Striesen, wo er am <strong>9. Januar 1938</strong> im Alter von 63 Jahren starb (Dresden V 1938 Nr. 52); die Familientafel gibt <em>Lungenentzündung</em> an. Er wurde im Krematorium Dresden eingeäschert. Die Tafel hält fest, dass er <strong>zwei Schwestern</strong> hatte; eine handschriftliche Anmerkung nennt eine von ihnen <strong>Marie</strong>, mit unsicherem Ehenamen (Wettlitz, Wettlich oder Wettnitz) und der Anschrift <strong>Rothermundtstraße 5 in Dresden-Striesen</strong>. Diese Anschrift ist echt und überprüfbar; der Nachname ist ein Recherchehinweis, noch nicht bestätigt. [Noch offen: Maries Ehename, der Name der zweiten Schwester.]",
        details_de: {
            "Vollständiger Name": "Richard Hermann Becker",
            Rufname: "Richard",
            Geboren: "5. Januar 1875, Herzberg (Elster), Kreis Schweinitz (Sterbeeintrag Dresden V 1938 Nr. 52; die Familientafel nennt den 9. Januar)",
            Gestorben: "9. Januar 1938, Rothermundtstraße 5, Dresden (Lungenentzündung laut der Familientafel); eingeäschert in Dresden, Urkunde 60603",
            Beruf: "Kaufmann",
            Geheiratet: "Clara Elise Just",
            Kinder: "Gertrud Elise Becker (geb. 22. Jan. 1905, Dresden)",
            Schwestern: "Zwei; eine möglicherweise Marie [Wettlitz?] von Rothermundtstraße 5, Dresden-Striesen (handschriftliche Notiz, geringe Gewissheit)",
            Quelle: "Sterberegister Dresden V 1938 Nr. 52; Krematoriumsregister Dresden 1938; Geburtsregister Dresden I 1905 Nr. 165; Eifler/Becker-Ahnentafel 2007"
        }
    },
    elise_just: {
        name: "Clara Elise Becker (née Just)",
        subtitle: "Thomas's maternal great-grandmother; Generation -1",
        tags: ["Becker", "Just", "Bautzen"],
        description: "<strong>Clara Elise Becker</strong>, née Just, was Thomas Kohlmann's maternal great-grandmother; the mother of Gertrud Elise Eifler (née Becker). She was born on <strong>1 December 1880 in Raun</strong>, Kreis Oelsnitz im Vogtland (Bautzen death entry 1954 Nr. 881). She came from a large Just family of <strong>eight children</strong>: two sisters and five brothers. She married <strong>Richard Hermann Becker</strong>; their daughter Gertrud was born in 1905 in Dresden. She died on <strong>27 December 1954</strong> at her daughter's house, Wilthener Straße 19, Bautzen, aged 74; the family chart gives <em>Herzversagen</em> (heart failure). [Still open: names of the seven Just siblings, the marriage date and place.]",
        details: {
            "Full Name": "Clara Elise Becker",
            "Maiden Name": "Just",
            Born: "1 December 1880, Raun, Kreis Oelsnitz im Vogtland",
            Died: "27 December 1954, Wilthener Straße 19, Bautzen (Bautzen death register 1954 Nr. 881)",
            Married: "Richard Hermann Becker",
            Children: "Gertrud Elise Becker (b. 22 Jan 1905, Dresden)",
            "Just Siblings": "8 children total: 2 sisters, 5 brothers (no names on page 1)",
            Source: "2007 Eifler/Becker Ahnentafel, page 1"
        },
        subtitle_de: "Thomas' Urgroßmutter mütterlicherseits; Generation -1",
        tags_de: ["Becker", "Just", "Bautzen"],
        description_de: "<strong>Clara Elise Becker</strong>, geborene Just, war die Urgroßmutter mütterlicherseits von Thomas Kohlmann, die Mutter von Gertrud Elise Eifler (geborene Becker). Sie wurde am <strong>1. Dezember 1880 in Raun</strong> geboren, Kreis Oelsnitz im Vogtland (Sterbeeintrag Bautzen 1954 Nr. 881). Sie stammte aus einer großen Just-Familie mit <strong>acht Kindern</strong>: zwei Schwestern und fünf Brüdern. Sie heiratete <strong>Richard Hermann Becker</strong>; ihre Tochter Gertrud wurde 1905 in Dresden geboren. Sie starb am <strong>27. Dezember 1954</strong> im Haus ihrer Tochter, Wilthener Straße 19, Bautzen, im Alter von 74 Jahren; die Familientafel gibt <em>Herzversagen</em> an. [Noch offen: Namen der sieben Just-Geschwister, Datum und Ort der Heirat.]",
        details_de: {
            "Vollständiger Name": "Clara Elise Becker",
            Geburtsname: "Just",
            Geboren: "1. Dezember 1880, Raun, Kreis Oelsnitz im Vogtland",
            Gestorben: "27. Dezember 1954, Wilthener Straße 19, Bautzen (Sterberegister Bautzen 1954 Nr. 881)",
            Geheiratet: "Richard Hermann Becker",
            Kinder: "Gertrud Elise Becker (geb. 22. Jan. 1905, Dresden)",
            "Just-Geschwister": "insgesamt 8 Kinder: 2 Schwestern, 5 Brüder (keine Namen auf Seite 1)",
            Quelle: "Eifler/Becker-Ahnentafel 2007, Seite 1"
        }
    },
    rita_father: {
        name: "[PLACEHOLDER: first name] Werner",
        subtitle: "Father of Rita; Generation 1",
        tags: ["Direct Line", "Generation 1", "Werner"],
        description: "Rita Kohlmann's father. His surname Werner is the surname Rita's was changed to from her birth surname Woltmann (her mother Brigitte's surname; Brigitte and Rita's father were not married at the time of Rita's birth). Father of Rita, and; depending on the timing of his relationship with Brigitte; likely also of Heide and Annette. [PLACEHOLDER: first name, birth and death dates and places, occupation, where the family lived in East Germany, whether he and Brigitte ever married.]",
        details: {
            "First Name": "[PLACEHOLDER]",
            Surname: "Werner",
            Born: "[PLACEHOLDER]",
            Died: "[PLACEHOLDER]",
            Partner: "Brigitte Woltmann (mother of Rita; marital status TBC)",
            Children: "Rita Werner (b. 1956, Döbeln), and likely Heide and Annette"
        },
        subtitle_de: "Vater von Rita; Generation 1",
        tags_de: ["Direkte Linie", "Generation 1", "Werner"],
        description_de: "Vater von Rita Kohlmann. Sein Nachname Werner ist der Nachname, auf den Ritas Geburtsnachname Woltmann geändert wurde (der Nachname ihrer Mutter Brigitte; Brigitte und Ritas Vater waren zum Zeitpunkt von Ritas Geburt nicht verheiratet). Vater von Rita und, je nach dem Zeitpunkt seiner Beziehung zu Brigitte, wahrscheinlich auch von Heide und Annette. [PLACEHOLDER: Vorname, Geburts- und Sterbedaten und -orte, Beruf, wo die Familie in Ostdeutschland lebte, ob er und Brigitte jemals geheiratet haben.]",
        details_de: {
            Vorname: "[PLACEHOLDER]",
            Nachname: "Werner",
            Geboren: "[PLACEHOLDER]",
            Gestorben: "[PLACEHOLDER]",
            Partnerin: "Brigitte Woltmann (Mutter von Rita; Familienstand unbestätigt)",
            Kinder: "Rita Werner (geb. 1956, Döbeln) und wahrscheinlich Heide und Annette"
        }
    },
    rita_mother: {
        name: "Brigitte Woltmann",
        subtitle: "Mother of Rita, Heide, and Annette; Generation 1",
        tags: ["Spouse", "Generation 1", "Woltmann"],
        description: "Rita Kohlmann's mother. Her surname Woltmann is the name she carried at the time of Rita's birth; she and Rita's father were not married then, and Rita took her mother's surname at birth before it was later changed to Werner. Whether Brigitte's surname changed later (to Werner if she ever married Rita's father, or otherwise) is not yet known. Mother of Rita, Heide, and Annette. [PLACEHOLDER: maiden surname if Woltmann was already a married name, dates, location, anything known about her life.]",
        details: {
            "First Name": "Brigitte",
            "Surname at Rita's birth": "Woltmann",
            "Maiden Name": "[PLACEHOLDER; possibly Woltmann itself]",
            Born: "[PLACEHOLDER]",
            Died: "[PLACEHOLDER]",
            Children: "Rita (b. 1956, Döbeln), Heide, Annette"
        },
        subtitle_de: "Mutter von Rita, Heide und Annette; Generation 1",
        tags_de: ["Ehepartner", "Generation 1", "Woltmann"],
        description_de: "Mutter von Rita Kohlmann. Ihr Nachname Woltmann ist der Name, den sie zum Zeitpunkt von Ritas Geburt trug; sie und Ritas Vater waren damals nicht verheiratet, und Rita erhielt bei der Geburt den Nachnamen ihrer Mutter, bevor er später in Werner geändert wurde. Ob sich Brigittes Nachname später änderte (in Werner, falls sie jemals Ritas Vater heiratete, oder anders), ist noch nicht bekannt. Mutter von Rita, Heide und Annette. [PLACEHOLDER: Geburtsname, falls Woltmann bereits ein Ehename war, Daten, Ort, alles Bekannte über ihr Leben.]",
        details_de: {
            Vorname: "Brigitte",
            "Nachname bei Ritas Geburt": "Woltmann",
            Geburtsname: "[PLACEHOLDER; möglicherweise Woltmann selbst]",
            Geboren: "[PLACEHOLDER]",
            Gestorben: "[PLACEHOLDER]",
            Kinder: "Rita (geb. 1956, Döbeln), Heide, Annette"
        }
    },
    thomas: {
        name: "Thomas Kohlmann",
        subtitle: "Valeria's father, Generation 2",
        tags: ["Direct Line", "Living", "Born 1956, Radebeul", "Escaped East Germany"],
        description: "Thomas Kohlmann is Valeria Kohlmann's father, born in 1956 in Radebeul, Saxony, in East Germany. He is the son of <strong>Herbert Kohlmann</strong> and <strong>Elise Christa Kohlmann</strong> (née Eifler). Through his mother he descends from the Eifler family of Bautzen, where his maternal grandfather <strong>Alwin Eifler</strong> ran the steel wire mattress factory <strong>Weickert &amp; Eifler</strong> through the 1930s and 1940s, and from the Becker family of Dresden. He has a brother, Matthias, and a sister, Sabine. Thomas escaped from East Germany to West Germany; his story is the first half of the family's two-part escape narrative. After he made it across, he helped his future wife Rita escape as well. They married in 1980 in Munich. Together they had two daughters, Valeria (1990) and Elisa (1994). [PLACEHOLDER: exact birth date, the route and date of his escape, what he did in West Germany after escaping, his career, and the city in Germany where he and Rita live now.]",
        details: {
            Born: "1956, Radebeul, Saxony, East Germany",
            Father: "Herbert Kohlmann",
            Mother: "Elise Christa Kohlmann, née Eifler (1928 to 2006)",
            "Maternal Line": "Eifler (Bautzen, Weickert &amp; Eifler) &rarr; Becker (Dresden) &rarr; Just",
            Siblings: "Matthias Kohlmann, Sabine Kohlmann",
            Escape: "[PLACEHOLDER: date and route of escape from East to West Germany; before 1980]",
            Married: "Rita Werner, 1980, Munich",
            Children: "Valeria Kohlmann (b. 1990), Elisa Kohlmann (b. 1994)",
            Lives: "[PLACEHOLDER: current city]"
        },
        subtitle_de: "Valerias Vater, Generation 2",
        tags_de: ["Direkte Linie", "Lebend", "Geboren 1956, Radebeul", "Aus Ostdeutschland geflohen"],
        description_de: "Thomas Kohlmann ist der Vater von Valeria Kohlmann, geboren 1956 in Radebeul, Sachsen, in Ostdeutschland. Er ist der Sohn von <strong>Herbert Kohlmann</strong> und <strong>Elise Christa Kohlmann</strong> (geborene Eifler). Über seine Mutter stammt er von der Familie Eifler aus Bautzen ab, wo sein Großvater mütterlicherseits <strong>Alwin Eifler</strong> in den 1930er und 1940er Jahren die Stahldrahtmatratzenfabrik <strong>Weickert &amp; Eifler</strong> führte, und von der Familie Becker aus Dresden. Er hat einen Bruder, Matthias, und eine Schwester, Sabine. Thomas floh aus Ostdeutschland nach Westdeutschland; seine Geschichte ist die erste Hälfte der zweiteiligen Fluchtgeschichte der Familie. Nachdem er es hinüber geschafft hatte, half er auch seiner künftigen Frau Rita bei der Flucht. Sie heirateten 1980 in München. Zusammen hatten sie zwei Töchter, Valeria (1990) und Elisa (1994). [PLACEHOLDER: genaues Geburtsdatum, Route und Datum seiner Flucht, was er nach der Flucht in Westdeutschland tat, sein Beruf und die Stadt in Deutschland, in der er und Rita jetzt leben.]",
        details_de: {
            Geboren: "1956, Radebeul, Sachsen, Ostdeutschland",
            Vater: "Herbert Kohlmann",
            Mutter: "Elise Christa Kohlmann, geb. Eifler (1928 bis 2006)",
            "Mütterliche Linie": "Eifler (Bautzen, Weickert &amp; Eifler) &rarr; Becker (Dresden) &rarr; Just",
            Geschwister: "Matthias Kohlmann, Sabine Kohlmann",
            Flucht: "[PLACEHOLDER: Datum und Route der Flucht von Ostdeutschland nach Westdeutschland; vor 1980]",
            Geheiratet: "Rita Werner, 1980, München",
            Kinder: "Valeria Kohlmann (geb. 1990), Elisa Kohlmann (geb. 1994)",
            Wohnort: "[PLACEHOLDER: derzeitige Stadt]"
        }
    },
    matthias: {
        name: "Matthias Kohlmann",
        subtitle: "Thomas's brother; Generation 2",
        tags: ["Sibling", "Living"],
        description: "Thomas Kohlmann's brother. Son of Herbert Kohlmann. Father of Felix Kohlmann. [PLACEHOLDER: birth year and place, where he lives, occupation, marriage, any other children, and any role in the family's East-to-West Germany story.]",
        details: {
            Born: "[PLACEHOLDER]",
            Father: "Herbert Kohlmann",
            Mother: "[PLACEHOLDER]",
            Siblings: "Thomas Kohlmann (b. 1956), Sabine Kohlmann",
            Children: "Felix Kohlmann",
            Lives: "[PLACEHOLDER]"
        },
        subtitle_de: "Thomas' Bruder; Generation 2",
        tags_de: ["Geschwister", "Lebend"],
        description_de: "Bruder von Thomas Kohlmann. Sohn von Herbert Kohlmann. Vater von Felix Kohlmann. [PLACEHOLDER: Geburtsjahr und Geburtsort, wo er lebt, Beruf, Ehe, etwaige weitere Kinder und eine etwaige Rolle in der Geschichte der Familie von Ostdeutschland nach Westdeutschland.]",
        details_de: {
            Geboren: "[PLACEHOLDER]",
            Vater: "Herbert Kohlmann",
            Mutter: "[PLACEHOLDER]",
            Geschwister: "Thomas Kohlmann (geb. 1956), Sabine Kohlmann",
            Kinder: "Felix Kohlmann",
            Wohnort: "[PLACEHOLDER]"
        }
    },
    sabine: {
        name: "Sabine Kohlmann",
        subtitle: "Thomas's sister; Generation 2",
        tags: ["Sibling", "Living"],
        description: "Thomas Kohlmann's sister. Daughter of Herbert Kohlmann. [PLACEHOLDER: birth year and place, married name if any, where she lives, occupation, family, and any role in the family's East-to-West Germany story.]",
        details: {
            Born: "[PLACEHOLDER]",
            Father: "Herbert Kohlmann",
            Mother: "[PLACEHOLDER]",
            Siblings: "Thomas Kohlmann (b. 1956), Matthias Kohlmann",
            Lives: "[PLACEHOLDER]"
        },
        subtitle_de: "Thomas' Schwester; Generation 2",
        tags_de: ["Geschwister", "Lebend"],
        description_de: "Schwester von Thomas Kohlmann. Tochter von Herbert Kohlmann. [PLACEHOLDER: Geburtsjahr und Geburtsort, Ehename falls vorhanden, wo sie lebt, Beruf, Familie und eine etwaige Rolle in der Geschichte der Familie von Ostdeutschland nach Westdeutschland.]",
        details_de: {
            Geboren: "[PLACEHOLDER]",
            Vater: "Herbert Kohlmann",
            Mutter: "[PLACEHOLDER]",
            Geschwister: "Thomas Kohlmann (geb. 1956), Matthias Kohlmann",
            Wohnort: "[PLACEHOLDER]"
        }
    },
    rita: {
        name: "Rita Kohlmann",
        subtitle: "Valeria's mother; Generation 2",
        tags: ["Direct Line", "Living", "Born 1956, Döbeln", "Escaped East Germany"],
        description: "Rita Kohlmann is Valeria Kohlmann's mother, born in 1956 in Döbeln, Saxony, in East Germany. She is the sister of Heide and Annette. Her birth surname was Woltmann; taken from her mother Brigitte, who was not married to Rita's father at the time of her birth. Her surname was later changed to Werner, her father's surname; Werner is the maiden name she carried into marriage. After Thomas escaped from East Germany to West Germany, he helped Rita escape as well; her crossing was the second half of the family's two-part escape story. She married Thomas in 1980 in Munich. Together they had two daughters, Valeria (1990) and Elisa (1994). [PLACEHOLDER: exact birth date, when and how Thomas helped her escape, her career, the city in Germany where she and Thomas live now.]",
        details: {
            Born: "1956, Döbeln, Saxony, East Germany",
            "Birth Surname": "Woltmann (mother's surname; parents not married at her birth)",
            "Maiden Name": "Werner (her father's surname; carried into marriage)",
            Parents: "[PLACEHOLDER: father's first name] Werner &amp; Brigitte Woltmann",
            Sisters: "Heide, Annette",
            Escape: "[PLACEHOLDER: date and route; Thomas helped get her out, after his own escape, before 1980]",
            Married: "Thomas Kohlmann; 1980, Munich",
            Children: "Valeria Kohlmann (b. 1990), Elisa Kohlmann (b. 1994)",
            Lives: "[PLACEHOLDER: current city]"
        },
        subtitle_de: "Valerias Mutter; Generation 2",
        tags_de: ["Direkte Linie", "Lebend", "Geboren 1956, Döbeln", "Aus Ostdeutschland geflohen"],
        description_de: "Rita Kohlmann ist die Mutter von Valeria Kohlmann, geboren 1956 in Döbeln, Sachsen, in Ostdeutschland. Sie ist die Schwester von Heide und Annette. Ihr Geburtsnachname war Woltmann, übernommen von ihrer Mutter Brigitte, die zum Zeitpunkt von Ritas Geburt nicht mit Ritas Vater verheiratet war. Ihr Nachname wurde später in Werner geändert, den Nachnamen ihres Vaters; Werner ist der Geburtsname, den sie in die Ehe mitbrachte. Nachdem Thomas aus Ostdeutschland nach Westdeutschland geflohen war, half er auch Rita bei der Flucht; ihre Überquerung war die zweite Hälfte der zweiteiligen Fluchtgeschichte der Familie. Sie heiratete Thomas 1980 in München. Zusammen hatten sie zwei Töchter, Valeria (1990) und Elisa (1994). [PLACEHOLDER: genaues Geburtsdatum, wann und wie Thomas ihr bei der Flucht half, ihr Beruf, die Stadt in Deutschland, in der sie und Thomas jetzt leben.]",
        details_de: {
            Geboren: "1956, Döbeln, Sachsen, Ostdeutschland",
            Geburtsnachname: "Woltmann (Nachname der Mutter; die Eltern waren bei ihrer Geburt nicht verheiratet)",
            Geburtsname: "Werner (Nachname ihres Vaters; in die Ehe mitgebracht)",
            Eltern: "[PLACEHOLDER: Vorname des Vaters] Werner &amp; Brigitte Woltmann",
            Schwestern: "Heide, Annette",
            Flucht: "[PLACEHOLDER: Datum und Route; Thomas half, sie herauszuholen, nach seiner eigenen Flucht, vor 1980]",
            Geheiratet: "Thomas Kohlmann; 1980, München",
            Kinder: "Valeria Kohlmann (geb. 1990), Elisa Kohlmann (geb. 1994)",
            Wohnort: "[PLACEHOLDER: derzeitige Stadt]"
        }
    },
    heide: {
        name: "Heide",
        subtitle: "Rita's sister; Generation 2",
        tags: ["Sibling", "Living"],
        description: "Rita Kohlmann's sister. Her maiden surname was either Woltmann or Werner depending on whether she was born before or after Rita's surname change (which followed her parents' marital status changing or the father acknowledging paternity). [PLACEHOLDER: birth year and place, married name if any, where she lives, marriage and children, and any role in the family's East-to-West Germany story.]",
        details: {
            Born: "[PLACEHOLDER]",
            "Maiden Name": "[PLACEHOLDER; Woltmann or Werner, TBC]",
            "Married Name": "[PLACEHOLDER, if any]",
            Parents: "[PLACEHOLDER: father's first name] Werner &amp; Brigitte Woltmann",
            Sisters: "Rita Kohlmann (b. 1956, Döbeln), Annette",
            Lives: "[PLACEHOLDER]"
        },
        subtitle_de: "Ritas Schwester; Generation 2",
        tags_de: ["Geschwister", "Lebend"],
        description_de: "Schwester von Rita Kohlmann. Ihr Geburtsname war entweder Woltmann oder Werner, je nachdem, ob sie vor oder nach der Änderung von Ritas Nachnamen geboren wurde (die darauf folgte, dass sich der Familienstand der Eltern änderte oder der Vater die Vaterschaft anerkannte). [PLACEHOLDER: Geburtsjahr und Geburtsort, Ehename falls vorhanden, wo sie lebt, Ehe und Kinder und eine etwaige Rolle in der Geschichte der Familie von Ostdeutschland nach Westdeutschland.]",
        details_de: {
            Geboren: "[PLACEHOLDER]",
            Geburtsname: "[PLACEHOLDER; Woltmann oder Werner, unbestätigt]",
            Ehename: "[PLACEHOLDER, falls vorhanden]",
            Eltern: "[PLACEHOLDER: Vorname des Vaters] Werner &amp; Brigitte Woltmann",
            Schwestern: "Rita Kohlmann (geb. 1956, Döbeln), Annette",
            Wohnort: "[PLACEHOLDER]"
        }
    },
    annette: {
        name: "Annette",
        subtitle: "Rita's sister; Generation 2",
        tags: ["Sibling", "Living"],
        description: "Rita Kohlmann's sister. Her maiden surname was either Woltmann or Werner depending on whether she was born before or after Rita's surname change (which followed her parents' marital status changing or the father acknowledging paternity). [PLACEHOLDER: birth year and place, married name if any, where she lives, marriage and children, and any role in the family's East-to-West Germany story.]",
        details: {
            Born: "[PLACEHOLDER]",
            "Maiden Name": "[PLACEHOLDER; Woltmann or Werner, TBC]",
            "Married Name": "[PLACEHOLDER, if any]",
            Parents: "[PLACEHOLDER: father's first name] Werner &amp; Brigitte Woltmann",
            Sisters: "Rita Kohlmann (b. 1956, Döbeln), Heide",
            Lives: "[PLACEHOLDER]"
        },
        subtitle_de: "Ritas Schwester; Generation 2",
        tags_de: ["Geschwister", "Lebend"],
        description_de: "Schwester von Rita Kohlmann. Ihr Geburtsname war entweder Woltmann oder Werner, je nachdem, ob sie vor oder nach der Änderung von Ritas Nachnamen geboren wurde (die darauf folgte, dass sich der Familienstand der Eltern änderte oder der Vater die Vaterschaft anerkannte). [PLACEHOLDER: Geburtsjahr und Geburtsort, Ehename falls vorhanden, wo sie lebt, Ehe und Kinder und eine etwaige Rolle in der Geschichte der Familie von Ostdeutschland nach Westdeutschland.]",
        details_de: {
            Geboren: "[PLACEHOLDER]",
            Geburtsname: "[PLACEHOLDER; Woltmann oder Werner, unbestätigt]",
            Ehename: "[PLACEHOLDER, falls vorhanden]",
            Eltern: "[PLACEHOLDER: Vorname des Vaters] Werner &amp; Brigitte Woltmann",
            Schwestern: "Rita Kohlmann (geb. 1956, Döbeln), Heide",
            Wohnort: "[PLACEHOLDER]"
        }
    },
    valeria: {
        name: "Valeria Kohlmann",
        subtitle: "Daughter of Thomas and Rita; Generation 3",
        tags: ["Direct Line", "Living", "Born 1990, Munich"],
        description: "Valeria Kohlmann was born on 27 June 1990 in Munich, the daughter of Thomas and Rita Kohlmann and the older sister of Elisa. She married Sebastian Belfiore in September 2022 in Munich. They have a son, Enzo, born January 2026 in Tampa, Florida. [PLACEHOLDER: education, career, when and how she met Sebastian.]",
        details: {
            Born: "27 June 1990, Munich",
            Parents: "Thomas Kohlmann &amp; Rita Kohlmann",
            Sister: "Elisa Kohlmann (b. 1994)",
            Married: "Sebastian Belfiore; September 2022, Munich",
            Children: "Enzo Belfiore (b. January 2026, Tampa, FL)",
            Lives: "Tampa, FL"
        },
        subtitle_de: "Tochter von Thomas und Rita; Generation 3",
        tags_de: ["Direkte Linie", "Lebend", "Geboren 1990, München"],
        description_de: "Valeria Kohlmann wurde am 27. Juni 1990 in München geboren, als Tochter von Thomas und Rita Kohlmann und als ältere Schwester von Elisa. Sie heiratete Sebastian Belfiore im September 2022 in München. Sie haben einen Sohn, Enzo, geboren im Januar 2026 in Tampa, Florida. [PLACEHOLDER: Ausbildung, Beruf, wann und wie sie Sebastian kennenlernte.]",
        details_de: {
            Geboren: "27. Juni 1990, München",
            Eltern: "Thomas Kohlmann &amp; Rita Kohlmann",
            Schwester: "Elisa Kohlmann (geb. 1994)",
            Geheiratet: "Sebastian Belfiore; September 2022, München",
            Kinder: "Enzo Belfiore (geb. Januar 2026, Tampa, FL)",
            Wohnort: "Tampa, FL"
        }
    },
    elisa: {
        name: "Elisa Kohlmann",
        subtitle: "Valeria's sister; Generation 3",
        tags: ["Sibling", "Living", "Born 1994, Munich"],
        description: "Elisa Kohlmann was born on 25 March 1994 in Munich, the daughter of Thomas and Rita Kohlmann and the younger sister of Valeria. [PLACEHOLDER: education, career, marriage and family if any, current city.]",
        details: {
            Born: "25 March 1994, Munich",
            Parents: "Thomas Kohlmann &amp; Rita Kohlmann",
            Sister: "Valeria Kohlmann (b. 1990)",
            Lives: "[PLACEHOLDER]"
        },
        subtitle_de: "Valerias Schwester; Generation 3",
        tags_de: ["Geschwister", "Lebend", "Geboren 1994, München"],
        description_de: "Elisa Kohlmann wurde am 25. März 1994 in München geboren, als Tochter von Thomas und Rita Kohlmann und als jüngere Schwester von Valeria. [PLACEHOLDER: Ausbildung, Beruf, Ehe und Familie falls vorhanden, derzeitige Stadt.]",
        details_de: {
            Geboren: "25. März 1994, München",
            Eltern: "Thomas Kohlmann &amp; Rita Kohlmann",
            Schwester: "Valeria Kohlmann (geb. 1990)",
            Wohnort: "[PLACEHOLDER]"
        }
    },
    sebastian: {
        name: "Sebastian Belfiore",
        subtitle: "Valeria's husband; Generation 3 (by marriage)",
        tags: ["Spouse", "Living", "Researcher"],
        description: "Sebastian Belfiore married Valeria Kohlmann in September 2022 in Munich. They have a son, Enzo, born January 2026 in Tampa, Florida. He is the researcher behind this site, working to document Valeria's German family. He holds US and UK citizenship.",
        details: {
            Born: "1991, United Kingdom",
            Citizenship: "US, UK",
            Married: "Valeria Kohlmann; September 2022, Munich",
            Children: "Enzo Belfiore (b. January 2026, Tampa, FL)",
            Lives: "Tampa, FL"
        },
        subtitle_de: "Valerias Ehemann; Generation 3 (durch Heirat)",
        tags_de: ["Ehepartner", "Lebend", "Forscher"],
        description_de: "Sebastian Belfiore heiratete Valeria Kohlmann im September 2022 in München. Sie haben einen Sohn, Enzo, geboren im Januar 2026 in Tampa, Florida. Er ist der Forscher hinter dieser Website und arbeitet daran, Valerias deutsche Familie zu dokumentieren. Er besitzt die US- und die UK-Staatsangehörigkeit.",
        details_de: {
            Geboren: "1991, Vereinigtes Königreich",
            "Staatsangehörigkeit": "US, UK",
            Geheiratet: "Valeria Kohlmann; September 2022, München",
            Kinder: "Enzo Belfiore (geb. Januar 2026, Tampa, FL)",
            Wohnort: "Tampa, FL"
        }
    },
    enzo: {
        name: "Enzo Belfiore",
        subtitle: "Son of Valeria and Sebastian; Generation 4",
        tags: ["Newest Generation", "Tampa", "Triple Citizenship"],
        description: "Enzo Belfiore was born in January 2026 in Tampa, Florida, the son of Valeria Kohlmann and Sebastian Belfiore. He holds triple citizenship: US, UK, and German. He is the newest generation in this family.",
        details: {
            Born: "January 2026, Tampa, Florida",
            Parents: "Valeria Kohlmann &amp; Sebastian Belfiore",
            Citizenship: "US, UK, German",
            Generation: "4 (from Herbert Kohlmann)"
        },
        subtitle_de: "Sohn von Valeria und Sebastian; Generation 4",
        tags_de: ["Neueste Generation", "Tampa", "Dreifache Staatsangehörigkeit"],
        description_de: "Enzo Belfiore wurde im Januar 2026 in Tampa, Florida, geboren, als Sohn von Valeria Kohlmann und Sebastian Belfiore. Er besitzt die dreifache Staatsangehörigkeit: US, UK und deutsch. Er ist die neueste Generation in dieser Familie.",
        details_de: {
            Geboren: "Januar 2026, Tampa, Florida",
            Eltern: "Valeria Kohlmann &amp; Sebastian Belfiore",
            "Staatsangehörigkeit": "US, UK, deutsch",
            Generation: "4 (von Herbert Kohlmann)"
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

function german() {
    return !!(window.FamilyI18n && FamilyI18n.lang === 'de');
}
function field(data, name) {
    const de = data[name + '_de'];
    return german() && de ? de : data[name];
}

function showBio(id) {
    const data = personData[id];
    if (!data) return;

    // Mark active
    document.querySelectorAll('.tree-person').forEach(p => p.classList.remove('active'));
    const activeCard = document.querySelector(`[data-id="${id}"]`);
    if (activeCard) activeCard.classList.add('active');

    const tags = (german() && data.tags_de) ? data.tags_de : data.tags;
    let tagsHTML = tags.map(t => `<span class="bio-tag">${t}</span>`).join('');
    let detailsHTML = '';
    const details = (german() && data.details_de) ? data.details_de : data.details;
    if (details) {
        detailsHTML = '<div class="bio-details">';
        for (const [label, value] of Object.entries(details)) {
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
        const docs = german() ? 'Zugehörige Unterlagen' : 'Related Documents';
        linksHTML = `<div class="bio-links"><h4>${docs}</h4>`;
        data.links.forEach((link, i) => {
            const label = german() && data.links_de && data.links_de[i] && data.links_de[i].label_de ? data.links_de[i].label_de : link.label;
            linksHTML += `<a class="bio-link" href="${link.url}" target="_blank"><span class="bio-link-label">${label}</span> &rarr;</a>`;
        });
        linksHTML += '</div>';
    }

    bioContent.innerHTML = `
        ${imageHTML}
        <h3 class="bio-name">${data.name}</h3>
        <p class="bio-subtitle">${field(data, 'subtitle')}</p>
        <div class="bio-tags">${tagsHTML}</div>
        <p class="bio-description">${field(data, 'description')}</p>
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

            const tags = (german() && data.tags_de) ? data.tags_de : data.tags;
            let tagsHTML = tags.map(t => `<span class="modal-tag">${t}</span>`).join('');
            modalBody.innerHTML = `
                <h3>${data.name}</h3>
                <p class="modal-subtitle">${field(data, 'subtitle')}</p>
                <div style="margin-bottom: 1rem;">${tagsHTML}</div>
                <p>${field(data, 'description')}</p>
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
