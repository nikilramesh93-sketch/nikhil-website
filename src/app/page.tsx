"use client";

import Link from "next/link";

import { HeroCarousel, type HeroSlide } from "@/components/home/hero-carousel";
import { MenuCard } from "@/components/menu/menu-card";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon, buildWhatsAppUrl } from "@/components/ui/whatsapp-link";
import { useApp } from "@/components/providers/app-provider";
import { featuredMenuIds, menuItems } from "@/data/menu";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Holy+Pav+Adugodi+Bengaluru";
const WHATSAPP_ORDER_URL = buildWhatsAppUrl("Hi Holy Pav, I'd like to place an order.");

const HERO_SLIDES: HeroSlide[] = [
  {
    src: "/hero/vada-pav.jpg",
    alt: "OG Vada Pav with green chutney, brown chutney, dry garlic chutney, and fried mirchi on a Holy Pav tray",
    eyebrow: "Signature",
    title: "OG Vada Pav",
    price: "₹89",
  },
  {
    src: "/hero/sides.jpg",
    alt: "Kanda Bhajji fritters served with dry chutney and sweet tamarind chutney in a Holy Pav wrapper",
    eyebrow: "On the side",
    title: "Kanda Bhajji",
    price: "₹79",
  },
  {
    src: "/hero/box.jpg",
    alt: "Holy Pav takeaway box loaded with masala and crispy garnish",
    eyebrow: "Made for delivery",
    title: "Boxed & ready",
  },
];

const featuredItems = menuItems.filter((item) => featuredMenuIds.includes(item.id));

export default function HomePage() {
  const { dictionary } = useApp();

  return (
    <div className="space-y-24 sm:space-y-32 lg:space-y-40">
      <section className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <p className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--brand-red)]">
            <span className="h-px w-6 bg-[var(--brand-red)]" />
            {dictionary.home.kicker}
          </p>
          <h1 className="mt-6 font-display text-[44px] leading-[0.92] tracking-[0.01em] text-[var(--ink-strong)] sm:text-[64px] lg:text-[80px]">
            {dictionary.home.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--ink-muted)] sm:text-lg">
            {dictionary.home.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button href={WHATSAPP_ORDER_URL} variant="primary" size="lg" external>
              <WhatsAppIcon size={16} className="brightness-0 invert" />
              {dictionary.home.secondaryCta}
            </Button>
            <Button href="/menu" variant="secondary" size="lg">
              {dictionary.home.primaryCta}
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--ink-faint)]">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--brand-red)]"
            >
              Adugodi, Bengaluru →
            </a>
            <span className="hidden h-px w-6 bg-[var(--line-strong)] sm:block" />
            <span>Open 11 AM – 11 PM</span>
          </div>
        </div>

        <div className="relative">
          <HeroCarousel slides={HERO_SLIDES} />
        </div>
      </section>

      <section>
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--brand-red)]">
              {dictionary.home.trustEyebrow}
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-[32px] leading-[0.95] text-[var(--ink-strong)] sm:text-[44px] lg:text-[52px]">
              {dictionary.home.trustTitle}
            </h2>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {dictionary.home.trustCards.map((card) => (
            <article
              key={card.number}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[var(--line-strong)] hover:shadow-[0_24px_60px_-30px_rgba(31,20,16,0.25)] sm:p-8"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--brand-gold-soft)] text-[11px] font-semibold tracking-[0.04em] text-[var(--brand-red)]">
                {card.number}
              </span>
              <h3 className="mt-6 font-display text-2xl leading-tight text-[var(--ink-strong)] sm:text-[28px]">
                {card.title}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.55] text-[var(--ink-muted)]">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--brand-red)]">
              {dictionary.home.bestsellerEyebrow}
            </p>
            <h2 className="mt-3 font-display text-[32px] leading-[0.95] text-[var(--ink-strong)] sm:text-[44px] lg:text-[52px]">
              {dictionary.home.bestsellerTitle}
            </h2>
          </div>
          <Link
            href="/menu"
            className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-red)] transition-colors hover:text-[var(--brand-red-strong)]"
          >
            See full menu
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredItems.map((item) => (
            <MenuCard key={item.id} item={item} featured />
          ))}
        </div>
      </section>

      <section className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="order-2 lg:order-1">
          <div className="relative aspect-[5/4] w-full overflow-hidden rounded-3xl bg-[var(--paper-soft)]">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-[120px] leading-none text-[var(--brand-red)]/15 sm:text-[180px]">
                Est. 2026
              </span>
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--ink-muted)]">
                Adugodi · Bengaluru
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--ink-muted)]">
                Photo coming soon
              </p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--brand-red)]">
            {dictionary.home.storyEyebrow}
          </p>
          <h2 className="mt-3 font-display text-[36px] leading-[0.95] text-[var(--ink-strong)] sm:text-[48px] lg:text-[56px]">
            {dictionary.home.storyTitle}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--ink-muted)] sm:text-lg">
            {dictionary.home.storyBody}
          </p>
          <div className="mt-8">
            <Button href="/about" variant="secondary" size="md">
              {dictionary.home.storyCta}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
