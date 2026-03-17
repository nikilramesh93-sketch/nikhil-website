import {
  addItemToCart,
  addItemToWishlist,
  moveWishlistItemToCart,
  removeCartItem,
  updateCartItemQuantity,
} from "@/lib/store-utils";

const menuItem = {
  id: "classic-vada-pav",
  name: "Classic Vada Pav",
  nameKn: "ಕ್ಲಾಸಿಕ್ ವಡಾ ಪಾವ್",
  description: "x",
  descriptionKn: "x",
  price: 65,
  category: "Best",
  categoryKn: "Best",
  dietaryTag: "veg" as const,
  isAvailable: true,
  accent: "from-orange-100 to-rose-100",
};

describe("store utils", () => {
  it("adds, updates and removes cart items", () => {
    const cart = addItemToCart([], menuItem);
    expect(cart[0].quantity).toBe(1);

    const incremented = addItemToCart(cart, menuItem);
    expect(incremented[0].quantity).toBe(2);

    const updated = updateCartItemQuantity(incremented, menuItem.id, 4);
    expect(updated[0].quantity).toBe(4);

    const removed = removeCartItem(updated, menuItem.id);
    expect(removed).toHaveLength(0);
  });

  it("moves item from wishlist to cart", () => {
    const wishlist = addItemToWishlist([], menuItem);
    const moved = moveWishlistItemToCart([], wishlist, menuItem.id);

    expect(moved.cartItems).toHaveLength(1);
    expect(moved.cartItems[0].itemId).toBe(menuItem.id);
    expect(moved.wishlistItems).toHaveLength(0);
  });
});
