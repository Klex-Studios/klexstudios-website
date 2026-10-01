import type { Metadata } from "next";
import { getDictionary, routeFor, type Locale, type PageKey } from "./i18n";

export const SITE_URL = "https://klexstudios.com";

export function pageMetadata(locale: Locale, page: PageKey): Metadata {
  const t = getDictionary(locale);
  const titles = {
    home: t.meta.title,
    noxa: "Noxa",
    reson: "Reson",
    elixa: "Elixa",
    impressum: t.legal.imprintTitle,
    privacy: t.legal.privacyTitle,
  };
  const descriptions = {
    home: t.meta.description,
    noxa: t.noxa.lead,
    reson: t.reson.lead,
    elixa: t.elixa.lead,
    impressum: `${t.legal.imprintTitle} – Klex Studios.`,
    privacy: `${t.legal.privacyTitle} – Klex Studios.`,
  };
  const title = titles[page];
  const description = descriptions[page];
  const socialTitle = page === "home" ? title : `${title} | Klex Studios`;
  const image = { url: "/opengraph-image", width: 1200, height: 630, alt: "Klex Studios – Noxa, Reson, Elixa" };

  return {
    title: page === "home" ? { absolute: title } : title,
    description,
    alternates: {
      canonical: routeFor(locale, page),
      languages: { de: routeFor("de", page), en: routeFor("en", page) },
    },
    openGraph: {
      title: socialTitle,
      description,
      url: routeFor(locale, page),
      siteName: "Klex Studios",
      type: "website",
      locale: locale === "de" ? "de_DE" : "en_US",
      alternateLocale: locale === "de" ? "en_US" : "de_DE",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
  };
}
