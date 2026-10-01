"use client";

import { useEffect, useRef } from "react";
import styles from "./effects.module.css";

export default function PageEffects() {
  const marker = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = marker.current?.parentElement;
    if (!root) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    let dispose: (() => void) | undefined;
    const start = () => {
      dispose?.();
      if (preference.matches) return;
      const sections = [...root.querySelectorAll<HTMLElement>("main > section:not(:first-child)")];
      const observer = "IntersectionObserver" in window ? new IntersectionObserver(entries => {
        for (const entry of entries) if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.dataset.revealState = "visible";
          observer?.unobserve(target);
        }
      }, { threshold: 0, rootMargin: "0px 0px -35px 0px" }) : null;
      for (const section of sections) {
        if (observer && section.getBoundingClientRect().top > innerHeight) {
          section.dataset.revealState = "pending";
          observer.observe(section);
        }
      }
      // Keyboard navigation must expose a section immediately, even before its observer fires.
      const revealFocused = (event: FocusEvent) => {
        if (event.target instanceof HTMLElement) {
          const section = event.target.closest<HTMLElement>('[data-reveal-state="pending"]');
          if (section) { section.dataset.revealState = "visible"; observer?.unobserve(section); }
        }
      };
      root.addEventListener("focusin", revealFocused);
      const cleanups: (() => void)[] = [];
      if (finePointer.matches) for (const card of root.querySelectorAll<HTMLElement>("[data-spotlight]")) {
        let frame = 0;
        const move = (event: PointerEvent) => {
          if (event.pointerType === "touch") return;
          cancelAnimationFrame(frame);
          const { clientX, clientY } = event;
          frame = requestAnimationFrame(() => {
            const rect = card.getBoundingClientRect();
            const x = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
            const y = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));
            card.style.setProperty("--spot-x", `${x * 100}%`);
            card.style.setProperty("--spot-y", `${y * 100}%`);
            card.style.setProperty("--tilt-x", `${(0.5 - y) * 3}deg`);
            card.style.setProperty("--tilt-y", `${(x - 0.5) * 3}deg`);
          });
        };
        const reset = () => {
          cancelAnimationFrame(frame);
          for (const property of ["--spot-x", "--spot-y", "--tilt-x", "--tilt-y"]) card.style.removeProperty(property);
        };
        card.addEventListener("pointermove", move);
        card.addEventListener("pointerleave", reset);
        card.addEventListener("pointercancel", reset);
        cleanups.push(() => {
          reset(); card.removeEventListener("pointermove", move); card.removeEventListener("pointerleave", reset); card.removeEventListener("pointercancel", reset);
        });
      }
      dispose = () => {
        observer?.disconnect(); sections.forEach(section => { delete section.dataset.revealState; });
        root.removeEventListener("focusin", revealFocused); cleanups.forEach(cleanup => cleanup());
      };
    };
    start(); preference.addEventListener("change", start); finePointer.addEventListener("change", start);
    return () => { dispose?.(); preference.removeEventListener("change", start); finePointer.removeEventListener("change", start); };
  }, []);
  return <div ref={marker} className={styles.ambient} aria-hidden="true"><span /><span /></div>;
}
