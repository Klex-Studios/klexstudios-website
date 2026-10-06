import ProductEffects from "@/components/ProductEffects";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

import { HomeHeader, HomeFooter } from "@/components/HomeChrome";
import { routeFor, type Locale } from "@/lib/i18n";

import styles from "./ProductCaseStudy.module.css";

type ProductKey = "noxa" | "reson" | "elixa";

type Feature = {
  readonly icon: string;
  readonly title: string;
  readonly text: string;
};

type StoryPoint = {
  readonly title: string;
  readonly text: string;
};

type TimelineStatus = "done" | "current" | "planned";

type TimelineItem = {
  title: string;
  text: string;
  meta?: string;
  status: TimelineStatus;
};

type Preview = {
  label: string;
  src?: string;
  objectPosition?: string;
  image?: string;
  eyebrow?: string;
  title?: string;
  text?: string;
  metric?: string;
  metricLabel?: string;
  chips?: readonly string[];
  action?: string;
  kind?:
    | "discover"
    | "insight"
    | "chat"
    | "groups"
    | "plans"
    | "game"
    | "round"
    | "setup";
};

type ChangelogItem = {
  date: string;
  title: string;
  text: string;
};

type BuildSnapshot = {
  kicker: string;
  title: string;
  lead: string;
  current: string;
  done: readonly string[];
  next: readonly string[];
  note?: string;
};

type HeroMedia = {
  src: string;
  alt: string;
  badge?: string;
};

type ShowcaseItem = {
  src: string;
  alt: string;
  label?: string;
};

type Showcase = {
  kicker: string;
  title: string;
  lead: string;
  hero?: ShowcaseItem;
  items: readonly ShowcaseItem[];
};

export type ProductCaseStudyConfig = {
  key: ProductKey;

  name: string;
  logo: string;

  accent: string;
  accentRgb: string;

  kicker: string;
  title: ReactNode;
  lead: string;

  primaryLabel: string;
  secondaryLabel: string;

  status: string;
  build: string;
  platform: string;

  version?: string;
  updated?: string;
  progress?: number;

  snapshot?: BuildSnapshot;
  heroMedia?: HeroMedia;
  heroPreviews?: readonly Preview[];
  showcase?: Showcase;

  micro: readonly string[];

  features: readonly Feature[];

  story: {
    kicker: string;
    title: ReactNode;
    text: string;
    points?: readonly StoryPoint[];
  };

  previews?: readonly Preview[];
  previewKicker?: string;
  previewTitle?: string;
  previewLead?: string;

  timeline: {
    kicker: string;
    title: string;
    lead: string;
    items: readonly TimelineItem[];
  };

  changelog?: readonly ChangelogItem[];

  techStack: readonly string[];
  techNote?: string;
};

type Props = {
  locale: Locale;
  config: ProductCaseStudyConfig;
};

const timelineClasses: Record<TimelineStatus, string> = {
  done: styles.timelineDone,
  current: styles.timelineCurrent,
  planned: styles.timelinePlanned,
};

