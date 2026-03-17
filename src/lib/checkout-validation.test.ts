import { validateCheckoutAddress } from "@/lib/checkout-validation";

describe("validateCheckoutAddress", () => {
  it("rejects incomplete form details", () => {
    const result = validateCheckoutAddress({
      fullName: "",
      phone: "123",
      addressLine: "",
      landmark: "",
      pincode: "5600",
      city: "",
    });

    expect(result.isValid).toBe(false);
    expect(result.errors).toContain("required");
    expect(result.errors).toContain("phone");
    expect(result.errors).toContain("pincode");
  });

  it("accepts valid delivery details", () => {
    const result = validateCheckoutAddress({
      fullName: "Asha",
      phone: "9876543210",
      addressLine: "Indiranagar",
      landmark: "Metro",
      pincode: "560038",
      city: "Bengaluru",
    });

    expect(result.isValid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });
});
