"use client";

import Image from "next/image";

import type { MenuItem } from "@/types/commerce";
import { formatCurrency } from "@/lib/format";
import { useApp } from "@/components/providers/app-provider";

interface MenuCardProps {
  item: MenuItem;
  featured?: boolean;
}

export function MenuCard({ item, featured = false }: MenuCardProps) {
  const { dictionary, locale } = useApp();
  const itemName = locale === "kn" ? item.nameKn : item.name;
  const itemDescription = locale === "kn" ? item.descriptionKn : item.description;
  const isVeg = item.dietaryTag === "veg";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--paper)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[var(--line-strong)] hover:shadow-[0_24px_60px_-30px_rgba(31,20,16,0.25)]">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--paper-soft)]">
        <Image
          src={item.image}
          alt={itemName}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <span
            className={`flex h-4 w-4 items-center justify-center rounded-[3px] border-[1.5px] bg-white ${
              isVeg ? "border-[#3F7B2F]" : "border-[#8E1B1B]"
            }`}
            aria-label={isVeg ? "Vegetarian" : "Non-vegetarian"}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isVeg ? "bg-[#3F7B2F]" : "bg-[#8E1B1B]"
              }`}
            />
          </span>
          {featured && (
            <span className="rounded-full bg-[var(--brand-gold)] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[var(--ink-strong)]">
              Signature
            </span>
          )}
        </div>
        {!item.isAvailable && (
          <div className="absolute inset-0 flex items-center justify-center bg-[var(--ink-strong)]/55 backdrop-blur-[1px]">
            <span className="rounded-full bg-[var(--paper)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--ink-strong)]">
              {dictionary.menu.outOfStock}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-[26px] leading-[0.95] text-[var(--ink-strong)] sm:text-[28px]">
          {itemName}
        </h3>
        <p className="mt-2.5 line-clamp-2 text-[13px] leading-[1.55] text-[var(--ink-muted)]">
          {itemDescription}
        </p>

        <div className="mt-auto flex items-end justify-between gap-3 pt-5">
          <p className="text-[20px] font-semibold leading-none text-[var(--ink-strong)]">
            {formatCurrency(item.price)}
          </p>
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--ink-faint)]">
            {isVeg ? dictionary.common.veg : dictionary.common.nonVeg}
          </p>
        </div>
      </div>
    </article>
  );
}
