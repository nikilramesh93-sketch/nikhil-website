import { calculatePriceSummary } from "@/lib/pricing";
import type {
  ConfirmOrderInput,
  OrderCreateInput,
  OrderDraft,
  OrderSummary,
} from "@/types/commerce";

export interface OrderService {
  createDraft(input: OrderCreateInput): Promise<OrderDraft>;
  confirmDraft(draft: OrderDraft, input: ConfirmOrderInput): Promise<OrderSummary>;
}

function createOrderId(): string {
  return `HP-${Date.now().toString(36).toUpperCase()}`;
}

export class MockOrderService implements OrderService {
  async createDraft(input: OrderCreateInput): Promise<OrderDraft> {
    const summary = calculatePriceSummary(input.items);

    return {
      id: createOrderId(),
      items: input.items,
      customer: input.customer,
      notes: input.notes,
      subtotal: summary.subtotal,
      deliveryFee: summary.deliveryFee,
      total: summary.total,
      paymentMethod: input.paymentMethod,
      createdAt: new Date().toISOString(),
      status: "draft",
    };
  }

  async confirmDraft(
    draft: OrderDraft,
    input: ConfirmOrderInput,
  ): Promise<OrderSummary> {
    return {
      orderId: draft.id,
      items: draft.items,
      customer: draft.customer,
      notes: draft.notes,
      subtotal: draft.subtotal,
      deliveryFee: draft.deliveryFee,
      total: draft.total,
      paymentStatus: input.paymentStatus,
      orderStatus: "confirmed",
      paymentMethod: draft.paymentMethod,
      createdAt: draft.createdAt,
      updatedAt: new Date().toISOString(),
    };
  }
}

export const orderService: OrderService = new MockOrderService();
