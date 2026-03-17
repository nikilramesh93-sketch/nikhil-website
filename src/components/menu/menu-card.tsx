"use client";

import Image from "next/image";

import type { MenuItem } from "@/types/commerce";
import { formatCurrency } from "@/lib/format";
import { trackEvent } from "@/lib/analytics";
import { useApp } from "@/components/providers/app-provider";

interface MenuCardProps {
  item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
  const { dictionary, locale, addToCart, addToWishlist } = useApp();
  const itemName = locale === "kn" ? item.nameKn : item.name;
  const itemDescription = locale === "kn" ? item.descriptionKn : item.description;

  const onAddToCart = () => {
    addToCart(item);
    trackEvent("add_to_cart", { itemId: item.id, price: item.price });
  };

  const onWishlist = () => {
    addToWishlist(item);
  };

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className={`relative h-44 overflow-hidden bg-gradient-to-r ${item.accent}`}>
        <Image
          src={item.image}
          alt={itemName}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
        <div className="absolute left-5 top-5 inline-flex rounded-full border border-white/70 bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-700">
          {item.dietaryTag === "veg" ? dictionary.common.veg : dictionary.common.nonVeg}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="min-h-[7.5rem]">
          <h3 className="min-h-[4rem] font-display text-3xl leading-[0.9] text-slate-900 [display:-webkit-box] overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
            {itemName}
          </h3>
          <p className="mt-2 min-h-[3.5rem] text-sm leading-6 text-slate-600 [display:-webkit-box] overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
            {itemDescription}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
          <p className="text-lg font-semibold text-slate-900">{formatCurrency(item.price)}</p>
          <p className="text-right text-xs text-slate-500">
            {dictionary.menu.availabilityLabel}:{" "}
            {item.isAvailable ? dictionary.menu.inStock : dictionary.menu.outOfStock}
          </p>
        </div>

        <div className="mt-4 grid gap-2">
          <button
            type="button"
            onClick={onAddToCart}
            disabled={!item.isAvailable}
            className="w-full rounded-full border border-orange-500 bg-slate-900 px-4 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:border-slate-300 disabled:bg-slate-300"
          >
            {item.isAvailable ? dictionary.common.addToCart : dictionary.common.unavailable}
          </button>
          <button
            type="button"
            onClick={onWishlist}
            className="w-full rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-slate-700 transition hover:bg-slate-100"
          >
            {dictionary.common.addToWishlist}
          </button>
        </div>
      </div>
    </article>
  );
}
