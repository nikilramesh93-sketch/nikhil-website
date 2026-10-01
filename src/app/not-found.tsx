"use client";

import { Button } from "@/components/ui/button";
import { Ribbon } from "@/components/ui/ribbon";
import { useApp } from "@/components/providers/app-provider";

export default function NotFound() {
  const { dictionary } = useApp();
  const copy = dictionary.notFound;

  return (
    <section className="py-10 sm:py-16">
      <div
        className="panel-grain relative overflow-hidden rounded-3xl px-6 py-14 sm:px-12 sm:py-20 lg:px-16"
        style={{ backgroundColor: "var(--brand-red-deep)" }}
      >
        {/* Oversized 404 sitting behind the message, cropped by the panel edge. */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-4 -top-10 select-none font-display leading-none text-[180px] text-[var(--brand-gold)]/15 sm:-right-6 sm:text-[280px] lg:text-[340px]"
        >
          {copy.code}
        </span>

        <div className="relative max-w-2xl">
          <Ribbon>{copy.ribbon}</Ribbon>
          <h1 className="mt-5 font-display text-[40px] leading-[0.95] text-[var(--paper)] sm:text-[60px] lg:text-[72px]">
            {copy.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--paper)]/75 sm:text-lg">
            {copy.body}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="/menu" size="lg" className="btn-on-red-gold">
              {copy.menuCta}
            </Button>
            <Button href="/" size="lg" className="btn-on-red-outline">
              {copy.homeCta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
