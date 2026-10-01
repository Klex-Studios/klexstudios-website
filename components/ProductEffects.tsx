"use client";

import { useEffect } from "react";

export default function ProductEffects() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(
      "[data-product-page]"
    );

    if (!root) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) return;

    root.dataset.effectsReady = "true";

    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements = Array.from(
      root.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;

          element.dataset.visible = "true";

          observer.unobserve(element);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -7% 0px",
      }
    );

    revealElements.forEach((element) => {
      const delay = element.dataset.revealDelay;

      if (delay) {
        element.style.setProperty(
          "--reveal-delay",
          `${delay}ms`
        );
      }

      observer.observe(element);
    });

    /* =====================================================
       ONLY DESKTOP POINTER EFFECTS
    ===================================================== */

    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;

    if (!finePointer) {
      return () => observer.disconnect();
    }

    const cleanupFunctions: Array<() => void> = [];

    /* =====================================================
       3D TILT
    ===================================================== */

    const tiltElements = Array.from(
      root.querySelectorAll<HTMLElement>("[data-tilt]")
    );

    tiltElements.forEach((element) => {
      const handleMove = (event: PointerEvent) => {
        const rect =
          element.getBoundingClientRect();

        const x =
          (event.clientX - rect.left) /
          rect.width;

        const y =
          (event.clientY - rect.top) /
          rect.height;

        const rotateY = (x - 0.5) * 7;
        const rotateX = (0.5 - y) * 7;

        element.style.setProperty(
          "--tilt-x",
          `${rotateX}deg`
        );

        element.style.setProperty(
          "--tilt-y",
          `${rotateY}deg`
        );

        element.style.setProperty(
          "--spot-x",
          `${x * 100}%`
        );

        element.style.setProperty(
          "--spot-y",
          `${y * 100}%`
        );
      };

      const reset = () => {
        element.style.setProperty(
          "--tilt-x",
          "0deg"
        );

        element.style.setProperty(
          "--tilt-y",
          "0deg"
        );

        element.style.setProperty(
          "--spot-x",
          "50%"
        );

        element.style.setProperty(
          "--spot-y",
          "50%"
        );
      };

      element.addEventListener(
        "pointermove",
        handleMove
      );

      element.addEventListener(
        "pointerleave",
        reset
      );

      cleanupFunctions.push(() => {
        element.removeEventListener(
          "pointermove",
          handleMove
        );

        element.removeEventListener(
          "pointerleave",
          reset
        );
      });
    });

    /* =====================================================
       PHONE PARALLAX
    ===================================================== */

    const parallaxAreas = Array.from(
      root.querySelectorAll<HTMLElement>(
        "[data-parallax]"
      )
    );

    parallaxAreas.forEach((area) => {
      const layers = Array.from(
        area.querySelectorAll<HTMLElement>(
          "[data-parallax-layer]"
        )
      );

      const handleMove = (
        event: PointerEvent
      ) => {
        const rect =
          area.getBoundingClientRect();

        const normalizedX =
          (event.clientX - rect.left) /
            rect.width -
          0.5;

        const normalizedY =
          (event.clientY - rect.top) /
            rect.height -
          0.5;

        layers.forEach((layer) => {
          const depth = Number(
            layer.dataset.parallaxLayer ?? "1"
          );

          layer.style.setProperty(
            "--layer-x",
            `${normalizedX * depth * 14}px`
          );

          layer.style.setProperty(
            "--layer-y",
            `${normalizedY * depth * 10}px`
          );
        });
      };

      const reset = () => {
        layers.forEach((layer) => {
          layer.style.setProperty(
            "--layer-x",
            "0px"
          );

          layer.style.setProperty(
            "--layer-y",
            "0px"
          );
        });
      };

      area.addEventListener(
        "pointermove",
        handleMove
      );

      area.addEventListener(
        "pointerleave",
        reset
      );

      cleanupFunctions.push(() => {
        area.removeEventListener(
          "pointermove",
          handleMove
        );

        area.removeEventListener(
          "pointerleave",
          reset
        );
      });
    });

    return () => {
      observer.disconnect();

      cleanupFunctions.forEach(
        (cleanup) => cleanup()
      );
    };
  }, []);

  return null;
}