export default function ProductCaseStudy({
  locale,
  config,
}: Props) {
  const ui =
    locale === "de"
      ? {
          status: "Status",
          build: "Build",
          platform: "Plattform",
          stack: "Tech Stack",
          version: "Version",
          updated: "Aktualisiert",
          progress: "Entwicklungsstand",
          buildSnapshot: "Current Build",
          alreadyIn: "Bereits drin",
          nextUp: "Als Nächstes",
          currentStage: "Aktuelle Phase",

          featuresKicker: "Core Features",
          featuresTitle: "Was das Produkt anders macht.",

          previewKicker: "Product Preview",
          previewTitle: "Ein Blick auf das Produkt.",
          previewLead:
            "Ein konkreter Blick auf Produktlogik und UI-Richtung. Konzept-Screens können sich während der Entwicklung noch verändern.",
          previewFallback: "Konzept-Screen",

          timelineLabel: "Roadmap",

          changelogKicker: "Changelog",
          changelogTitle: "Was sich zuletzt geändert hat.",
          changelogLead:
            "Ein Blick auf die aktuelle Entwicklung des Produkts.",

          techKicker: "Technology",
          techTitle: "Technologie hinter dem Produkt.",

          back: "Alle Produkte",
          contact: "Kontakt",

          finalKicker: "Klex Studios",
          finalTitle: "Digitale Produkte für echte Momente.",
        }
      : {
          status: "Status",
          build: "Build",
          platform: "Platform",
          stack: "Tech stack",
          version: "Version",
          updated: "Updated",
          progress: "Development progress",
          buildSnapshot: "Current Build",
          alreadyIn: "Already in",
          nextUp: "Next up",
          currentStage: "Current stage",

          featuresKicker: "Core Features",
          featuresTitle: "What makes the product different.",

          previewKicker: "Product Preview",
          previewTitle: "A look at the product.",
          previewLead:
            "A concrete look at the product logic and UI direction. Concept screens may still change during development.",
          previewFallback: "Concept screen",

          timelineLabel: "Roadmap",

          changelogKicker: "Changelog",
          changelogTitle: "What changed recently.",
          changelogLead:
            "A look at the latest product development.",

          techKicker: "Technology",
          techTitle: "Technology behind the product.",

          back: "All products",
          contact: "Contact",

          finalKicker: "Klex Studios",
          finalTitle: "Digital products for real moments.",
        };

  const progress =
    typeof config.progress === "number"
      ? Math.min(100, Math.max(0, config.progress))
      : undefined;

  return (
    <div
      className={styles.page}
      data-product-page
      data-product={config.key}
      lang={locale}
      style={
        {
          "--product-accent": config.accent,
          "--product-accent-rgb": config.accentRgb,
        } as CSSProperties
      }
    >
      <ProductEffects />

      <HomeHeader locale={locale} page={config.key} />

      <main className={styles.main}>
        {/* HERO */}
        <section className={styles.hero} id="top">
          <div className={styles.heroCopy} data-reveal="up">
            <div className={styles.eyebrow}>
              <Image
                src={config.logo}
                alt=""
                width={34}
                height={34}
              />

              <span>{config.kicker}</span>
            </div>

            <h1 className={styles.heroTitle}>
              {config.title}
            </h1>

            <p className={styles.heroLead}>
              {config.lead}
            </p>

            <div className={styles.actions}>
              <a
                href="#preview"
                className={styles.primaryButton}
              >
                {config.primaryLabel}
                <span aria-hidden="true">↘</span>
              </a>

              <a
                href="#story"
                className={styles.secondaryButton}
              >
                {config.secondaryLabel}
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className={styles.microRow}>
              {config.micro.map((item) => (
                <span key={item}>
                  <i aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div
            className={styles.heroVisual}
            aria-label={`${config.name} product preview`}
            data-reveal="fade"
            data-reveal-delay="120"
            data-parallax
            data-count={(config.heroPreviews ?? config.previews ?? []).slice(0, 3).length}
          >
            <div
              className={styles.heroGlow}
              aria-hidden="true"
            />

            {config.heroMedia ? (
              <div className={styles.heroMediaFrame}>
                <Image
                  src={config.heroMedia.src}
                  alt={config.heroMedia.alt}
                  fill
                  priority
                  sizes="(max-width: 1100px) 100vw, 58vw"
                  className={styles.heroMediaImage}
                />

                <div
                  className={styles.heroMediaShade}
                  aria-hidden="true"
                />

                {config.heroMedia.badge && (
                  <span className={styles.heroMediaBadge}>
                    <i aria-hidden="true" />
                    {config.heroMedia.badge}
                  </span>
                )}
              </div>
            ) : (
              (config.heroPreviews ?? config.previews ?? [])
                .slice(0, 3)
                .map((preview, index) => (
                  <PhonePreview
                    key={preview.label}
                    preview={preview}
                    logo={config.logo}
                    fallback={ui.previewFallback}
                    index={index}
                  />
                ))
            )}
          </div>
        </section>

        {/* PRODUCT META */}
        <section
          className={styles.metaGrid}
          aria-label={`${config.name} product information`}
        >
          <article
            data-reveal="up"
            data-reveal-delay="0"
          >
            <span>{ui.status}</span>
            <strong>{config.status}</strong>
          </article>

          <article
            data-reveal="up"
            data-reveal-delay="60"
          >
            <span>{ui.build}</span>
            <strong>{config.build}</strong>
          </article>

          <article
            data-reveal="up"
            data-reveal-delay="120"
          >
            <span>
              {config.version ? ui.version : ui.platform}
            </span>
            <strong>
              {config.version ?? config.platform}
            </strong>
          </article>

          <article
            data-reveal="up"
            data-reveal-delay="180"
          >
            <span>
              {config.updated ? ui.updated : ui.stack}
            </span>
            <strong>
              {config.updated ?? config.techStack[0]}
            </strong>
          </article>
        </section>

        {progress !== undefined && (
          <section
            className={styles.progressSection}
            data-reveal="up"
            aria-label={ui.progress}
          >
            <div className={styles.progressHeader}>
              <div>
                <span>{ui.progress}</span>
                <strong>{progress}%</strong>
              </div>

              <span>{config.status}</span>
            </div>

            <div className={styles.progressTrack}>
              <div
                className={styles.progressValue}
                style={
                  {
                    "--progress": `${progress}%`,
                  } as CSSProperties
                }
              />
            </div>
          </section>
        )}

        {config.snapshot && (
          <section
            className={`${styles.section} ${styles.snapshotSection}`}
            aria-labelledby={`${config.key}-snapshot`}
          >
            <div
              className={styles.snapshotIntro}
              data-reveal="left"
            >
              <p className={styles.kicker}>
                {config.snapshot.kicker || ui.buildSnapshot}
              </p>

              <h2 id={`${config.key}-snapshot`}>
                {config.snapshot.title}
              </h2>

              <p className={styles.snapshotLead}>
                {config.snapshot.lead}
              </p>

              <div className={styles.currentStageCard}>
                <span>{ui.currentStage}</span>
                <strong>{config.snapshot.current}</strong>
              </div>

              {config.snapshot.note && (
                <p className={styles.snapshotNote}>
                  {config.snapshot.note}
                </p>
              )}
            </div>

            <div className={styles.snapshotColumns}>
              <article
                className={styles.snapshotCard}
                data-reveal="up"
                data-tilt
              >
                <span className={styles.snapshotCardLabel}>
                  {ui.alreadyIn}
                </span>

                <ul>
                  {config.snapshot.done.map((item) => (
                    <li key={item}>
                      <span aria-hidden="true">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>

              <article
                className={styles.snapshotCard}
                data-reveal="up"
                data-reveal-delay="80"
                data-tilt
              >
                <span className={styles.snapshotCardLabel}>
                  {ui.nextUp}
                </span>

                <ul>
                  {config.snapshot.next.map((item) => (
                    <li key={item}>
                      <span aria-hidden="true">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </section>
        )}

        {/* FEATURES */}
        <section
          className={styles.section}
          aria-labelledby={`${config.key}-features`}
        >
          <SectionHeading
            kicker={ui.featuresKicker}
            title={ui.featuresTitle}
            id={`${config.key}-features`}
          />

          <div className={styles.featureGrid}>
            {config.features.map((feature, index) => (
              <article
                key={feature.title}
                className={styles.featureCard}
                data-reveal="up"
                data-reveal-delay={index * 70}
                data-tilt
              >
                <div className={styles.featureTop}>
                  <span
                    className={styles.featureIcon}
                    aria-hidden="true"
                  >
                    {feature.icon}
                  </span>

                  <span className={styles.featureNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* PRODUCT PREVIEW */}
        {config.showcase ? (
          <section
            id="preview"
            className={`${styles.section} ${styles.previewSection}`}
            aria-labelledby={`${config.key}-preview`}
          >
            <div className={styles.previewHeading}>
              <SectionHeading
                kicker={config.showcase.kicker}
                title={config.showcase.title}
                id={`${config.key}-preview`}
              />

              <p data-reveal="up">
                {config.showcase.lead}
              </p>
            </div>

            {config.showcase.hero && (
              <figure
                className={styles.showcaseHero}
                data-reveal="fade"
                data-parallax
              >
                <Image
                  src={config.showcase.hero.src}
                  alt={config.showcase.hero.alt}
                  fill
                  sizes="(max-width: 760px) 100vw, 1400px"
                  className={styles.showcaseHeroImage}
                />

                {config.showcase.hero.label && (
                  <figcaption>{config.showcase.hero.label}</figcaption>
                )}
              </figure>
            )}

            <div className={styles.showcaseGrid}>
              {config.showcase.items.map((item, index) => (
                <figure
                  key={`${item.src}-${index}`}
                  className={styles.showcaseCard}
                  data-reveal="up"
                  data-reveal-delay={(index % 3) * 60}
                  data-tilt
                >
                  <div className={styles.showcaseCardMedia}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 520px) 88vw, (max-width: 900px) 46vw, 30vw"
                      className={styles.showcaseCardImage}
                    />
                  </div>

                  {item.label && (
                    <figcaption>
                      <span aria-hidden="true" />
                      {item.label}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </section>
        ) : (
          config.previews &&
          config.previews.length > 0 && (
            <section
              id="preview"
              className={`${styles.section} ${styles.previewSection}`}
              aria-labelledby={`${config.key}-preview`}
            >
              <div className={styles.previewHeading}>
                <SectionHeading
                  kicker={config.previewKicker ?? ui.previewKicker}
                  title={config.previewTitle ?? ui.previewTitle}
                  id={`${config.key}-preview`}
                />

                <p data-reveal="up">
                  {config.previewLead ?? ui.previewLead}
                </p>
              </div>

              <div
                className={styles.previewStage}
                data-reveal="fade"
                data-parallax
                data-count={config.previews.length}
              >
                <div
                  className={styles.previewGlow}
                  aria-hidden="true"
                />

                {config.previews.map((preview, index) => (
                  <PhonePreview
                    key={preview.label}
                    preview={preview}
                    logo={config.logo}
                    fallback={ui.previewFallback}
                    index={index}
                    large
                  />
                ))}
              </div>
            </section>
          )
        )}

        {/* STORY */}
        <section
          id="story"
          className={`${styles.section} ${styles.storySection}`}
        >
          <div
            className={styles.storyCopy}
            data-reveal="left"
          >
            <p className={styles.kicker}>
              {config.story.kicker}
            </p>

            <h2>{config.story.title}</h2>

            <p className={styles.storyLead}>
              {config.story.text}
            </p>
          </div>

          {config.story.points && (
            <div className={styles.storyGrid}>
              {config.story.points.map((point, index) => (
                <article
                  key={point.title}
                  className={styles.storyCard}
                  data-reveal="up"
                  data-reveal-delay={index * 70}
                  data-tilt
                >
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* ROADMAP */}
        <section
          className={`${styles.section} ${styles.timelineSection}`}
          aria-labelledby={`${config.key}-timeline`}
        >
          <div
            className={styles.timelineIntro}
            data-reveal="left"
          >
            <p className={styles.kicker}>
              {config.timeline.kicker || ui.timelineLabel}
            </p>

            <h2 id={`${config.key}-timeline`}>
              {config.timeline.title}
            </h2>

            <p>{config.timeline.lead}</p>
          </div>

          <div className={styles.timeline}>
            {config.timeline.items.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className={`${styles.timelineItem} ${
                  timelineClasses[item.status]
                }`}
                data-reveal="up"
                data-reveal-delay={index * 75}
              >
                <div className={styles.timelineTrack}>
                  <span className={styles.timelineDot} />

                  {index <
                    config.timeline.items.length - 1 && (
                    <span className={styles.timelineLine} />
                  )}
                </div>

                <div className={styles.timelineContent}>
                  {item.meta && (
                    <span className={styles.timelineMeta}>
                      {item.meta}
                    </span>
                  )}

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CHANGELOG */}
        {config.changelog &&
          config.changelog.length > 0 && (
            <section
              className={`${styles.section} ${styles.changelogSection}`}
              aria-labelledby={`${config.key}-changelog`}
            >
              <div
                className={styles.changelogIntro}
                data-reveal="left"
              >
                <p className={styles.kicker}>
                  {ui.changelogKicker}
                </p>

                <h2 id={`${config.key}-changelog`}>
                  {ui.changelogTitle}
                </h2>

                <p>{ui.changelogLead}</p>
              </div>

              <div className={styles.changelogList}>
                {config.changelog.map((entry, index) => (
                  <article
                    key={`${entry.date}-${entry.title}`}
                    className={styles.changelogItem}
                    data-reveal="up"
                    data-reveal-delay={index * 70}
                  >
                    <span className={styles.changelogDate}>
                      {entry.date}
                    </span>

                    <div>
                      <h3>{entry.title}</h3>
                      <p>{entry.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

        {/* TECH STACK */}
        <section
          className={`${styles.section} ${styles.techSection}`}
        >
          <div
            className={styles.techCopy}
            data-reveal="left"
          >
            <p className={styles.kicker}>
              {ui.techKicker}
            </p>

            <h2>{ui.techTitle}</h2>

            {config.techNote && (
              <p>{config.techNote}</p>
            )}
          </div>

          <div className={styles.techGrid}>
            {config.techStack.map((technology, index) => (
              <div
                key={technology}
                className={styles.techItem}
                data-reveal="up"
                data-reveal-delay={index * 55}
              >
                <span aria-hidden="true" />
                {technology}
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          className={styles.finalCta}
          data-reveal="scale"
        >
          <p className={styles.kicker}>
            {ui.finalKicker}
          </p>

          <h2>{ui.finalTitle}</h2>

          <div className={styles.finalActions}>
            <Link
              href={`${routeFor(locale, "home")}#apps`}
              className={styles.primaryButton}
            >
              {ui.back}
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              href={`${routeFor(locale, "home")}#contact`}
              className={styles.secondaryButton}
            >
              {ui.contact}
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </main>

      <HomeFooter locale={locale} />
    </div>
  );
}

function SectionHeading({
  kicker,
  title,
  id,
}: {
  kicker: string;
  title: string;
  id: string;
}) {
  return (
    <div
      className={styles.sectionHeading}
      data-reveal="up"
    >
      <p className={styles.kicker}>
        {kicker}
      </p>

      <h2 id={id}>{title}</h2>
    </div>
  );
}

function PhonePreview({
  preview,
  logo,
  fallback,
  index,
  large = false,
}: {
  preview: Preview;
  logo: string;
  fallback: string;
  index: number;
  large?: boolean;
}) {
  const depth = index === 1 ? "1.25" : "0.8";

  return (
    <figure
      className={`${styles.phoneWrap} ${
        large ? styles.phoneLarge : ""
      } ${styles[`phone${index + 1}`] ?? ""}`}
      data-parallax-layer={preview.src ? undefined : depth}
    >
      <div className={`${styles.phone} ${preview.src ? styles.phoneRealScreen : ""}`}>
        <div
          className={styles.dynamicIsland}
          aria-hidden="true"
        />

        <div className={styles.phoneScreen}>
          {preview.src ? (
            <Image
              src={preview.src}
              alt={preview.label}
              fill
              unoptimized
              priority={large || index === 1}
              sizes={large ? "(max-width: 760px) 44vw, 360px" : "(max-width: 1100px) 26vw, 320px"}
              className={styles.screenImage}
              style={{ objectPosition: preview.objectPosition ?? "center top" }}
            />
          ) : (
            <ConceptPreview
              preview={preview}
              logo={logo}
              fallback={fallback}
            />
          )}
        </div>
      </div>

      <figcaption>
        {preview.label}
      </figcaption>
    </figure>
  );
}

function ConceptPreview({
  preview,
  logo,
  fallback,
}: {
  preview: Preview;
  logo: string;
  fallback: string;
}) {
  const iconByKind: Record<NonNullable<Preview["kind"]>, string> = {
    discover: "◇",
    insight: "◎",
    chat: "↗",
    groups: "◌",
    plans: "⌁",
    game: "✦",
    round: "↻",
    setup: "＋",
  };

  const icon = preview.kind
    ? iconByKind[preview.kind]
    : "✦";

  return (
    <div className={styles.conceptScreen}>
      <div className={styles.conceptTopbar}>
        <div className={styles.conceptBrand}>
          <Image
            src={logo}
            alt=""
            width={24}
            height={24}
          />
          <span>{preview.eyebrow ?? fallback}</span>
        </div>

        <span
          className={styles.conceptStatusDot}
          aria-hidden="true"
        />
      </div>

      {preview.image ? (
        <div className={styles.conceptPhoto}>
          <Image
            src={preview.image}
            alt=""
            fill
            sizes="300px"
            className={styles.conceptPhotoImage}
          />

          <div className={styles.conceptPhotoShade} />

          <div className={styles.conceptPhotoCopy}>
            <span>{preview.metric ?? preview.label}</span>
            <strong>
              {preview.title ?? preview.label}
            </strong>

            {preview.text && (
              <p>{preview.text}</p>
            )}
          </div>
        </div>
      ) : (
        <div className={styles.conceptPanel}>
          <span className={styles.conceptIcon}>
            {icon}
          </span>

          {preview.metric && (
            <div className={styles.conceptMetric}>
              <strong>{preview.metric}</strong>
              {preview.metricLabel && (
                <span>{preview.metricLabel}</span>
              )}
            </div>
          )}

          <h4>{preview.title ?? preview.label}</h4>

          {preview.text && (
            <p>{preview.text}</p>
          )}

          <div className={styles.conceptRows} aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
      )}

      {preview.chips && preview.chips.length > 0 && (
        <div className={styles.conceptChips}>
          {preview.chips.slice(0, 4).map((chip) => (
            <span key={chip}>{chip}</span>
          ))}
        </div>
      )}

      <div className={styles.conceptAction}>
        <span>{preview.action ?? preview.label}</span>
        <span aria-hidden="true">→</span>
      </div>

      <div className={styles.conceptNav} aria-hidden="true">
        <span />
        <span className={styles.conceptNavActive} />
        <span />
        <span />
      </div>
    </div>
  );
}
