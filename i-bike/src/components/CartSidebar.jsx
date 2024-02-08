"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useShoppingCart } from "use-shopping-cart";
import CartItem from "./CartItem";
import CheckoutBtn from "./CheckoutBtn";

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
              <div className="bg-amber-500 flex justify-center items-center h-[90vh]">
                <h5 className="text-black/50">Your cart is empty!</h5>
              </div>
            ) : (
              <div className="scroll-bar h-[70vh] xl:h-[75vh] pr-4 mb-4 overflow-y-auto">
                {cartDetails &&
                  Object.entries(cartDetails).map(([key, item]) => {
                    return <CartItem item={item} key={key} />;
                  })}
              </div>
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
