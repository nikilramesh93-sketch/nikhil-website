import type { OrderDraft } from "@/types/commerce";

export interface PaymentIntent {
  id: string;
  amount: number;
  currency: "INR";
  provider: "mock" | "razorpay";
}

export interface PaymentResult {
  status: "success" | "failed";
  referenceId: string;
}

export interface PaymentGateway {
  createPaymentIntent(orderDraft: OrderDraft): Promise<PaymentIntent>;
  startCheckout(intent: PaymentIntent, orderDraft: OrderDraft): Promise<PaymentResult>;
  verifyPayment(referenceId: string): Promise<boolean>;
}

function createReference(prefix: string): string {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}`;
}

export class MockPaymentGateway implements PaymentGateway {
  async createPaymentIntent(orderDraft: OrderDraft): Promise<PaymentIntent> {
    return {
      id: createReference("mock_intent"),
      amount: orderDraft.total,
      currency: "INR",
      provider: "mock",
    };
  }

  async startCheckout(): Promise<PaymentResult> {
    return {
      status: "success",
      referenceId: createReference("mock_pay"),
    };
  }

  async verifyPayment(): Promise<boolean> {
    return true;
  }
}

export class RazorpayPaymentGateway implements PaymentGateway {
  async createPaymentIntent(): Promise<PaymentIntent> {
    throw new Error(
      "Razorpay gateway is not configured yet. Wire API endpoints before enabling it.",
    );
  }

  async startCheckout(): Promise<PaymentResult> {
    throw new Error(
      "Razorpay gateway is not configured yet. Wire API endpoints before enabling it.",
    );
  }

  async verifyPayment(): Promise<boolean> {
    throw new Error(
      "Razorpay gateway is not configured yet. Wire API endpoints before enabling it.",
    );
  }
}

export function getPaymentGateway(
  mode: "mock" | "razorpay" = "mock",
): PaymentGateway {
  if (mode === "razorpay") {
    return new RazorpayPaymentGateway();
  }

  return new MockPaymentGateway();
}
