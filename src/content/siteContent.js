export const COMPANY_NAME = "Teamwork Construction";
export const REGION = "Bremen & Umgebung";
export const SITE_URL = import.meta.env.VITE_SITE_URL || "https://teamwork-construction.de";
export const LOGO_SRC = `${import.meta.env.BASE_URL}images/brand/logo.png`;

export const PHONE_DISPLAY = "+49 174 4257898";
export const PHONE_TEL = "tel:+491744257898";
export const WHATSAPP_DISPLAY = "+49 174 4257898";
export const WHATSAPP_LINK = "https://wa.me/491744257898";
export const EMAIL = "kontakt@teamwork-construction.de";
export const CONTACT_API_URL =
  import.meta.env.VITE_CONTACT_API_URL ||
  (import.meta.env.DEV
    ? "http://127.0.0.1:8787/contact"
    : "https://api.teamwork-construction.de/contact");
export const QUERY_PARAMS = {
  service: "leistung",
  location: "ort",
  source: "quelle",
};

export const IMAGE_SOURCES = {
  homeHero:
    "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600",
  homeStory:
    "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1600",
  leistungenHero:
    "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600",
  projekteHero:
    "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ablaufHero:
    "https://images.pexels.com/photos/7512035/pexels-photo-7512035.jpeg?auto=compress&cs=tinysrgb&w=1600",
  kontaktHero:
    "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1600",
  legalHero:
    "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1600",
};

export const KPIS = [
  { value: "120+", label: "Projekte begleitet" },
  { value: "24-48h", label: "Rückmeldung werktags" },
  { value: "4.9/5", label: "Kundenzufriedenheit" },
];

export const SERVICES = [
  {
    id: "01",
    title: "Renovierung & Modernisierung",
    description: "Frischer Look für Ihr Zuhause – sauber, planbar und zuverlässig.",
    image:
      "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1200",
    points: [
      "Verlässliche Terminfenster",
      "Schutz der Wohnbereiche während der Arbeiten",
      "Arbeiten nach KfW-Vorgaben",
    ],
    text:
      "Wir modernisieren Räume so, dass sie wieder zu Ihrem Alltag passen. Von Oberfläche bis Detail planen wir alle Schritte, damit es am Ende nicht nur gut aussieht, sondern langfristig funktioniert. Bei geeigneten Maßnahmen integrieren wir unsere KfW-Förderberatung frühzeitig in die Planung.",
  },
  {
    id: "02",
    title: "Innenausbau",
    description:
      "Funktionale Wohnbereiche durchdacht umgesetzt – vom Konzept bis zur Ausführung.",
    image:
      "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=1200",
    points: ["Klare Raumaufteilung", "Materialien passend zu Nutzung und Stil"],
    text:
      "Ob offene Wohnküche, Homeoffice oder Familienbereich: Wir setzen Ausbau-Lösungen um, die nicht nur optisch überzeugen, sondern Ihre Wege und Abläufe zuhause spürbar verbessern.",
  },
  {
    id: "03",
    title: "Trockenbau",
    description: "Wände, Decken, Abhängungen – schnell, sauber und flexibel.",
    image:
      "https://images.pexels.com/photos/6474475/pexels-photo-6474475.jpeg?auto=compress&cs=tinysrgb&w=1200",
    points: ["Saubere Ausführung", "Flexible Anpassung bei späteren Änderungen"],
    text:
      "Trockenbau ist ideal, wenn Räume neu strukturiert werden sollen. Wir arbeiten präzise und zügig, damit Umbauten planbar bleiben und Ihr Zuhause schnell wieder voll nutzbar ist.",
  },
  {
    id: "04",
    title: "Boden & Fliesen",
    description: "Präzise Verlegung, saubere Anschlüsse, langlebige Ergebnisse.",
    image:
      "https://images.pexels.com/photos/276551/pexels-photo-276551.jpeg?auto=compress&cs=tinysrgb&w=1200",
    points: ["Saubere Übergänge und Fugen", "Robuste und pflegeleichte Lösungen"],
    text:
      "Böden und Fliesen prägen den gesamten Eindruck eines Raumes. Wir legen Wert auf exakte Linienführung, hochwertige Verarbeitung und ein Ergebnis, das täglich belastbar bleibt.",
  },
  {
    id: "05",
    title: "Bad-Teilmodernisierung",
    description: "Gezielte Updates ohne Komplettumbau – effizient und sauber.",
    image:
      "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1200",
    points: [
      "Sinnvolle Maßnahmen mit hoher Wirkung",
      "Kurze Umbauzeiten",
      "Arbeiten nach KfW-Vorgaben bei relevanten Maßnahmen",
    ],
    text:
      "Nicht jedes Bad braucht eine Vollsanierung. Mit gezielten Modernisierungen schaffen wir spürbare Verbesserungen in Komfort, Optik und Alltagstauglichkeit. Unsere KfW-Förderberatung unterstützt Sie bei förderrelevanten Schritten.",
  },
  {
    id: "06",
    title: "Sanierung nach Wasserschaden",
    description: "Rückbau und Wiederaufbau, damit es schnell wieder wohnlich wird.",
    image:
      "https://images.pexels.com/photos/7937214/pexels-photo-7937214.jpeg?auto=compress&cs=tinysrgb&w=1200",
    points: [
      "Strukturierter Ablauf nach Schadensbild",
      "Schnelle Wiederherstellung von Wohnqualität",
    ],
    text:
      "Nach einem Wasserschaden zählt vor allem Tempo mit System. Wir übernehmen Rückbau, Trocknungsbegleitung und Wiederaufbau in klaren Schritten.",
  },
  {
    id: "07",
    title: "Gartenarbeit & Sportanlagen",
    description:
      "Außenbereiche funktional und sauber umgesetzt – von Gartenflächen bis Trainingszonen.",
    image:
      "https://images.unsplash.com/photo-1599058918144-1ffabb6ab9a0?auto=format&fit=crop&w=1200&q=80",
    points: [
      "Pflege und Aufwertung von Garten- und Außenflächen",
      "Montage von Outdoor-Fitness- und Sportelementen",
    ],
    text:
      "Wir gestalten und modernisieren Außenbereiche, die alltagstauglich und langlebig sind. Ob Gartenarbeit, Sportstationen oder kombinierte Flächen: Planung und Umsetzung erfolgen strukturiert aus einer Hand.",
  },
];

