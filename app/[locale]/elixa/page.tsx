import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { ArrowIcon, CheckIcon, ProductFeatures, ProductHeroVisual, ProductPreview, ProductShell } from "@/components/ProductShell";
import styles from "@/components/product.module.css";
import { pageMetadata } from "@/lib/metadata";
import FaqList from "@/components/FaqList";

type Props = { params: Promise<{ locale: string }> };

async function getLocale(params: Props["params"]): Promise<Locale> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return locale;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await getLocale(params);
  return pageMetadata(locale, "elixa");
}

export default async function ElixaPage({ params }: Props) {
  const locale = await getLocale(params), t = getDictionary(locale).elixa;
  return <ProductShell locale={locale} product="elixa">
    <section className={`${styles.container} ${styles.hero}`} aria-labelledby="elixa-title">
      <div className={styles.heroCopy} data-entrance="copy">
        <p className={styles.kicker}>{t.kicker}</p>
        <h1 id="elixa-title" className={styles.heroTitle}><span className={styles.titleLine}>{t.titleA}</span><span className={styles.accentTitle}>{t.titleAccent}</span></h1>
        <p className={styles.lead}>{t.lead}</p>
        <div className={styles.actions}>
          <a className={styles.primary} data-button="" href="#games">{t.primary}<ArrowIcon /></a>
          <a className={styles.secondary} href="#games">{t.secondary}<ArrowIcon /></a>
        </div>
        <ul className={styles.micro}>{t.micro.map(item => <li key={item}><CheckIcon />{item}</li>)}</ul>
      </div>
      <ProductHeroVisual product="elixa" status={t.placeholderStatus} title={t.placeholderTitle} text={t.placeholderText} />
    </section>
    <ProductFeatures features={t.features} label={locale === "de" ? "Elixa Funktionen" : "Elixa features"} />
    <section className={`${styles.container} ${styles.detailSection}`} aria-labelledby="elixa-how-title">
      <div className={styles.detailHeading}>
        <div><p className={styles.kicker}>{t.how.kicker}</p><h2 id="elixa-how-title" className={styles.sectionTitle}>{t.how.titleA}<br />{t.how.titleB}</h2></div>
        <p className={styles.detailLead}>{t.how.lead}</p>
      </div>
      <ol className={styles.steps}>
        {t.how.steps.map((step, index) => <li key={step.title} className={styles.step} data-spotlight="">
          <span className={styles.stepNumber} aria-hidden="true">0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p>
        </li>)}
      </ol>
    </section>
    <section id="games" className={styles.intensitySection} aria-labelledby="elixa-intensity-title">
      <div className={styles.container}>
        <div className={styles.detailHeading}>
          <div><p className={styles.kicker}>{t.intensities.kicker}</p><h2 id="elixa-intensity-title" className={styles.sectionTitle}>{t.intensities.title}</h2></div>
          <p className={styles.detailLead}>{t.intensities.lead}</p>
        </div>
        <div className={styles.intensityGrid}>
          {t.intensities.items.map(item => <article key={item.title} className={styles.intensityCard} data-spotlight="">
            <span className={styles.intensityTag} aria-hidden="true">{item.tag}</span><h3>{item.title}</h3><p>{item.text}</p>
          </article>)}
        </div>
      </div>
    </section>
    <section className={`${styles.container} ${styles.showcase}`} aria-labelledby="elixa-story-title">
      <div className={styles.story}>
        <p className={styles.kicker}>{t.storyKicker}</p>
        <h2 id="elixa-story-title" className={styles.sectionTitle}>{t.storyTitleA}<br />{t.storyTitleB}</h2>
        <p className={styles.storyText}>{t.storyText}</p>
        <a className={styles.secondary} href="#games">{t.storyLink}<ArrowIcon /></a>
      </div>
      <ProductPreview product="elixa" status={t.placeholderStatus} title={t.placeholderTitle} text={t.placeholderText2} />
    </section>
    <section className={`${styles.container} ${styles.closing}`} aria-labelledby="elixa-vibe-title">
      <div className={styles.story}>
        <p className={styles.kicker}>{t.vibeKicker}</p>
        <h2 id="elixa-vibe-title" className={styles.sectionTitle}>{t.vibeTitleA}<br />{t.vibeTitleB}</h2>
        <p className={styles.storyText}>{t.vibeText}</p>
      </div>
      <ul className={styles.points}>{t.vibePoints.map(point => <li key={point}><CheckIcon /><span>{point}</span></li>)}</ul>
    </section>
    <section className={`${styles.container} ${styles.faqSection}`} aria-labelledby="elixa-faq-title">
      <div className={styles.faqIntro}>
        <p className={styles.kicker}>{t.faq.kicker}</p><h2 id="elixa-faq-title" className={styles.sectionTitle}>{t.faq.title}</h2><p className={styles.detailLead}>{t.faq.lead}</p>
        <p className={styles.faqContact}>{t.faq.contact}</p><a className={styles.secondary} href="mailto:info.klexstudios@gmail.com">{t.faq.contactLink}<ArrowIcon /></a>
      </div>
      <FaqList items={t.faq.items} />
    </section>
  </ProductShell>;
}
