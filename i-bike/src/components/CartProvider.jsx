"use client";

import { CartProvider } from "use-shopping-cart";

export default function CartProvider({ children }) {
  return (
    <>
      <CartProvider mode="payment" cartMode="client-only" stripe="" successUrl="success" cancelUrl="error" language="en-US" currency="USD" billingAddressCollection={true} shouldPersist={true}>
        {children}
      </CartProvider>
    </>
  );
}
