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
    about: string;
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
    trustEyebrow: string;
    trustCards: { number: string; title: string; body: string }[];
    bestsellerTitle: string;
    bestsellerEyebrow: string;
    storyEyebrow: string;
    storyTitle: string;
    storyBody: string;
    storyCta: string;
    seoDescription: string;
  };
  about: {
    kicker: string;
    title: string;
    subtitle: string;
    sections: { eyebrow: string; title: string; body: string }[];
    quote: string;
    quoteAttribution: string;
    cta: string;
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
      tagline: "Serving authentic Mumbai street food in Bengaluru",
      city: "Born in Mumbai. Built for Bengaluru",
    },
    nav: {
      home: "Home",
      menu: "Menu",
      about: "About",
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
      kicker: "Born in Mumbai. Built for Bengaluru",
      title: "Holy Pav brings the soul of Mumbai's streets to Bengaluru",
      subtitle:
        "Serving authentic Mumbai street food in Bengaluru.",
      primaryCta: "Explore menu",
      secondaryCta: "Order on WhatsApp",
      trustEyebrow: "Why Holy Pav",
      trustTitle: "We are not just in Bengaluru. We are for Bengaluru.",
      trustCards: [
        {
          number: "01",
          title: "Mumbai recipes",
          body: "The chutneys, the masala, the bun. Recipes carried over from Mumbai's most loved street corners, made the way they're meant to be.",
        },
        {
          number: "02",
          title: "Made for the city",
          body: "Spice levels, portion sizes, and pricing built for Bengaluru's office lunches, weekend cravings, and rainy evenings.",
        },
        {
          number: "03",
          title: "Hygiene",
          body: "Once you've had Holy Pav, everything else tastes like a sin. Clean kitchen, sealed packaging, fresh every batch.",
        },
      ],
      bestsellerEyebrow: "The menu",
      bestsellerTitle: "Made fresh, every order",
      storyEyebrow: "Our story",
      storyTitle: "From a Mumbai chawl to a Bengaluru kitchen.",
      storyBody:
        "Holy Pav was born from a simple frustration — you couldn't get a proper Bombay-style vada pav in Bengaluru. So we built one. The bun is soft, the chutneys are loud, the masala is sharp. Nothing fancy, just right.",
      storyCta: "Read our story",
      seoDescription:
        "Authentic Mumbai street food in Bengaluru. Vada pav, misal pav, pav bhaji and more — made fresh, served at our Adugodi kitchen.",
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
      title: "Visit Holy Pav",
      subtitle: "Walk in. Pick up. Stay a while.",
      addressLabel: "Kitchen",
      phoneLabel: "Phone",
      timingLabel: "Hours",
      corporateLabel: "Corporate orders",
    },
    about: {
      kicker: "Our story",
      title: "Born in Mumbai. Built for Bengaluru.",
      subtitle:
        "Holy Pav is a love letter to Mumbai's street food, written in Bengaluru.",
      sections: [
        {
          eyebrow: "The why",
          title: "Bengaluru deserves real vada pav.",
          body: "We grew up on Mumbai's streets — late-night vada pav after college, misal pav for Sunday breakfast, kanda bhajji in the monsoon. When we moved to Bengaluru, the city had everything except this. So we built it.",
        },
        {
          eyebrow: "Made to order",
          title: "Fried fresh. Eaten warm.",
          body: "Every vada hits the oil only after you order. The pav is split, buttered, and tava-grilled on the spot. Chutneys ground that morning. Nothing on our counter is older than the meal in front of you.",
        },
        {
          eyebrow: "The masala",
          title: "Mumbai recipes, no shortcuts.",
          body: "Our garlic chutney is dry-roasted, ground fresh. The vada batter is tempered with curry leaves and asafoetida the same way it's done in Dadar. We don't substitute.",
        },
        {
          eyebrow: "The promise",
          title: "We are not just in Bengaluru. We are for Bengaluru.",
          body: "Holy Pav is a Mumbai brand that lives in Bengaluru. Our spice levels, our portions, our pricing — everything is dialed for this city. We're not visiting. We're home.",
        },
      ],
      quote:
        "“Once you’ve had Holy Pav, everything else tastes like a sin.”",
      quoteAttribution: "Every first-time customer, eventually.",
      cta: "See the menu",
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
      tagline: "ಬೆಂಗಳೂರಿನಲ್ಲಿ ಅಸಲಿ ಮುಂಬೈ ಸ್ಟ್ರೀಟ್ ಫುಡ್",
      city: "ಮುಂಬೈಯಲ್ಲಿ ಹುಟ್ಟಿದ್ದು. ಬೆಂಗಳೂರಿಗಾಗಿ ರೂಪುಗೊಂಡದ್ದು",
    },
    nav: {
      home: "ಮುಖಪುಟ",
      menu: "ಮೆನು",
      about: "ನಮ್ಮ ಬಗ್ಗೆ",
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
      kicker: "ಮುಂಬೈಯಲ್ಲಿ ಹುಟ್ಟಿದ್ದು. ಬೆಂಗಳೂರಿಗಾಗಿ ರೂಪುಗೊಂಡದ್ದು",
      title: "ಹೋಲಿ ಪಾವ್ ಮುಂಬೈ ಬೀದಿಗಳ ಆತ್ಮವನ್ನು ಬೆಂಗಳೂರಿಗೆ ತರುತ್ತದೆ",
      subtitle:
        "ಬೆಂಗಳೂರಿನಲ್ಲಿ ಅಸಲಿ ಮುಂಬೈ ಸ್ಟ್ರೀಟ್ ಫುಡ್.",
      primaryCta: "ಮೆನು ನೋಡಿ",
      secondaryCta: "WhatsApp ನಲ್ಲಿ ಆರ್ಡರ್",
      trustEyebrow: "ಏಕೆ ಹೋಲಿ ಪಾವ್",
      trustTitle: "ನಾವು ಕೇವಲ ಬೆಂಗಳೂರಿನಲ್ಲಿಲ್ಲ. ನಾವು ಬೆಂಗಳೂರಿಗಾಗಿ ಇದ್ದೇವೆ.",
      trustCards: [
        {
          number: "೦೧",
          title: "ಮುಂಬೈ ರೆಸಿಪಿ",
          body: "ಚಟ್ನಿ, ಮಸಾಲೆ, ಬನ್. ಮುಂಬೈನ ಜನಪ್ರಿಯ ಬೀದಿಗಳಿಂದ ತಂದ ರೆಸಿಪಿ, ಎಂದಿನಂತೆ ತಯಾರಿಸಲಾಗಿದೆ.",
        },
        {
          number: "೦೨",
          title: "ನಗರಕ್ಕಾಗಿ",
          body: "ಬೆಂಗಳೂರಿನ ಆಫೀಸ್ ಊಟ, ವೀಕೆಂಡ್ ಬಯಕೆ, ಮಳೆಯ ಸಂಜೆಗಳಿಗೆ ಸರಿಯಾದ ಮಸಾಲೆ, ಭಾಗ ಮತ್ತು ಬೆಲೆ.",
        },
        {
          number: "೦೩",
          title: "ಶುಚಿತ್ವ",
          body: "ಹೋಲಿ ಪಾವ್ ತಿಂದ ಮೇಲೆ ಬೇರೆ ಎಲ್ಲವೂ ಪಾಪವಂತೆ ಅನಿಸುತ್ತದೆ. ಸ್ವಚ್ಛ ಅಡಿಗೆ, ಸೀಲ್ ಪ್ಯಾಕೇಜಿಂಗ್, ಪ್ರತಿ ಬ್ಯಾಚ್ ತಾಜಾ.",
        },
      ],
      bestsellerEyebrow: "ಮೆನು",
      bestsellerTitle: "ಪ್ರತಿ ಆರ್ಡರ್‌ಗೆ, ತಾಜಾ ತಯಾರಿಸಿದ",
      storyEyebrow: "ನಮ್ಮ ಕಥೆ",
      storyTitle: "ಮುಂಬೈ ಚಾಳ್‌ನಿಂದ ಬೆಂಗಳೂರು ಅಡಿಗೆಗೆ.",
      storyBody:
        "ಬೆಂಗಳೂರಿನಲ್ಲಿ ಸರಿಯಾದ ಬಾಂಬೆ-ಸ್ಟೈಲ್ ವಡಾ ಪಾವ್ ಸಿಗದ ಸಿಟ್ಟಿನಿಂದ ಹೋಲಿ ಪಾವ್ ಹುಟ್ಟಿತು. ಹಾಗಾಗಿ ನಾವೇ ಒಂದನ್ನು ಮಾಡಿದೆವು. ಬನ್ ಮೃದು, ಚಟ್ನಿ ಜೋರು, ಮಸಾಲೆ ತೀಕ್ಷ್ಣ. ಯಾವುದೂ ತೋರಿಕೆಯದಲ್ಲ, ಬರೀ ಸರಿಯಾದದ್ದು.",
      storyCta: "ನಮ್ಮ ಕಥೆ ಓದಿ",
      seoDescription:
        "ಬೆಂಗಳೂರಿನಲ್ಲಿ ಅಸಲಿ ಮುಂಬೈ ಸ್ಟ್ರೀಟ್ ಫುಡ್. ವಡಾ ಪಾವ್, ಮಿಸಲ್ ಪಾವ್, ಪಾವ್ ಭಾಜಿ — ಆದ್ಗೋಡಿ ಅಡಿಗೆಯಲ್ಲಿ ತಾಜಾ ತಯಾರಿಸಲಾಗಿದೆ.",
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
      title: "ಹೋಲಿ ಪಾವ್ ಬಳಿ ಬನ್ನಿ",
      subtitle: "ನಡೆದು ಬನ್ನಿ. ತೆಗೆದುಕೊಂಡು ಹೋಗಿ. ಸ್ವಲ್ಪ ಸಮಯ ಉಳಿಯಿರಿ.",
      addressLabel: "ಕಿಚನ್",
      phoneLabel: "ಫೋನ್",
      timingLabel: "ಸಮಯ",
      corporateLabel: "ಕಾರ್ಪೊರೇಟ್ ಆರ್ಡರ್",
    },
    about: {
      kicker: "ನಮ್ಮ ಕಥೆ",
      title: "ಮುಂಬೈಯಲ್ಲಿ ಹುಟ್ಟಿದ್ದು. ಬೆಂಗಳೂರಿಗಾಗಿ ರೂಪುಗೊಂಡದ್ದು.",
      subtitle:
        "ಹೋಲಿ ಪಾವ್ ಮುಂಬೈ ಬೀದಿ ಆಹಾರಕ್ಕೆ ಒಂದು ಪ್ರೇಮಪತ್ರ, ಬೆಂಗಳೂರಿನಲ್ಲಿ ಬರೆದದ್ದು.",
      sections: [
        {
          eyebrow: "ಯಾಕೆ",
          title: "ಬೆಂಗಳೂರಿಗೆ ನಿಜವಾದ ವಡಾ ಪಾವ್ ಬೇಕು.",
          body: "ನಾವು ಮುಂಬೈ ಬೀದಿಗಳಲ್ಲಿ ಬೆಳೆದೆವು — ಕಾಲೇಜ್ ನಂತರ ರಾತ್ರಿ ವಡಾ ಪಾವ್, ಭಾನುವಾರದ ಬೆಳಗಿನ ಊಟಕ್ಕೆ ಮಿಸಲ್ ಪಾವ್, ಮಳೆಯ ಸಂಜೆಗೆ ಕಾಂಡಾ ಭಜ್ಜಿ. ಬೆಂಗಳೂರು ಬಂದಾಗ ಎಲ್ಲವೂ ಇತ್ತು, ಆದರೆ ಇದು ಮಾತ್ರ ಇರಲಿಲ್ಲ. ಹಾಗಾಗಿ ನಾವೇ ಮಾಡಿದೆವು.",
        },
        {
          eyebrow: "ಆರ್ಡರ್‌ಗೆ ತಯಾರಿಸಿದ್ದು",
          title: "ತಾಜಾ ಹುರಿದದ್ದು. ಬಿಸಿಯಾಗಿ ತಿಂದದ್ದು.",
          body: "ನೀವು ಆರ್ಡರ್ ಮಾಡಿದ ನಂತರವೇ ಪ್ರತಿ ವಡಾ ಎಣ್ಣೆಗೆ ಬೀಳುತ್ತದೆ. ಪಾವ್ ಅನ್ನು ಸೀಳಿ, ಬೆಣ್ಣೆ ಹಚ್ಚಿ, ಅಲ್ಲೇ ತವಾದ ಮೇಲೆ ಬೇಯಿಸುತ್ತೇವೆ. ಚಟ್ನಿ ಆ ಬೆಳಗ್ಗೆಯೇ ಅರೆದದ್ದು. ನಮ್ಮ ಕೌಂಟರ್‌ನ ಮೇಲೆ ನಿಮ್ಮ ಊಟಕ್ಕಿಂತ ಹಳೆಯದು ಯಾವುದೂ ಇಲ್ಲ.",
        },
        {
          eyebrow: "ಮಸಾಲೆ",
          title: "ಮುಂಬೈ ರೆಸಿಪಿ, ಯಾವುದೇ ಶಾರ್ಟ್‌ಕಟ್ ಇಲ್ಲ.",
          body: "ನಮ್ಮ ಬೆಳ್ಳುಳ್ಳಿ ಚಟ್ನಿಯನ್ನು ಒಣ-ಭಾಜಿಸಿ, ತಾಜಾವಾಗಿ ಅರೆಯುತ್ತೇವೆ. ವಡಾ ಬ್ಯಾಟರ್‌ಗೆ ಕರಿಬೇವು ಮತ್ತು ಹಿಂಗು ಬೆರೆಸುತ್ತೇವೆ — ದಾದರ್‌ನಲ್ಲಿ ಮಾಡುವ ರೀತಿ. ನಾವು ಬದಲಿಗಳನ್ನು ಬಳಸುವುದಿಲ್ಲ.",
        },
        {
          eyebrow: "ವಾಗ್ದಾನ",
          title: "ನಾವು ಕೇವಲ ಬೆಂಗಳೂರಿನಲ್ಲಿಲ್ಲ. ನಾವು ಬೆಂಗಳೂರಿಗಾಗಿ ಇದ್ದೇವೆ.",
          body: "ಹೋಲಿ ಪಾವ್ ಬೆಂಗಳೂರಿನಲ್ಲಿ ವಾಸಿಸುವ ಒಂದು ಮುಂಬೈ ಬ್ರ್ಯಾಂಡ್. ನಮ್ಮ ಮಸಾಲೆ ಮಟ್ಟ, ನಮ್ಮ ಭಾಗ, ನಮ್ಮ ಬೆಲೆ — ಎಲ್ಲವೂ ಈ ನಗರಕ್ಕಾಗಿ ಸರಿಪಡಿಸಿದ್ದು. ನಾವು ಭೇಟಿ ನೀಡುತ್ತಿಲ್ಲ. ನಾವು ಮನೆಯಲ್ಲಿದ್ದೇವೆ.",
        },
      ],
      quote:
        "“ಹೋಲಿ ಪಾವ್ ತಿಂದ ಮೇಲೆ ಬೇರೆ ಎಲ್ಲವೂ ಪಾಪವಂತೆ ಅನಿಸುತ್ತದೆ.”",
      quoteAttribution: "ಪ್ರತಿ ಮೊದಲ ಬಾರಿ ಗ್ರಾಹಕ, ಕೊನೆಗೆ.",
      cta: "ಮೆನು ನೋಡಿ",
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
