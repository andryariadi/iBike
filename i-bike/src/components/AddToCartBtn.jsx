"use client";

import { useShoppingCart } from "use-shopping-cart";
import { useToast } from "./ui/use-toast";
import Link from "next/link";

export default function AddToCartBtn({ btnStyles, text, icon, id, name, currency, price, price_id, description, images, session }) {
  const { addItem } = useShoppingCart();
  const { toast } = useToast();

  const bike = {
    id: id,
    name: name,
    currency: currency,
    price: price,
    price_id: price_id,
    description: description,
    images: images,
  };

  return (
    <>
      {session ? (
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
      ) : (
        <Link href="/login">
          <button className={`${btnStyles}`}>
            <div>{text}</div>
            <div>{icon}</div>
          </button>
        </Link>
      )}
    </>
  );
}
