"use client";

import Link from "next/link";

import { EmptyState } from "@/components/shared/empty-state";
import { useApp } from "@/components/providers/app-provider";
import { formatCurrency } from "@/lib/format";
import { buildWhatsAppLinkFromOrder } from "@/lib/whatsapp";

export default function OrderConfirmationPage() {
  const { dictionary, lastOrder } = useApp();

  if (!lastOrder) {
    return (
      <EmptyState
        title={dictionary.confirmation.noOrderTitle}
        subtitle={dictionary.confirmation.noOrderSubtitle}
        ctaLabel={dictionary.nav.checkout}
        ctaHref="/checkout"
      />
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
      <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">
            {dictionary.confirmation.title}
          </h1>
          <p className="mt-2 text-slate-600">{dictionary.confirmation.subtitle}</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
          <p>
            <span className="font-semibold">Order ID:</span> {lastOrder.orderId}
          </p>
          <p className="mt-2">
            <span className="font-semibold">{dictionary.confirmation.paymentStatus}:</span>{" "}
            {lastOrder.paymentStatus}
          </p>
          <p className="mt-2">
            <span className="font-semibold">{dictionary.confirmation.orderStatus}:</span>{" "}
            {lastOrder.orderStatus}
          </p>
        </div>

        <div className="space-y-3">
          {lastOrder.items.map((item) => (
            <div
              key={item.itemId}
              className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white px-4 py-3"
            >
              <p className="text-sm text-slate-700">
                {item.name} x {item.quantity}
              </p>
              <p className="text-sm font-semibold text-slate-900">
                {formatCurrency(item.price * item.quantity)}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={buildWhatsAppLinkFromOrder(lastOrder)}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700"
          >
            {dictionary.confirmation.whatsapp}
          </a>
          <Link
            href="/menu"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            {dictionary.common.viewMenu}
          </Link>
        </div>
      </section>

      <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-slate-900">Delivery details</h2>
        <dl className="mt-5 space-y-2 text-sm text-slate-700">
          <div>
            <dt className="font-semibold text-slate-900">Name</dt>
            <dd>{lastOrder.customer.fullName}</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900">Phone</dt>
            <dd>{lastOrder.customer.phone}</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900">Address</dt>
            <dd>{lastOrder.customer.addressLine}</dd>
          </div>
          {lastOrder.customer.landmark && (
            <div>
              <dt className="font-semibold text-slate-900">Landmark</dt>
              <dd>{lastOrder.customer.landmark}</dd>
            </div>
          )}
          <div>
            <dt className="font-semibold text-slate-900">City</dt>
            <dd>{lastOrder.customer.city}</dd>
          </div>
        </dl>

        <div className="mt-6 space-y-2 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex items-center justify-between text-sm text-slate-700">
            <span>{dictionary.common.subtotal}</span>
            <span>{formatCurrency(lastOrder.subtotal)}</span>
          </div>
          <div className="flex items-center justify-between text-sm text-slate-700">
            <span>{dictionary.common.delivery}</span>
            <span>{dictionary.common.free}</span>
          </div>
          <div className="h-px bg-slate-200" />
          <div className="flex items-center justify-between font-semibold text-slate-900">
            <span>{dictionary.common.total}</span>
            <span>{formatCurrency(lastOrder.total)}</span>
          </div>
        </div>
      </aside>
    </div>
  );
}
