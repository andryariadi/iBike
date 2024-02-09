"use client";

import { useShoppingCart } from "use-shopping-cart";
import { useToast } from "./ui/use-toast";

export default function AddToCartBtn({ btnStyles, text, icon, id, name, currency, price, description, images }) {
  const { addItem } = useShoppingCart();
  const { toast } = useToast();

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
          toast({
            title: `${name} has been added to your cart!`,
          });
        }}
      >
        <div>{text}</div>
        <div>{icon}</div>
      </button>
    </>
  );
}
