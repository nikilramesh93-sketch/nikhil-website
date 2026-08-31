"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Ribbon } from "@/components/ui/ribbon";
import { StampBadge } from "@/components/ui/stamp-badge";
import { useApp } from "@/components/providers/app-provider";

interface PartnerFormState {
  fullName: string;
  email: string;
  phone: string;
  socialHandle: string;
  platform: string;
  followers: string;
  city: string;
}

function createAffiliateCode(fullName: string): string {
  const seed = fullName
    .replace(/[^a-zA-Z]/g, "")
    .toUpperCase()
    .slice(0, 4);
  const suffix = Math.floor(1000 + Math.random() * 9000);
  return `HOLYPAV-${seed || "CREW"}${suffix}`;
}

const initialFormState: PartnerFormState = {
  fullName: "",
  email: "",
  phone: "",
  socialHandle: "",
  platform: "",
  followers: "",
  city: "Bengaluru",
};

const inputBase =
  "w-full rounded-xl border border-[var(--line-strong)] bg-[var(--paper)] px-4 py-3 text-sm text-[var(--ink)] outline-none transition-colors duration-200 focus:border-[var(--brand-red)]";

const labelBase =
  "space-y-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--ink-muted)]";

export default function PartnersPage() {
  const { dictionary } = useApp();
  const [form, setForm] = useState<PartnerFormState>(initialFormState);
  const [affiliateCode, setAffiliateCode] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    window.setTimeout(() => {
      setAffiliateCode(createAffiliateCode(form.fullName));
      setIsSubmitting(false);
    }, 600);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  return (
    <div className="space-y-20">
      <section className="max-w-3xl">
        <Ribbon>{dictionary.partners.introBadge}</Ribbon>
        <h1 className="mt-6 font-display text-[44px] leading-[0.92] text-[var(--ink-strong)] sm:text-[60px] lg:text-[72px]">
          {dictionary.partners.title}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--ink-muted)] sm:text-lg">
          {dictionary.partners.subtitle}
        </p>
      </section>

      <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <aside className="space-y-8">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--ink-faint)]">
              {dictionary.partners.benefitsTitle}
            </p>
            <ul className="mt-6 space-y-6">
              {dictionary.partners.benefits.map((benefit, index) => (
                <li key={benefit} className="flex items-start gap-4">
                  <span className="font-display text-[13px] tracking-[0.04em] text-[var(--brand-red)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="flex-1 text-[15px] leading-[1.6] text-[var(--ink)]">
                    {benefit}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[var(--line)] bg-[var(--brand-gold-soft)] p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--ink-muted)]">
              Sample code
            </p>
            <p className="mt-3 font-display text-2xl text-[var(--ink-strong)]">
              HOLYPAV-RHEA4821
            </p>
            <p className="mt-3 text-[13px] leading-[1.55] text-[var(--ink-muted)]">
              Every partner gets a unique code. Followers who use it get a discount; you get the tracking.
            </p>
          </div>
        </aside>

        <article
          className={
            affiliateCode
              ? "panel-grain relative overflow-hidden rounded-2xl p-7 sm:p-10"
              : "rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-7 sm:p-10"
          }
          style={affiliateCode ? { backgroundColor: "var(--brand-red-deep)" } : undefined}
        >
          {affiliateCode ? (
            <div className="relative space-y-4">
              <div className="absolute -top-2 right-0">
                <StampBadge
                  lines={[dictionary.partners.stampLine1, dictionary.partners.stampLine2]}
                  tone="on-dark"
                  size={88}
                />
              </div>
              <p className="max-w-[70%] text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-gold)]">
                Welcome aboard
              </p>
              <h2 className="max-w-[70%] font-display text-[36px] leading-[0.95] text-[var(--paper)] sm:text-[44px]">
                {dictionary.partners.successTitle}
              </h2>
              <p className="max-w-[70%] text-[15px] leading-[1.6] text-[var(--paper)]/80">
                {dictionary.partners.successBody}
              </p>
              <div className="mt-6 rounded-2xl border border-dashed border-[var(--brand-gold)] bg-[var(--paper)]/10 p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-gold)]">
                  {dictionary.partners.codeLabel}
                </p>
                <p className="mt-3 font-display text-[28px] tracking-[0.04em] text-[var(--paper)] sm:text-[32px]">
                  {affiliateCode}
                </p>
              </div>
              <p className="pt-2 text-[13px] text-[var(--paper)]/70">
                {dictionary.partners.note}
              </p>
            </div>
          ) : (
            <>
              <h2 className="font-display text-[28px] leading-tight text-[var(--ink-strong)] sm:text-[32px]">
                {dictionary.partners.formTitle}
              </h2>

              <form className="mt-8 grid gap-5" onSubmit={onSubmit}>
                <label className={labelBase}>
                  {dictionary.partners.fullName}
                  <input
                    required
                    name="fullName"
                    value={form.fullName}
                    onChange={onChange}
                    className={inputBase}
                  />
                </label>

                <label className={labelBase}>
                  {dictionary.partners.email}
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    className={inputBase}
                  />
                </label>

                <label className={labelBase}>
                  {dictionary.partners.phone}
                  <input
                    required
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    inputMode="numeric"
                    className={inputBase}
                  />
                </label>

                <label className={labelBase}>
                  {dictionary.partners.socialHandle}
                  <input
                    required
                    name="socialHandle"
                    value={form.socialHandle}
                    onChange={onChange}
                    placeholder="@yourhandle"
                    className={inputBase}
                  />
                </label>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className={labelBase}>
                    {dictionary.partners.platform}
                    <select
                      required
                      name="platform"
                      value={form.platform}
                      onChange={onChange}
                      className={inputBase}
                    >
                      <option value="">Select</option>
                      <option value="instagram">Instagram</option>
                      <option value="youtube">YouTube</option>
                      <option value="x">X</option>
                      <option value="facebook">Facebook</option>
                    </select>
                  </label>

                  <label className={labelBase}>
                    {dictionary.partners.followers}
                    <input
                      required
                      name="followers"
                      value={form.followers}
                      onChange={onChange}
                      inputMode="numeric"
                      className={inputBase}
                    />
                  </label>
                </div>

                <label className={labelBase}>
                  {dictionary.partners.city}
                  <input
                    required
                    name="city"
                    value={form.city}
                    onChange={onChange}
                    className={inputBase}
                  />
                </label>

                <div className="pt-2">
                  <Button type="submit" variant="primary" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "Creating code…" : dictionary.partners.submit}
                  </Button>
                </div>
              </form>
            </>
          )}
        </article>
      </section>
    </div>
  );
}
