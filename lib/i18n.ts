export const locales = ["de", "en"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export type PageKey =
  | "home"
  | "noxa"
  | "reson"
  | "elixa"
  | "impressum"
  | "privacy";

export function routeFor(locale: Locale, page: PageKey): string {
  const routes: Record<PageKey, string> = {
    home: `/${locale}`,
    noxa: `/${locale}/noxa`,
    reson: `/${locale}/reson`,
    elixa: `/${locale}/elixa`,
    impressum: `/${locale}/impressum`,
    privacy: locale === "de" ? `/${locale}/datenschutz` : `/${locale}/privacy`,
  };

  return routes[page];
}

export const dictionaries = {
  en: {
    meta: {
      title: "Klex Studios",
      description:
        "Klex Studios builds social apps against digital loneliness: dating, parties, events, friendships, and real connection.",
    },
    nav: {
      studio: "Studio",
      noxa: "Noxa",
      reson: "Reson",
      elixa: "Elixa",
      about: "About",
      manifesto: "Manifesto",
      contact: "Contact",
    },
    footer: {
      rights: "© 2026 Klex Studios. All rights reserved.",
      imprint: "Impressum",
      privacy: "Privacy",
    },
    home: {
      kicker: "Independent social app studio",
      titleA: "Built for",
      titleB: "real-life.",
      lead:
        "Klex Studios builds social apps for a generation that grew up online — but still lacks real connection. No feed traps. No artificial frustration. No products built against their users.",
      primary: "Explore the apps",
      secondary: "Read the manifesto",
      purposeKicker: "Built with a reason",
      purpose1: "Real connection",
      purpose2: "Fair mechanics",
      purpose3: "Less isolation",
      appsKicker: "Our apps",
      appsTitleA: "Three problems.",
      appsTitleB: "One direction.",
      appsLead:
        "Dating apps feel broken. Party apps feel cheap. Social discovery barely exists for Generation Digital. Klex Studios builds alternatives for exactly those gaps.",
      manifestoKicker: "Our manifesto",
      manifestoTitleA: "Users over",
      manifestoTitleB: "growth tricks.",
      contactKicker: "Contact",
      contactTitle: "Building apps that do not work against you.",
      contactLead:
        "Klex Studios is currently developing its first ecosystem around dating, party games, and social discovery for real-world connection.",
      studio: {
        kicker: "Behind the apps",
        titleA: "Digital ideas.",
        titleB: "Shared moments.",
        textA: "Klex Studios is an independent studio focused on social apps. The starting point is everyday life: wanting to meet new people, make better dating choices, or enjoy a game night with friends.",
        textB: "Noxa, Reson, and Elixa approach different situations with the same ambition: technology that helps people do something together. The app is a tool; the experience happens between people.",
        focus: [
          { title: "Meet people", text: "Noxa explores how people and groups can find real plans nearby." },
          { title: "Choose with intention", text: "Reson focuses on meaningful dating choices instead of endless swiping." },
          { title: "Play together", text: "Elixa focuses on shared game nights, good questions, and a quick start." },
        ],
      },
      faq: {
        kicker: "A closer look",
        title: "Good to know.",
        lead: "Three app projects, one studio. Here is how the ideas fit together and where to find their current progress.",
        items: [
          { question: "What connects the three apps?", answer: "Noxa, Reson, and Elixa are separate app projects with a shared focus on real-world connection. Social discovery, dating, and game nights are different situations in which digital tools can bring people together." },
          { question: "Who are the apps for?", answer: "For people who want more from social apps than another feed: meeting new people, making thoughtful dating choices, or spending a good evening with friends. Each project has its own audience and purpose." },
          { question: "How far along are the projects?", answer: "The current status is shown on each app card and product page. Noxa is in the concepting phase. Reson and Elixa are in development. Product screenshots are added when the actual interfaces are ready to show." },
          { question: "Can I share an idea or feedback?", answer: "Yes. You can contact the studio at info.klexstudios@gmail.com. Mention the app your message is about and what you would like to improve or discuss." },
        ],
      },
      apps: [
        {
          name: "Noxa",
          status: "In concepting phase",
          color: "#3B6DFF",
          logo: "/logos/noxa-logo.png",
          title: "For people who want to go out, but lack the right connection.",
        },
        {
          name: "Reson",
          status: "In development",
          color: "#A66CFF",
          logo: "/logos/reson-logo.png",
          title: "Dating without endless swiping and broken choice dynamics.",
        },
        {
          name: "Elixa",
          status: "In development",
          color: "#38F06F",
          logo: "/logos/elixa-logo.png",
          title: "Drinking games without ad traps, paywalls, and bad questions.",
        },
      ],
      principles: [
        {
          title: "Users are not the enemy",
          text: "Apps should solve user problems, not create frustration and sell the solution back to them.",
        },
        {
          title: "Digital is not the problem",
          text: "The internet can connect people. Bad products turn that potential into isolation and empty scrolling.",
        },
        {
          title: "Fair by design",
          text: "No fake progress, no fake screenshots, no manipulative mechanics hidden behind polished design.",
        },
      ],
    },
    noxa: {
      kicker: "Noxa by Klex Studios",
      titleA: "New people.",
      titleB: "New groups.",
      titleAccentA: "Better plans",
      titleAccentB: "nearby.",
      lead:
        "Noxa is a social-discovery concept for people who want to meet others in real life. Alone, with friends, or as a group — the goal is not another feed, but actual plans.",
      primary: "Explore Noxa",
      secondary: "View concept",
      status1: "● In concepting phase",
      status2: "● Honest visuals coming soon",
      placeholderStatus: "In Concepting Phase",
      placeholderTitle: "Pictures Coming Soon",
      placeholderText: "Concept visuals will be shown once Noxa has honest product screens.",
      placeholderText2: "Screenshots will be added when the product concept is ready to show.",
      features: [
        {
          icon: "⌖",
          title: "Find people nearby",
          text: "Not just events. Noxa is about finding people and groups you could actually meet.",
        },
        {
          icon: "☷",
          title: "Groups meet groups",
          text: "Friend groups should be able to discover other groups and do something together.",
        },
        {
          icon: "♡",
          title: "Connection, not content",
          text: "Noxa should make real meetings more likely, not keep people watching from a feed.",
        },
        {
          icon: "▯",
          title: "Built for your twenties",
          text: "Making new friends after school, training, or university should not be this hard.",
        },
      ],
      storyKicker: "Why Noxa exists",
      storyTitleA: "Finding new friends",
      storyTitleB: "should be easier.",
      storyText:
        "Noxa exists because many people want to go out, but do not know with whom. The idea is simple: help individuals and groups find people nearby who also want to do something.",
      principles: [
        {
          title: "For individuals",
          text: "For people who are new somewhere or simply want to meet new people.",
        },
        {
          title: "For groups",
          text: "Because friend groups should be able to meet other friend groups too.",
        },
        {
          title: "For real plans",
          text: "The app should push toward meeting, not toward endless browsing.",
        },
        {
          title: "For Generation Digital",
          text: "A social app built for people who grew up online but still need real connection.",
        },
      ],
    },
    reson: {
      kicker: "Reson by Klex Studios",
      titleA: "Less swiping.",
      titleB: "Better choices.",
      titleC: "You would",
      titleAccent: "choose differently.",
      lead:
        "Reson tackles the core problems of modern dating apps: too much choice, unfair dynamics, shallow signals, and algorithms that reward attention more than real connection.",
      primary: "Explore Reson",
      secondary: "Read the idea",
      micro: ["Privacy first", "No endless swiping", "Built for real relationships"],
      placeholderStatus: "In Development",
      placeholderTitle: "Pictures Coming Soon",
      placeholderText: "Real app visuals will be added once Reson has honest product screenshots.",
      placeholderText2: "Screenshots will be shown here when the app UI is ready to present.",
      features: [
        {
          icon: "◎",
          title: "No endless swipe loop",
          text: "Reson limits choice on purpose, so decisions feel meaningful again.",
        },
        {
          icon: "☷",
          title: "Fairer dating dynamics",
          text: "Not women getting flooded and men getting ignored. Reson should treat both sides better.",
        },
        {
          icon: "♡",
          title: "Values over pure looks",
          text: "Attraction matters, but it should not be the only signal that decides everything.",
        },
        {
          icon: "✦",
          title: "No frustration model",
          text: "Dating should not be made worse on purpose just to keep people active or make them pay.",
        },
      ],
      experienceKicker: "The Reson approach",
      experienceTitleA: "Less choice,",
      experienceTitleB: "more intention.",
      experienceText:
        "Reson is built around one simple idea: fewer, better suggestions can create better dating decisions than endless profile browsing.",
      manifestKicker: "Why Reson exists",
      manifestTitleA: "Dating apps",
      manifestTitleB: "should work for daters.",
      manifestText:
        "Reson is built for people who are tired of being used as engagement data. Better signals, less noise, and fairer conditions for real connection.",
      bullets: ["Independent and focused", "Privacy by design", "Quality over noise"],
      manifestLink: "Read our manifesto",
    },
    elixa: {
      kicker: "Elixa by Klex Studios",
      titleA: "No ad traps.",
      titleAccent: "No bad questions.",
      lead:
        "Elixa is a drinking game app for people who just want to play. Strong questions, fast setup, different intensity levels — without ad traps, subscription pressure, or lazy filler cards.",
      primary: "Explore Elixa",
      secondary: "See the games",
      micro: ["In development", "Honest visuals coming soon", "Built by Klex Studios"],
      placeholderStatus: "In Development",
      placeholderTitle: "Pictures Coming Soon",
      placeholderText: "Real app screenshots will be added when Elixa is ready to show publicly.",
      placeholderText2: "Screenshots will be added here once the real app UI is ready.",
      how: {
        kicker: "The flow",
        titleA: "Less setup.",
        titleB: "More time together.",
        lead: "Elixa is in development. The intended flow stays simple: start a round, add your group, choose an intensity, and play together. The focus is on the evening, not on navigating an app.",
        steps: [
          { title: "Start a round", text: "Get the evening going with a new round. The aim is a clear starting point without unnecessary app clutter." },
          { title: "Add your players", text: "Bring your group into the round. Elixa is designed around friends playing together." },
          { title: "Choose an intensity", text: "Casual, personal, or spicy: pick a direction that feels right for your group." },
          { title: "Play together", text: "Read the questions and enjoy the round. Good content should keep the conversation and the evening moving." },
        ],
      },
      intensities: {
        kicker: "Your group. Your mood.",
        title: "An intensity that fits.",
        lead: "A round with new people feels different from one with close friends. These three directions help you choose a tone that suits your group and your evening.",
        items: [
          { tag: "01", title: "Casual", text: "For an easy start, mixed groups, and a night that is just getting going. The focus is on light questions and joining the conversation." },
          { tag: "02", title: "Personal", text: "For groups that want to learn more about one another. More room for stories, opinions, and conversations beyond small talk." },
          { tag: "03", title: "Spicy", text: "For groups that feel comfortable with more direct questions. Choose the intensity together so it suits the people in the round." },
        ],
      },
      faq: {
        kicker: "About Elixa",
        title: "Before the first round.",
        lead: "What the app is designed for, what matters to us, and its current stage of development.",
        items: [
          { question: "Who is Elixa designed for?", answer: "For friends who want to play together and for groups getting to know one another. Different intensities are intended to help the round match the people and the mood." },
          { question: "Will Elixa work offline?", answer: "Offline play is part of the intended feature set. The aim is to keep a shared round from depending on a permanent internet connection." },
          { question: "What is the approach to ads and subscriptions?", answer: "Elixa is being developed around uninterrupted play: good questions and a quick start instead of ad traps, subscription pressure, or forced upgrades in the middle of a round." },
          { question: "Can I download Elixa yet?", answer: "Elixa is currently in development. There is no download link or release date on this page. Real screenshots will be added when the app interface is ready to show publicly." },
        ],
        contact: "Questions or ideas for Elixa?",
        contactLink: "Send us an email",
      },
      features: [
        {
          icon: "♕",
          title: "Better questions",
          text: "No generic cards that get boring after five minutes.",
        },
        {
          icon: "ϟ",
          title: "Instant play",
          text: "Start a round, add players, and play. No unnecessary app bloat.",
        },
        {
          icon: "▣",
          title: "For every group",
          text: "Casual, personal, or spicy — for new people, close friends, and everything between.",
        },
        {
          icon: "✦",
          title: "Fair instead of annoying",
          text: "No game flow constantly interrupted by ads, paywalls, or forced upgrades.",
        },
      ],
      storyKicker: "Why Elixa exists",
      storyTitleA: "Drinking game apps",
      storyTitleB: "should not be trash.",
      storyText:
        "Most drinking game apps are full of ads, weak questions, and cheap monetization. Elixa focuses on the basics: good questions, fast setup, and a clean app that works.",
      storyLink: "Explore all games",
      vibeKicker: "The Elixa difference",
      vibeTitleA: "Less app noise.",
      vibeTitleB: "More game night.",
      vibeText:
        "Elixa is built for real groups and shared moments. No ad traps. No clutter. No pretending bad questions are premium content.",
      vibePoints: ["No ad traps", "Works offline", "Strong questions", "Made for friends"],
    },
    legal: {
      back: "← Back to Klex Studios",
      imprintTitle: "Legal Notice",
      privacyTitle: "Privacy Policy",
    },
  },

  de: {
    meta: {
      title: "Klex Studios",
      description:
        "Klex Studios entwickelt Social Apps gegen digitale Einsamkeit: Dating, Partys, Events, Freundschaften und echte Verbindung.",
    },
    nav: {
      studio: "Studio",
      noxa: "Noxa",
      reson: "Reson",
      elixa: "Elixa",
      about: "Über uns",
      manifesto: "Manifest",
      contact: "Kontakt",
    },
    footer: {
      rights: "© 2026 Klex Studios. Alle Rechte vorbehalten.",
      imprint: "Impressum",
      privacy: "Datenschutz",
    },
    home: {
      kicker: "Unabhängiges Social-App-Studio",
      titleA: "Gebaut für",
      titleB: "echtes Leben.",
      lead:
        "Klex Studios baut Social Apps für eine Generation, die online aufgewachsen ist — aber echte Verbindung vermisst. Keine Feed-Fallen. Keine künstliche Frustration. Keine Produkte, die gegen ihre Nutzer arbeiten.",
      primary: "Apps ansehen",
      secondary: "Manifest lesen",
      purposeKicker: "Mit echtem Grund gebaut",
      purpose1: "Echte Verbindung",
      purpose2: "Faire Mechaniken",
      purpose3: "Weniger Einsamkeit",
      appsKicker: "Unsere Apps",
      appsTitleA: "Drei Probleme.",
      appsTitleB: "Eine Richtung.",
      appsLead:
        "Dating-Apps fühlen sich kaputt an. Trinkspiel-Apps wirken billig. Social Discovery existiert für Generation Digital kaum noch. Klex Studios baut Alternativen für genau diese Lücken.",
      manifestoKicker: "Unser Manifest",
      manifestoTitleA: "Nutzer vor",
      manifestoTitleB: "Wachstumstricks.",
      contactKicker: "Kontakt",
      contactTitle: "Apps bauen, die nicht gegen dich arbeiten.",
      contactLead:
        "Klex Studios entwickelt aktuell ein erstes Ökosystem rund um Dating, Trinkspiele und Social Discovery für echte Verbindung.",
      studio: {
        kicker: "Hinter den Apps",
        titleA: "Digitale Ideen.",
        titleB: "Gemeinsame Momente.",
        textA: "Klex Studios ist ein unabhängiges Studio mit Fokus auf Social Apps. Ausgangspunkt ist der Alltag: neue Leute kennenlernen, beim Dating bewusster entscheiden oder einen Spieleabend mit Freunden verbringen.",
        textB: "Noxa, Reson und Elixa setzen an unterschiedlichen Situationen an – mit demselben Anspruch: Technik, die Menschen dabei hilft, gemeinsam etwas zu erleben. Die App ist das Werkzeug; das Erlebnis entsteht zwischen Menschen.",
        focus: [
          { title: "Menschen kennenlernen", text: "Noxa beschäftigt sich damit, wie Menschen und Gruppen echte Pläne in ihrer Nähe finden können." },
          { title: "Bewusster entscheiden", text: "Reson stellt sinnvolle Dating-Entscheidungen in den Mittelpunkt, statt endloses Swipen." },
          { title: "Gemeinsam spielen", text: "Elixa konzentriert sich auf gemeinsame Spieleabende, gute Fragen und einen schnellen Einstieg." },
        ],
      },
      faq: {
        kicker: "Genauer hingeschaut",
        title: "Gut zu wissen.",
        lead: "Drei App-Projekte, ein Studio. So hängen die Ideen zusammen und hier findest du ihren aktuellen Stand.",
        items: [
          { question: "Was verbindet die drei Apps?", answer: "Noxa, Reson und Elixa sind eigenständige App-Projekte mit einem gemeinsamen Fokus auf echte Verbindung. Social Discovery, Dating und Spieleabende sind unterschiedliche Situationen, in denen digitale Werkzeuge Menschen zusammenbringen können." },
          { question: "Für wen entstehen die Apps?", answer: "Für Menschen, die von Social Apps mehr erwarten als einen weiteren Feed: neue Leute kennenlernen, bewusstere Dating-Entscheidungen treffen oder einen guten Abend mit Freunden verbringen. Jedes Projekt hat seine eigene Zielgruppe und Aufgabe." },
          { question: "Wie weit sind die Projekte?", answer: "Der aktuelle Stand steht auf jeder App-Karte und Produktseite. Noxa ist in der Konzeptphase. Reson und Elixa sind in Entwicklung. Produktscreenshots werden ergänzt, sobald die tatsächlichen Oberflächen vorzeigbar sind." },
          { question: "Kann ich eine Idee oder Feedback teilen?", answer: "Ja. Du erreichst das Studio unter info.klexstudios@gmail.com. Schreib dazu, um welche App es geht und was du verbessern oder besprechen möchtest." },
        ],
      },
      apps: [
        {
          name: "Noxa",
          status: "Konzeptphase",
          color: "#3B6DFF",
          logo: "/logos/noxa-logo.png",
          title: "Für alle, die raus wollen, aber keinen Anschluss finden.",
        },
        {
          name: "Reson",
          status: "In Entwicklung",
          color: "#A66CFF",
          logo: "/logos/reson-logo.png",
          title: "Dating ohne endloses Swipen und kaputte Auswahl-Dynamik.",
        },
        {
          name: "Elixa",
          status: "In Entwicklung",
          color: "#38F06F",
          logo: "/logos/elixa-logo.png",
          title: "Trinkspiele ohne Werbefallen, Paywalls und schlechte Fragen.",
        },
      ],
      principles: [
        {
          title: "Nutzer sind nicht der Gegner",
          text: "Apps sollten Probleme lösen, nicht Frust erzeugen und die Lösung danach verkaufen.",
        },
        {
          title: "Digital ist nicht das Problem",
          text: "Das Internet kann Menschen verbinden. Schlechte Produkte machen daraus Isolation und leeres Scrollen.",
        },
        {
          title: "Fair im Design",
          text: "Keine Fake-Traktion, keine falschen Screenshots, keine manipulativen Mechaniken unter schöner Oberfläche.",
        },
      ],
    },
    noxa: {
      kicker: "Noxa von Klex Studios",
      titleA: "Neue Leute.",
      titleB: "Neue Gruppen.",
      titleAccentA: "Echte Pläne",
      titleAccentB: "finden.",
      lead:
        "Noxa ist ein Social-Discovery-Konzept für Menschen, die andere im echten Leben treffen wollen. Alleine, mit Freunden oder als Gruppe — nicht noch ein Feed, sondern echte Pläne.",
      primary: "Noxa ansehen",
      secondary: "Konzept ansehen",
      status1: "● Konzeptphase",
      status2: "● Echte Visuals folgen",
      placeholderStatus: "Konzeptphase",
      placeholderTitle: "Visuals folgen",
      placeholderText: "Konzeptvisuals erscheinen, sobald Noxa echte Produktscreens zeigen kann.",
      placeholderText2: "Screenshots werden ergänzt, sobald das Produktkonzept vorzeigbar ist.",
      features: [
        {
          icon: "⌖",
          title: "Menschen in der Nähe",
          text: "Nicht nur Events. Noxa soll Menschen und Gruppen zeigen, die man wirklich treffen kann.",
        },
        {
          icon: "☷",
          title: "Gruppen treffen Gruppen",
          text: "Freundesgruppen sollen andere Gruppen finden und gemeinsam etwas starten können.",
        },
        {
          icon: "♡",
          title: "Anschluss statt Content",
          text: "Noxa soll echte Treffen wahrscheinlicher machen, nicht Menschen in einem Feed halten.",
        },
        {
          icon: "▯",
          title: "Gebaut für die Zwanziger",
          text: "Neue Freunde finden sollte nach Schule, Ausbildung oder Studium nicht so schwer sein.",
        },
      ],
      storyKicker: "Warum Noxa existiert",
      storyTitleA: "Neue Freunde finden",
      storyTitleB: "sollte einfacher sein.",
      storyText:
        "Noxa existiert, weil viele Menschen raus wollen, aber nicht wissen mit wem. Die Idee ist simpel: Einzelne und Gruppen finden Menschen in der Nähe, die ebenfalls etwas erleben wollen.",
      principles: [
        {
          title: "Für Einzelne",
          text: "Für Menschen, die neu irgendwo sind oder einfach neue Leute kennenlernen wollen.",
        },
        {
          title: "Für Gruppen",
          text: "Weil auch Freundesgruppen andere Freundesgruppen kennenlernen können sollten.",
        },
        {
          title: "Für echte Pläne",
          text: "Die App soll Richtung Treffen führen, nicht Richtung endloses Browsen.",
        },
        {
          title: "Für Generation Digital",
          text: "Eine Social App für Menschen, die online aufgewachsen sind, aber echte Verbindung brauchen.",
        },
      ],
    },
    reson: {
      kicker: "Reson von Klex Studios",
      titleA: "Weniger Swipen.",
      titleB: "Bessere Auswahl.",
      titleC: "Du würdest",
      titleAccent: "anders wählen.",
      lead:
        "Reson geht die Kernprobleme moderner Dating-Apps an: zu viel Auswahl, unfaire Dynamiken, schwache Signale und Algorithmen, die Aufmerksamkeit stärker belohnen als echte Verbindung.",
      primary: "Reson ansehen",
      secondary: "Idee lesen",
      micro: ["Privacy first", "Kein endloses Swipen", "Für echte Beziehungen"],
      placeholderStatus: "In Entwicklung",
      placeholderTitle: "Visuals folgen",
      placeholderText: "Echte App-Visuals werden ergänzt, sobald Reson ehrliche Produktscreens zeigen kann.",
      placeholderText2: "Screenshots erscheinen hier, sobald die App-UI vorzeigbar ist.",
      features: [
        {
          icon: "◎",
          title: "Keine Swipe-Endlosschleife",
          text: "Reson begrenzt Auswahl bewusst, damit Entscheidungen wieder Bedeutung haben.",
        },
        {
          icon: "☷",
          title: "Fairere Dating-Dynamik",
          text: "Nicht Frauen überfluten und Männer ignorieren. Reson soll beide Seiten besser behandeln.",
        },
        {
          icon: "♡",
          title: "Werte statt nur Bilder",
          text: "Anziehung bleibt wichtig, aber sie soll nicht das einzige Signal sein, das alles entscheidet.",
        },
        {
          icon: "✦",
          title: "Kein Frust-Geschäftsmodell",
          text: "Dating soll nicht absichtlich schlechter werden, damit Nutzer länger bleiben oder zahlen.",
        },
      ],
      experienceKicker: "Der Reson Ansatz",
      experienceTitleA: "Weniger Auswahl,",
      experienceTitleB: "mehr Absicht.",
      experienceText:
        "Reson basiert auf einer einfachen Idee: Weniger, aber bessere Vorschläge können zu besseren Dating-Entscheidungen führen als endloses Profile-Browsing.",
      manifestKicker: "Warum Reson existiert",
      manifestTitleA: "Dating-Apps",
      manifestTitleB: "sollten für Dater arbeiten.",
      manifestText:
        "Reson ist für Menschen gebaut, die nicht länger als Engagement-Daten behandelt werden wollen. Bessere Signale, weniger Lärm und fairere Bedingungen für echte Verbindung.",
      bullets: ["Unabhängig und fokussiert", "Privacy by design", "Qualität statt Lärm"],
      manifestLink: "Manifest lesen",
    },
    elixa: {
      kicker: "Elixa von Klex Studios",
      titleA: "Keine Werbefallen.",
      titleAccent: "Keine Müllfragen.",
      lead:
        "Elixa ist eine Trinkspiel-App für Leute, die einfach spielen wollen. Gute Fragen, schneller Start, verschiedene Intensitäten — ohne Werbefallen, Abo-Druck oder lieblose Füllkarten.",
      primary: "Elixa ansehen",
      secondary: "Spiele ansehen",
      micro: ["In Entwicklung", "Echte Visuals folgen", "Gebaut von Klex Studios"],
      placeholderStatus: "In Entwicklung",
      placeholderTitle: "Visuals folgen",
      placeholderText: "Echte App-Screenshots werden ergänzt, sobald Elixa öffentlich vorzeigbar ist.",
      placeholderText2: "Screenshots werden ergänzt, sobald die echte App-UI bereit ist.",
      how: {
        kicker: "Der Ablauf",
        titleA: "Weniger Vorbereitung.",
        titleB: "Mehr Zeit zusammen.",
        lead: "Elixa ist in Entwicklung. Der geplante Ablauf bleibt einfach: Runde starten, eure Gruppe hinzufügen, eine Intensität wählen und gemeinsam spielen. Im Mittelpunkt steht der Abend, nicht die Bedienung einer App.",
        steps: [
          { title: "Runde starten", text: "Beginnt den Abend mit einer neuen Runde. Das Ziel ist ein klarer Einstieg ohne unnötigen App-Ballast." },
          { title: "Spieler hinzufügen", text: "Holt eure Gruppe in die Runde. Elixa ist für Freunde gedacht, die gemeinsam spielen." },
          { title: "Intensität wählen", text: "Locker, persönlich oder spicy: Entscheidet euch für eine Richtung, die zu eurer Gruppe passt." },
          { title: "Gemeinsam spielen", text: "Lest die Fragen und genießt die Runde. Gute Inhalte sollen das Gespräch und euren Abend in Bewegung halten." },
        ],
      },
      intensities: {
        kicker: "Eure Gruppe. Eure Stimmung.",
        title: "Eine Intensität, die passt.",
        lead: "Eine Runde mit neuen Leuten fühlt sich anders an als ein Abend mit engen Freunden. Die drei Richtungen helfen euch, den Ton auf eure Gruppe und euren Abend abzustimmen.",
        items: [
          { tag: "01", title: "Locker", text: "Für einen entspannten Einstieg, gemischte Gruppen und einen Abend, der gerade erst beginnt. Im Fokus stehen leichte Fragen und das Ankommen in der Runde." },
          { tag: "02", title: "Persönlich", text: "Für Gruppen, die mehr voneinander erfahren möchten. Mehr Raum für Geschichten, Meinungen und Gespräche jenseits von Small Talk." },
          { tag: "03", title: "Spicy", text: "Für Gruppen, die sich mit direkteren Fragen wohlfühlen. Wählt die Intensität gemeinsam, damit sie zu den Menschen in der Runde passt." },
        ],
      },
      faq: {
        kicker: "Über Elixa",
        title: "Vor der ersten Runde.",
        lead: "Für wen die App gedacht ist, worauf es uns ankommt und wo die Entwicklung gerade steht.",
        items: [
          { question: "Für wen ist Elixa gedacht?", answer: "Für Freunde, die gemeinsam spielen möchten, und für Gruppen, die sich gerade kennenlernen. Unterschiedliche Intensitäten sollen dabei helfen, die Runde auf die Menschen und die Stimmung abzustimmen." },
          { question: "Wird Elixa offline funktionieren?", answer: "Offline-Spielen gehört zum vorgesehenen Funktionsumfang. Das Ziel ist, dass eine gemeinsame Runde nicht von einer dauerhaften Internetverbindung abhängt." },
          { question: "Wie steht Elixa zu Werbung und Abos?", answer: "Elixa wird für ungestörtes Spielen entwickelt: gute Fragen und ein schneller Einstieg statt Werbefallen, Abo-Druck oder erzwungener Upgrades mitten in der Runde." },
          { question: "Kann ich Elixa schon herunterladen?", answer: "Elixa ist aktuell in Entwicklung. Auf dieser Seite gibt es noch keinen Download-Link und keinen Veröffentlichungstermin. Echte Screenshots folgen, sobald die App-Oberfläche öffentlich vorzeigbar ist." },
        ],
        contact: "Fragen oder Ideen zu Elixa?",
        contactLink: "Schreib uns eine E-Mail",
      },
      features: [
        {
          icon: "♕",
          title: "Bessere Fragen",
          text: "Keine generischen Karten, die nach fünf Minuten langweilen.",
        },
        {
          icon: "ϟ",
          title: "Direkt spielbar",
          text: "Runde starten, Spieler hinzufügen, loslegen. Kein unnötiger App-Ballast.",
        },
        {
          icon: "▣",
          title: "Für jede Gruppe",
          text: "Locker, persönlich oder spicy — für neue Leute, enge Freunde und alles dazwischen.",
        },
        {
          icon: "✦",
          title: "Fair statt nervig",
          text: "Kein Spielspaß, der ständig durch Werbung, Paywalls oder Upgrades unterbrochen wird.",
        },
      ],
      storyKicker: "Warum Elixa existiert",
      storyTitleA: "Trinkspiel-Apps",
      storyTitleB: "sollten nicht Müll sein.",
      storyText:
        "Viele Trinkspiel-Apps sind voller Werbung, schwacher Fragen und billiger Monetarisierung. Elixa konzentriert sich auf das Wesentliche: gute Fragen, schneller Start und eine cleane App, die funktioniert.",
      storyLink: "Alle Spiele ansehen",
      vibeKicker: "Der Elixa Unterschied",
      vibeTitleA: "Weniger App-Nerv.",
      vibeTitleB: "Mehr Spiel.",
      vibeText:
        "Elixa ist für echte Gruppen und gemeinsame Momente gebaut. Keine Werbefallen. Kein Chaos. Kein Premium-Gelaber für schlechte Fragen.",
      vibePoints: ["Keine Werbefallen", "Funktioniert offline", "Starke Fragen", "Gemacht für Freunde"],
    },
    legal: {
      back: "← Zurück zu Klex Studios",
      imprintTitle: "Impressum",
      privacyTitle: "Datenschutzerklärung",
    },
  },
} as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
