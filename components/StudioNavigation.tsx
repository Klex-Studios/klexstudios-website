"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import styles from "./navigation.module.css";

type Props = {
  locale: string; page: string; home: string;
  links: { key: string; label: string; href: string }[];
  languages: { key: string; href: string }[];
  labels: { navigation: string; language: string; menu: string; close: string; skip: string };
};

export default function StudioNavigation({ locale, page, home, links, languages, labels }: Props) {
  const header = useRef<HTMLElement>(null), menu = useRef<HTMLDetailsElement>(null);
  const id = useId();
  const [open, setOpen] = useState(false), [active, setActive] = useState(page);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const element = header.current;
      if (!element) return;
      element.dataset.scrolled = String(window.scrollY > 24);
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      element.style.setProperty("--reading-progress", String(distance > 0 ? Math.min(1, window.scrollY / distance) : 0));
      if (page === "home") {
        const section = ["contact", "manifesto", "about"].find(key => {
          const rect = document.getElementById(key)?.getBoundingClientRect();
          return rect && rect.top <= Math.max(150, innerHeight * .28);
        });
        setActive(section ?? "home");
      } else {
        setActive(page);
      }
    };
    const queue = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", queue, { passive: true });
    window.addEventListener("resize", queue);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", queue); window.removeEventListener("resize", queue); };
  }, [page]);

  useEffect(() => {
    if (!open) return;
    const element = header.current, details = menu.current;
    if (!element || !details) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const outside = [...(element.parentElement?.children ?? [])].filter(node => node !== element && node instanceof HTMLElement) as HTMLElement[];
    const previousInert = outside.map(node => node.inert);
    outside.forEach(node => { node.inert = true; });
    const close = () => { details.open = false; details.querySelector("summary")?.focus(); };
    const keyboard = (event: KeyboardEvent) => {
      if (event.key === "Escape") { event.preventDefault(); close(); }
      if (event.key !== "Tab") return;
      const targets = [...element.querySelectorAll<HTMLElement>('a[href], summary, button')].filter(node => node.tabIndex >= 0 && node.getClientRects().length > 0);
      const first = targets[0], last = targets[targets.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    const desktop = window.matchMedia("(min-width: 1001px)");
    const resized = () => { if (desktop.matches) close(); };
    desktop.addEventListener("change", resized);
    document.addEventListener("keydown", keyboard);
    return () => {
      document.body.style.overflow = previousOverflow;
      outside.forEach((node, i) => { node.inert = previousInert[i]; });
      document.removeEventListener("keydown", keyboard); desktop.removeEventListener("change", resized);
    };
  }, [open]);

  const closeMenu = () => { if (menu.current) menu.current.open = false; };
  const navLinks = () => links.map(item => <Link key={item.key} href={item.href} onClick={closeMenu}
    className={item.key === "contact" ? styles.contact : undefined}
    aria-current={active === item.key ? (["about", "manifesto", "contact"].includes(item.key) ? "location" : "page") : undefined}>
    <span>{item.label}</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5" /></svg>
  </Link>);

  return <header ref={header} className={styles.header} data-scrolled="false">
    <a className={styles.skip} href="#main-content" onClick={closeMenu}>{labels.skip}</a>
    <div className={styles.bar}>
      <Link className={styles.brand} href={home} onClick={closeMenu} aria-label="Klex Studios">
        <Image src="/logos/klex-logo.png" alt="" width={42} height={42} sizes="42px" />
        <span>Klex<small>Studios</small></span>
      </Link>
      <nav className={styles.desktop} aria-label={labels.navigation}>{navLinks()}</nav>
      <nav className={styles.languages} aria-label={labels.language}>
        {languages.map(language => <Link key={language.key} href={language.href} onClick={closeMenu}
          lang={language.key} hrefLang={language.key} aria-current={language.key === locale ? "page" : undefined}
          aria-label={language.key === "de" ? "Deutsch" : "English"}>{language.key.toUpperCase()}</Link>)}
      </nav>
      <details ref={menu} className={styles.mobile} onToggle={event => setOpen(event.currentTarget.open)}>
        <summary aria-controls={id} aria-label={open ? labels.close : labels.menu}>
          <span className={styles.menuIcon} aria-hidden="true"><i /><i /></span>
        </summary>
        <div className={styles.panel} id={id}>
          <nav aria-label={labels.navigation}>{navLinks()}</nav>
        </div>
        <button className={styles.backdrop} type="button" onClick={closeMenu} aria-label={labels.close} tabIndex={-1} />
      </details>
    </div>
    <div className={styles.progress} aria-hidden="true" />
  </header>;
}
