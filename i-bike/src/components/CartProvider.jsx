"use client";

import { CartProvider as CProvider } from "use-shopping-cart";

export default function CartProvider({ children }) {
  return (
    <>
      <CProvider
        mode="payment"
        cartMode="client-only"
        stripe="pk_test_51OizpVBOqDn3tEVI6bkJn5afNhLERTkDWIq8EGVtbcpMC2s4xix87qdiruUkmJpehVEtyBv9OxOkJn2RrPa8276i00pqvUzlRn"
        successUrl="http://localhost:3000/stripe/success"
        cancelUrl="http://localhost:3000/stripe/error"
        language="en-US"
        currency="USD"
        billingAddressCollection={true}
        shouldPersist={true}
      >
        {children}
      </CProvider>
    </>
  );
}
