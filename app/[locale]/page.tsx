import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomeHeader, HomeFooter } from "@/components/HomeChrome";
import { getDictionary, isLocale, routeFor, type Locale } from "@/lib/i18n";
import styles from "./home.module.css";
import { pageMetadata } from "@/lib/metadata";
import FaqList from "@/components/FaqList";
import PageEffects from "@/components/PageEffects";
import effects from "@/components/effects.module.css";

type Props = { params: Promise<{ locale: string }> };
type IconName = "arrow" | "book" | "people" | "shield" | "leaf" | "mail";
const cardImages = {
  noxa: "/images/home/noxa-friends-v2.webp",
  reson: "/images/home/reson-date-v2.webp",
  elixa: "/images/home/elixa-game-night-v2.webp",
};

async function getLocale(params: Props["params"]): Promise<Locale> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return locale;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await getLocale(params);
  return pageMetadata(locale, "home");
}

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M4 12h16m-6-6 6 6-6 6" /></>,
    book: <><path d="M12 5v15M12 5C9 3 5 3 2 4v15c3-1 7-1 10 1 3-2 7-2 10-1V4c-3-1-7-1-10 1Z" /></>,
    people: <><circle cx="12" cy="7" r="3" /><path d="M6 21v-3a6 6 0 0 1 12 0v3M4 5a3 3 0 0 0 0 6m16-6a3 3 0 0 1 0 6M2 18v-2a4 4 0 0 1 3-4m17 6v-2a4 4 0 0 0-3-4M6 21h12" /></>,
    shield: <><path d="m12 2 9 4v6c0 6-9 10-9 10S3 18 3 12V6l9-4Z" /><path d="m8 12 3 3 5-6" /></>,
    leaf: <><path d="M20 3C8 1 3 8 5 15c7 5 16-1 15-12ZM3 22 15 9" /></>,
    mail: <><rect x="2" y="4" width="20" height="16" rx="3" /><path d="m3 6 9 7 9-7" /></>,
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{paths[name]}</svg>;
}

