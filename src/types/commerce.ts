export type Locale = "en" | "kn";

export type DietaryTag = "veg" | "non-veg";

export type PaymentMethod = "mock" | "razorpay-placeholder" | "whatsapp";

export type PaymentStatus = "pending" | "paid" | "failed";

export type OrderStatus = "draft" | "confirmed";

export interface MenuItem {
  id: string;
  name: string;
  nameKn: string;
  description: string;
  descriptionKn: string;
  price: number;
  category: string;
  categoryKn: string;
  dietaryTag: DietaryTag;
  isAvailable: boolean;
  accent: string;
  image: string;
}

export interface CartItem {
  itemId: string;
  name: string;
  nameKn: string;
  price: number;
  quantity: number;
  dietaryTag: DietaryTag;
  accent: string;
}

export interface WishlistItem {
  itemId: string;
  name: string;
  nameKn: string;
  price: number;
  dietaryTag: DietaryTag;
  accent: string;
}

export interface CustomerAddress {
  fullName: string;
  phone: string;
  addressLine: string;
  landmark: string;
  pincode: string;
  city: string;
}

export interface OrderDraft {
  id: string;
  items: CartItem[];
  customer: CustomerAddress;
  notes: string;
  subtotal: number;
  deliveryFee: number;
  total: number;
  paymentMethod: PaymentMethod;
  createdAt: string;
  status: OrderStatus;
}

export interface OrderSummary {
  orderId: string;
  items: CartItem[];
  customer: CustomerAddress;
  notes: string;
  subtotal: number;
  deliveryFee: number;
  total: number;
  paymentStatus: PaymentStatus;
  orderStatus: Exclude<OrderStatus, "draft">;
  paymentMethod: PaymentMethod;
  createdAt: string;
  updatedAt: string;
}

export interface OrderCreateInput {
  items: CartItem[];
  customer: CustomerAddress;
  notes: string;
  paymentMethod: PaymentMethod;
}

export interface ConfirmOrderInput {
  paymentStatus: PaymentStatus;
}
