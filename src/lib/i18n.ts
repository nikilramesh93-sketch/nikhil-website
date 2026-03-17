import type { Locale } from "@/types/commerce";

export interface Dictionary {
  brand: {
    name: string;
    tagline: string;
    city: string;
  };
  nav: {
    home: string;
    menu: string;
    cart: string;
    wishlist: string;
    checkout: string;
    partners: string;
    contact: string;
  };
  common: {
    language: string;
    addToCart: string;
    addToWishlist: string;
    remove: string;
    moveToCart: string;
    viewMenu: string;
    continueShopping: string;
    checkoutNow: string;
    unavailable: string;
    qty: string;
    subtotal: string;
    delivery: string;
    total: string;
    free: string;
    veg: string;
    nonVeg: string;
    empty: string;
  };
  home: {
    kicker: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    trustTitle: string;
    trustCards: string[];
    bestsellerTitle: string;
    seoDescription: string;
  };
  menu: {
    title: string;
    subtitle: string;
    availabilityLabel: string;
    inStock: string;
    outOfStock: string;
  };
  cart: {
    title: string;
    subtitle: string;
    emptyTitle: string;
    emptySubtitle: string;
    clear: string;
  };
  wishlist: {
    title: string;
    subtitle: string;
    emptyTitle: string;
    emptySubtitle: string;
  };
  checkout: {
    title: string;
    subtitle: string;
    deliveryTitle: string;
    paymentTitle: string;
    paymentSubtitle: string;
    whatsappFallback: string;
    placeOrder: string;
    customerName: string;
    phone: string;
    addressLine: string;
    landmark: string;
    pincode: string;
    city: string;
    notes: string;
    requiredError: string;
    invalidPhone: string;
    invalidPincode: string;
    emptyCartTitle: string;
    emptyCartSubtitle: string;
  };
  confirmation: {
    title: string;
    subtitle: string;
    whatsapp: string;
    paymentStatus: string;
    orderStatus: string;
    noOrderTitle: string;
    noOrderSubtitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    addressLabel: string;
    phoneLabel: string;
    timingLabel: string;
    corporateLabel: string;
  };
  partners: {
    title: string;
    subtitle: string;
    introBadge: string;
    benefitsTitle: string;
    benefits: string[];
    formTitle: string;
    fullName: string;
    email: string;
    phone: string;
    socialHandle: string;
    platform: string;
    followers: string;
    city: string;
    submit: string;
    successTitle: string;
    successBody: string;
    codeLabel: string;
    note: string;
  };
}

