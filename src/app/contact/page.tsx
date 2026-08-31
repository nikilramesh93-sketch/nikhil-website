"use client";

import { Button } from "@/components/ui/button";
import { Ribbon } from "@/components/ui/ribbon";
import {
  WHATSAPP_DISPLAY,
  WhatsAppIcon,
  buildWhatsAppUrl,
} from "@/components/ui/whatsapp-link";
import { useApp } from "@/components/providers/app-provider";

const MAPS_URL = "https://maps.app.goo.gl/3KNCS6xpPaYeVqCA9";
const MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.562034984379!2d77.60529467577125!3d12.935846515659778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15839eb6bb61%3A0x4cfec39992f4657b!2sHOLY%20PAV!5e0!3m2!1sen!2sin!4v1788004872876!5m2!1sen!2sin";
const WHATSAPP_HELLO_URL = buildWhatsAppUrl(
  "Hi Holy Pav, I'd like to place an order.",
);

export default function ContactPage() {
  const { dictionary } = useApp();

  return (
    <div className="space-y-20">
      <section className="max-w-3xl">
        <Ribbon>{dictionary.contact.ribbon}</Ribbon>
        <h1 className="mt-6 font-display text-[44px] leading-[0.92] text-[var(--ink-strong)] sm:text-[64px] lg:text-[80px]">
          {dictionary.contact.title}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--ink-muted)] sm:text-lg">
          {dictionary.contact.subtitle}
        </p>
      </section>

      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="space-y-10">
          <a
            href={WHATSAPP_HELLO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 rounded-2xl border border-[var(--line-strong)] bg-[var(--paper)] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#25D366] hover:shadow-[0_18px_50px_-30px_rgba(37,211,102,0.55)] sm:p-6"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366]/12">
                <WhatsAppIcon size={22} />
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--ink-faint)]">
                  Place an order · ask anything
                </p>
                <p className="mt-1 font-display text-xl leading-none text-[var(--ink-strong)] sm:text-2xl">
                  Chat on WhatsApp
                </p>
              </div>
            </div>
            <span className="text-[var(--ink-muted)] transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--ink-faint)]">
              {dictionary.contact.addressLabel}
            </p>
            <address className="mt-3 not-italic font-display text-2xl leading-[1.15] text-[var(--ink-strong)] sm:text-[28px]">
              Ground Floor, Krishna Nagar,
              <br />
              13, Hosur Main Road, near Christ University,
              <br />
              Koramangala Industrial Layout, Bengaluru 560029
            </address>
            <div className="mt-5">
              <Button href={MAPS_URL} variant="secondary" size="md" external>
                Open in Google Maps
              </Button>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--ink-faint)]">
                {dictionary.contact.timingLabel}
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink)]">
                Monday – Sunday
                <br />
                11:00 AM – 11:00 PM
              </p>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--ink-faint)]">
                {dictionary.contact.phoneLabel}
              </p>
              <a
                href="tel:+919019494768"
                className="mt-3 block text-[15px] text-[var(--ink)] hover:text-[var(--brand-red)]"
              >
                {WHATSAPP_DISPLAY}
              </a>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--ink-faint)]">
                Instagram
              </p>
              <a
                href="https://www.instagram.com/holy_pav/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-[15px] text-[var(--ink)] hover:text-[var(--brand-red)]"
              >
                @holy_pav
                <span>→</span>
              </a>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--ink-faint)]">
                {dictionary.contact.corporateLabel}
              </p>
              <a
                href="mailto:nikil@holypav.com"
                className="mt-3 block text-[15px] text-[var(--ink)] hover:text-[var(--brand-red)]"
              >
                nikil@holypav.com
              </a>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--paper-soft)]">
          <iframe
            src={MAPS_EMBED}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 420 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Holy Pav Koramangala location"
          />
        </div>
      </section>

      <section className="rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-8 sm:p-12">
        <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--ink-faint)]">
              Bulk &amp; corporate
            </p>
            <h2 className="mt-3 font-display text-[26px] leading-[1.05] text-[var(--ink-strong)] sm:text-[32px]">
              Team lunches, events, or 50+ pav boxes? Drop us a line.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">
              Share expected volume, date, and delivery zone. We respond within one business day.
            </p>
          </div>
          <div className="md:justify-self-end">
            <Button href="mailto:nikil@holypav.com" variant="primary" size="lg">
              Email Holy Pav
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
