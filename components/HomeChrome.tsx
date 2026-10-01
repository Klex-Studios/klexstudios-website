import Image from "next/image";
import StudioHeader from "./StudioHeader";
import Link from "next/link";
import { getDictionary, routeFor, type Locale } from "@/lib/i18n";
import styles from "@/app/[locale]/home.module.css";

function navigation(locale: Locale) {
  const t = getDictionary(locale);
  const home = routeFor(locale, "home");
  return [
    { label: t.nav.studio, href: home },
    { label: t.nav.noxa, href: routeFor(locale, "noxa") },
    { label: t.nav.reson, href: routeFor(locale, "reson") },
    { label: t.nav.elixa, href: routeFor(locale, "elixa") },
    { label: t.nav.about, href: `${home}#about` },
    { label: t.nav.manifesto, href: `${home}#manifesto` },
    { label: t.nav.contact, href: `${home}#contact` },
  ];
}

function Brand({ locale }: { locale: Locale }) {
  return (
    <Link className={styles.brand} href={routeFor(locale, "home")} aria-label="Klex Studios">
      <Image src="/logos/klex-logo.png" alt="" width={48} height={48} sizes="48px" />
      <span className={styles.brandText}>Klex<span>Studios</span></span>
    </Link>
  );
}

export function HomeHeader({ locale }: { locale: Locale }) {
  return <StudioHeader locale={locale} page="home" />;
}

export function HomeFooter({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <Brand locale={locale} />
        <nav className={styles.footerNavigation} aria-label={locale === "de" ? "Footernavigation" : "Footer navigation"}>
          {navigation(locale).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <div className={styles.footerLegal}>
          <span>{t.footer.rights}</span>
          <Link href={routeFor(locale, "impressum")}>{t.footer.imprint}</Link>
          <Link href={routeFor(locale, "privacy")}>{t.footer.privacy}</Link>
        </div>
      </div>
    </footer>
  );
}
