import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, routeFor, type Locale } from "@/lib/i18n";
import { ArrowIcon, CheckIcon, ProductFeatures, ProductHeroVisual, ProductPreview, ProductShell } from "@/components/ProductShell";
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
  return pageMetadata(locale, "reson");
}

export default async function ResonPage({ params }: Props) {
  const locale = await getLocale(params), t = getDictionary(locale).reson;
  return <ProductShell locale={locale} product="reson">
    <section className={`${styles.container} ${styles.hero}`} aria-labelledby="reson-title">
      <div className={styles.heroCopy}>
        <p className={styles.kicker}>{t.kicker}</p>
        <h1 id="reson-title" className={styles.heroTitle}>
          <span className={styles.titleLine}>{t.titleA}</span><span className={styles.titleLine}>{t.titleB}</span>
          <span className={styles.titleLine}>{t.titleC}</span><span className={styles.accentTitle}>{t.titleAccent}</span>
        </h1>
        <p className={styles.lead}>{t.lead}</p>
        <div className={styles.actions}>
          <a className={styles.primary} href="#screens">{t.primary}<ArrowIcon /></a>
          <a className={styles.secondary} href="#idea">{t.secondary}<ArrowIcon /></a>
        </div>
        <ul className={styles.micro}>{t.micro.map(item => <li key={item}><CheckIcon />{item}</li>)}</ul>
      </div>
      <ProductHeroVisual product="reson" status={t.placeholderStatus} title={t.placeholderTitle} text={t.placeholderText} />
    </section>
    <ProductFeatures features={t.features} label={locale === "de" ? "Reson Funktionen" : "Reson features"} />
    <section id="idea" className={`${styles.container} ${styles.resonIntro}`} aria-labelledby="reson-idea-title">
      <p className={styles.kicker}>{t.experienceKicker}</p>
      <h2 id="reson-idea-title" className={styles.sectionTitle}>{t.experienceTitleA}<br />{t.experienceTitleB}</h2>
      <p className={styles.storyText}>{t.experienceText}</p>
      <div className={`${styles.showcase} ${styles.resonShowcase}`}>
        <div id="screens"><ProductPreview product="reson" status={t.placeholderStatus} title={t.placeholderTitle} text={t.placeholderText2} /></div>
        <div className={`${styles.story} ${styles.resonStory}`}>
          <p className={styles.kicker}>{t.manifestKicker}</p>
          <h2 className={styles.sectionTitle}>{t.manifestTitleA}<br />{t.manifestTitleB}</h2>
          <p className={styles.storyText}>{t.manifestText}</p>
          <ul className={styles.points}>{t.bullets.map(item => <li key={item}><CheckIcon /><span>{item}</span></li>)}</ul>
          <Link className={styles.secondary} href={`${routeFor(locale, "home")}#manifesto`}>{t.manifestLink}<ArrowIcon /></Link>
        </div>
      </div>
    </section>
  </ProductShell>;
}
