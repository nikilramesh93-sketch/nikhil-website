"use client";

import { useEffect, useRef, useState } from "react";

import { MenuCard } from "@/components/menu/menu-card";
import { Ribbon } from "@/components/ui/ribbon";
import { useApp } from "@/components/providers/app-provider";
import {
  featuredMenuIds,
  menuCategoryOrder,
  menuCategoryOrderKn,
  menuItems,
} from "@/data/menu";
import { trackEvent } from "@/lib/analytics";
import type { MenuItem } from "@/types/commerce";

const hasNonVegItems = menuItems.some((item) => item.dietaryTag === "non-veg");

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

interface CategoryGroup {
  category: string;
  slug: string;
  subgroups: { subcategory: string | null; items: MenuItem[] }[];
  itemCount: number;
}

export default function MenuPage() {
  const { dictionary, locale } = useApp();
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    trackEvent("view_menu");
  }, []);

  const categoryGroups: CategoryGroup[] = menuCategoryOrder
    .map((categoryLabelEn, index): CategoryGroup | null => {
      const categoryLabel = locale === "kn" ? menuCategoryOrderKn[index] : categoryLabelEn;
      const items = menuItems.filter((item) =>
        (locale === "kn" ? item.categoryKn : item.category) === categoryLabel
      );
      if (items.length === 0) return null;

      const subcategoryLabels: (string | null)[] = [];
      items.forEach((item) => {
        const subLabel = locale === "kn" ? item.subcategoryKn ?? null : item.subcategory ?? null;
        if (!subcategoryLabels.includes(subLabel)) {
          subcategoryLabels.push(subLabel);
        }
      });

      const subgroups = subcategoryLabels.map((subLabel) => ({
        subcategory: subLabel,
        items: items.filter(
          (item) =>
            (locale === "kn" ? item.subcategoryKn ?? null : item.subcategory ?? null) ===
            subLabel
        ),
      }));

      return {
        category: categoryLabel,
        slug: slugify(categoryLabelEn),
        subgroups,
        itemCount: items.length,
      };
    })
    .filter((group): group is CategoryGroup => group !== null);

  const categorySlugs = categoryGroups.map((group) => group.slug).join(",");

  useEffect(() => {
    const slugs = categorySlugs.split(",").filter(Boolean);
    const sections = slugs
      .map((slug) => document.getElementById(slug))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveSlug(visible[0].target.id);
        }
      },
      { rootMargin: "-140px 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [categorySlugs]);

  useEffect(() => {
    if (!activeSlug || !navRef.current) return;
    const activePill = navRef.current.querySelector<HTMLElement>(`a[href="#${activeSlug}"]`);
    activePill?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [activeSlug]);

  return (
    <div className="space-y-20">
      <section className="max-w-3xl">
        <Ribbon>{dictionary.menu.ribbon}</Ribbon>
        <h1 className="mt-6 font-display text-[44px] leading-[0.92] text-[var(--ink-strong)] sm:text-[64px] lg:text-[76px]">
          {dictionary.menu.title}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--ink-muted)] sm:text-lg">
          {dictionary.menu.subtitle}
        </p>
        {!hasNonVegItems && (
          <p className="mt-4 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-green)]">
            <span
              className="flex h-4 w-4 items-center justify-center rounded-[3px] border-[1.5px] border-[#3F7B2F] bg-white"
              aria-hidden
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#3F7B2F]" />
            </span>
            {dictionary.menu.vegNote}
          </p>
        )}
      </section>

      <nav
        ref={navRef}
        aria-label="Menu categories"
        className="sticky top-[64px] z-30 -mx-5 flex gap-2 overflow-x-auto border-b border-[var(--line)] bg-[var(--background)]/95 px-5 py-3 backdrop-blur-md sm:-mx-6 sm:px-6 lg:top-[72px]"
      >
        {categoryGroups.map((group) => {
          const isActive = group.slug === activeSlug;
          return (
            <a
              key={group.slug}
              href={`#${group.slug}`}
              aria-current={isActive ? "true" : undefined}
              className={
                isActive
                  ? "shrink-0 rounded-full border border-[var(--brand-red)] bg-[var(--brand-red)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--paper)] transition-colors duration-200"
                  : "shrink-0 rounded-full border border-[var(--line-strong)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--ink-muted)] transition-colors duration-200 hover:border-[var(--brand-red)] hover:text-[var(--brand-red)]"
              }
            >
              {group.category}
            </a>
          );
        })}
      </nav>

      <div className="space-y-20">
        {categoryGroups.map((group, index) => (
          <section key={group.slug} id={group.slug} className="scroll-mt-32">
            <div className="flex items-end justify-between gap-4 border-b border-[var(--line)] pb-4">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-[14px] tracking-[0.04em] text-[var(--brand-red)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-[26px] leading-none text-[var(--ink-strong)] sm:text-[32px]">
                  {group.category}
                </h2>
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--ink-faint)]">
                {group.itemCount} items
              </span>
            </div>

            <div className="mt-10 space-y-10">
              {group.subgroups.map((subgroup) => (
                <div key={subgroup.subcategory ?? "default"}>
                  {subgroup.subcategory && (
                    <h3 className="mb-5 text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                      {subgroup.subcategory}
                    </h3>
                  )}
                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {subgroup.items.map((item) => (
                      <MenuCard
                        key={item.id}
                        item={item}
                        featured={featuredMenuIds.includes(item.id)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
