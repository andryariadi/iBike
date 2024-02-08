"use client";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
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
          {cartCount === 0 ? <div>Your cart is empty</div> : <ScrollArea>{cartDetails && Object.entries(cartDetails).map(([key, item]) => <CartItem item={item} key={key} />)}</ScrollArea>}
        </SheetContent>
      </Sheet>
    </>
  );
}
