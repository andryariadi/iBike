"use client";

import { CartProvider as CProvider } from "use-shopping-cart";

export default function CartProvider({ children }) {
  return (
    <>
      <CProvider
        mode="payment"
        cartMode="client-only"
        stripe="pk_test_51ORywZDCU5NvTZ1tfZQXvPRa6aVV5kzhLY7Z5PGocYdlWCjPMFG3Z7gMkmxmX2QrlYN2Q9cgRP498AwwOQ7jKCYJ00UuKY0UyU"
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
