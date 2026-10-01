import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { ArrowIcon, ProductFeatures, ProductHeroVisual, ProductPreview, ProductShell } from "@/components/ProductShell";
import styles from "@/components/product.module.css";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string }> };

async function getLocale(params: Props["params"]): Promise<Locale> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return locale;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await getLocale(params);
  return pageMetadata(locale, "noxa");
}

export default async function NoxaPage({ params }: Props) {
  const locale = await getLocale(params), t = getDictionary(locale).noxa;
  return <ProductShell locale={locale} product="noxa">
    <section className={`${styles.container} ${styles.hero}`} aria-labelledby="noxa-title">
      <div className={styles.heroCopy}>
        <p className={styles.kicker}>{t.kicker}</p>
        <h1 id="noxa-title" className={styles.heroTitle}>
          <span className={styles.titleLine}>{t.titleA}</span>
          <span className={styles.titleLine}>{t.titleB}</span>
          <span className={styles.accentTitle}>{t.titleAccentA} {t.titleAccentB}</span>
        </h1>
        <p className={styles.lead}>{t.lead}</p>
        <div className={styles.actions}>
          <a className={styles.primary} href="#screens">{t.primary}<ArrowIcon /></a>
          <a className={styles.secondary} href="#concept">{t.secondary}<ArrowIcon /></a>
        </div>
        <ul className={styles.micro} aria-label={locale === "de" ? "Produktstatus" : "Product status"}>
          <li>{t.status1}</li><li>{t.status2}</li>
        </ul>
      </div>
      <ProductHeroVisual product="noxa" status={t.placeholderStatus} title={t.placeholderTitle} text={t.placeholderText} />
    </section>
    <ProductFeatures features={t.features} label={locale === "de" ? "Noxa Funktionen" : "Noxa features"} />
    <section id="screens" className={`${styles.container} ${styles.showcase}`} aria-labelledby="noxa-story-title">
      <ProductPreview product="noxa" status={t.placeholderStatus} title={t.placeholderTitle} text={t.placeholderText2} />
      <div id="concept" className={styles.story}>
        <p className={styles.kicker}>{t.storyKicker}</p>
        <h2 id="noxa-story-title" className={styles.sectionTitle}>{t.storyTitleA}<br />{t.storyTitleB}</h2>
        <p className={styles.storyText}>{t.storyText}</p>
        <div className={styles.principles}>
          {t.principles.map((principle, index) => <article key={principle.title} className={styles.principle}>
            <span aria-hidden="true">0{index + 1}</span><h3>{principle.title}</h3><p>{principle.text}</p>
          </article>)}
        </div>
      </div>
    </section>
  </ProductShell>;
}
