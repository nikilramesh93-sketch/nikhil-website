"use client";

import { useApp } from "@/components/providers/app-provider";

export default function ContactPage() {
  const { dictionary } = useApp();

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <section className="rounded-3xl border border-slate-200 bg-white p-8">
        <h1 className="text-3xl font-semibold text-slate-900">{dictionary.contact.title}</h1>
        <p className="mt-3 text-slate-600">{dictionary.contact.subtitle}</p>

        <dl className="mt-8 space-y-6 text-sm text-slate-700">
          <div>
            <dt className="font-semibold text-slate-900">{dictionary.contact.addressLabel}</dt>
            <dd className="mt-1">12, 100 Feet Road, Indiranagar, Bengaluru 560038</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900">{dictionary.contact.phoneLabel}</dt>
            <dd className="mt-1">+91 98765 43210</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900">{dictionary.contact.timingLabel}</dt>
            <dd className="mt-1">Mon-Sun, 11:00 AM - 11:00 PM</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900">{dictionary.contact.corporateLabel}</dt>
            <dd className="mt-1">corporate@holypav.in</dd>
          </div>
        </dl>
      </section>

      <section className="rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-100 via-amber-50 to-white p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Corporate and bulk enquiries</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          Planning team lunches, events, or bulk snack boxes? Share expected
          volume, date, and delivery zones in Bengaluru. We respond within one
          business day.
        </p>

        <a
          href="mailto:corporate@holypav.in"
          className="mt-6 inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700"
        >
          Email Holy Pav
        </a>
      </section>
    </div>
  );
}
