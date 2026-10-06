import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ProductCaseStudy from "@/components/ProductCaseStudy";
import { isLocale, type Locale } from "@/lib/i18n";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

async function getLocale(params: Props["params"]): Promise<Locale> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return locale;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const locale = await getLocale(params);
  const de = locale === "de";

  return {
    title: "Elixa | Klex Studios",
    description: de
      ? "Elixa ist die Partyspiel-App von Klex Studios und befindet sich aktuell im internen Google-Play-Test. Sieben Spiele, schneller Start und echte Produktscreenshots."
      : "Elixa is the party-game app by Klex Studios and is currently in internal Google Play testing. Seven games, fast setup and real product screenshots.",
    alternates: {
      canonical: `/${locale}/elixa`,
      languages: {
        de: "/de/elixa",
        en: "/en/elixa",
      },
    },
  };
}

export default async function ElixaPage({ params }: Props) {
  const locale = await getLocale(params);
  const de = locale === "de";
  const screenRoot = "/images/elixa/screens-real";

  return (
    <ProductCaseStudy
      locale={locale}
      config={{
        key: "elixa",

        name: "Elixa",
        logo: "/logos/elixa-logo.png",

        accent: "#38F06F",
        accentRgb: "56, 240, 111",

        kicker: de ? "Elixa von Klex Studios" : "Elixa by Klex Studios",

        title: (
          <>
            {de ? "Keine Werbefallen." : "No ad traps."}
            <br />
            <span>{de ? "Einfach spielen." : "Just play."}</span>
          </>
        ),

        lead: de
          ? "Elixa ist kurz vor dem Release: Der aktuelle Android-Build läuft im internen Google-Play-Test. Sieben Partyspiele, schneller Einstieg, verschiedene Intensitäten und ein klarer Fokus auf den gemeinsamen Abend statt auf App-Ballast."
          : "Elixa is close to release: the current Android build is running in internal Google Play testing. Seven party games, fast setup, multiple intensity levels and a clear focus on the night with friends instead of app clutter.",

        primaryLabel: de ? "Screens ansehen" : "View screens",
        secondaryLabel: de ? "Warum Elixa?" : "Why Elixa?",

        status: de ? "Interner Test" : "Internal testing",
        build: "Release Candidate",
        platform: "Android",
        version: "v1.0.2",
        updated: "06.10.2026",

        heroPreviews: [
          {
            label: de ? "Einstellungen" : "Settings",
            src: `${screenRoot}/settings.png`,
            objectPosition: "center top",
          },
          {
            label: "Home",
            src: `${screenRoot}/home.png`,
            objectPosition: "center top",
          },
          {
            label: de ? "Chaos" : "Chaos",
            src: `${screenRoot}/game-chaos.png`,
            objectPosition: "center top",
          },
        ],

        snapshot: {
          kicker: de ? "Release Status" : "Release status",
          title: de
            ? "Der Prototyp ist vorbei. Elixa wird gerade getestet."
            : "The prototype phase is over. Elixa is being tested now.",
          lead: de
            ? "Die Kern-App steht und der aktuelle Build ist im internen Google-Play-Test. Der Fokus liegt jetzt auf echten Gerätetests, letzten Fehlern, Feinschliff und einem sauberen Übergang zum öffentlichen Release."
            : "The core app is in place and the current build is in internal Google Play testing. The focus is now on real-device testing, final bugs, polish and a clean transition to public release.",
          current: de ? "Internal Testing" : "Internal testing",
          done: de
            ? [
                "Sieben spielbare Modi und Decks",
                "Spieler-, Deck- und Intensitätsauswahl",
                "Dark- und Light-Mode sowie Haptik",
                "Google-Play-Listing und interner Testtrack",
              ]
            : [
                "Seven playable modes and decks",
                "Player, deck and intensity selection",
                "Dark and light mode plus haptics",
                "Google Play listing and internal test track",
              ],
          next: de
            ? [
                "Tester-Feedback und letzte Bugfixes",
                "Elixa Plus und Käufe auf echten Geräten prüfen",
                "Store-Release und Rollout vorbereiten",
              ]
            : [
                "Tester feedback and final bug fixes",
                "Validate Elixa Plus and purchases on real devices",
                "Prepare the store release and rollout",
              ],
          note: de
            ? "Die Phone-Mockups auf dieser Seite zeigen jetzt echte Screenshots aus dem aktuellen Build — keine nachgebauten UI-Screens mehr."
            : "The phone mockups on this page now show real screenshots from the current build — no rebuilt UI screens.",
        },

        micro: de
          ? ["Internal Testing", "7 Spiele", "Release Candidate"]
          : ["Internal testing", "7 games", "Release candidate"],

        features: de
          ? [
              {
                icon: "07",
                title: "Sieben Spiele",
                text: "Von Wahrheit oder Trinken über Hot Seat bis Chaos: verschiedene Modi für unterschiedliche Gruppen und Abende.",
              },
              {
                icon: "↯",
                title: "Direkt im Spiel",
                text: "Spiel auswählen, Spieler hinzufügen und loslegen. Die App soll den Abend nicht ausbremsen.",
              },
              {
                icon: "◎",
                title: "Für eure Runde",
                text: "Decks, Spieler und Intensität lassen sich passend zur Gruppe auswählen und jederzeit anpassen.",
              },
              {
                icon: "✦",
                title: "Sauber statt nervig",
                text: "Klare Oberfläche, haptisches Feedback und ein Spielfluss ohne ständige Unterbrechungen.",
              },
            ]
          : [
              {
                icon: "07",
                title: "Seven games",
                text: "From Truth or Drink and Hot Seat to Chaos: different modes for different groups and nights.",
              },
              {
                icon: "↯",
                title: "Straight into the game",
                text: "Pick a game, add players and start. The app should never slow down the night.",
              },
              {
                icon: "◎",
                title: "Built for your group",
                text: "Decks, players and intensity can be matched to the group and adjusted whenever needed.",
              },
              {
                icon: "✦",
                title: "Clean, not annoying",
                text: "A clear interface, haptic feedback and a game flow without constant interruptions.",
              },
            ],

        previews: [
          {
            label: de ? "Wer würde eher" : "Who would rather",
            src: `${screenRoot}/game-question.png`,
            objectPosition: "center top",
          },
          {
            label: de ? "Spieler" : "Players",
            src: `${screenRoot}/players.png`,
            objectPosition: "center top",
          },
        ],

        previewKicker: de ? "Echter Build" : "Real build",
        previewTitle: de ? "Elixa direkt aus der App." : "Elixa straight from the app.",
        previewLead: de
          ? "Keine nachgebauten Konzept-Screens: Die animierten Phone-Mockups zeigen echte Screenshots aus dem aktuellen internen Test-Build."
          : "No rebuilt concept screens: the animated phone mockups show real screenshots from the current internal test build.",

        story: {
          kicker: de ? "Warum Elixa existiert" : "Why Elixa exists",
          title: (
            <>
              {de ? "Der Abend gehört" : "The night belongs"}
              <br />
              {de ? "eurer Runde." : "to your group."}
            </>
          ),
          text: de
            ? "Viele Partyspiel-Apps fühlen sich wie Werbeflächen mit ein paar Fragen dazwischen an. Elixa dreht das um: Die App soll schnell aus dem Weg gehen, gute Spielmomente erzeugen und sich so anfühlen, als wäre sie für die Gruppe gebaut — nicht gegen sie."
            : "Many party-game apps feel like ad space with a few questions in between. Elixa flips that around: the app should get out of the way quickly, create good game moments and feel like it was built for the group — not against it.",
          points: de
            ? [
                {
                  title: "Schneller Start",
                  text: "Weniger Menüs und Entscheidungen, bevor die erste Runde überhaupt beginnt.",
                },
                {
                  title: "Mehr Abwechslung",
                  text: "Unterschiedliche Spiele statt immer derselben Kartenlogik mit neuem Namen.",
                },
                {
                  title: "Passend zur Gruppe",
                  text: "Von locker bis persönlicher, ohne jede Runde gleich eskalieren zu lassen.",
                },
                {
                  title: "Echtes Produkt",
                  text: "Die Phone-Mockups zeigen echte Screenshots direkt aus dem aktuellen Build.",
                },
              ]
            : [
                {
                  title: "Fast setup",
                  text: "Fewer menus and decisions before the first round even starts.",
                },
                {
                  title: "More variety",
                  text: "Different games instead of the same card mechanic with a different name.",
                },
                {
                  title: "Fits the group",
                  text: "From casual to more personal without forcing every round to escalate.",
                },
                {
                  title: "A real product",
                  text: "The phone mockups show real screenshots directly from the current build.",
                },
              ],
        },

        timeline: {
          kicker: "Development",
          title: de
            ? "Vom Spielkonzept zum Store-Release."
            : "From game concept to store release.",
          lead: de
            ? "Elixa ist nicht mehr in der reinen Prototypenphase. Die App befindet sich im Release-Prozess und wird aktuell im internen Google-Play-Test geprüft."
            : "Elixa is no longer in a pure prototype phase. The app is in the release process and is currently being validated through internal Google Play testing.",
          items: [
            {
              title: de ? "Produktidee" : "Product concept",
              text: de
                ? "Positionierung, Spielprinzip und grundlegende Experience definieren."
                : "Define positioning, game concept and the core experience.",
              status: "done",
            },
            {
              title: de ? "Core-App" : "Core app",
              text: de
                ? "Spiele, Spielerlogik, Decks, Settings und zentrale App-Flows umsetzen."
                : "Implement games, player logic, decks, settings and core app flows.",
              status: "done",
            },
            {
              title: de ? "Store & Release Setup" : "Store & release setup",
              text: de
                ? "Play-Store-Eintrag, Release-Build und Monetarisierung für Tests vorbereiten."
                : "Prepare the Play Store listing, release build and monetization for testing.",
              status: "done",
            },
            {
              meta: de ? "Aktuell" : "Current",
              title: "Internal Testing",
              text: de
                ? "Build auf echten Geräten testen, Käufe prüfen, Fehler finden und letzte Details polieren."
                : "Test the build on real devices, validate purchases, find bugs and polish the final details.",
              status: "current",
            },
            {
              title: de ? "Öffentlicher Release" : "Public release",
              text: de
                ? "Nach bestandenem Test in den regulären Google-Play-Rollout wechseln."
                : "Move into the regular Google Play rollout after the testing phase is complete.",
              status: "planned",
            },
          ],
        },

        changelog: [
          {
            date: "06.10.2026",
            title: de ? "Interner Google-Play-Test" : "Internal Google Play testing",
            text: de
              ? "Elixa befindet sich jetzt im internen Test. Die Website zeigt ab sofort den Release-Status und echte App-Screens direkt in den animierten Phone-Mockups."
              : "Elixa is now in internal testing. The website now shows the release status and real app screens directly inside the animated phone mockups.",
          },
        ],

        techStack: ["React Native", "Expo", "TypeScript", "RevenueCat", "Google Play"],

        techNote: de
          ? "Mobile-App mit Expo/React Native. Für den Release werden die Android-Distribution über Google Play und die Plus-Käufe über RevenueCat getestet."
          : "Mobile app built with Expo and React Native. For release, Android distribution through Google Play and Plus purchases through RevenueCat are being tested.",
      }}
    />
  );
}
