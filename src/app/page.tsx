"use client";

import Image from "next/image";
import Link from "next/link";

import { MenuCard } from "@/components/menu/menu-card";
import { useApp } from "@/components/providers/app-provider";
import { featuredMenuIds, menuItems } from "@/data/menu";

const featuredItems = menuItems.filter((item) => featuredMenuIds.includes(item.id));

export default function HomePage() {
  const { dictionary } = useApp();

  return (
    <div className="space-y-20">
      <section className="overflow-hidden rounded-3xl border border-orange-200/70 bg-white p-8 shadow-sm lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-orange-300 bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-orange-700">
              {dictionary.home.kicker}
            </p>
            <h1 className="mt-5 font-display text-6xl leading-[0.92] text-orange-700 sm:text-7xl">
              {dictionary.home.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
              {dictionary.home.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/menu"
                className="rounded-full border border-orange-500 bg-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-slate-700"
              >
                {dictionary.home.primaryCta}
              </Link>
              <Link
                href="/checkout"
                className="rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-slate-700 transition hover:bg-slate-100"
              >
                {dictionary.home.secondaryCta}
              </Link>
            </div>

          </div>

          <div className="relative isolate overflow-hidden rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-100 via-amber-50 to-emerald-50 p-6">
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full border-4 border-orange-300/60" />
            <Image
              src="/hero-logo.png"
              alt="Holy Pav hero logo"
              width={1024}
              height={1024}
              className="mx-auto h-auto w-full max-w-[420px] object-contain rounded-2xl border border-orange-200/70 bg-white/70 p-3"
              priority
            />
            <div className="mt-6 space-y-2 px-2">
              <h2 className="font-display text-4xl leading-none text-slate-900">
                Holy Pav
              </h2>
              <p className="text-sm leading-6 text-slate-700">
                Holy Pav serves craveable Mumbai-style comfort food with a sharper, cleaner point of
                view.
              </p>
              <p className="text-sm text-slate-700">
                A focused menu, bold flavor, and a familiar street-food soul built for repeat orders.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[2rem] border border-orange-200/70 bg-gradient-to-br from-[#f7ecdf] via-[#f2e4d4] to-[#ead8c4] p-8 shadow-sm lg:p-10">
        <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,rgba(178,13,13,0.12),transparent_70%)]" />
        <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-orange-200/30 blur-3xl" />
        <div className="absolute -right-10 top-10 h-48 w-48 rounded-full bg-amber-200/30 blur-3xl" />

        <div className="relative">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-700">
              Brand standards
            </p>
            <h2 className="mt-3 font-display text-5xl leading-none text-slate-900">
              {dictionary.home.trustTitle}
            </h2>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {dictionary.home.trustCards.map((card, index) => (
              <article
                key={card.title}
                className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br from-orange-700 via-orange-700 to-orange-800 p-6 text-white shadow-[0_24px_60px_-30px_rgba(134,0,0,0.85)]"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
                <div className="absolute inset-x-0 top-0 h-px bg-white/20" />
                <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-orange-50">
                  0{index + 1}
                </p>
                <h3 className="mt-6 text-3xl leading-none text-white">
                  {card.title}
                </h3>
                <p className="mt-5 text-base leading-8 text-orange-50/92">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-5xl leading-none text-slate-900">
            {dictionary.home.bestsellerTitle}
          </h2>
          <Link href="/menu" className="text-sm font-semibold text-orange-600 hover:text-orange-700">
            {dictionary.common.viewMenu}
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
