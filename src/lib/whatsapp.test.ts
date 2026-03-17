import { buildOrderMessage, buildWhatsAppLink } from "@/lib/whatsapp";

describe("whatsapp helpers", () => {
  it("creates readable order message", () => {
    const message = buildOrderMessage({
      orderId: "HP-123",
      total: 130,
      customer: { fullName: "Asha" },
      items: [
        {
          itemId: "classic-vada-pav",
          name: "Classic Vada Pav",
          nameKn: "ಕ್ಲಾಸಿಕ್ ವಡಾ ಪಾವ್",
          price: 65,
          quantity: 2,
          dietaryTag: "veg",
          accent: "",
        },
      ],
    });

    expect(message).toContain("HP-123");
    expect(message).toContain("Classic Vada Pav x 2");
    expect(message).toContain("Total: ₹130");
  });

  it("builds whatsapp deeplink", () => {
    const link = buildWhatsAppLink(
      {
        items: [],
        total: 0,
      },
      "919999999999",
    );

    expect(link).toContain("https://wa.me/919999999999");
  });
});
