"use client";

import { useEffect } from "react";

import { MenuCard } from "@/components/menu/menu-card";
import { useApp } from "@/components/providers/app-provider";
import { featuredMenuIds, menuItems } from "@/data/menu";
import { trackEvent } from "@/lib/analytics";

export default function MenuPage() {
  const { dictionary, locale } = useApp();

  useEffect(() => {
    trackEvent("view_menu");
  }, []);

  const groupedItems = menuItems.reduce<Record<string, typeof menuItems>>((acc, item) => {
    const key = locale === "kn" ? item.categoryKn : item.category;
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});

  const categoryEntries = Object.entries(groupedItems);

  return (
    <div className="space-y-20">
      <section className="max-w-3xl">
        <p className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--brand-red)]">
          <span className="h-px w-6 bg-[var(--brand-red)]" />
          The menu
        </p>
        <h1 className="mt-6 font-display text-[44px] leading-[0.92] text-[var(--ink-strong)] sm:text-[64px] lg:text-[76px]">
          {dictionary.menu.title}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--ink-muted)] sm:text-lg">
          {dictionary.menu.subtitle}
        </p>
      </section>

      <div className="space-y-20">
        {categoryEntries.map(([category, items], index) => (
          <section key={category}>
            <div className="flex items-end justify-between gap-4 border-b border-[var(--line)] pb-4">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-[14px] tracking-[0.04em] text-[var(--brand-red)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-[26px] leading-none text-[var(--ink-strong)] sm:text-[32px]">
                  {category}
                </h2>
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--ink-faint)]">
                {items.length} items
              </span>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <MenuCard
                  key={item.id}
                  item={item}
                  featured={featuredMenuIds.includes(item.id)}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