export const STEPS = [
  {
    id: "01",
    title: "Anfrage",
    description: "Telefon, WhatsApp oder Formular – kurz schildern, was ansteht.",
    image:
      "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1000",
    detail:
      "Sie erhalten direkt eine erste Orientierung, welche nächsten Schritte sinnvoll sind und welche Informationen wir für eine präzise Planung benötigen.",
  },
  {
    id: "02",
    title: "Check",
    description: "Wir klären Umfang, Timing und Wünsche in wenigen Fragen.",
    image:
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1000",
    detail:
      "Wir prüfen die Machbarkeit, priorisieren Maßnahmen und definieren gemeinsam den Rahmen. So entsteht von Anfang an ein realistisches Bild für Ihr Projekt.",
  },
  {
    id: "03",
    title: "Angebot",
    description: "Transparent, verständlich, auf Wunsch mit Varianten.",
    image:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1000",
    detail:
      "Sie bekommen ein klar strukturiertes Angebot mit nachvollziehbaren Positionen. Auf Wunsch zeigen wir Varianten für Budget, Material oder Ausbauumfang.",
  },
  {
    id: "04",
    title: "Umsetzung",
    description: "Sauber, termintreu, mit Updates und besenreiner Übergabe.",
    image:
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1000",
    detail:
      "Während der Ausführung halten wir Sie auf dem Laufenden. Das Ergebnis: eine saubere Umsetzung mit klaren Übergaben und einem verlässlichen Zeitrahmen.",
  },
];

