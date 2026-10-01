import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ProductCaseStudy from "@/components/ProductCaseStudy";
import {
  getDictionary,
  isLocale,
  type Locale,
} from "@/lib/i18n";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

async function getLocale(
  params: Props["params"]
): Promise<Locale> {
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
  const t = getDictionary(locale).elixa;

  return {
    title: "Elixa | Klex Studios",
    description: t.lead,
    alternates: {
      canonical: `/${locale}/elixa`,
      languages: {
        de: "/de/elixa",
        en: "/en/elixa",
      },
    },
  };
}

export default async function ElixaPage({
  params,
}: Props) {
  const locale = await getLocale(params);
  const t = getDictionary(locale).elixa;
  const de = locale === "de";

  return (
    <ProductCaseStudy
      locale={locale}
      config={{
        key: "elixa",

        name: "Elixa",
        logo: "/logos/elixa-logo.png",

        accent: "#38F06F",
        accentRgb: "56, 240, 111",

        kicker: t.kicker,

        title: (
          <>
            {t.titleA}
            <br />
            <span>
              {t.titleAccent}
            </span>
          </>
        ),

        lead: t.lead,

        primaryLabel: t.primary,
        secondaryLabel: t.secondary,

        status: t.placeholderStatus,
        build: de
          ? "Fortgeschrittener Prototyp"
          : "Advanced prototype",
        platform: "Mobile",

        version: de
          ? "Fortgeschrittener Prototyp"
          : "Advanced prototype",
        updated: "02.10.2026",

        snapshot: {
          kicker: "Current Build",
          title: de
            ? "Der Prototyp steht. Jetzt zählt der Feinschliff."
            : "The prototype exists. Now refinement matters.",
          lead: de
            ? "Elixa ist aktuell das am weitesten entwickelte Klex-Studios-Produkt. Die Kernmechanik steht; gearbeitet wird vor allem an Content, Balancing und dem Nutzererlebnis."
            : "Elixa is currently the most advanced Klex Studios product. The core mechanics are in place; current work focuses on content, balancing and the user experience.",
          current: de
            ? "Content & Feinschliff"
            : "Content & refinement",
          done: de
            ? [
                "Produktidee und Spielprinzip umgesetzt",
                "Core-Prototyp der Mobile-App",
                "Grundlegende Spiel- und Rundenlogik",
              ]
            : [
                "Product idea and game concept implemented",
                "Core mobile app prototype",
                "Core game and round logic",
              ],
          next: de
            ? [
                "Mehr Inhalte und bessere Balance",
                "UI und Spielfluss weiter polieren",
                "Öffentliche Produktvisuals und Release-Vorbereitung",
              ]
            : [
                "More content and better balancing",
                "Further polish UI and gameplay flow",
                "Public product visuals and release preparation",
              ],
          note: de
            ? "Die Preview verbindet vorhandene Produktlogik mit einer verfeinerten visuellen Richtung."
            : "The preview combines existing product logic with a more refined visual direction.",
        },

        micro: t.micro,

        features: t.features,

        story: {
          kicker: t.storyKicker,

          title: (
            <>
              {t.storyTitleA}
              <br />
              {t.storyTitleB}
            </>
          ),

          text: t.storyText,

          points: t.vibePoints.map(
            (point) => ({
              title: point,
              text: de
                ? "Ein Grundprinzip hinter dem Spielerlebnis und Produktdesign von Elixa."
                : "A core principle behind Elixa's gameplay and product design.",
            })
          ),
        },

        previews: [
          {
            label: de ? "Spielauswahl" : "Game selection",
            image: "/images/home/elixa-game-night-v2.webp",
            eyebrow: "Elixa",
            title: de
              ? "In Sekunden ins Spiel."
              : "Into the game in seconds.",
            text: de
              ? "Spielmodus wählen, Gruppe starten und direkt loslegen."
              : "Choose a mode, start the group and begin immediately.",
            metric: de ? "Sofort" : "Instant",
            chips: de
              ? ["Wahrheit", "Challenge", "Mix"]
              : ["Truth", "Challenge", "Mix"],
            action: de ? "Spiel starten" : "Start game",
            kind: "game",
          },
          {
            label: de ? "Spielrunde" : "Game round",
            eyebrow: de ? "Live im Spiel" : "Live game",
            title: de
              ? "Eine Karte. Eine klare Aktion."
              : "One card. One clear action.",
            text: de
              ? "Fragen und Challenges ohne unnötige Menüs oder Unterbrechungen."
              : "Questions and challenges without unnecessary menus or interruptions.",
            metric: "3 / 10",
            metricLabel: de
              ? "Runde"
              : "round",
            chips: de
              ? ["Frage", "Challenge", "Weiter"]
              : ["Question", "Challenge", "Next"],
            action: de ? "Nächste Karte" : "Next card",
            kind: "round",
          },
          {
            label: de ? "Gruppenmodus" : "Group mode",
            eyebrow: de ? "Für jede Runde" : "For every group",
            title: de
              ? "Die Gruppe bestimmt die Stimmung."
              : "The group sets the mood.",
            text: de
              ? "Spieler, Intensität und Modus lassen sich schnell anpassen."
              : "Players, intensity and mode can be adjusted quickly.",
            metric: "2–12",
            metricLabel: de
              ? "Spieler"
              : "players",
            chips: de
              ? ["Locker", "Mutig", "Chaos"]
              : ["Chill", "Bold", "Chaos"],
            action: de ? "Gruppe bearbeiten" : "Edit group",
            kind: "setup",
          },
        ],

        timeline: {
          kicker: "Development",

          title: de
            ? "Vom Spielkonzept zum fertigen Produkt."
            : "From game concept to finished product.",

          lead: de
            ? "Der Kernprototyp steht. Der Fokus liegt jetzt auf Qualität, Inhalt, Feinschliff und einem Produkt, das sich in echten Gruppen schnell und unkompliziert spielen lässt."
            : "The core prototype exists. The focus now is quality, content, refinement and turning it into a product that feels fast and effortless to play in real groups.",

          items: [
            {
              title: de
                ? "Produktidee"
                : "Product concept",
              text: de
                ? "Grundidee, Spielmechanik und Positionierung definieren."
                : "Define the core idea, game mechanics and positioning.",
              status: "done",
            },
            {
              title: de
                ? "Core-Prototyp"
                : "Core prototype",
              text: de
                ? "Die zentralen Spielfunktionen als Mobile-App umsetzen."
                : "Implement the core game functionality as a mobile app.",
              status: "done",
            },
            {
              meta: de
                ? "Aktuell"
                : "Current",
              title: de
                ? "Content & Feinschliff"
                : "Content & refinement",
              text: de
                ? "Fragen, Spielmodi, Balancing und Nutzererlebnis weiter verbessern."
                : "Improve questions, game modes, balancing and the overall user experience.",
              status: "current",
            },
            {
              title: de
                ? "Öffentliche Produktvisuals"
                : "Public product visuals",
              text: de
                ? "Echte Screenshots und eine finale Produktdarstellung veröffentlichen."
                : "Publish real screenshots and a final product presentation.",
              status: "planned",
            },
            {
              title: de
                ? "Release-Vorbereitung"
                : "Release preparation",
              text: de
                ? "Stabilität, UX und Veröffentlichung vorbereiten."
                : "Prepare stability, UX and distribution for release.",
              status: "planned",
            },
          ],
        },

        changelog: [
          {
            date: "02.10.2026",
            title: de
              ? "Neue Produkt-Case-Study"
              : "New product case study",
            text: de
              ? "Elixa erhält eine deutlich ausführlichere Darstellung mit Features, Roadmap, Phone-Mockups, Tech Stack und Entwicklungsstatus."
              : "Elixa now has a much richer presentation with features, roadmap, phone mockups, tech stack and development status.",
          },
        ],

        techStack: [
          "React Native",
          "Expo",
          "Supabase",
          "Product Design",
        ],

        techNote: de
          ? "Mobile-App-Entwicklung mit Fokus auf schnellen Spielfluss, klare Nutzerführung und möglichst wenig Reibung."
          : "Mobile app development focused on fast gameplay, clear user flows and minimal friction.",
      }}
    />
  );
}
