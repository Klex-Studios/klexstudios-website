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
            label: de
              ? "Spielauswahl"
              : "Game selection",
          },
          {
            label: de
              ? "Spielrunde"
              : "Game round",
          },
          {
            label: de
              ? "Gruppenmodus"
              : "Group mode",
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
