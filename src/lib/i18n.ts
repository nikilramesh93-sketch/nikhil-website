import type { Locale } from "@/types/commerce";

export interface Dictionary {
  brand: {
    name: string;
    masterLine: string;
    footerSub: string;
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
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    metadataLocation: string;
    metadataHours: string;
    trustTitle: string;
    trustEyebrow: string;
    trustCards: { icon: "leaf" | "flame" | "heart"; title: string; body: string }[];
    anatomyEyebrow: string;
    anatomyTitle: string;
    anatomyCallouts: { title: string; body: string }[];
    bestsellerTitle: string;
    bestsellerEyebrow: string;
    storyEyebrow: string;
    storyTitle: string;
    storyBody: string;
    storyCta: string;
    storyStamps: string;
    seoDescription: string;
    heroRibbon: string;
    heroStampLine1: string;
    heroStampLine2: string;
    occasionsTitle: string;
    occasions: { icon: "cap" | "briefcase" | "people" | "moon"; label: string }[];
    deliveryEyebrow: string;
    deliveryTitle: string;
    deliverySubtitle: string;
  };
  about: {
    kicker: string;
    title: string;
    subtitle: string;
    sections: { eyebrow: string; title: string; body: string }[];
    quote: string;
    quoteAttribution: string;
    closerEyebrow: string;
    closerTitle: string;
    cta: string;
  };
  menu: {
    title: string;
    subtitle: string;
    availabilityLabel: string;
    inStock: string;
    outOfStock: string;
    vegNote: string;
    ribbon: string;
    signatureTag: string;
  };
  notFound: {
    code: string;
    ribbon: string;
    title: string;
    body: string;
    menuCta: string;
    homeCta: string;
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
    ribbon: string;
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
    stampLine1: string;
    stampLine2: string;
  };
}

