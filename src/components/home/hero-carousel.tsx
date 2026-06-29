"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export interface HeroSlide {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  price?: string;
}

interface HeroCarouselProps {
  slides: HeroSlide[];
  intervalMs?: number;
  fallbackSrc?: string;
}

export function HeroCarousel({
  slides,
  intervalMs = 5000,
  fallbackSrc = "/hero-logo.png",
}: HeroCarouselProps) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [failed, setFailed] = useState<Record<number, boolean>>({});
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = mq.matches;
    const onChange = (e: MediaQueryListEvent) => {
      reducedMotionRef.current = e.matches;
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (slides.length <= 1 || isPaused || reducedMotionRef.current) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [slides.length, isPaused, intervalMs]);

  if (slides.length === 0) return null;

  const allFailed = slides.length > 0 && slides.every((_, i) => failed[i]);
  const showCaption = !allFailed; // hide caption when only the fallback logo is shown across all slides

  return (
    <div
      className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl bg-[var(--brand-red)]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      aria-roledescription="carousel"
    >
      {slides.map((slide, i) => {
        const isMissing = failed[i];
        return (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity duration-700 ease-out"
            style={{ opacity: i === index ? 1 : 0 }}
            aria-hidden={i !== index}
          >
            {isMissing ? (
              <div className="relative h-full w-full">
                <Image
                  src={fallbackSrc}
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 540px"
                  className="object-contain p-12 sm:p-16"
                  priority={i === 0}
                />
              </div>
            ) : (
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 540px"
                className="object-cover object-center"
                priority={i === 0}
                unoptimized
                onError={() =>
                  setFailed((current) => ({ ...current, [i]: true }))
                }
              />
            )}
          </div>
        );
      })}

      {showCaption && (
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      )}

      {showCaption && (
        <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
          <div key={index} className="hero-caption">
            <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[var(--paper)]/75">
              {slides[index].eyebrow}
            </p>
            <p className="mt-1 font-display text-2xl leading-none text-[var(--paper)] sm:text-3xl">
              {slides[index].title}
            </p>
          </div>
          {slides[index].price && (
            <span className="rounded-full bg-[var(--brand-gold)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--ink-strong)]">
              {slides[index].price}
            </span>
          )}
        </div>
      )}

      {slides.length > 1 && !allFailed && (
        <div className="absolute left-6 top-6 flex items-center gap-1.5" role="tablist">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show slide ${i + 1}`}
              aria-selected={i === index}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-7 bg-[var(--paper)]"
                  : "w-3 bg-[var(--paper)]/40 hover:bg-[var(--paper)]/70"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
