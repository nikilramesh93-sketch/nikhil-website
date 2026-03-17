"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

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

export default function PartnersPage() {
  const { dictionary } = useApp();
  const [form, setForm] = useState<PartnerFormState>(initialFormState);
  const [affiliateCode, setAffiliateCode] = useState<string | null>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAffiliateCode(createAffiliateCode(form.fullName));
  };

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-100 via-amber-50 to-white p-7 sm:p-10">
        <p className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-orange-700">
          {dictionary.partners.introBadge}
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">
          {dictionary.partners.title}
        </h1>
        <p className="mt-3 max-w-3xl text-slate-700">{dictionary.partners.subtitle}</p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            {dictionary.partners.benefitsTitle}
          </h2>
          <ul className="mt-4 space-y-3">
            {dictionary.partners.benefits.map((benefit) => (
              <li
                key={benefit}
                className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700"
              >
                {benefit}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            {dictionary.partners.formTitle}
          </h2>

          <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
            <label className="space-y-2 text-sm font-medium text-slate-700">
              {dictionary.partners.fullName}
              <input
                required
                name="fullName"
                value={form.fullName}
                onChange={onChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-orange-400"
              />
            </label>

            <label className="space-y-2 text-sm font-medium text-slate-700">
              {dictionary.partners.email}
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-orange-400"
              />
            </label>

            <label className="space-y-2 text-sm font-medium text-slate-700">
              {dictionary.partners.phone}
              <input
                required
                name="phone"
                value={form.phone}
                onChange={onChange}
                inputMode="numeric"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-orange-400"
              />
            </label>

            <label className="space-y-2 text-sm font-medium text-slate-700">
              {dictionary.partners.socialHandle}
              <input
                required
                name="socialHandle"
                value={form.socialHandle}
                onChange={onChange}
                placeholder="@yourhandle"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-orange-400"
              />
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-slate-700">
                {dictionary.partners.platform}
                <select
                  required
                  name="platform"
                  value={form.platform}
                  onChange={onChange}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-orange-400"
                >
                  <option value="">Select</option>
                  <option value="instagram">Instagram</option>
                  <option value="youtube">YouTube</option>
                  <option value="x">X</option>
                  <option value="facebook">Facebook</option>
                </select>
              </label>

              <label className="space-y-2 text-sm font-medium text-slate-700">
                {dictionary.partners.followers}
                <input
                  required
                  name="followers"
                  value={form.followers}
                  onChange={onChange}
                  inputMode="numeric"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-orange-400"
                />
              </label>
            </div>

            <label className="space-y-2 text-sm font-medium text-slate-700">
              {dictionary.partners.city}
              <input
                required
                name="city"
                value={form.city}
                onChange={onChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-orange-400"
              />
            </label>

            <button
              type="submit"
              className="mt-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              {dictionary.partners.submit}
            </button>
          </form>

          {affiliateCode && (
            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
              <h3 className="text-lg font-semibold text-emerald-800">
                {dictionary.partners.successTitle}
              </h3>
              <p className="mt-2 text-sm text-emerald-700">
                {dictionary.partners.successBody}
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-700">
                {dictionary.partners.codeLabel}
              </p>
              <p className="mt-1 text-xl font-bold tracking-wide text-emerald-900">
                {affiliateCode}
              </p>
              <p className="mt-3 text-sm text-emerald-700">{dictionary.partners.note}</p>
            </div>
          )}
        </article>
      </section>
    </div>
  );
}
