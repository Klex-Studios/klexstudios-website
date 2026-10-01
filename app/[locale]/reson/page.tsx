import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ProductCaseStudy from "@/components/ProductCaseStudy";
import {
  getDictionary,
  isLocale,
  type Locale,
} from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

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

  return pageMetadata(locale, "reson");
}

export default async function ResonPage({
  params,
}: Props) {
  const locale = await getLocale(params);
  const t = getDictionary(locale).reson;
  const de = locale === "de";

  return (
    <ProductCaseStudy
      locale={locale}
      config={{
        key: "reson",

        name: "Reson",
        logo: "/logos/reson-logo.png",

        accent: "#A66CFF",
        accentRgb: "166, 108, 255",

        kicker: t.kicker,

        title: (
          <>
            {t.titleA}
            <br />
            {t.titleB}
            <br />
            {t.titleC}{" "}
            <span>{t.titleAccent}</span>
          </>
        ),

        lead: t.lead,

        primaryLabel: t.primary,
        secondaryLabel: t.secondary,

        status: t.placeholderStatus,
        build: de ? "Prototyp" : "Prototype",
        platform: "Mobile",

        version: de
          ? "MVP in Entwicklung"
          : "MVP in development",

        updated: "02.10.2026",

        micro: t.micro,

        features: t.features,

        story: {
          kicker: t.manifestKicker,

          title: (
            <>
              {t.manifestTitleA}
              <br />
              {t.manifestTitleB}
            </>
          ),

          text: t.manifestText,

          points: [
            {
              title: t.bullets[0],
              text: de
                ? "Reson wird unabhängig entwickelt und richtet das Produktdesign konsequent auf bessere Dating-Entscheidungen aus."
                : "Reson is developed independently and keeps the product design focused on better dating decisions.",
            },
            {
              title: t.bullets[1],
              text: de
                ? "Datensparsamkeit, transparente Logik und sichere Nutzerflüsse gehören zum Produktkonzept."
                : "Data minimization, transparent logic and safe user flows are part of the product concept.",
            },
            {
              title: t.bullets[2],
              text: t.experienceText,
            },
          ],
        },

        previews: [
          {
            label: "Daily Stack",
          },
          {
            label: de
              ? "Kompatibilität"
              : "Compatibility",
          },
          {
            label: "Match & Chat",
          },
        ],

        timeline: {
          kicker: "Development Roadmap",

          title: de
            ? "Vom Konzept zum validierten Prototyp."
            : "From concept to validated prototype.",

          lead: de
            ? "Reson wird schrittweise entwickelt, mit Nutzern getestet und anschließend auf Datenschutz, Sicherheit und Fairness geprüft."
            : "Reson is developed iteratively, tested with users and then reviewed for privacy, security and fairness.",

          items: [
            {
              meta: "Okt. – Nov.",
              title: de
                ? "Anforderungen & Architektur"
                : "Requirements & architecture",
              text: de
                ? "Zielgruppeninterviews, Testkonzept sowie Daten- und Sicherheitsarchitektur."
                : "Target-group interviews, test concept, data architecture and security architecture.",
              status: "current",
            },
            {
              meta: "Nov. – Dez.",
              title: de
                ? "MVP-Entwicklung"
                : "MVP development",
              text: de
                ? "Onboarding, Profile, Matching, Daily Stack sowie Likes und Skips."
                : "Onboarding, profiles, matching, Daily Stack, likes and skips.",
              status: "planned",
            },
            {
              meta: "Jan.",
              title: de
                ? "Erster Usability-Test"
                : "First usability test",
              text: de
                ? "Zwischenstand testen und reale Nutzungsmuster beobachten."
                : "Test the intermediate prototype and observe real usage patterns.",
              status: "planned",
            },
            {
              meta: "Jan. – Feb.",
              title: de
                ? "Iteration & Reviews"
                : "Iteration & reviews",
              text: de
                ? "Fairness-, Datenschutz- und Security-Review sowie zweiter Testzyklus."
                : "Fairness, privacy and security review followed by a second testing cycle.",
              status: "planned",
            },
            {
              meta: de ? "März" : "March",
              title: de
                ? "Stabilisierung & Demo"
                : "Stabilization & demo",
              text: de
                ? "Ergebnisse auswerten, Prototyp stabilisieren und final präsentieren."
                : "Evaluate results, stabilize the prototype and prepare the final demonstration.",
              status: "planned",
            },
          ],
        },

        changelog: [
          {
            date: "02.10.2026",
            title: de
              ? "Produktseite als Case Study ausgebaut"
              : "Product page expanded into a case study",
            text: de
              ? "Roadmap, Tech Stack, Product Preview und Entwicklungsstatus wurden in eine gemeinsame Produktdarstellung überführt."
              : "Roadmap, tech stack, product preview and development status were brought together in a unified product presentation.",
          },
        ],

        techStack: [
          "React Native",
          "Expo",
          "Supabase",
          "Matching Logic",
          "Product Design",
        ],

        techNote: de
          ? "Mobile-App-Prototyp mit React Native/Expo und Supabase als Backend-Basis."
          : "Mobile app prototype built with React Native/Expo and Supabase as the backend foundation.",
      }}
    />
  );
}
