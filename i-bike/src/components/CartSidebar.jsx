"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useShoppingCart } from "use-shopping-cart";
import CartItem from "./CartItem";

export default function CartSidebar() {
  const { cartCount, cartDetails, shouldDisplayCart, totalPrice, handleCartClick } = useShoppingCart();

  return (
    <>
      <Sheet open={shouldDisplayCart} onOpenChange={handleCartClick}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>My Shopping Cart ({cartCount})</SheetTitle>
          </SheetHeader>
          <>
            {cartCount === 0 ? (
              <div>Your cart is empty</div>
            ) : (
              <ScrollArea className="bg-rose-500 h-[70vh] xl:h-[80vh] pr-4 mb-4">
                {cartDetails &&
                  Object.entries(cartDetails).map(([key, item]) => {
                    return <CartItem item={item} key={key} />;
                  })}
              </ScrollArea>
            )}
          </>
        </SheetContent>
      </Sheet>
    </>
  );
}
