import Image from "next/image";
import StudioHeader from "./StudioHeader";
import PageEffects from "./PageEffects";
import effects from "./effects.module.css";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { getDictionary, routeFor, type Locale } from "@/lib/i18n";
import styles from "./product.module.css";

export type ProductKey = "noxa" | "reson" | "elixa";

const themes = {
  noxa: { accent: "#3B6DFF", rgb: "59, 109, 255", light: "#9dbbff", ink: "#ffffff", photo: "/images/home/noxa-friends-v2.webp" },
  reson: { accent: "#A66CFF", rgb: "166, 108, 255", light: "#c6a1ff", ink: "#13051f", photo: "/images/home/reson-date-v2.webp" },
  elixa: { accent: "#38F06F", rgb: "56, 240, 111", light: "#70f8a1", ink: "#04170a", photo: "/images/home/elixa-game-night-v2.webp" },
};

function navigation(locale: Locale) {
  const t = getDictionary(locale), home = routeFor(locale, "home");
  return [
    { key: "home", label: t.nav.studio, href: home },
    { key: "noxa", label: t.nav.noxa, href: routeFor(locale, "noxa") },
    { key: "reson", label: t.nav.reson, href: routeFor(locale, "reson") },
    { key: "elixa", label: t.nav.elixa, href: routeFor(locale, "elixa") },
    { key: "about", label: t.nav.about, href: `${home}#about` },
    { key: "manifesto", label: t.nav.manifesto, href: `${home}#manifesto` },
    { key: "contact", label: t.nav.contact, href: `${home}#contact` },
  ];
}

function Brand({ locale }: { locale: Locale }) {
  return <Link className={styles.brand} href={routeFor(locale, "home")} aria-label="Klex Studios">
    <Image src="/logos/klex-logo.png" alt="" width={40} height={40} sizes="40px" />
    <span>Klex<small>Studios</small></span>
  </Link>;
}

export function ArrowIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6" /></svg>;
}

export function CheckIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 4 4L19 6" /></svg>;
}

function FeatureIcon({ symbol }: { symbol: string }) {
  const shapes: Record<string, ReactNode> = {
    "⌖": <><circle cx="12" cy="12" r="6" /><path d="M12 2v4m0 12v4M2 12h4m12 0h4" /></>,
    "☷": <><path d="M9 5h12M9 12h12M9 19h12" /><circle cx="3" cy="5" r="1" /><circle cx="3" cy="12" r="1" /><circle cx="3" cy="19" r="1" /></>,
    "♡": <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />,
    "▯": <><rect x="6" y="2" width="12" height="20" rx="3" /><path d="M10 5h4m-3 14h2" /></>,
    "♕": <><path d="m3 6 4 4 5-7 5 7 4-4-2 13H5L3 6Zm2 16h14" /></>,
    "ϟ": <path d="m13 2-9 12h7l-1 8 10-13h-8l1-7Z" />,
    "▣": <><path d="m12 2 10 6-10 6L2 8l10-6Zm-9 11 9 5 9-5M3 18l9 5 9-5" /></>,
    "✦": <path d="m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7Z" />,
    "◎": <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>,
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{shapes[symbol] ?? shapes["✦"]}</svg>;
}

export function ProductShell({ locale, product, children }: { locale: Locale; product: ProductKey; children: ReactNode }) {
  const t = getDictionary(locale), theme = themes[product];
  return <div className={`${styles.page} ${product === "elixa" ? effects.scope : ""}`} lang={locale} style={{
    "--product-accent": theme.accent, "--product-rgb": theme.rgb, "--product-light": theme.light, "--button-ink": theme.ink,
  } as CSSProperties}>
    {product === "elixa" && <PageEffects />}
    <StudioHeader locale={locale} page={product} />
    <main id="main-content" tabIndex={-1} className={styles.main}>{children}</main>
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <Brand locale={locale} />
        <nav className={styles.footerNavigation} aria-label={locale === "de" ? "Footernavigation" : "Footer navigation"}>
          {navigation(locale).map(item => <Link key={item.key} href={item.href}>{item.label}</Link>)}
        </nav>
        <div className={styles.footerLegal}>
          <span>{t.footer.rights}</span>
          <Link href={routeFor(locale, "impressum")}>{t.footer.imprint}</Link>
          <Link href={routeFor(locale, "privacy")}>{t.footer.privacy}</Link>
        </div>
      </div>
    </footer>
  </div>;
}

type VisualProps = { product: ProductKey; status: string; title: string; text: string };

export function ProductHeroVisual({ product, status, title, text }: VisualProps) {
  return <div className={styles.heroVisual} data-entrance={product === "elixa" ? "visual" : undefined}>
    <Image src={themes[product].photo} alt="" fill sizes="(max-width: 760px) 100vw, 48vw" loading="eager" fetchPriority="high" className={styles.heroPhoto} />
    <div className={styles.photoShade} aria-hidden="true" />
    <div className={styles.visualTop}>
      <span className={styles.status}><i aria-hidden="true" />{status}</span>
    </div>
    <div className={styles.visualCaption}>
      <span className={styles.visualLogo} aria-hidden="true"><Image src={`/logos/${product}-logo.png`} alt="" width={64} height={64} sizes="64px" /></span>
      <div><h2>{title}</h2><p>{text}</p></div>
    </div>
  </div>;
}

export function ProductPreview({ product, status, title, text }: VisualProps) {
  return <div className={styles.preview}>
    <span className={styles.status}><i aria-hidden="true" />{status}</span>
    <div className={styles.previewEmblem} aria-hidden="true">
      <span className={styles.orbit} data-orbit={product === "elixa" ? "" : undefined} /><span className={styles.orbitTwo} />
      <Image src={`/logos/${product}-logo.png`} alt="" width={110} height={110} sizes="110px" />
    </div>
    <h3>{title}</h3><p>{text}</p>
  </div>;
}

export function ProductFeatures({ features, label }: { features: readonly { icon: string; title: string; text: string }[]; label: string }) {
  return <section className={styles.featuresSection} aria-label={label}>
    <div className={`${styles.container} ${styles.features}`}>
      {features.map(feature => <article key={feature.title} className={styles.feature}>
        <span className={styles.featureIcon} aria-hidden="true"><FeatureIcon symbol={feature.icon} /></span>
        <h2>{feature.title}</h2><p>{feature.text}</p>
      </article>)}
    </div>
  </section>;
}