export const PROJECTS = [
  {
    id: "P01",
    title: "Wohnzimmer-Update",
    location: "Bremen-Schwachhausen",
    image:
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200",
    summary:
      "Neue Wandgestaltung, Lichtkonzept und Bodenanpassung für ein ruhiges, helles Wohngefühl.",
    duration: "2 Wochen",
  },
  {
    id: "P02",
    title: "Bad refresh",
    location: "Bremen-Horn",
    image:
      "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1200",
    summary:
      "Teilmodernisierung mit neuen Fliesenflächen und optimierter Aufteilung für mehr Komfort.",
    duration: "9 Tage",
  },
  {
    id: "P03",
    title: "Küchenumbau",
    location: "Bremen-Oberneuland",
    image:
      "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1200",
    summary:
      "Anpassung von Anschlüssen, Wandflächen und Boden für eine moderne offene Küche.",
    duration: "3 Wochen",
  },
  {
    id: "P04",
    title: "Flur & Treppe",
    location: "Bremen-Mitte",
    image:
      "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1200",
    summary:
      "Robuste Oberflächen und klare Lichtführung für einen einladenden Eingangsbereich.",
    duration: "8 Tage",
  },
  {
    id: "P05",
    title: "Trockenbau DG",
    location: "Delmenhorst",
    image:
      "https://images.pexels.com/photos/6474475/pexels-photo-6474475.jpeg?auto=compress&cs=tinysrgb&w=1200",
    summary:
      "Neue Raumzonen im Dachgeschoss inklusive Dämmoptimierung und sauberem Finish.",
    duration: "2.5 Wochen",
  },
  {
    id: "P06",
    title: "Wasserschaden-Sanierung",
    location: "Lilienthal",
    image:
      "https://images.pexels.com/photos/7937214/pexels-photo-7937214.jpeg?auto=compress&cs=tinysrgb&w=1200",
    summary:
      "Strukturierter Rückbau und Wiederaufbau bis zur vollständig wohnlichen Nutzung.",
    duration: "3 Wochen",
  },
];

export const BADGES = [
  "🛡️ Gewährleistung",
  "🏡 Wohnbereich-Fokus",
  "🌿 Garten- & Außenanlagen",
  "🏛️ KfW-Förderberatung",
  "📅 Termintreu",
  "🧹 Saubere Übergabe",
  "💬 Direkte Kommunikation",
  "📍 Bremen & Umgebung",
];

export const STATIC_SEO = {
  home: {
    title: "Renovierung & Innenausbau in Bremen | Teamwork Construction",
    metaDescription:
      "Teamwork Construction ist Ihr Partner für Renovierung, Sanierung, Innenausbau sowie Gartenarbeit und Sportanlagen in Bremen & Umgebung. Jetzt unverbindlich anfragen.",
  },
  kontakt: {
    title: "Kontakt & Anfrage in Bremen | Teamwork Construction",
    metaDescription:
      "Telefon, WhatsApp oder Formular: Kontaktieren Sie Teamwork Construction in Bremen & Umgebung. Schnelle Rückmeldung inklusive KfW-Förderberatung.",
  },
  leistungenHub: {
    title: "Leistungen in Bremen | Teamwork Construction",
    metaDescription:
      "Alle Leistungen im Überblick: Renovierung, Innenausbau, Trockenbau, Boden & Fliesen, Bad-Teilmodernisierung, Wasserschaden-Sanierung, Gartenarbeit und Sportanlagen.",
  },
  projekteHub: {
    title: "Projekte in Bremen & Umgebung | Teamwork Construction",
    metaDescription:
      "Referenzen aus Bremen & Umgebung: echte Projekte mit klaren Ergebnissen, transparenter Umsetzung und termintreuer Übergabe.",
  },
  ablaufHub: {
    title: "Ablauf vom Erstkontakt bis Umsetzung | Teamwork Construction",
    metaDescription:
      "So läuft Ihr Projekt ab: Anfrage, Check, transparentes Angebot und saubere Umsetzung mit klarer Kommunikation in Bremen & Umgebung.",
  },
};

