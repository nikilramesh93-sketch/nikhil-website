import type { CartItem, MenuItem, WishlistItem } from "@/types/commerce";

export function toCartItem(item: MenuItem): CartItem {
  return {
    itemId: item.id,
    name: item.name,
    nameKn: item.nameKn,
    price: item.price,
    quantity: 1,
    dietaryTag: item.dietaryTag,
    accent: item.accent,
  };
}

export function toWishlistItem(item: MenuItem): WishlistItem {
  return {
    itemId: item.id,
    name: item.name,
    nameKn: item.nameKn,
    price: item.price,
    dietaryTag: item.dietaryTag,
    accent: item.accent,
  };
}

export function addItemToCart(
  cartItems: CartItem[],
  menuItem: MenuItem,
  quantity = 1,
): CartItem[] {
  const existingItem = cartItems.find((item) => item.itemId === menuItem.id);

  if (!existingItem) {
    return [...cartItems, { ...toCartItem(menuItem), quantity }];
  }

  return cartItems.map((item) =>
    item.itemId === menuItem.id
      ? { ...item, quantity: item.quantity + quantity }
      : item,
  );
}

export function updateCartItemQuantity(
  cartItems: CartItem[],
  itemId: string,
  nextQuantity: number,
): CartItem[] {
  if (nextQuantity <= 0) {
    return cartItems.filter((item) => item.itemId !== itemId);
  }

  return cartItems.map((item) =>
    item.itemId === itemId ? { ...item, quantity: nextQuantity } : item,
  );
}

export function removeCartItem(cartItems: CartItem[], itemId: string): CartItem[] {
  return cartItems.filter((item) => item.itemId !== itemId);
}

export function addItemToWishlist(
  wishlistItems: WishlistItem[],
  menuItem: MenuItem,
): WishlistItem[] {
  if (wishlistItems.some((item) => item.itemId === menuItem.id)) {
    return wishlistItems;
  }

  return [...wishlistItems, toWishlistItem(menuItem)];
}

export function removeWishlistItem(
  wishlistItems: WishlistItem[],
  itemId: string,
): WishlistItem[] {
  return wishlistItems.filter((item) => item.itemId !== itemId);
}

export function moveWishlistItemToCart(
  cartItems: CartItem[],
  wishlistItems: WishlistItem[],
  itemId: string,
): { cartItems: CartItem[]; wishlistItems: WishlistItem[] } {
  const wishlistItem = wishlistItems.find((item) => item.itemId === itemId);

  if (!wishlistItem) {
    return { cartItems, wishlistItems };
  }

  const existingCartItem = cartItems.find((item) => item.itemId === itemId);
  const nextCartItems = existingCartItem
    ? cartItems.map((item) =>
        item.itemId === itemId ? { ...item, quantity: item.quantity + 1 } : item,
      )
    : [
        ...cartItems,
        {
          ...wishlistItem,
          quantity: 1,
        },
      ];

  const nextWishlistItems = wishlistItems.filter((item) => item.itemId !== itemId);

  return {
    cartItems: nextCartItems,
    wishlistItems: nextWishlistItems,
  };
}
