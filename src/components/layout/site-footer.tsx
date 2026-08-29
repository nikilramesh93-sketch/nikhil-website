"use client";

import Link from "next/link";

import { useApp } from "@/components/providers/app-provider";
import {
  WHATSAPP_DISPLAY,
  WhatsAppIcon,
  buildWhatsAppUrl,
} from "@/components/ui/whatsapp-link";

export function SiteFooter() {
  const { dictionary } = useApp();

  return (
    <footer className="mt-16 border-t border-[var(--line)] bg-[var(--paper)]/60">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--brand-red)]">
              {dictionary.brand.name}
            </p>
            <h2 className="mt-3 font-display text-4xl leading-[0.95] text-[var(--ink-strong)] sm:text-5xl">
              {dictionary.brand.masterLine}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--ink-muted)]">
              {dictionary.brand.footerSub}
            </p>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--ink-faint)]">
              Visit
            </p>
            <address className="mt-3 not-italic text-sm leading-relaxed text-[var(--ink)]">
              Ground Floor, Krishna Nagar,
              <br />
              13, Hosur Main Road, near Christ University,
              <br />
              Koramangala Industrial Layout, Bengaluru 560029
            </address>
            <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--ink-faint)]">
              Hours
            </p>
            <p className="mt-2 text-sm text-[var(--ink)]">Mon – Sun · 11 AM – 11 PM</p>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--ink-faint)]">
              Find us
            </p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-[var(--ink)]">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-fit items-center gap-2 transition-colors hover:text-[var(--brand-red)]"
              >
                <WhatsAppIcon size={16} />
                WhatsApp
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href="https://www.instagram.com/holy_pav/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-fit items-center gap-1.5 transition-colors hover:text-[var(--brand-red)]"
              >
                Instagram
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href="mailto:nikil@holypav.com"
                className="group inline-flex w-fit items-center gap-1.5 transition-colors hover:text-[var(--brand-red)]"
              >
                nikil@holypav.com
              </a>
              <a
                href={`tel:+${"919019494768"}`}
                className="group inline-flex w-fit items-center gap-1.5 transition-colors hover:text-[var(--brand-red)]"
              >
                {WHATSAPP_DISPLAY}
              </a>
            </div>
            <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--ink-faint)]">
              Explore
            </p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-[var(--ink)]">
              <Link href="/menu" className="w-fit hover:text-[var(--brand-red)]">
                {dictionary.nav.menu}
              </Link>
              <Link href="/about" className="w-fit hover:text-[var(--brand-red)]">
                {dictionary.nav.about}
              </Link>
              <Link href="/partners" className="w-fit hover:text-[var(--brand-red)]">
                {dictionary.nav.partners}
              </Link>
              <Link href="/contact" className="w-fit hover:text-[var(--brand-red)]">
                {dictionary.nav.contact}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-[var(--line)] pt-6 text-[11px] uppercase tracking-[0.18em] text-[var(--ink-faint)] sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Holy Pav. Bengaluru.</p>
          <p>FSSAI Lic. No. 21226194001851</p>
        </div>
      </div>
    </footer>
  );
}
