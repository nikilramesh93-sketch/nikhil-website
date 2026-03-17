import type { CustomerAddress } from "@/types/commerce";

export interface CheckoutValidationResult {
  isValid: boolean;
  errors: string[];
}

export function validateCheckoutAddress(
  address: CustomerAddress,
): CheckoutValidationResult {
  const errors: string[] = [];

  if (!address.fullName || !address.phone || !address.addressLine || !address.city) {
    errors.push("required");
  }

  if (!/^\d{10}$/.test(address.phone.trim())) {
    errors.push("phone");
  }

  if (!/^\d{6}$/.test(address.pincode.trim())) {
    errors.push("pincode");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}
