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
  const t = getDictionary(locale).noxa;

  return {
    title: "Noxa | Klex Studios",
    description: t.lead,
    alternates: {
      canonical: `/${locale}/noxa`,
      languages: {
        de: "/de/noxa",
        en: "/en/noxa",
      },
    },
  };
}

export default async function NoxaPage({
  params,
}: Props) {
  const locale = await getLocale(params);
  const t = getDictionary(locale).noxa;
  const de = locale === "de";

  return (
    <ProductCaseStudy
      locale={locale}
      config={{
        key: "noxa",

        name: "Noxa",
        logo: "/logos/noxa-logo.png",

        accent: "#3B6DFF",
        accentRgb: "59, 109, 255",

        kicker: t.kicker,

        title: (
          <>
            {t.titleA}
            <br />
            {t.titleB}
            <br />
            <span>
              {t.titleAccentA}
              <br />
              {t.titleAccentB}
            </span>
          </>
        ),

        lead: t.lead,

        primaryLabel: t.primary,
        secondaryLabel: t.secondary,

        status: t.placeholderStatus,
        build: de ? "Konzept" : "Concept",
        platform: "Mobile",

        version: de ? "Konzept" : "Concept",
        updated: "02.10.2026",

        micro: [
          t.status1,
          t.status2,
        ],

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
          points: t.principles,
        },

        previews: [
          {
            label: de
              ? "Menschen entdecken"
              : "Discover people",
          },
          {
            label: de
              ? "Gruppen"
              : "Groups",
          },
          {
            label: de
              ? "Pläne in der Nähe"
              : "Nearby plans",
          },
        ],

        timeline: {
          kicker: "Roadmap",

          title: de
            ? "Von der Idee zum Prototyp."
            : "From idea to prototype.",

          lead: de
            ? "Noxa befindet sich aktuell in der Konzeptphase. Der Fokus liegt auf Produktlogik, Nutzerflüssen und einem ersten testbaren Mobile-Prototyp."
            : "Noxa is currently in the concept phase. The focus is on product logic, user flows and a first testable mobile prototype.",

          items: [
            {
              meta: de ? "Aktuell" : "Current",
              title: de
                ? "Produktkonzept"
                : "Product concept",
              text: de
                ? "Kernproblem, Zielgruppe und grundlegende Social-Discovery-Mechaniken definieren."
                : "Define the core problem, target audience and fundamental social-discovery mechanics.",
              status: "current",
            },
            {
              meta: de
                ? "Als Nächstes"
                : "Next",
              title: de
                ? "UX & Nutzerflüsse"
                : "UX & user flows",
              text: de
                ? "Discovery, Gruppen, Profile und reale Treffen als klare Nutzerflüsse ausarbeiten."
                : "Design discovery, groups, profiles and real-world meetings as clear user flows.",
              status: "planned",
            },
            {
              title: de
                ? "Mobile-Prototyp"
                : "Mobile prototype",
              text: de
                ? "Die wichtigsten Funktionen als ersten testbaren Mobile-Prototyp umsetzen."
                : "Implement the core functionality as a first testable mobile prototype.",
              status: "planned",
            },
            {
              title: de
                ? "Validierung"
                : "Validation",
              text: de
                ? "Mit echten Nutzern prüfen, ob Noxa tatsächlich zu mehr realen Kontakten und Plänen führt."
                : "Test with real users whether Noxa actually leads to more real-world connections and plans.",
              status: "planned",
            },
          ],
        },

        changelog: [
          {
            date: "02.10.2026",
            title: de
              ? "Produktdarstellung überarbeitet"
              : "Product presentation redesigned",
            text: de
              ? "Noxa erhält eine neue Case-Study-Struktur mit Roadmap, Feature-Showcase, Product Preview und Tech Stack."
              : "Noxa now uses a new case-study structure with roadmap, feature showcase, product preview and tech stack.",
          },
        ],

        techStack: [
          "React Native",
          "Expo",
          "Supabase",
          "Product Design",
        ],

        techNote: de
          ? "Geplanter Mobile-Stack für die Entwicklung eines testbaren Noxa-Prototyps."
          : "Planned mobile stack for building a testable Noxa prototype.",
      }}
    />
  );
}
