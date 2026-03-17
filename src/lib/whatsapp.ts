import type { CartItem, CustomerAddress, OrderSummary } from "@/types/commerce";

interface WhatsAppPayload {
  orderId?: string;
  items: CartItem[];
  total: number;
  customer?: Partial<CustomerAddress>;
}

function formatItemLine(item: CartItem): string {
  return `${item.name} x ${item.quantity} = ₹${item.price * item.quantity}`;
}

export function buildOrderMessage(payload: WhatsAppPayload): string {
  const heading = payload.orderId
    ? `Holy Pav Order Confirmation (${payload.orderId})`
    : "Holy Pav Order Request";

  const lines = payload.items.map(formatItemLine);

  const customerLines = payload.customer
    ? [
        payload.customer.fullName ? `Name: ${payload.customer.fullName}` : "",
        payload.customer.phone ? `Phone: ${payload.customer.phone}` : "",
        payload.customer.addressLine
          ? `Address: ${payload.customer.addressLine}`
          : "",
        payload.customer.landmark ? `Landmark: ${payload.customer.landmark}` : "",
        payload.customer.pincode ? `Pincode: ${payload.customer.pincode}` : "",
      ].filter(Boolean)
    : [];

  return [
    heading,
    "",
    "Items:",
    ...lines,
    "",
    ...customerLines,
    customerLines.length ? "" : "",
    `Total: ₹${payload.total}`,
  ]
    .filter((line, index, list) => !(line === "" && list[index - 1] === ""))
    .join("\n");
}

export function buildWhatsAppLink(
  payload: WhatsAppPayload,
  phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919876543210",
): string {
  const message = buildOrderMessage(payload);
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppLinkFromOrder(order: OrderSummary): string {
  return buildWhatsAppLink({
    orderId: order.orderId,
    items: order.items,
    total: order.total,
    customer: order.customer,
  });
}
