"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type {
  CartItem,
  CustomerAddress,
  Locale,
  MenuItem,
  OrderSummary,
  WishlistItem,
} from "@/types/commerce";
import { DEFAULT_LOCALE, getDictionary, resolveLocale } from "@/lib/i18n";
import {
  addItemToCart,
  addItemToWishlist,
  moveWishlistItemToCart,
  removeCartItem,
  removeWishlistItem,
  updateCartItemQuantity,
} from "@/lib/store-utils";
import { calculatePriceSummary } from "@/lib/pricing";

const STORAGE_KEYS = {
  locale: "holy-pav-locale",
  cart: "holy-pav-cart",
  wishlist: "holy-pav-wishlist",
  lastOrder: "holy-pav-last-order",
};

interface AppContextValue {
  locale: Locale;
  dictionary: ReturnType<typeof getDictionary>;
  cartItems: CartItem[];
  wishlistItems: WishlistItem[];
  lastOrder: OrderSummary | null;
  totals: ReturnType<typeof calculatePriceSummary>;
  setLocale: (nextLocale: Locale) => void;
  addToCart: (item: MenuItem, quantity?: number) => void;
  updateCartQuantity: (itemId: string, nextQuantity: number) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  addToWishlist: (item: MenuItem) => void;
  removeFromWishlist: (itemId: string) => void;
  moveWishlistToCart: (itemId: string) => void;
  setLastOrder: (order: OrderSummary | null) => void;
  buildCustomerAddress: (payload: Partial<CustomerAddress>) => CustomerAddress;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

function parseStoredValue<T>(value: string | null, fallback: T): T {
  if (!value) {
    return fallback;
  }

  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") {
      return DEFAULT_LOCALE;
    }

    return resolveLocale(localStorage.getItem(STORAGE_KEYS.locale));
  });
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    return parseStoredValue<CartItem[]>(localStorage.getItem(STORAGE_KEYS.cart), []);
  });
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    return parseStoredValue<WishlistItem[]>(
      localStorage.getItem(STORAGE_KEYS.wishlist),
      [],
    );
  });
  const [lastOrder, setLastOrderState] = useState<OrderSummary | null>(() => {
    if (typeof window === "undefined") {
      return null;
    }

    return parseStoredValue<OrderSummary | null>(
      localStorage.getItem(STORAGE_KEYS.lastOrder),
      null,
    );
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    localStorage.setItem(STORAGE_KEYS.locale, locale);
  }, [locale]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    localStorage.setItem(STORAGE_KEYS.wishlist, JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    localStorage.setItem(STORAGE_KEYS.lastOrder, JSON.stringify(lastOrder));
  }, [lastOrder]);

  const value = useMemo<AppContextValue>(() => {
    return {
      locale,
      dictionary: getDictionary(locale),
      cartItems,
      wishlistItems,
      lastOrder,
      totals: calculatePriceSummary(cartItems),
      setLocale: (nextLocale) => setLocaleState(nextLocale),
      addToCart: (item, quantity = 1) => {
        setCartItems((current) => addItemToCart(current, item, quantity));
      },
      updateCartQuantity: (itemId, nextQuantity) => {
        setCartItems((current) => updateCartItemQuantity(current, itemId, nextQuantity));
      },
      removeFromCart: (itemId) => {
        setCartItems((current) => removeCartItem(current, itemId));
      },
      clearCart: () => {
        setCartItems([]);
      },
      addToWishlist: (item) => {
        setWishlistItems((current) => addItemToWishlist(current, item));
      },
      removeFromWishlist: (itemId) => {
        setWishlistItems((current) => removeWishlistItem(current, itemId));
      },
      moveWishlistToCart: (itemId) => {
        const result = moveWishlistItemToCart(cartItems, wishlistItems, itemId);
        setCartItems(result.cartItems);
        setWishlistItems(result.wishlistItems);
      },
      setLastOrder: (order) => {
        setLastOrderState(order);
      },
      buildCustomerAddress: (payload) => ({
        fullName: payload.fullName ?? "",
        phone: payload.phone ?? "",
        addressLine: payload.addressLine ?? "",
        landmark: payload.landmark ?? "",
        pincode: payload.pincode ?? "",
        city: payload.city ?? "Bengaluru",
      }),
    };
  }, [cartItems, lastOrder, locale, wishlistItems]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useApp must be used within AppProvider");
  }

  return context;
}
