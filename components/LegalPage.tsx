import StudioHeader from "./StudioHeader";
import Link from "next/link";
import type { ReactNode } from "react";
import { getDictionary, routeFor, type Locale } from "@/lib/i18n";
import { HomeFooter } from "@/components/HomeChrome";
import chrome from "@/app/[locale]/home.module.css";
import styles from "./legal.module.css";

type LegalKind = "impressum" | "privacy";

export default function LegalPage({ locale, kind, children }: { locale: Locale; kind: LegalKind; children: ReactNode }) {
  const t = getDictionary(locale);
  const title = kind === "impressum" ? t.legal.imprintTitle : t.legal.privacyTitle;
  const kicker = kind === "impressum" ? (locale === "de" ? "Impressum" : "Legal Notice") : (locale === "de" ? "Datenschutz" : "Privacy Policy");
  return <div className={`${chrome.page} ${styles.page}`} lang={locale}>
    <StudioHeader locale={locale} page={kind} />
    <main id="main-content" tabIndex={-1} className={styles.main}>
      <div className={styles.container}>
        <Link href={routeFor(locale, "home")} className={styles.back}>
          {t.legal.back}
        </Link>
        <section className={styles.document} aria-labelledby="legal-title">
          <div className={styles.heading}>
            <p className={styles.kicker}>{kicker}</p>
            <h1 id="legal-title" className={styles.title}>{title === "Datenschutzerklärung" ? <>{title.slice(0, 11)}<wbr />{title.slice(11)}</> : title}</h1>
          </div>
          <div className={styles.content}>{children}</div>
        </section>
      </div>
    </main>
    <HomeFooter locale={locale} />
  </div>;
}