export const DEFAULT_LOCALE: Locale = "en";

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    brand: {
      name: "Holy Pav",
      masterLine: "If it goes with pav, we are making it.",
      footerSub:
        "Everything we make comes out of one kitchen in Koramangala. Open 11 AM to 11 PM, every day.",
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
      title: "If it goes with pav, we are making it.",
      subtitle: "Vada, misal, bhaji, butter, cheese. Fried after you order, buttered while it's hot.",
      primaryCta: "Explore menu",
      secondaryCta: "Order on WhatsApp",
      metadataLocation: "Koramangala, Bengaluru",
      metadataHours: "Open 11 AM – 11 PM",
      trustEyebrow: "The rule",
      trustTitle: "Everything we make, we make to go with pav.",
      trustCards: [
        {
          icon: "leaf",
          title: "Fresh ingredients",
          body: "Chutneys ground that morning, potatoes peeled that morning, oil that hasn't seen yesterday.",
        },
        {
          icon: "flame",
          title: "Bold flavours",
          body: "Garlic chutney with a kick, schezwan that bites, molten cheese that doesn't apologise. Nothing here is mild by accident.",
        },
        {
          icon: "heart",
          title: "Made with love",
          body: "Fried after you order, split and buttered on the tava, sealed and handed over hot. Clean kitchen, fresh batch, every time.",
        },
      ],
      anatomyEyebrow: "Inside Holy Pav",
      anatomyTitle: "Five layers. No shortcuts.",
      anatomyCallouts: [
        { title: "Soft pav", body: "Light, fluffy and buttery." },
        { title: "Green chutney", body: "Fresh, spicy and vibrant." },
        { title: "Golden vada", body: "Crispy outside, soft and flavourful inside." },
        { title: "Garlic chutney", body: "Spicy, garlicky and full of punch." },
        { title: "Buttery pav", body: "The perfect base that holds it all together." },
      ],
      bestsellerEyebrow: "The menu",
      bestsellerTitle: "Made fresh, every order",
      storyEyebrow: "Our story",
      storyTitle: "We started with one pav and got obsessive.",
      storyBody:
        "Soft pav, loud chutneys, sharp masala. Then we started asking what else deserved to go inside it, and stopped saying no.",
      storyCta: "Read our story",
      storyStamps: "Est. 2026 · Koramangala, Bengaluru",
      seoDescription:
        "A pav kitchen in Koramangala, Bengaluru. Vada pav, misal, pav bhaji and sides, fried after you order. Sinfully good.",
      heroRibbon: "Sinfully good.",
      heroStampLine1: "Freshly made.",
      heroStampLine2: "Boldly served.",
      occasionsTitle: "Find us near you",
      occasions: [
        { icon: "cap", label: "College streets" },
        { icon: "briefcase", label: "Office lunches" },
        { icon: "people", label: "Weekend cravings" },
        { icon: "moon", label: "Late night bites" },
      ],
      deliveryEyebrow: "Holy. Home delivery.",
      deliveryTitle: "Hot. Fresh. On its way.",
      deliverySubtitle: "Order on WhatsApp and we'll have it at your door.",
    },
    menu: {
      title: "Menu",
      subtitle: "Comfort street food with polished flavor and quality ingredients.",
      availabilityLabel: "Availability",
      inStock: "In stock",
      outOfStock: "Out of stock",
      vegNote: "100% Vegetarian Kitchen",
      ribbon: "Made fresh, every order.",
      signatureTag: "Signature",
    },
    notFound: {
      code: "404",
      ribbon: "Not on the menu.",
      title: "This one we are not making.",
      body:
        "The page you were after isn't here. The pav, however, is. Twenty-one things on the menu and not one of them is a dead end.",
      menuCta: "See the menu",
      homeCta: "Back to home",
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
      ribbon: "Open 11 AM – 11 PM.",
    },
    about: {
      kicker: "Our story",
      title: "One pav. No limits.",
      subtitle: "We don't just make food. We craft cravings.",
      sections: [
        {
          eyebrow: "The why",
          title: "It starts with the pav.",
          body: "Get the pav right, soft, fresh, built to hold butter, and everything you put in it has a chance. Get it wrong and nothing saves you. That's where we started, and it's still where every new item begins.",
        },
        {
          eyebrow: "Made to order",
          title: "Fried fresh. Eaten warm.",
          body: "Every vada hits the oil only after you order. The pav is split, buttered, and tava-grilled on the spot. Chutneys ground that morning. Nothing on our counter is older than the meal in front of you.",
        },
        {
          eyebrow: "The masala",
          title: "No shortcuts. No substitutes.",
          body: "Garlic chutney dry-roasted and ground fresh. Batter tempered with curry leaves and asafoetida. We don't buy the shortcut version of anything that touches the pav.",
        },
        {
          eyebrow: "The promise",
          title: "If it goes with pav, we are making it.",
          body: "Butter, cheese, schezwan, sprouts, masala, the rule is simple and the list is open. Tell us what belongs in a pav and we'll probably try it.",
        },
      ],
      quote:
        "“Once you’ve had Holy Pav, everything else tastes like a sin.”",
      quoteAttribution: "Every first-time customer, eventually.",
      closerEyebrow: "What's next",
      closerTitle: "Come find out what else we put in a pav.",
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
      stampLine1: "Officially",
      stampLine2: "Holy.",
    },
  },
  kn: {
    brand: {
      name: "ಹೋಲಿ ಪಾವ್",
      masterLine: "ಪಾವ್‌ಗೆ ಹೊಂದುವುದಾದರೆ, ನಾವು ಅದನ್ನು ಮಾಡುತ್ತೇವೆ.",
      footerSub:
        "ನಾವು ಮಾಡುವ ಎಲ್ಲವೂ ಕೊರಮಂಗಲದ ಒಂದೇ ಅಡುಗೆಮನೆಯಿಂದ ಬರುತ್ತದೆ. ಪ್ರತಿದಿನ ಬೆಳಿಗ್ಗೆ 11 ರಿಂದ ರಾತ್ರಿ 11 ರವರೆಗೆ ತೆರೆದಿರುತ್ತದೆ.",
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
      title: "ಪಾವ್‌ಗೆ ಹೊಂದುವುದಾದರೆ, ನಾವು ಅದನ್ನು ಮಾಡುತ್ತೇವೆ.",
      subtitle:
        "ವಡಾ, ಮಿಸಲ್, ಭಾಜಿ, ಬಟರ್, ಚೀಸ್. ಆರ್ಡರ್ ಮಾಡಿದ ನಂತರವೇ ಫ್ರೈ ಮಾಡಿ, ಬಿಸಿಯಾಗಿರುವಾಗಲೇ ಬೆಣ್ಣೆ ಹಚ್ಚಲಾಗುತ್ತದೆ.",
      primaryCta: "ಮೆನು ನೋಡಿ",
      secondaryCta: "WhatsApp ನಲ್ಲಿ ಆರ್ಡರ್",
      metadataLocation: "ಕೊರಮಂಗಲ, ಬೆಂಗಳೂರು",
      metadataHours: "ಬೆಳಿಗ್ಗೆ 11 – ರಾತ್ರಿ 11",
      trustEyebrow: "ನಿಯಮ",
      trustTitle: "ನಾವು ಮಾಡುವ ಎಲ್ಲವೂ ಪಾವ್‌ಗೆ ಹೊಂದುವಂತೆ ಮಾಡುತ್ತೇವೆ.",
      trustCards: [
        {
          icon: "leaf",
          title: "ತಾಜಾ ಪದಾರ್ಥಗಳು",
          body: "ಆ ಬೆಳಗ್ಗೆ ಅರೆದ ಚಟ್ನಿ, ಆ ಬೆಳಗ್ಗೆ ಸುಲಿದ ಆಲೂಗಡ್ಡೆ, ನಿನ್ನೆಯದಲ್ಲದ ಎಣ್ಣೆ.",
        },
        {
          icon: "flame",
          title: "ಬೋಲ್ಡ್ ಫ್ಲೇವರ್ಸ್",
          body: "ಖಾರ ಇರುವ ಬೆಳ್ಳುಳ್ಳಿ ಚಟ್ನಿ, ಜೋರಾದ ಸೆಜ್ವಾನ್, ಕ್ಷಮೆ ಕೇಳದ ಕರಗಿದ ಚೀಸ್. ಇಲ್ಲಿ ಆಕಸ್ಮಿಕವಾಗಿ ಮೈಲ್ಡ್ ಆಗಿರುವುದು ಏನೂ ಇಲ್ಲ.",
        },
        {
          icon: "heart",
          title: "ಪ್ರೀತಿಯಿಂದ ತಯಾರಿಸಿದ್ದು",
          body: "ಆರ್ಡರ್ ಮಾಡಿದ ನಂತರವೇ ಫ್ರೈ ಮಾಡಿ, ತವಾದಲ್ಲಿ ಸೀಳಿ ಬೆಣ್ಣೆ ಹಚ್ಚಿ, ಬಿಸಿಯಾಗಿ ಸೀಲ್ ಮಾಡಿ ಕೊಡಲಾಗುತ್ತದೆ. ಸ್ವಚ್ಛ ಅಡಿಗೆ, ಪ್ರತಿ ಬಾರಿ ತಾಜಾ ಬ್ಯಾಚ್.",
        },
      ],
      anatomyEyebrow: "ಹೋಲಿ ಪಾವ್ ಒಳಗೆ",
      anatomyTitle: "ಐದು ಪದರಗಳು. ಯಾವುದೇ ಶಾರ್ಟ್‌ಕಟ್ ಇಲ್ಲ.",
      anatomyCallouts: [
        { title: "ಮೃದು ಪಾವ್", body: "ಹಗುರ, ನುಣುಪಾದ ಮತ್ತು ಬೆಣ್ಣೆಯುಕ್ತ." },
        { title: "ಹಸಿರು ಚಟ್ನಿ", body: "ತಾಜಾ, ಖಾರ ಮತ್ತು ಚುರುಕಾದ." },
        { title: "ಗೋಲ್ಡನ್ ವಡಾ", body: "ಹೊರಗೆ ಕರಕರಿತ, ಒಳಗೆ ಮೃದು ಮತ್ತು ರುಚಿಕರ." },
        { title: "ಬೆಳ್ಳುಳ್ಳಿ ಚಟ್ನಿ", body: "ಖಾರ, ಬೆಳ್ಳುಳ್ಳಿಯುಕ್ತ ಮತ್ತು ಪಂಚ್ ತುಂಬಿದ." },
        { title: "ಬೆಣ್ಣೆ ಪಾವ್", body: "ಎಲ್ಲವನ್ನೂ ಒಟ್ಟಿಗೆ ಹಿಡಿದಿಡುವ ಪರಿಪೂರ್ಣ ಆಧಾರ." },
      ],
      bestsellerEyebrow: "ಮೆನು",
      bestsellerTitle: "ಪ್ರತಿ ಆರ್ಡರ್‌ಗೆ, ತಾಜಾ ತಯಾರಿಸಿದ",
      storyEyebrow: "ನಮ್ಮ ಕಥೆ",
      storyTitle: "ನಾವು ಒಂದು ಪಾವ್‌ನಿಂದ ಶುರು ಮಾಡಿ ಗೀಳಾಗಿ ಹೋದೆವು.",
      storyBody:
        "ಮೃದು ಪಾವ್, ಜೋರಾದ ಚಟ್ನಿ, ತೀಕ್ಷ್ಣ ಮಸಾಲೆ. ನಂತರ ಇದರೊಳಗೆ ಇನ್ನೇನು ಹೋಗಬಹುದು ಎಂದು ಕೇಳಲು ಶುರು ಮಾಡಿದೆವು, ಇಲ್ಲ ಎನ್ನುವುದನ್ನು ನಿಲ್ಲಿಸಿದೆವು.",
      storyCta: "ನಮ್ಮ ಕಥೆ ಓದಿ",
      storyStamps: "Est. 2026 · ಕೊರಮಂಗಲ, ಬೆಂಗಳೂರು",
      seoDescription:
        "ಕೊರಮಂಗಲ, ಬೆಂಗಳೂರಿನಲ್ಲಿ ಒಂದು ಪಾವ್ ಅಡಿಗೆ. ವಡಾ ಪಾವ್, ಮಿಸಲ್, ಪಾವ್ ಭಾಜಿ ಮತ್ತು ಸೈಡ್ಸ್, ಆರ್ಡರ್ ಮಾಡಿದ ನಂತರವೇ ಫ್ರೈ ಮಾಡಲಾಗುತ್ತದೆ. Sinfully good.",
      heroRibbon: "ಪಾಪದಷ್ಟು ಚೆನ್ನಾಗಿದೆ.",
      heroStampLine1: "ತಾಜಾ ತಯಾರಿಸಿದ್ದು.",
      heroStampLine2: "ಗಟ್ಟಿಯಾಗಿ ಬಡಿಸಿದ್ದು.",
      occasionsTitle: "ನಿಮ್ಮ ಹತ್ತಿರ ನಮ್ಮನ್ನು ಹುಡುಕಿ",
      occasions: [
        { icon: "cap", label: "ಕಾಲೇಜು ಬೀದಿಗಳು" },
        { icon: "briefcase", label: "ಆಫೀಸ್ ಲಂಚ್" },
        { icon: "people", label: "ವೀಕೆಂಡ್ ಕ್ರೇವಿಂಗ್ಸ್" },
        { icon: "moon", label: "ರಾತ್ರಿ ತಿಂಡಿ" },
      ],
      deliveryEyebrow: "ಹೋಲಿ. ಹೋಂ ಡೆಲಿವರಿ.",
      deliveryTitle: "ಬಿಸಿ. ತಾಜಾ. ದಾರಿಯಲ್ಲಿದೆ.",
      deliverySubtitle: "WhatsApp ನಲ್ಲಿ ಆರ್ಡರ್ ಮಾಡಿ, ನಾವು ನಿಮ್ಮ ಬಾಗಿಲಿಗೆ ತಲುಪಿಸುತ್ತೇವೆ.",
    },
    menu: {
      title: "ಮೆನು",
      subtitle: "ಪ್ರೀಮಿಯಂ ಗುಣಮಟ್ಟದ ಪದಾರ್ಥಗಳಿಂದ ತಯಾರಿಸಿದ ಸ್ಟ್ರೀಟ್ ಫುಡ್ ರುಚಿ.",
      availabilityLabel: "ಲಭ್ಯತೆ",
      inStock: "ಲಭ್ಯವಿದೆ",
      outOfStock: "ಸ್ಟಾಕ್ ಇಲ್ಲ",
      vegNote: "100% ಸಸ್ಯಾಹಾರಿ ಅಡುಗೆ",
      ribbon: "ಪ್ರತಿ ಆರ್ಡರ್‌ಗೆ, ತಾಜಾ ತಯಾರಿಸಿದ.",
      signatureTag: "ಸಿಗ್ನೇಚರ್",
    },
    notFound: {
      code: "404",
      ribbon: "ಮೆನುವಿನಲ್ಲಿ ಇಲ್ಲ.",
      title: "ಇದನ್ನು ನಾವು ಮಾಡುತ್ತಿಲ್ಲ.",
      body:
        "ನೀವು ಹುಡುಕುತ್ತಿದ್ದ ಪೇಜ್ ಇಲ್ಲಿ ಇಲ್ಲ. ಆದರೆ ಪಾವ್ ಇದೆ. ಮೆನುವಿನಲ್ಲಿ ಇಪ್ಪತ್ತೊಂದು ಐಟಂಗಳಿವೆ, ಒಂದೂ ವ್ಯರ್ಥವಲ್ಲ.",
      menuCta: "ಮೆನು ನೋಡಿ",
      homeCta: "ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ",
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
      ribbon: "ಬೆಳಿಗ್ಗೆ 11 – ರಾತ್ರಿ 11 ತೆರೆದಿರುತ್ತದೆ.",
    },
    about: {
      kicker: "ನಮ್ಮ ಕಥೆ",
      title: "ಒಂದು ಪಾವ್. ಮಿತಿಗಳಿಲ್ಲ.",
      subtitle: "ನಾವು ಬರೀ ಆಹಾರ ಮಾಡುವುದಿಲ್ಲ. ನಾವು ಕ್ರೇವಿಂಗ್ ರೂಪಿಸುತ್ತೇವೆ.",
      sections: [
        {
          eyebrow: "ಯಾಕೆ",
          title: "ಇದು ಪಾವ್‌ನಿಂದ ಶುರುವಾಗುತ್ತದೆ.",
          body: "ಪಾವ್ ಅನ್ನು ಸರಿಯಾಗಿ ಮಾಡಿ, ಮೃದು, ತಾಜಾ, ಬೆಣ್ಣೆ ಹಿಡಿದಿಡುವಂತೆ, ಆಗ ನೀವು ಅದರೊಳಗೆ ಹಾಕುವ ಎಲ್ಲದಕ್ಕೂ ಒಂದು ಅವಕಾಶ ಸಿಗುತ್ತದೆ. ತಪ್ಪಾಗಿ ಮಾಡಿದರೆ ಏನೂ ಉಳಿಸುವುದಿಲ್ಲ. ಅದೇ ನಾವು ಶುರು ಮಾಡಿದ ಸ್ಥಳ, ಮತ್ತು ಪ್ರತಿ ಹೊಸ ಐಟಂ ಅಲ್ಲಿಂದಲೇ ಶುರುವಾಗುತ್ತದೆ.",
        },
        {
          eyebrow: "ಆರ್ಡರ್‌ಗೆ ತಯಾರಿಸಿದ್ದು",
          title: "ತಾಜಾ ಹುರಿದದ್ದು. ಬಿಸಿಯಾಗಿ ತಿಂದದ್ದು.",
          body: "ನೀವು ಆರ್ಡರ್ ಮಾಡಿದ ನಂತರವೇ ಪ್ರತಿ ವಡಾ ಎಣ್ಣೆಗೆ ಬೀಳುತ್ತದೆ. ಪಾವ್ ಅನ್ನು ಸೀಳಿ, ಬೆಣ್ಣೆ ಹಚ್ಚಿ, ಅಲ್ಲೇ ತವಾದ ಮೇಲೆ ಬೇಯಿಸುತ್ತೇವೆ. ಚಟ್ನಿ ಆ ಬೆಳಗ್ಗೆಯೇ ಅರೆದದ್ದು. ನಮ್ಮ ಕೌಂಟರ್‌ನ ಮೇಲೆ ನಿಮ್ಮ ಊಟಕ್ಕಿಂತ ಹಳೆಯದು ಯಾವುದೂ ಇಲ್ಲ.",
        },
        {
          eyebrow: "ಮಸಾಲೆ",
          title: "ಯಾವುದೇ ಶಾರ್ಟ್‌ಕಟ್ ಇಲ್ಲ. ಯಾವುದೇ ಬದಲಿ ಇಲ್ಲ.",
          body: "ಬೆಳ್ಳುಳ್ಳಿ ಚಟ್ನಿಯನ್ನು ಒಣ-ಭಾಜಿಸಿ, ತಾಜಾವಾಗಿ ಅರೆಯುತ್ತೇವೆ. ಬ್ಯಾಟರ್‌ಗೆ ಕರಿಬೇವು ಮತ್ತು ಹಿಂಗು ಬೆರೆಸುತ್ತೇವೆ. ಪಾವ್‌ಗೆ ತಾಗುವ ಯಾವುದೇ ವಸ್ತುವಿನ ಶಾರ್ಟ್‌ಕಟ್ ಆವೃತ್ತಿಯನ್ನು ನಾವು ಖರೀದಿಸುವುದಿಲ್ಲ.",
        },
        {
          eyebrow: "ವಾಗ್ದಾನ",
          title: "ಪಾವ್‌ಗೆ ಹೊಂದುವುದಾದರೆ, ನಾವು ಅದನ್ನು ಮಾಡುತ್ತೇವೆ.",
          body: "ಬೆಣ್ಣೆ, ಚೀಸ್, ಸೆಜ್ವಾನ್, ಮೊಳಕೆ, ಮಸಾಲೆ, ನಿಯಮ ಸರಳ ಮತ್ತು ಪಟ್ಟಿ ತೆರೆದಿದೆ. ಪಾವ್‌ಗೆ ಏನು ಸೇರುತ್ತದೆ ಎಂದು ಹೇಳಿ, ನಾವು ಬಹುಶಃ ಅದನ್ನು ಪ್ರಯತ್ನಿಸುತ್ತೇವೆ.",
        },
      ],
      quote:
        "“ಹೋಲಿ ಪಾವ್ ತಿಂದ ಮೇಲೆ ಬೇರೆ ಎಲ್ಲವೂ ಪಾಪವಂತೆ ಅನಿಸುತ್ತದೆ.”",
      quoteAttribution: "ಪ್ರತಿ ಮೊದಲ ಬಾರಿ ಗ್ರಾಹಕ, ಕೊನೆಗೆ.",
      closerEyebrow: "ಮುಂದೇನು",
      closerTitle: "ಪಾವ್‌ನಲ್ಲಿ ಇನ್ನೇನು ಹಾಕುತ್ತೇವೆ ಎಂದು ಬಂದು ನೋಡಿ.",
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
      stampLine1: "ಅಧಿಕೃತವಾಗಿ",
      stampLine2: "ಹೋಲಿ.",
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
