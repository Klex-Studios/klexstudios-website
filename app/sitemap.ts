import type { MetadataRoute } from "next";
import { locales, routeFor, type PageKey } from "@/lib/i18n";
import { SITE_URL } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: PageKey[] = ["home", "noxa", "reson", "elixa", "impressum", "privacy"];
  return pages.flatMap(page => locales.map(locale => ({
    url: `${SITE_URL}${routeFor(locale, page)}`,
    alternates: {
      languages: {
        de: `${SITE_URL}${routeFor("de", page)}`,
        en: `${SITE_URL}${routeFor("en", page)}`,
      },
    },
  })));
}
