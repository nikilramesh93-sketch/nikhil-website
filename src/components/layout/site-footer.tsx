"use client";

import Link from "next/link";

import { useApp } from "@/components/providers/app-provider";

export function SiteFooter() {
  const { dictionary } = useApp();

  return (
    <footer className="border-t border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
            {dictionary.brand.name}
          </p>
          <h2 className="mt-2 font-display text-4xl leading-[0.9] text-slate-900">
            {dictionary.brand.tagline}
          </h2>
          <p className="mt-3 max-w-md text-sm text-slate-600">
            Premium street-food ordering experience for Bengaluru-first delivery.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm font-semibold uppercase tracking-[0.1em] text-slate-700">
          <Link className="hover:text-orange-700" href="/menu">
            {dictionary.nav.menu}
          </Link>
          <Link className="hover:text-orange-700" href="/cart">
            {dictionary.nav.cart}
          </Link>
          <Link className="hover:text-orange-700" href="/wishlist">
            {dictionary.nav.wishlist}
          </Link>
          <Link className="hover:text-orange-700" href="/checkout">
            {dictionary.nav.checkout}
          </Link>
          <Link className="hover:text-orange-700" href="/partners">
            {dictionary.nav.partners}
          </Link>
          <Link className="hover:text-orange-700" href="/contact">
            {dictionary.nav.contact}
          </Link>
        </div>
      </div>
    </footer>
  );
}