export const SERVICE_SEO_PAGES = [
  {
    serviceId: "01",
    slug: "renovierung-modernisierung-bremen",
    title: "Renovierung in Bremen | Teamwork Construction",
    metaDescription:
      "Renovierung und Modernisierung in Bremen: sauber, termintreu und planbar. Auf Wunsch mit KfW-Förderberatung und Arbeiten nach KfW-Vorgaben.",
    headline: "Renovierung & Modernisierung in Bremen",
    intro:
      "Wir modernisieren Wohnbereiche in Bremen strukturiert und alltagstauglich. Planung, Ausführung und KfW-Förderberatung greifen sinnvoll ineinander.",
  },
  {
    serviceId: "02",
    slug: "innenausbau-bremen",
    title: "Innenausbau in Bremen | Teamwork Construction",
    metaDescription:
      "Innenausbau in Bremen vom Konzept bis zur Ausführung: funktional, hochwertig und zuverlässig. Teamwork Construction für private Wohnprojekte.",
    headline: "Innenausbau in Bremen",
    intro:
      "Vom Raumkonzept bis zur fertigen Umsetzung: Wir realisieren Innenausbau-Projekte in Bremen mit klaren Abläufen und festen Ansprechpartnern.",
  },
  {
    serviceId: "03",
    slug: "trockenbau-bremen",
    title: "Trockenbau in Bremen | Teamwork Construction",
    metaDescription:
      "Trockenbau in Bremen für Wände, Decken und Raumaufteilungen. Saubere Ausführung, klare Zeitplanung und flexible Lösungen für Ihr Projekt.",
    headline: "Trockenbau in Bremen",
    intro:
      "Für neue Raumaufteilungen und effiziente Umbauten setzen wir Trockenbau in Bremen präzise, sauber und termintreu um.",
  },
  {
    serviceId: "04",
    slug: "boden-fliesen-bremen",
    title: "Boden & Fliesen in Bremen | Teamwork Construction",
    metaDescription:
      "Boden- und Fliesenarbeiten in Bremen: präzise Verlegung, saubere Anschlüsse und langlebige Ergebnisse für Innenbereiche und Modernisierung.",
    headline: "Boden & Fliesen in Bremen",
    intro:
      "Wir verlegen Böden und Fliesen in Bremen mit hoher Präzision und robustem Finish für langfristig belastbare Wohnbereiche.",
  },
  {
    serviceId: "05",
    slug: "bad-teilmodernisierung-bremen",
    title: "Bad-Teilmodernisierung in Bremen | Teamwork Construction",
    metaDescription:
      "Bad-Teilmodernisierung in Bremen ohne Komplettumbau: effiziente Updates, kurze Umbauzeiten und Unterstützung bei förderrelevanten Maßnahmen.",
    headline: "Bad-Teilmodernisierung in Bremen",
    intro:
      "Gezielte Modernisierungen bringen Ihr Bad schnell auf den aktuellen Stand. Wir planen die passenden Maßnahmen für Bremen und Umgebung.",
  },
  {
    serviceId: "06",
    slug: "wasserschaden-sanierung-bremen",
    title: "Wasserschaden-Sanierung in Bremen | Teamwork Construction",
    metaDescription:
      "Sanierung nach Wasserschaden in Bremen: strukturierter Rückbau und Wiederaufbau bis zur wohnlichen Übergabe. Schnell, sauber und zuverlässig.",
    headline: "Wasserschaden-Sanierung in Bremen",
    intro:
      "Nach einem Wasserschaden zählt ein klarer Ablauf. Wir übernehmen Rückbau, Wiederaufbau und die koordinierte Umsetzung bis zur Übergabe.",
  },
  {
    serviceId: "07",
    slug: "gartenarbeit-sportanlagen-bremen",
    title: "Gartenarbeit & Sportanlagen in Bremen | Teamwork Construction",
    metaDescription:
      "Gartenarbeit und Sportanlagen in Bremen: Aufwertung von Außenflächen und Montage von Outdoor-Fitness-Elementen aus einer Hand.",
    headline: "Gartenarbeit & Sportanlagen in Bremen",
    intro:
      "Wir gestalten Außenbereiche in Bremen funktional und langlebig, von Gartenflächen bis zur Montage von Sport- und Outdoor-Fitness-Elementen.",
  },
];

