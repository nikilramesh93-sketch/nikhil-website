"use client";

import { useEffect } from "react";

import { MenuCard } from "@/components/menu/menu-card";
import { useApp } from "@/components/providers/app-provider";
import { menuItems } from "@/data/menu";
import { trackEvent } from "@/lib/analytics";

export default function MenuPage() {
  const { dictionary, locale } = useApp();

  useEffect(() => {
    trackEvent("view_menu");
  }, []);

  const groupedItems = menuItems.reduce<Record<string, typeof menuItems>>((acc, item) => {
    const key = locale === "kn" ? item.categoryKn : item.category;

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(item);
    return acc;
  }, {});

  return (
    <div className="space-y-10">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
          Holy Pav
        </p>
        <h1 className="mt-2 text-4xl font-semibold text-slate-900">{dictionary.menu.title}</h1>
        <p className="mt-3 max-w-2xl text-slate-600">{dictionary.menu.subtitle}</p>
      </section>

      <div className="space-y-12">
        {Object.entries(groupedItems).map(([category, items]) => (
          <section key={category} className="space-y-5">
            <h2 className="text-2xl font-semibold text-slate-900">{category}</h2>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {items.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
