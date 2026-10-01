import { getDictionary, routeFor, type Locale } from "@/lib/i18n";
import StudioNavigation from "./StudioNavigation";

type Page = "home" | "noxa" | "reson" | "elixa" | "impressum" | "privacy";

export default function StudioHeader({ locale, page = "home" }: { locale: Locale; page?: Page }) {
  const t = getDictionary(locale), home = routeFor(locale, "home");
  const links = [
    { key: "home", label: t.nav.studio, href: home },
    { key: "noxa", label: t.nav.noxa, href: routeFor(locale, "noxa") },
    { key: "reson", label: t.nav.reson, href: routeFor(locale, "reson") },
    { key: "elixa", label: t.nav.elixa, href: routeFor(locale, "elixa") },
    { key: "about", label: t.nav.about, href: `${home}#about` },
    { key: "manifesto", label: t.nav.manifesto, href: `${home}#manifesto` },
    { key: "contact", label: t.nav.contact, href: `${home}#contact` },
  ];
  return <StudioNavigation locale={locale} page={page} home={home} links={links}
    languages={[{ key: "de", href: routeFor("de", page) }, { key: "en", href: routeFor("en", page) }]}
    labels={locale === "de" ? { navigation: "Hauptnavigation", language: "Sprache", menu: "Menü", close: "Menü schließen", skip: "Zum Inhalt" }
      : { navigation: "Main navigation", language: "Language", menu: "Menu", close: "Close menu", skip: "Skip to content" }} />;
}