export const LOCATION_SEO_PAGES = [
  {
    slug: "bremen",
    locationName: "Bremen",
    title: "Bauunternehmen in Bremen | Teamwork Construction",
    metaDescription:
      "Teamwork Construction in Bremen: Renovierung, Innenausbau, Sanierung, Gartenarbeit und Sportanlagen mit klaren Abläufen und festen Ansprechpartnern.",
    headline: "Bauunternehmen in Bremen",
    intro:
      "Für Projekte in Bremen bieten wir Renovierung, Innenausbau, Sanierung und Außenanlagen aus einer Hand inklusive direkter Abstimmung.",
    image:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    slug: "delmenhorst",
    locationName: "Delmenhorst",
    title: "Bauunternehmen in Delmenhorst | Teamwork Construction",
    metaDescription:
      "Leistungen in Delmenhorst: Renovierung, Trockenbau, Bad-Teilmodernisierung und Sanierung nach Wasserschaden inkl. KfW-Förderberatung.",
    headline: "Bauunternehmen in Delmenhorst",
    intro:
      "In Delmenhorst begleiten wir Modernisierungen und Sanierungen mit klarer Planung, termintreuer Ausführung und transparenter Kommunikation.",
    image:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    slug: "lilienthal",
    locationName: "Lilienthal",
    title: "Bauunternehmen in Lilienthal | Teamwork Construction",
    metaDescription:
      "Teamwork Construction für Lilienthal: Innenausbau, Modernisierung, Boden- und Fliesenarbeiten sowie Außenbereiche mit sauberer Umsetzung.",
    headline: "Bauunternehmen in Lilienthal",
    intro:
      "Wir setzen Projekte in Lilienthal sauber und strukturiert um, von Wohnraummodernisierung bis Außenbereich und Gartenarbeit.",
    image:
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    slug: "osterholz-scharmbeck",
    locationName: "Osterholz-Scharmbeck",
    title: "Bauunternehmen in Osterholz-Scharmbeck | Teamwork",
    metaDescription:
      "Renovierung und Sanierung in Osterholz-Scharmbeck: verlässliche Ausführung, transparente Angebote und direkte Kommunikation.",
    headline: "Bauunternehmen in Osterholz-Scharmbeck",
    intro:
      "In Osterholz-Scharmbeck liefern wir Renovierung und Sanierung mit nachvollziehbaren Angeboten und sauberer Übergabe.",
    image:
      "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    slug: "stuhr",
    locationName: "Stuhr",
    title: "Bauunternehmen in Stuhr | Teamwork Construction",
    metaDescription:
      "Bau- und Sanierungsleistungen in Stuhr: von Innenausbau bis Gartenarbeit, termintreu umgesetzt und auf Wunsch nach KfW-Vorgaben geplant.",
    headline: "Bauunternehmen in Stuhr",
    intro:
      "Für Stuhr realisieren wir Bau- und Sanierungsleistungen mit klarer Terminstruktur, direkter Abstimmung und KfW-orientierter Planung.",
    image:
      "https://images.pexels.com/photos/7512035/pexels-photo-7512035.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    slug: "weyhe",
    locationName: "Weyhe",
    title: "Bauunternehmen in Weyhe | Teamwork Construction",
    metaDescription:
      "Teamwork Construction in Weyhe: Modernisierung, Wasserschaden-Sanierung, Sportanlagen und Außenarbeiten mit schneller Rückmeldung.",
    headline: "Bauunternehmen in Weyhe",
    intro:
      "In Weyhe begleiten wir Wohn- und Außenprojekte zuverlässig vom Erstkontakt bis zur besenreinen Übergabe.",
    image:
      "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

export const SERVICE_SEO_BY_SLUG = Object.fromEntries(
  SERVICE_SEO_PAGES.map((item) => [item.slug, item])
);
export const SERVICE_SEO_BY_ID = Object.fromEntries(
  SERVICE_SEO_PAGES.map((item) => [item.serviceId, item])
);
export const LOCATION_SEO_BY_SLUG = Object.fromEntries(
  LOCATION_SEO_PAGES.map((item) => [item.slug, item])
);
export const SERVICE_BY_ID = Object.fromEntries(SERVICES.map((item) => [item.id, item]));

export const CONTACT_TRUST_POINTS = [
  "Rückmeldung werktags in 24–48h",
  "Unverbindliche Erstberatung",
  "Arbeiten nach KfW-Vorgaben",
];

export const CONTACT_FAQ = [
  {
    question: "Wie schnell bekomme ich eine Rückmeldung?",
    answer:
      "In der Regel melden wir uns werktags innerhalb von 24–48 Stunden mit einem klaren nächsten Schritt.",
  },
  {
    question: "Kann ich auch nur eine Teilmodernisierung anfragen?",
    answer:
      "Ja. Viele Projekte starten mit gezielten Maßnahmen, z. B. Bad-Teilmodernisierung oder einzelnen Ausbauabschnitten.",
  },
  {
    question: "Unterstützen Sie bei KfW-relevanten Projekten?",
    answer:
      "Ja. Wir bieten KfW-Förderberatung und planen die Ausführung nach KfW-Vorgaben, ohne Förderbewilligungen zu versprechen.",
  },
  {
    question: "Was soll ich für die Erstanfrage vorbereiten?",
    answer:
      "Ein kurzer Überblick reicht: gewünschte Leistung, Ort und Zeitrahmen. Fotos können Sie gern direkt per WhatsApp senden.",
  },
];

export const HEADER_LINKS = [
  { to: "/leistungen", label: "Leistungen" },
  { to: "/projekte", label: "Projekte" },
  { to: "/ablauf", label: "Ablauf" },
  { to: "/kontakt", label: "Kontakt" },
];

export const FOOTER_LINKS = [
  { to: "/impressum", label: "Impressum" },
  { to: "/datenschutz", label: "Datenschutz" },
  { to: "/cookies", label: "Cookies" },
];

export const LEGAL_CONTENT = {
  impressum: {
    title: "IMPRESSUM",
    subtitle: "Verantwortliche Angaben für Teamwork Construction",
    intro:
      "Hier finden Sie die rechtlich relevanten Basisinformationen zum Unternehmen, zur Vertretung und zu Kontaktwegen.",
    sections: [
      {
        heading: "Anbieter",
        text: "Teamwork Construction · Bremen & Umgebung. Angaben zu Vertretung und ladungsfähiger Anschrift werden hier final gepflegt.",
      },
      {
        heading: "Kontakt",
        text: `Telefon: ${PHONE_DISPLAY} · E-Mail: ${EMAIL}. Für Projektanfragen nutzen Sie gern zusätzlich WhatsApp.`,
      },
      {
        heading: "Haftung",
        text: "Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für externe Inhalte. Für den Inhalt verlinkter Seiten sind ausschließlich deren Betreiber verantwortlich.",
      },
    ],
  },
  datenschutz: {
    title: "DATENSCHUTZ",
    subtitle: "Transparenz zur Verarbeitung personenbezogener Daten",
    intro:
      "Datenschutz ist für uns ein fester Bestandteil unserer digitalen Kommunikation. Nachfolgend erhalten Sie einen verständlichen Überblick.",
    sections: [
      {
        heading: "Welche Daten wir verarbeiten",
        text: "Wir verarbeiten nur die Daten, die Sie uns freiwillig übermitteln – z. B. Name, Telefonnummer, E-Mail und Projektdetails.",
      },
      {
        heading: "Wofür wir Daten nutzen",
        text: "Zur Kontaktaufnahme, Angebotserstellung und Projektabstimmung. Die Verarbeitung erfolgt zweckgebunden und datensparsam.",
      },
      {
        heading: "Ihre Rechte",
        text: "Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Widerspruch im Rahmen der gesetzlichen Vorgaben.",
      },
    ],
  },
  cookies: {
    title: "COOKIES",
    subtitle: "Informationen zu technischen und optionalen Cookies",
    intro:
      "Wir setzen Cookies transparent und nur im erforderlichen Umfang ein. Optionale Funktionen erfolgen ausschließlich mit Einwilligung.",
    sections: [
      {
        heading: "Technisch notwendige Cookies",
        text: "Diese sorgen für Grundfunktionen der Seite, z. B. Navigation, Session-Stabilität und Formularnutzung.",
      },
      {
        heading: "Optionale Cookies",
        text: "Optionale Dienste wie externe Medien oder Statistik können gesondert aktiviert oder deaktiviert werden.",
      },
      {
        heading: "Einstellungen ändern",
        text: "Ihre Entscheidung können Sie jederzeit anpassen. Bei Fragen erreichen Sie uns direkt über die Kontaktseite.",
      },
    ],
  },
};
