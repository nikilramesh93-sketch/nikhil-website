"use client";

import Link from "next/link";

import { EmptyState } from "@/components/shared/empty-state";
import { useApp } from "@/components/providers/app-provider";
import { formatCurrency } from "@/lib/format";

export default function CartPage() {
  const {
    dictionary,
    locale,
    cartItems,
    totals,
    updateCartQuantity,
    removeFromCart,
    clearCart,
  } = useApp();

  if (cartItems.length === 0) {
    return (
      <EmptyState
        title={dictionary.cart.emptyTitle}
        subtitle={dictionary.cart.emptySubtitle}
        ctaLabel={dictionary.common.viewMenu}
        ctaHref="/menu"
      />
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
      <section className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900">{dictionary.cart.title}</h1>
            <p className="mt-2 text-slate-600">{dictionary.cart.subtitle}</p>
          </div>
          <button
            type="button"
            onClick={clearCart}
            className="rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-slate-700 hover:bg-slate-100"
          >
            {dictionary.cart.clear}
          </button>
        </div>

        <div className="space-y-3">
          {cartItems.map((item) => (
            <article
              key={item.itemId}
              className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  {locale === "kn" ? item.nameKn : item.name}
                </h2>
                <p className="text-sm text-slate-600">{formatCurrency(item.price)}</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => updateCartQuantity(item.itemId, item.quantity - 1)}
                  className="h-8 w-8 rounded-full border border-slate-300 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                  aria-label="decrease quantity"
                >
                  -
                </button>
                <span className="min-w-8 text-center text-sm font-semibold text-slate-900">
                  {item.quantity}
                </span>
                <button
                  type="button"
                  onClick={() => updateCartQuantity(item.itemId, item.quantity + 1)}
                  className="h-8 w-8 rounded-full border border-slate-300 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                  aria-label="increase quantity"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={() => removeFromCart(item.itemId)}
                className="text-sm font-semibold text-rose-600 hover:text-rose-700"
              >
                {dictionary.common.remove}
              </button>
            </article>
          ))}
        </div>
      </section>

      <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">{dictionary.nav.checkout}</h2>

        <dl className="mt-6 space-y-3 text-sm">
          <div className="flex items-center justify-between text-slate-700">
            <dt>{dictionary.common.subtotal}</dt>
            <dd>{formatCurrency(totals.subtotal)}</dd>
          </div>
          <div className="flex items-center justify-between text-slate-700">
            <dt>{dictionary.common.delivery}</dt>
            <dd>{dictionary.common.free}</dd>
          </div>
          <div className="h-px bg-slate-200" />
          <div className="flex items-center justify-between text-base font-semibold text-slate-900">
            <dt>{dictionary.common.total}</dt>
            <dd>{formatCurrency(totals.total)}</dd>
          </div>
        </dl>

        <div className="mt-6 space-y-3">
          <Link
            href="/checkout"
            className="flex w-full items-center justify-center rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-700"
          >
            {dictionary.common.checkoutNow}
          </Link>
          <Link
            href="/menu"
            className="flex w-full items-center justify-center rounded-full border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            {dictionary.common.continueShopping}
          </Link>
        </div>
      </aside>
    </div>
  );
}
