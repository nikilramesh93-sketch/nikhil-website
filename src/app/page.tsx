"use client";

import Link from "next/link";
import {
  Briefcase,
  GraduationCap,
  MoonStars,
  Scooter,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";

import { HeroCarousel, type HeroSlide } from "@/components/home/hero-carousel";
import { MenuCard } from "@/components/menu/menu-card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Ribbon } from "@/components/ui/ribbon";
import { StampBadge } from "@/components/ui/stamp-badge";
import { WrapperDivider } from "@/components/ui/wrapper-divider";
import { WhatsAppIcon, buildWhatsAppUrl } from "@/components/ui/whatsapp-link";
import { useApp } from "@/components/providers/app-provider";
import { featuredMenuIds, menuItems, signatureMenuIds } from "@/data/menu";

const MAPS_URL = "https://maps.app.goo.gl/3KNCS6xpPaYeVqCA9";
const WHATSAPP_ORDER_URL = buildWhatsAppUrl("Hi Holy Pav, I'd like to place an order.");
const WHATSAPP_DELIVERY_URL = buildWhatsAppUrl(
  "Hi Holy Pav, I'd like to get my order delivered.",
);

const OCCASION_ICONS = {
  cap: GraduationCap,
  briefcase: Briefcase,
  people: UsersThree,
  moon: MoonStars,
} as const;

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
    alt: "Onion Krispers served with dry chutney and sweet tamarind chutney in a Holy Pav wrapper",
    eyebrow: "Holy bites",
    title: "Onion Krispers",
    price: "₹99",
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
          <Ribbon>{dictionary.home.heroRibbon}</Ribbon>
          <h1 className="mt-5 font-display text-[44px] leading-[0.92] tracking-[0.01em] text-[var(--ink-strong)] sm:text-[64px] lg:text-[80px]">
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

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--ink-faint)]">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--brand-red)]"
            >
              {dictionary.home.metadataLocation} →
            </a>
            <span className="hidden h-px w-6 bg-[var(--line-strong)] sm:block" />
            <span>{dictionary.home.metadataHours}</span>
          </div>
        </div>

        <div className="relative">
          <HeroCarousel slides={HERO_SLIDES} />
          <div className="absolute -right-3 -top-3 sm:-right-5 sm:-top-5">
            <StampBadge
              lines={[dictionary.home.heroStampLine1, dictionary.home.heroStampLine2]}
              tone="on-light"
              className="bg-[var(--paper)] shadow-[0_10px_30px_-12px_rgba(31,20,16,0.35)]"
              size={104}
            />
          </div>
        </div>
      </section>

      {/* Where the pitch ends and the kitchen starts. A hairline rule would say
          the same thing in nobody's voice.

          The margins fight the parent's space-y: a negative top pulls the strip
          back up into the gap it would otherwise be added to, and the positive
          bottom is needed because Tailwind v4 implements space-y-* as
          margin-bottom, so a negative bottom margin here would overlap the next
          section instead of tightening the gap. -mt-20 against space-y-24 leaves
          the strip a 16px breath below the photo above it on mobile. */}
      <WrapperDivider className="-mt-20 mb-10 sm:-mt-28 sm:mb-12" />

      <section>
        <Reveal className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--brand-red)]">
              {dictionary.home.trustEyebrow}
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-[32px] leading-[0.95] text-[var(--ink-strong)] sm:text-[44px] lg:text-[52px]">
              {dictionary.home.trustTitle}
            </h2>
          </div>
        </Reveal>

        {/* Three statements, not three cards. The writing here is the best on the
            site; at 14px inside a bordered icon tile it was the most generic block
            on the page. Set large, one per row, alternating cream and red, it does
            the same job and sounds like us. */}
        <div className="mt-12 space-y-4 sm:space-y-5">
          {dictionary.home.trustStatements.map((item, index) => {
            const onRed = index % 2 === 1;
            return (
              <Reveal
                as="article"
                key={item.statement}
                delay={index * 60}
                className={`rounded-3xl px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14 ${
                  onRed ? "panel-grain" : ""
                }`}
                style={{
                  backgroundColor: onRed
                    ? "var(--brand-red-deep)"
                    : "var(--paper-soft)",
                }}
              >
                <p
                  className="font-display text-xs leading-none"
                  style={{
                    color: onRed ? "var(--brand-gold)" : "var(--brand-red)",
                  }}
                >
                  0{index + 1}
                </p>
                <div className="mt-5 grid gap-5 lg:grid-cols-[1.4fr_0.6fr] lg:items-end lg:gap-14">
                  <h3
                    className="text-balance font-display text-[34px] leading-[0.95] sm:text-[48px] lg:text-[60px]"
                    style={{
                      color: onRed ? "var(--paper)" : "var(--ink-strong)",
                    }}
                  >
                    {item.statement}
                  </h3>
                  <p
                    className="max-w-sm text-[14px] leading-[1.6] lg:pb-2"
                    style={{
                      color: onRed
                        ? "rgba(255, 255, 255, 0.78)"
                        : "var(--ink-muted)",
                    }}
                  >
                    {item.support}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section
        className="panel-grain rounded-3xl px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20"
        style={{ backgroundColor: "var(--brand-red-deep)" }}
      >
        <Reveal>
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--brand-gold)]">
            {dictionary.home.anatomyEyebrow}
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-[32px] leading-[0.95] text-[var(--paper)] sm:text-[44px] lg:text-[52px]">
            {dictionary.home.anatomyTitle}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {dictionary.home.anatomyCallouts.map((callout, index) => (
            <Reveal
              key={callout.title}
              delay={index * 60}
              className="border-t-2 pt-5"
              style={{ borderColor: "var(--brand-gold)" }}
            >
              <p className="font-display text-xs leading-none text-[var(--brand-gold)]">
                0{index + 1}
              </p>
              <h3 className="mt-2 font-display text-lg leading-tight text-[var(--paper)] sm:text-xl">
                {callout.title}
              </h3>
              <p className="mt-2 text-[13px] leading-[1.5] text-[var(--paper)]/75">
                {callout.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section>
        <Reveal className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
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
        </Reveal>

        {/* Three columns for six items: a 4-column grid left a visibly empty
            fourth cell on desktop. */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredItems.map((item, index) => (
            <Reveal key={item.id} delay={index * 60} className="h-full">
              <MenuCard item={item} featured={signatureMenuIds.includes(item.id)} />
            </Reveal>
          ))}
        </div>
      </section>

      <section>
        <Reveal
          className="flex flex-col items-start gap-4 rounded-2xl px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8"
          style={{ backgroundColor: "var(--brand-gold)" }}
        >
          <div className="flex items-center gap-3">
            <Scooter size={28} weight="fill" className="text-[var(--brand-red-deep)]" />
            <div>
              <p className="font-display text-lg leading-none text-[var(--brand-red-deep)] sm:text-xl">
                {dictionary.home.deliveryEyebrow}
              </p>
              <p className="mt-1 text-[13px] leading-snug text-[var(--brand-red-deep)]/80">
                {dictionary.home.deliveryTitle}
              </p>
            </div>
          </div>
          <a
            href={WHATSAPP_DELIVERY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="delivery-cta inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] transition-all duration-200 ease-out"
            style={{
              backgroundColor: "transparent",
              color: "var(--brand-red-deep)",
              border: "1px solid var(--brand-red-deep)",
            }}
          >
            {dictionary.home.deliverySubtitle}
          </a>
        </Reveal>
      </section>

      <section>
        <Reveal as="p" className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--brand-red)]">
          {dictionary.home.occasionsTitle}
        </Reveal>
        <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-[var(--line-strong)] pt-6">
          {dictionary.home.occasions.map((occasion, index) => {
            const Icon = OCCASION_ICONS[occasion.icon];
            return (
              <Reveal
                key={occasion.label}
                delay={index * 60}
                className="flex items-center gap-6"
              >
                {index > 0 && (
                  <span className="hidden h-8 w-px bg-[var(--line-strong)] sm:block" />
                )}
                <div className="flex items-center gap-2.5 text-[var(--ink)]">
                  <Icon size={20} weight="regular" className="text-[var(--brand-red)]" />
                  <span className="text-[12px] font-semibold uppercase tracking-[0.1em]">
                    {occasion.label}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <WrapperDivider className="-mt-20 mb-10 sm:-mt-28 sm:mb-12" />

      <section className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        {/* This frame used to say "Photo coming soon" to actual customers. Until
            there is a real kitchen shot, it reads as a stamped poster panel
            instead — a deliberate thing rather than a missing one. */}
        {/* rounded + clipped on the Reveal itself, not only on the panel inside:
            the unwrap sheet is a child of the Reveal and would otherwise show
            square corners over the rounded panel. */}
        <Reveal
          variant="wipe"
          className="relative order-2 overflow-hidden rounded-3xl lg:order-1"
        >
          <div
            className="panel-grain relative aspect-[5/4] w-full overflow-hidden rounded-3xl"
            style={{ backgroundColor: "var(--brand-red-deep)" }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-center font-display text-[84px] leading-[0.82] text-[var(--brand-gold)] sm:text-[120px] lg:text-[140px]">
                EST.
                <br />
                2026
              </span>
            </div>
            <div className="absolute left-6 top-6">
              <Ribbon size="sm">{dictionary.home.heroRibbon}</Ribbon>
            </div>
            <div className="absolute right-5 top-5 sm:right-6 sm:top-6">
              <StampBadge
                lines={[dictionary.home.heroStampLine1, dictionary.home.heroStampLine2]}
                tone="on-dark"
                size={96}
              />
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--paper)]/70">
                {dictionary.home.storyStamps}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80} className="order-1 lg:order-2">
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
        </Reveal>
      </section>
    </div>
  );
}
