"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  useEffect,
  useMemo,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

import { EmptyState } from "@/components/shared/empty-state";
import { useApp } from "@/components/providers/app-provider";
import { trackEvent } from "@/lib/analytics";
import { validateCheckoutAddress } from "@/lib/checkout-validation";
import { formatCurrency } from "@/lib/format";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { orderService } from "@/services/order-service";
import { getPaymentGateway } from "@/services/payment-gateway";

export default function CheckoutPage() {
  const {
    dictionary,
    cartItems,
    totals,
    clearCart,
    setLastOrder,
    buildCustomerAddress,
  } = useApp();
  const router = useRouter();

  const [address, setAddress] = useState(() =>
    buildCustomerAddress({ city: "Bengaluru", landmark: "" }),
  );
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    if (cartItems.length > 0) {
      trackEvent("start_checkout", {
        itemCount: totals.totalItems,
        subtotal: totals.subtotal,
      });
    }
  }, [cartItems.length, totals.subtotal, totals.totalItems]);

  const whatsappHref = useMemo(
    () =>
      buildWhatsAppLink({
        items: cartItems,
        total: totals.total,
        customer: address,
      }),
    [address, cartItems, totals.total],
  );

  if (cartItems.length === 0) {
    return (
      <EmptyState
        title={dictionary.checkout.emptyCartTitle}
        subtitle={dictionary.checkout.emptyCartSubtitle}
        ctaLabel={dictionary.common.viewMenu}
        ctaHref="/menu"
      />
    );
  }

  const onInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setAddress((current) => ({ ...current, [name]: value }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validation = validateCheckoutAddress(address);

    if (!validation.isValid) {
      setErrors(Array.from(new Set(validation.errors)));
      return;
    }

    setErrors([]);
    setIsSubmitting(true);

    try {
      const draft = await orderService.createDraft({
        items: cartItems,
        customer: address,
        notes,
        paymentMethod: "mock",
      });

      const gateway = getPaymentGateway("mock");
      const intent = await gateway.createPaymentIntent(draft);
      const paymentResult = await gateway.startCheckout(intent, draft);
      const isVerified = await gateway.verifyPayment(paymentResult.referenceId);

      const summary = await orderService.confirmDraft(draft, {
        paymentStatus:
          paymentResult.status === "success" && isVerified ? "paid" : "failed",
      });

      setLastOrder(summary);
      clearCart();

      trackEvent("place_order_click", {
        orderId: summary.orderId,
        total: summary.total,
      });

      router.push(`/order/confirmation?orderId=${summary.orderId}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
      <form
        className="space-y-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8"
        onSubmit={onSubmit}
      >
        <section>
          <h1 className="text-3xl font-semibold text-slate-900">{dictionary.checkout.title}</h1>
          <p className="mt-2 text-slate-600">{dictionary.checkout.subtitle}</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-900">{dictionary.checkout.deliveryTitle}</h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-slate-700">
              {dictionary.checkout.customerName}
              <input
                required
                name="fullName"
                value={address.fullName}
                onChange={onInputChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-orange-400"
              />
            </label>

            <label className="space-y-2 text-sm font-medium text-slate-700">
              {dictionary.checkout.phone}
              <input
                required
                name="phone"
                inputMode="numeric"
                value={address.phone}
                onChange={onInputChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-orange-400"
              />
            </label>

            <label className="space-y-2 text-sm font-medium text-slate-700 sm:col-span-2">
              {dictionary.checkout.addressLine}
              <input
                required
                name="addressLine"
                value={address.addressLine}
                onChange={onInputChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-orange-400"
              />
            </label>

            <label className="space-y-2 text-sm font-medium text-slate-700">
              {dictionary.checkout.landmark}
              <input
                name="landmark"
                value={address.landmark}
                onChange={onInputChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-orange-400"
              />
            </label>

            <label className="space-y-2 text-sm font-medium text-slate-700">
              {dictionary.checkout.pincode}
              <input
                required
                name="pincode"
                inputMode="numeric"
                value={address.pincode}
                onChange={onInputChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-orange-400"
              />
            </label>

            <label className="space-y-2 text-sm font-medium text-slate-700 sm:col-span-2">
              {dictionary.checkout.city}
              <input
                required
                name="city"
                value={address.city}
                onChange={onInputChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-orange-400"
              />
            </label>

            <label className="space-y-2 text-sm font-medium text-slate-700 sm:col-span-2">
              {dictionary.checkout.notes}
              <textarea
                name="notes"
                rows={3}
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-orange-400"
              />
            </label>
          </div>
        </section>

        <section className="rounded-2xl border border-orange-200 bg-orange-50 p-5">
          <h2 className="text-lg font-semibold text-slate-900">{dictionary.checkout.paymentTitle}</h2>
          <p className="mt-2 text-sm text-slate-700">{dictionary.checkout.paymentSubtitle}</p>
          <p className="mt-2 text-sm font-semibold text-orange-700">
            Razorpay Key Placeholder: {process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ?? "not set"}
          </p>
        </section>

        {errors.length > 0 && (
          <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
            {errors.includes("required") && <p>{dictionary.checkout.requiredError}</p>}
            {errors.includes("phone") && <p>{dictionary.checkout.invalidPhone}</p>}
            {errors.includes("pincode") && <p>{dictionary.checkout.invalidPincode}</p>}
          </div>
        )}

        <div className="flex flex-wrap gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {isSubmitting ? "Processing..." : dictionary.checkout.placeOrder}
          </button>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            {dictionary.checkout.whatsappFallback}
          </a>
        </div>
      </form>

      <aside className="h-fit space-y-4 rounded-3xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-slate-900">{dictionary.common.total}</h2>
        <dl className="space-y-3 text-sm">
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

        <div className="space-y-2 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
          <p className="font-semibold">Items ({totals.totalItems})</p>
          <ul className="space-y-1">
            {cartItems.map((item) => (
              <li key={item.itemId} className="flex items-center justify-between gap-3">
                <span className="truncate">
                  {item.name} x {item.quantity}
                </span>
                <span>{formatCurrency(item.price * item.quantity)}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link href="/cart" className="text-sm font-semibold text-orange-600 hover:text-orange-700">
          {dictionary.nav.cart}
        </Link>
      </aside>
    </div>
  );
}
