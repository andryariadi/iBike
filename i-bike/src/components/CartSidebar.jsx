"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useShoppingCart } from "use-shopping-cart";
import CartItem from "./CartItem";
import CheckoutBtn from "./CheckoutBtn";

export default function CartSidebar() {
  const { cartCount, cartDetails, shouldDisplayCart, totalPrice, handleCartClick } = useShoppingCart();

  return (
    <>
      <Sheet open={open} onOpenChange={handleCartClick}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>My Shopping Cart ({cartCount})</SheetTitle>
          </SheetHeader>
          <>
            {cartCount === 0 ? (
              <div className="bg-amber-500 flex justify-center items-center h-[90vh]">
                <h5 className="text-black/50">Your cart is empty!</h5>
              </div>
            ) : (
              <ScrollArea className="bg-rose-500 h-[70vh] xl:h-[80vh] pr-4 mb-4">
                {cartDetails &&
                  Object.entries(cartDetails).map(([key, item]) => {
                    return <CartItem item={item} key={key} />;
                  })}
              </ScrollArea>
            )}
          </>
          {cartCount > 0 && (
            <div>
              <div className="flex items-center justify-between font-semibold">
                <div className="uppercase">Total</div>
                <div className="text-accent">${totalPrice}</div>
              </div>
              <CheckoutBtn />
            </div>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}
