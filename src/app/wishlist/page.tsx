"use client";

import { EmptyState } from "@/components/shared/empty-state";
import { useApp } from "@/components/providers/app-provider";
import { formatCurrency } from "@/lib/format";

export default function WishlistPage() {
  const {
    dictionary,
    locale,
    wishlistItems,
    moveWishlistToCart,
    removeFromWishlist,
  } = useApp();

  if (wishlistItems.length === 0) {
    return (
      <EmptyState
        title={dictionary.wishlist.emptyTitle}
        subtitle={dictionary.wishlist.emptySubtitle}
        ctaLabel={dictionary.common.viewMenu}
        ctaHref="/menu"
      />
    );
  }

  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-3xl font-semibold text-slate-900">{dictionary.wishlist.title}</h1>
        <p className="mt-2 text-slate-600">{dictionary.wishlist.subtitle}</p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        {wishlistItems.map((item) => (
          <article key={item.itemId} className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              {locale === "kn" ? item.nameKn : item.name}
            </h2>
            <p className="mt-2 text-sm text-slate-600">{formatCurrency(item.price)}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => moveWishlistToCart(item.itemId)}
                className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
              >
                {dictionary.common.moveToCart}
              </button>
              <button
                type="button"
                onClick={() => removeFromWishlist(item.itemId)}
                className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                {dictionary.common.remove}
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
