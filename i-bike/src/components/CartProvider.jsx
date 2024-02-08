"use client";

import { CartProvider as CProvider } from "use-shopping-cart";

export default function CartProvider({ children }) {
  return (
    <>
      <CProvider mode="payment" cartMode="client-only" stripe="" successUrl="success" cancelUrl="error" language="en-US" currency="USD" billingAddressCollection={true} shouldPersist={true}>
        {children}
      </CProvider>
    </>
  );
}
