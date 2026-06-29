"use client";

import { Button } from "@/components/ui/button";
import { useApp } from "@/components/providers/app-provider";

export default function AboutPage() {
  const { dictionary } = useApp();

  return (
    <div className="space-y-24 sm:space-y-32">
      <section className="max-w-4xl">
        <p className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--brand-red)]">
          <span className="h-px w-6 bg-[var(--brand-red)]" />
          {dictionary.about.kicker}
        </p>
        <h1 className="mt-6 font-display text-[48px] leading-[0.92] text-[var(--ink-strong)] sm:text-[72px] lg:text-[88px]">
          {dictionary.about.title}
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-[var(--ink-muted)] sm:text-xl">
          {dictionary.about.subtitle}
        </p>
      </section>

      <section className="grid gap-12 md:grid-cols-2 md:gap-x-16 md:gap-y-20 lg:gap-x-24">
        {dictionary.about.sections.map((section, index) => (
          <article key={section.eyebrow} className="flex flex-col">
            <div className="flex items-center gap-3">
              <span className="font-display text-[18px] tracking-[0.04em] text-[var(--brand-red)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--ink-faint)]">
                {section.eyebrow}
              </span>
            </div>
            <h2 className="mt-5 font-display text-[28px] leading-[0.95] text-[var(--ink-strong)] sm:text-[36px] lg:text-[40px]">
              {section.title}
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-[1.65] text-[var(--ink-muted)]">
              {section.body}
            </p>
          </article>
        ))}
      </section>

      <section className="relative overflow-hidden rounded-3xl bg-[var(--brand-red)] px-6 py-16 sm:px-12 sm:py-24 lg:px-20 lg:py-28">
        <div className="absolute right-6 top-6 font-display text-[180px] leading-none text-[var(--paper)]/8 sm:text-[280px]">
          “
        </div>
        <blockquote className="relative max-w-3xl">
          <p className="font-display text-[32px] leading-[1.05] text-[var(--paper)] sm:text-[48px] lg:text-[60px]">
            {dictionary.about.quote}
          </p>
          <footer className="mt-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--paper)]/65">
            — {dictionary.about.quoteAttribution}
          </footer>
        </blockquote>
      </section>

      <section className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end md:justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--brand-red)]">
            What's next
          </p>
          <h2 className="mt-3 font-display text-[36px] leading-[0.95] text-[var(--ink-strong)] sm:text-[52px]">
            Pull up a chair.
            <br />
            The bun is fresh.
          </h2>
        </div>
        <Button href="/menu" variant="primary" size="lg">
          {dictionary.about.cta}
        </Button>
      </section>
    </div>
  );
}
