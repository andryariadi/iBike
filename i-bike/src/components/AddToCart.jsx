"use client";

import { useShoppingCart } from "use-shopping-cart";

export default function AddToCartBtn({ btnStyles, text, icon, id, name, currency, price, description, images }) {
  const { addItem } = useShoppingCart();

  const bike = {
    id: id,
    name: name,
    currency: currency,
    price: price,
    description: description,
    images: images,
  };

  return (
    <>
      <button
        className={`${btnStyles}`}
        onClick={() => {
          addItem(bike);
        }}
      >
        <div>{text}</div>
        <div>{icon}</div>
      </button>
    </>
  );
}
