import { calculatePriceSummary } from "@/lib/pricing";

describe("calculatePriceSummary", () => {
  it("computes totals with free delivery", () => {
    const summary = calculatePriceSummary([
      { itemId: "a", name: "A", nameKn: "A", price: 50, quantity: 2, dietaryTag: "veg", accent: "" },
      { itemId: "b", name: "B", nameKn: "B", price: 40, quantity: 1, dietaryTag: "veg", accent: "" },
    ]);

    expect(summary.subtotal).toBe(140);
    expect(summary.deliveryFee).toBe(0);
    expect(summary.total).toBe(140);
    expect(summary.totalItems).toBe(3);
  });
});
