import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { AppProvider, useApp } from "@/components/providers/app-provider";
import { menuItems } from "@/data/menu";

function Harness() {
  const {
    cartItems,
    wishlistItems,
    addToCart,
    addToWishlist,
    moveWishlistToCart,
    locale,
    setLocale,
  } = useApp();

  const item = menuItems[0];

  return (
    <div>
      <p data-testid="cart-count">{cartItems.reduce((sum, i) => sum + i.quantity, 0)}</p>
      <p data-testid="wishlist-count">{wishlistItems.length}</p>
      <p data-testid="locale">{locale}</p>

      <button type="button" onClick={() => addToWishlist(item)}>
        add wishlist
      </button>
      <button type="button" onClick={() => addToCart(item)}>
        add cart
      </button>
      <button type="button" onClick={() => moveWishlistToCart(item.id)}>
        move wishlist to cart
      </button>
      <button type="button" onClick={() => setLocale("kn")}>
        set kn
      </button>
    </div>
  );
}

describe("AppProvider cart/wishlist", () => {
  it("supports add to cart and wishlist, then move wishlist item to cart", async () => {
    render(
      <AppProvider>
        <Harness />
      </AppProvider>,
    );

    fireEvent.click(screen.getByText("add wishlist"));
    expect(screen.getByTestId("wishlist-count")).toHaveTextContent("1");

    fireEvent.click(screen.getByText("add cart"));
    expect(screen.getByTestId("cart-count")).toHaveTextContent("1");

    fireEvent.click(screen.getByText("move wishlist to cart"));
    expect(screen.getByTestId("wishlist-count")).toHaveTextContent("0");
    expect(screen.getByTestId("cart-count")).toHaveTextContent("2");

    fireEvent.click(screen.getByText("set kn"));

    await waitFor(() => {
      expect(screen.getByTestId("locale")).toHaveTextContent("kn");
      expect(localStorage.getItem("holy-pav-locale")).toBe("kn");
      expect(localStorage.getItem("holy-pav-cart")).toContain("classic-vada-pav");
      expect(localStorage.getItem("holy-pav-wishlist")).toBe("[]");
    });
  });
});
