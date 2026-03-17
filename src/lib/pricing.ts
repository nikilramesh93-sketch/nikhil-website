import type { CartItem } from "@/types/commerce";

export interface PriceSummary {
  subtotal: number;
  deliveryFee: number;
  total: number;
  totalItems: number;
}

export function calculatePriceSummary(items: CartItem[]): PriceSummary {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const deliveryFee = 0;

  return {
    subtotal,
    deliveryFee,
    total: subtotal + deliveryFee,
    totalItems,
  };
}