export const DEFAULT_LOCALE: Locale = "en";

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    brand: {
      name: "Holy Pav",
      tagline: "Crafted Mumbai street comfort, now in Bengaluru.",
      city: "Serving Bengaluru",
    },
    nav: {
      home: "Home",
      menu: "Menu",
      cart: "Cart",
      wishlist: "Wishlist",
      checkout: "Checkout",
      partners: "Partners",
      contact: "Contact",
    },
    common: {
      language: "Language",
      addToCart: "Add to cart",
      addToWishlist: "Wishlist",
      remove: "Remove",
      moveToCart: "Move to cart",
      viewMenu: "View menu",
      continueShopping: "Continue shopping",
      checkoutNow: "Proceed to checkout",
      unavailable: "Currently unavailable",
      qty: "Qty",
      subtotal: "Subtotal",
      delivery: "Delivery",
      total: "Total",
      free: "Free",
      veg: "Veg",
      nonVeg: "Non-veg",
      empty: "Nothing here yet",
    },
    home: {
      kicker: "Bengaluru only",
      title: "A warm pav experience built for busy Bengaluru days.",
      subtitle:
        "Holy Pav blends Mumbai street flavors with clean ingredients and a premium quick-serve feel.",
      primaryCta: "Explore menu",
      secondaryCta: "Order now",
      trustTitle: "Why people choose Holy Pav",
      trustCards: [
        "Fresh pav baked daily in small batches.",
        "Fast delivery across key Bengaluru zones.",
        "Balanced spice profiles with vegetarian and protein-rich choices.",
      ],
      bestsellerTitle: "Top picks",
      seoDescription:
        "Holy Pav serves premium Mumbai-style pav in Bengaluru with delivery-ready ordering, cart, wishlist, and checkout.",
    },
    menu: {
      title: "Menu",
      subtitle: "Comfort street food with polished flavor and quality ingredients.",
      availabilityLabel: "Availability",
      inStock: "In stock",
      outOfStock: "Out of stock",
    },
    cart: {
      title: "Your cart",
      subtitle: "Review items and head to checkout.",
      emptyTitle: "Your cart is empty",
      emptySubtitle: "Add your favorite pavs from the menu.",
      clear: "Clear cart",
    },
    wishlist: {
      title: "Wishlist",
      subtitle: "Save items for your next craving.",
      emptyTitle: "Your wishlist is empty",
      emptySubtitle: "Tap wishlist on menu items to save them.",
    },
    checkout: {
      title: "Checkout",
      subtitle: "Delivery-only orders for Bengaluru in this launch phase.",
      deliveryTitle: "Delivery details",
      paymentTitle: "Payment",
      paymentSubtitle:
        "Razorpay will be connected here later. For now this uses a mock payment step.",
      whatsappFallback: "Prefer manual confirmation? Continue on WhatsApp",
      placeOrder: "Place mock order",
      customerName: "Full name",
      phone: "Phone number",
      addressLine: "Address",
      landmark: "Landmark",
      pincode: "Pincode",
      city: "City",
      notes: "Delivery notes",
      requiredError: "Please fill all required fields.",
      invalidPhone: "Phone number should be 10 digits.",
      invalidPincode: "Pincode should be 6 digits.",
      emptyCartTitle: "Your cart is empty",
      emptyCartSubtitle: "Add items before checkout.",
    },
    confirmation: {
      title: "Order received",
      subtitle:
        "Your order has been created in our system. A team member will confirm fulfillment details.",
      whatsapp: "Confirm on WhatsApp",
      paymentStatus: "Payment status",
      orderStatus: "Order status",
      noOrderTitle: "No recent order found",
      noOrderSubtitle: "Place an order from checkout to view confirmation details here.",
    },
    contact: {
      title: "Contact Holy Pav",
      subtitle: "Reach out for daily orders, catering, and corporate lunches.",
      addressLabel: "Kitchen address",
      phoneLabel: "Phone",
      timingLabel: "Hours",
      corporateLabel: "Corporate orders",
    },
    partners: {
      title: "Food Blogger Partner Program",
      subtitle:
        "Join Holy Pav as an affiliate creator and share Bengaluru's newest pav story on your social channels.",
      introBadge: "Creator Partnerships",
      benefitsTitle: "What you get after signup",
      benefits: [
        "A unique influencer discount code for your followers.",
        "Early tasting invites and campaign previews.",
        "Affiliate tracking for creator-led order performance.",
      ],
      formTitle: "Apply as a partner",
      fullName: "Full name",
      email: "Email",
      phone: "Phone number",
      socialHandle: "Instagram / YouTube handle",
      platform: "Primary platform",
      followers: "Follower count",
      city: "City",
      submit: "Create affiliate code",
      successTitle: "Welcome to Holy Pav Partners",
      successBody:
        "Your signup is received. Use this affiliate discount code while spreading the word on social media.",
      codeLabel: "Affiliate influencer discount code",
      note: "Our team will contact you for campaign kits and collaboration details.",
    },
  },
  kn: {
    brand: {
      name: "ಹೋಲಿ ಪಾವ್",
      tagline: "ಮುಂಬೈ ಸ್ಟ್ರೀಟ್ ರುಚಿ, ಈಗ ಬೆಂಗಳೂರಿನಲ್ಲಿ.",
      city: "ಬೆಂಗಳೂರು ಸೇವೆ",
    },
    nav: {
      home: "ಮುಖಪುಟ",
      menu: "ಮೆನು",
      cart: "ಕಾರ್ಟ್",
      wishlist: "ವಿಶ್‌ಲಿಸ್ಟ್",
      checkout: "ಚೆಕ್‌ಔಟ್",
      partners: "ಪಾರ್ಟ್ನರ್ಸ್",
      contact: "ಸಂಪರ್ಕ",
    },
    common: {
      language: "ಭಾಷೆ",
      addToCart: "ಕಾರ್ಟ್‌ಗೆ ಸೇರಿಸಿ",
      addToWishlist: "ವಿಶ್‌ಲಿಸ್ಟ್",
      remove: "ತೆಗೆದುಹಾಕಿ",
      moveToCart: "ಕಾರ್ಟ್‌ಗೆ ಕಳುಹಿಸಿ",
      viewMenu: "ಮೆನು ನೋಡಿ",
      continueShopping: "ಖರೀದಿ ಮುಂದುವರಿಸಿ",
      checkoutNow: "ಚೆಕ್‌ಔಟ್‌ಗೆ ಹೋಗಿ",
      unavailable: "ಈಗ ಲಭ್ಯವಿಲ್ಲ",
      qty: "ಪ್ರಮಾಣ",
      subtotal: "ಉಪಮೊತ್ತ",
      delivery: "ಡೆಲಿವರಿ",
      total: "ಒಟ್ಟು",
      free: "ಉಚಿತ",
      veg: "ವೆಜ್",
      nonVeg: "ನಾನ್-ವೆಜ್",
      empty: "ಇಲ್ಲಿಗೆ ಇನ್ನೂ ಏನೂ ಇಲ್ಲ",
    },
    home: {
      kicker: "ಬೆಂಗಳೂರು ಮಾತ್ರ",
      title: "ಬೆಂಗಳೂರು ದಿನಗಳಿಗೆ ಸೂಕ್ತವಾದ ಆತ್ಮೀಯ ಪಾವ್ ಅನುಭವ.",
      subtitle:
        "ಹೋಲಿ ಪಾವ್ ಮುಂಬೈ ಸ್ಟ್ರೀಟ್ ರುಚಿಯನ್ನು ಶುದ್ಧ ಪದಾರ್ಥಗಳೊಂದಿಗೆ ಪ್ರೀಮಿಯಂ ಫಾಸ್ಟ್-ಸರ್ವ್ ಶೈಲಿಯಲ್ಲಿ ನೀಡುತ್ತದೆ.",
      primaryCta: "ಮೆನು ಅನ್ವೇಷಿಸಿ",
      secondaryCta: "ಇದೀಗ ಆರ್ಡರ್ ಮಾಡಿ",
      trustTitle: "ಜನರು ಹೋಲಿ ಪಾವ್ ಅನ್ನು ಏಕೆ ಆಯ್ಕೆ ಮಾಡುತ್ತಾರೆ",
      trustCards: [
        "ಪ್ರತಿದಿನ ತಾಜಾ ಪಾವ್ ಸಣ್ಣ ಬ್ಯಾಚ್‌ಗಳಲ್ಲಿ ತಯಾರಿಸಲಾಗುತ್ತದೆ.",
        "ಬೆಂಗಳೂರು ಪ್ರಮುಖ ಪ್ರದೇಶಗಳಿಗೆ ವೇಗವಾದ ಡೆಲಿವರಿ.",
        "ಸಮತೋಲನದ ಮಸಾಲೆ ರುಚಿ ಮತ್ತು ವೆಜ್/ಪ್ರೋಟೀನ್ ಆಯ್ಕೆಗಳು.",
      ],
      bestsellerTitle: "ಜನಪ್ರಿಯ ಆಯ್ಕೆಗಳು",
      seoDescription:
        "ಹೋಲಿ ಪಾವ್ ಬೆಂಗಳೂರಿನಲ್ಲಿ ಪ್ರೀಮಿಯಂ ಮುಂಬೈ-ಸ್ಟೈಲ್ ಪಾವ್ ಸೇವೆ ನೀಡುತ್ತದೆ, ಮೆನು, ಕಾರ್ಟ್, ವಿಶ್‌ಲಿಸ್ಟ್ ಮತ್ತು ಚೆಕ್‌ಔಟ್ ಜೊತೆಗೆ.",
    },
    menu: {
      title: "ಮೆನು",
      subtitle: "ಪ್ರೀಮಿಯಂ ಗುಣಮಟ್ಟದ ಪದಾರ್ಥಗಳಿಂದ ತಯಾರಿಸಿದ ಸ್ಟ್ರೀಟ್ ಫುಡ್ ರುಚಿ.",
      availabilityLabel: "ಲಭ್ಯತೆ",
      inStock: "ಲಭ್ಯವಿದೆ",
      outOfStock: "ಸ್ಟಾಕ್ ಇಲ್ಲ",
    },
    cart: {
      title: "ನಿಮ್ಮ ಕಾರ್ಟ್",
      subtitle: "ಐಟಂಗಳನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಚೆಕ್‌ಔಟ್‌ಗೆ ಹೋಗಿ.",
      emptyTitle: "ನಿಮ್ಮ ಕಾರ್ಟ್ ಖಾಲಿಯಾಗಿದೆ",
      emptySubtitle: "ಮೆನುನಿಂದ ನಿಮ್ಮ ಇಷ್ಟದ ಪಾವ್‌ಗಳನ್ನು ಸೇರಿಸಿ.",
      clear: "ಕಾರ್ಟ್ ಖಾಲಿ ಮಾಡಿ",
    },
    wishlist: {
      title: "ವಿಶ್‌ಲಿಸ್ಟ್",
      subtitle: "ಮುಂದಿನ ಬಾರಿ ಆರ್ಡರ್ ಮಾಡಲು ಐಟಂಗಳನ್ನು ಉಳಿಸಿ.",
      emptyTitle: "ವಿಶ್‌ಲಿಸ್ಟ್ ಖಾಲಿಯಾಗಿದೆ",
      emptySubtitle: "ಮೆನು ಐಟಂನಲ್ಲಿ ವಿಶ್‌ಲಿಸ್ಟ್ ಒತ್ತಿ ಉಳಿಸಬಹುದು.",
    },
    checkout: {
      title: "ಚೆಕ್‌ಔಟ್",
      subtitle: "ಈ ಹಂತದಲ್ಲಿ ಬೆಂಗಳೂರು ಡೆಲಿವರಿ ಆರ್ಡರ್ ಮಾತ್ರ ಲಭ್ಯ.",
      deliveryTitle: "ಡೆಲಿವರಿ ವಿವರಗಳು",
      paymentTitle: "ಪಾವತಿ",
      paymentSubtitle:
        "ಮುಂದೆ ಇಲ್ಲಿ Razorpay ಜೋಡಿಸಲಾಗುತ್ತದೆ. ಈಗ ಇದು ಮಾಕ್ ಪಾವತಿ ಹಂತವನ್ನು ಬಳಸುತ್ತದೆ.",
      whatsappFallback: "ಮಾನುಯಲ್ ದೃಢೀಕರಣ ಬೇಕೆ? WhatsApp ನಲ್ಲಿ ಮುಂದುವರಿಸಿ",
      placeOrder: "ಮಾಕ್ ಆರ್ಡರ್ ಇಡಿ",
      customerName: "ಪೂರ್ಣ ಹೆಸರು",
      phone: "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ",
      addressLine: "ವಿಳಾಸ",
      landmark: "ಲ್ಯಾಂಡ್‌ಮಾರ್ಕ್",
      pincode: "ಪಿನ್‌ಕೋಡ್",
      city: "ನಗರ",
      notes: "ಡೆಲಿವರಿ ಸೂಚನೆಗಳು",
      requiredError: "ಅಗತ್ಯ ಕ್ಷೇತ್ರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ.",
      invalidPhone: "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ 10 ಅಂಕಿಗಳಾಗಿರಬೇಕು.",
      invalidPincode: "ಪಿನ್‌ಕೋಡ್ 6 ಅಂಕಿಗಳಾಗಿರಬೇಕು.",
      emptyCartTitle: "ನಿಮ್ಮ ಕಾರ್ಟ್ ಖಾಲಿಯಾಗಿದೆ",
      emptyCartSubtitle: "ಚೆಕ್‌ಔಟ್‌ಗೆ ಮೊದಲು ಐಟಂ ಸೇರಿಸಿ.",
    },
    confirmation: {
      title: "ಆರ್ಡರ್ ಸ್ವೀಕರಿಸಲಾಗಿದೆ",
      subtitle:
        "ನಿಮ್ಮ ಆರ್ಡರ್ ನಮ್ಮ ವ್ಯವಸ್ಥೆಯಲ್ಲಿ ದಾಖಲಾಗಿದೆ. ಫುಲ್ಫಿಲ್‌ಮೆಂಟ್ ವಿವರಗಳನ್ನು ನಮ್ಮ ತಂಡ ದೃಢೀಕರಿಸುತ್ತದೆ.",
      whatsapp: "WhatsApp ನಲ್ಲಿ ದೃಢೀಕರಿಸಿ",
      paymentStatus: "ಪಾವತಿ ಸ್ಥಿತಿ",
      orderStatus: "ಆರ್ಡರ್ ಸ್ಥಿತಿ",
      noOrderTitle: "ಇತ್ತೀಚಿನ ಆರ್ಡರ್ ಸಿಗಲಿಲ್ಲ",
      noOrderSubtitle: "ಇಲ್ಲಿನ ವಿವರಗಳನ್ನು ನೋಡಲು ಚೆಕ್‌ಔಟ್‌ನಿಂದ ಆರ್ಡರ್ ಮಾಡಿ.",
    },
    contact: {
      title: "ಹೋಲಿ ಪಾವ್ ಸಂಪರ್ಕ",
      subtitle: "ದಿನನಿತ್ಯ ಆರ್ಡರ್, ಕ್ಯಾಟರಿಂಗ್ ಮತ್ತು ಕಾರ್ಪೊರೇಟ್ ಲಂಚ್‌ಗಾಗಿ ಸಂಪರ್ಕಿಸಿ.",
      addressLabel: "ಕಿಚನ್ ವಿಳಾಸ",
      phoneLabel: "ಫೋನ್",
      timingLabel: "ಸಮಯ",
      corporateLabel: "ಕಾರ್ಪೊರೇಟ್ ಆರ್ಡರ್",
    },
    partners: {
      title: "ಫುಡ್ ಬ್ಲಾಗರ್ ಪಾರ್ಟ್ನರ್ ಪ್ರೋಗ್ರಾಂ",
      subtitle:
        "ಹೋಲಿ ಪಾವ್ ಜೊತೆ ಅಫಿಲಿಯೇಟ್ ಕ್ರಿಯೇಟರ್ ಆಗಿ ಸೇರಿ ಮತ್ತು ನಿಮ್ಮ ಸೋಷಲ್ ಮೀಡಿಯಾದಲ್ಲಿ ಬೆಂಗಳೂರು ಪಾವ್ ಕಥೆಯನ್ನು ಹಂಚಿಕೊಳ್ಳಿ.",
      introBadge: "ಕ್ರಿಯೇಟರ್ ಪಾರ್ಟ್ನರ್‌ಶಿಪ್",
      benefitsTitle: "ಸೈನ್ ಅಪ್ ನಂತರ ನಿಮಗೆ ಸಿಗುವವು",
      benefits: [
        "ನಿಮ್ಮ ಫಾಲೋವರ್ಸ್‌ಗಾಗಿ ಯೂನಿಕ್ ಇನ್‌ಫ್ಲುವೆನ್ಸರ್ ಡಿಸ್ಕೌಂಟ್ ಕೋಡ್.",
        "ಅಗೋಚರ ಟೇಸ್ಟಿಂಗ್ ಇನ್ವೈಟ್ ಮತ್ತು ಕ್ಯಾಂಪೇನ್ ಪ್ರೀವ್ಯೂ.",
        "ಕ್ರಿಯೇಟರ್ ಮೂಲಕ ಬಂದ ಆರ್ಡರ್‌ಗಳ ಅಫಿಲಿಯೇಟ್ ಟ್ರ್ಯಾಕಿಂಗ್.",
      ],
      formTitle: "ಪಾರ್ಟ್ನರ್ ಆಗಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ",
      fullName: "ಪೂರ್ಣ ಹೆಸರು",
      email: "ಇಮೇಲ್",
      phone: "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ",
      socialHandle: "Instagram / YouTube ಹ್ಯಾಂಡಲ್",
      platform: "ಪ್ರಮುಖ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್",
      followers: "ಫಾಲೋವರ್ ಸಂಖ್ಯೆ",
      city: "ನಗರ",
      submit: "ಅಫಿಲಿಯೇಟ್ ಕೋಡ್ ಸೃಷ್ಟಿಸಿ",
      successTitle: "ಹೋಲಿ ಪಾವ್ ಪಾರ್ಟ್ನರ್ಸ್‌ಗೆ ಸ್ವಾಗತ",
      successBody:
        "ನಿಮ್ಮ ಸೈನ್ ಅಪ್ ಸ್ವೀಕರಿಸಲಾಗಿದೆ. ಸೋಷಲ್ ಮೀಡಿಯಾದಲ್ಲಿ ಪ್ರಚಾರ ಮಾಡುವಾಗ ಈ ಅಫಿಲಿಯೇಟ್ ಡಿಸ್ಕೌಂಟ್ ಕೋಡ್ ಬಳಸಿ.",
      codeLabel: "ಅಫಿಲಿಯೇಟ್ ಇನ್‌ಫ್ಲುವೆನ್ಸರ್ ಡಿಸ್ಕೌಂಟ್ ಕೋಡ್",
      note: "ಕ್ಯಾಂಪೇನ್ ಕಿಟ್ ಮತ್ತು ಸಹಕಾರ ವಿವರಗಳಿಗೆ ನಮ್ಮ ತಂಡ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತದೆ.",
    },
  },
};

export const LOCALES: Locale[] = ["en", "kn"];

export function resolveLocale(locale: string | null | undefined): Locale {
  if (locale === "kn") {
    return "kn";
  }

  return DEFAULT_LOCALE;
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}
