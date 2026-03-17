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

            <div className="mt-8 grid max-w-lg grid-cols-3 gap-2">
              <div className="rounded-2xl border border-orange-200 bg-orange-50 px-3 py-2 text-center">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-600">
                  Prep
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-900">12 min</p>
              </div>
              <div className="rounded-2xl border border-amber-200 bg-amber-50 px-3 py-2 text-center">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-600">
                  Heat
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-900">Spicy</p>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-center">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-600">
                  Delivery
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-900">Free</p>
              </div>
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
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-700">
                Holy Pav Signature
              </p>
              <h2 className="font-display text-4xl leading-none text-slate-900">
                Cheese Burst Vada Pav
              </h2>
              <p className="text-sm text-slate-700">
                Toasted pav, crispy potato center, layered chutneys, and molten cheese.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="font-display text-5xl leading-none text-slate-900">
            {dictionary.home.trustTitle}
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {dictionary.home.trustCards.map((card) => (
            <article key={card} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm leading-7 text-slate-700">{card}</p>
            </article>
          ))}
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
