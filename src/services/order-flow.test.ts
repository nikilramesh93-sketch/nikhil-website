import { menuItems } from "@/data/menu";
import { MockOrderService } from "@/services/order-service";
import { MockPaymentGateway } from "@/services/payment-gateway";

const cartItems = [
  {
    itemId: menuItems[0].id,
    name: menuItems[0].name,
    nameKn: menuItems[0].nameKn,
    price: menuItems[0].price,
    quantity: 2,
    dietaryTag: menuItems[0].dietaryTag,
    accent: menuItems[0].accent,
  },
];

describe("order flow integration", () => {
  it("creates draft, runs payment, and confirms order", async () => {
    const orderService = new MockOrderService();
    const paymentGateway = new MockPaymentGateway();

    const draft = await orderService.createDraft({
      items: cartItems,
      customer: {
        fullName: "Nikhil",
        phone: "9876543210",
        addressLine: "Indiranagar",
        landmark: "Metro",
        pincode: "560038",
        city: "Bengaluru",
      },
      notes: "No onions",
      paymentMethod: "mock",
    });

    const intent = await paymentGateway.createPaymentIntent(draft);
    const paymentResult = await paymentGateway.startCheckout(intent, draft);
    const verified = await paymentGateway.verifyPayment(paymentResult.referenceId);

    const summary = await orderService.confirmDraft(draft, {
      paymentStatus: verified ? "paid" : "failed",
    });

    expect(summary.orderId).toBe(draft.id);
    expect(summary.total).toBe(draft.total);
    expect(summary.paymentStatus).toBe("paid");
    expect(summary.orderStatus).toBe("confirmed");
  });
});