export default async function HomePage({ params }: Props) {
  const locale = await getLocale(params);
  const t = getDictionary(locale);
  const values = [t.home.purpose1, t.home.purpose2, t.home.purpose3];
  const valueIcons: IconName[] = ["people", "shield", "leaf"];

  return (
    <div className={`${styles.page} ${effects.scope}`} lang={locale} style={{
      "--studio-green": "#38F06F", "--studio-blue": "#3B6DFF", "--studio-purple": "#A66CFF",
    } as CSSProperties}>
      <PageEffects />
      <HomeHeader locale={locale} />
      <main id="main-content" tabIndex={-1} className={styles.content}>
        <section className={`${styles.container} ${styles.hero}`} aria-labelledby="home-title">
          <div className={styles.heroCopy} data-entrance="copy">
            <p className={styles.kicker}>{t.home.kicker}</p>
            <h1 id="home-title" className={styles.heroTitle}>{t.home.titleA}<br /><span className={styles.gradientText}>{t.home.titleB}</span></h1>
            <p className={styles.heroLead}>{t.home.lead}</p>
            <div className={styles.actions}>
              <a href="#apps" className={styles.primary} data-button="">{t.home.primary}<Icon name="arrow" /></a>
              <a href="#manifesto" className={styles.secondary}><Icon name="book" />{t.home.secondary}</a>
            </div>
            <div className={styles.purpose}>
              <p className={styles.purposeLabel}>{t.home.purposeKicker}</p>
              <ul className={styles.purposeList}>
                {values.map((value, index) => <li key={value}><Icon name={valueIcons[index]} /><span>{value}</span></li>)}
              </ul>
            </div>
          </div>
          <div className={styles.heroVisual} data-entrance="visual" aria-hidden="true">
            <div className={styles.heroGlow} />
            <div className={styles.heroArtwork} data-float="">
              <Image src="/images/home/hero-orbs-v2.webp" alt="" width={1536} height={1024}
                sizes="(max-width: 760px) 100vw, 54vw" loading="eager" fetchPriority="high" className={styles.heroImage} />
              <div className={`${styles.orbBrand} ${styles.studioOrb}`}>
                <Image src="/logos/klex-logo.png" alt="" width={160} height={160} sizes="(max-width: 760px) 20vw, 10vw" />
                <span>Klex Studios</span>
              </div>
              {t.home.apps.map((app) => (
                <div key={app.name} className={`${styles.orbBrand} ${styles[`${app.name.toLowerCase()}Orb`]}`}>
                  <Image src={app.logo} alt="" width={80} height={80} sizes="(max-width: 760px) 11vw, 6vw" />
                  <span>{app.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="apps" className={styles.appsSection} aria-labelledby="apps-title">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div><p className={styles.kicker}>{t.home.appsTitleA} {t.home.appsTitleB}</p><h2 id="apps-title" className={styles.sectionTitle}>{t.home.appsKicker}</h2></div>
              <p className={styles.sectionLead}>{t.home.appsLead}</p>
              <a href="#app-cards" className={styles.textLink}>{t.home.primary}<Icon name="arrow" /></a>
            </div>
            <div id="app-cards" className={styles.appGrid}>
              {t.home.apps.map((app) => {
                const pageKey = app.name.toLowerCase() as "noxa" | "reson" | "elixa";
                return (
                  <Link key={app.name} href={routeFor(locale, pageKey)} className={styles.appCard} data-spotlight=""
                    style={{ "--app-accent": app.color } as CSSProperties}>
                    <Image src={cardImages[pageKey]} alt="" fill sizes="(max-width: 980px) 100vw, 33vw" className={styles.cardPhoto} />
                    <div className={styles.cardShade} aria-hidden="true" />
                    <div className={styles.cardBody}>
                      <div className={styles.cardBrand}>
                        <Image src={app.logo} alt="" width={36} height={36} sizes="36px" />
                        <p className={styles.appName}>{app.name}</p>
                      </div>
                      <h3 className={styles.appDescription}>{app.title}</h3>
                      <span className={styles.status}><span aria-hidden="true" />{app.status}</span>
                      <span className={styles.cardLink}>{t[pageKey].primary}<Icon name="arrow" /></span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section id="about" className={`${styles.container} ${styles.studioSection}`} aria-labelledby="studio-title">
          <div className={styles.studioCopy}>
            <p className={styles.kicker}>{t.home.studio.kicker}</p>
            <h2 id="studio-title" className={styles.sectionTitle}>{t.home.studio.titleA}<br />{t.home.studio.titleB}</h2>
            <p>{t.home.studio.textA}</p>
            <p>{t.home.studio.textB}</p>
          </div>
          <div className={styles.studioFocus}>
            {t.home.studio.focus.map((focus, index) => <article key={focus.title} className={styles.focusItem} data-spotlight="">
              <span className={styles.focusNumber} aria-hidden="true">0{index + 1}</span>
              <div><h3>{focus.title}</h3><p>{focus.text}</p></div>
            </article>)}
          </div>
        </section>

        <section id="manifesto" className={styles.manifestoSection} aria-labelledby="manifesto-title">
          <div className={styles.container}>
            <div className={styles.manifestoHeading}><h2 id="manifesto-title" className={styles.sectionTitle}>{t.home.manifestoKicker}</h2><p className={styles.manifestoLead}>{t.home.manifestoTitleA} {t.home.manifestoTitleB}</p></div>
            <div className={styles.principles}>
              {t.home.principles.map((principle, index) => (
                <article key={principle.title} className={styles.principle}>
                  <Icon name={valueIcons[index]} />
                  <h3><span aria-hidden="true">{index + 1}.</span> {principle.title}</h3>
                  <p>{principle.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.container} ${styles.faqSection}`} aria-labelledby="home-faq-title">
          <div className={styles.faqIntro}><p className={styles.kicker}>{t.home.faq.kicker}</p><h2 id="home-faq-title" className={styles.sectionTitle}>{t.home.faq.title}</h2><p>{t.home.faq.lead}</p></div>
          <FaqList items={t.home.faq.items} />
        </section>

        <section id="contact" className={`${styles.container} ${styles.contact}`} aria-labelledby="contact-title">
          <h2 id="contact-title" className={styles.sectionTitle}>{t.home.contactKicker}</h2>
          <div className={styles.contactCopy}><p className={styles.contactStatement}>{t.home.contactTitle}</p><p className={styles.contactLead}>{t.home.contactLead}</p></div>
          <a href="mailto:info.klexstudios@gmail.com" className={styles.contactButton} data-button=""><Icon name="mail" /><span>info.klexstudios@gmail.com</span></a>
        </section>
      </main>
      <HomeFooter locale={locale} />
    </div>
  );
}
