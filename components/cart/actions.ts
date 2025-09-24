/** biome-ignore-all lint/correctness/noUnusedFunctionParameters: <explanation> */
"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { TAGS } from "@/lib/constants";
import {
  addToCart,
  createCart,
  getCart,
  removeFromCart,
  updateCart,
} from "@/lib/shopify";

export async function addItem(
  prevState: any,
  selectedVariantId: string | undefined
) {
  if (!selectedVariantId) {
    console.error("No variant selected");
    return "Error adding item to cart";
  }

  try {
    await addToCart([{ merchandiseId: selectedVariantId, quantity: 1 }]);
    revalidateTag(TAGS.cart);
    return "Item added successfully";
  } catch (e) {
    console.error("Error adding item to cart", e);
    return "Error adding item to cart";
  }
}

export async function removeItem(prevState: any, merchandiseId: string) {
  try {
    const cart = await getCart();
    if (!cart) {
      console.error("Error fetching cart");
      return "Error fetching cart";
    }
    const lineItem = cart.lines.find(
      (line) => line.merchandise.id === merchandiseId
    );
    if (lineItem?.id) {
      await removeFromCart([lineItem.id]);
      revalidateTag(TAGS.cart);
      return "Item removed successfully";
    }
    console.error("Item not found in cart");
    return "Item not found in cart";
  } catch (e) {
    console.error("Error removing item from cart", e);
    return "Error removing item from cart";
  }
}

export async function updateItemQuantity(
  prevState: any,
  payload: {
    merchandiseId: string;
    quantity: number;
  }
) {
  const { merchandiseId, quantity } = payload;

  try {
    const cart = await getCart();
    if (!cart) {
      console.error("Error fetching cart");
      return "Error fetching cart";
    }
    const lineItem = cart.lines.find(
      (line) => line.merchandise.id === merchandiseId
    );
    if (lineItem?.id) {
      if (quantity === 0) {
        await removeFromCart([lineItem.id]);
        revalidateTag(TAGS.cart);
        return "Item removed successfully";
      }
      await updateCart([
        {
          id: lineItem.id,
          merchandiseId,
          quantity,
        },
      ]);
      revalidateTag(TAGS.cart);
      return "Item quantity updated successfully";
    }
    if (quantity > 0) {
      // If the item doesn't exist in the cart and quantity > 0, add it
      await addToCart([{ merchandiseId, quantity }]);
      revalidateTag(TAGS.cart);
      return "Item added successfully";
    }
    return "No action performed";
  } catch (e) {
    console.error("Error updating item quantity", e);
    return "Error updating item quantity";
  }
}

export async function redirectToCheckout() {
  const cart = await getCart();
  if (!cart?.checkoutUrl) {
    console.error("No cart found for checkout");
    return;
  }
  redirect(cart.checkoutUrl);
}

export async function createCartAndSetCookie() {
  const cart = await createCart();
  (await cookies()).set("cartId", cart.id!);
}

export async function handleCheckout() {
  const cart = await getCart();
  if (!cart?.checkoutUrl) {
    console.error("No cart found for checkout");
    return;
  }
  redirect(cart.checkoutUrl);
}
