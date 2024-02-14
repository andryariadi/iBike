"use client";

import Image from "next/image";
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";
import Navbar from "./NavbarLink";
import { CgShoppingBag } from "react-icons/cg";
import CartSidebar from "./CartSidebar";
import UserProfile from "./UserProfile";
import NavbarLink from "./NavbarLink";

export default function HeaderDetail({ users, session }) {
  const { cartCount, handleCartClick } = useShoppingCart();

  console.log(cartCount, "<----diheaderdetail");

  return (
    <>
      <header className="bg-white shadow-lg sticky top-0 py-5 z-10 md:px-[40px] lg:px-24">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <Image src="/icons/ibikez.svg" alt="iBikez Logo" width={70} height={70} className="hover:scale-105 transition-all duration-300" />
          </Link>
          <NavbarLink />
          <div className="flex items-center gap-5">
            {session ? (
              <div className="relative cursor-pointer" onClick={() => handleCartClick()}>
                <CgShoppingBag size={28} />
                {cartCount > 0 && (
                  <div className="absolute bg-accent flex justify-center items-center text-white h-5 w-5 rounded-full -right-1 -bottom-1">
                    <p className="font-medium text-xs">{cartCount}</p>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/login" className="relative cursor-pointer">
                <CgShoppingBag size={28} />
                {session ? (
                  <div className="absolute bg-accent flex justify-center items-center text-white h-5 w-5 rounded-full -right-1 -bottom-1">
                    <p className="font-medium text-xs">{cartCount}</p>
                  </div>
                ) : null}
              </Link>
            )}
            <CartSidebar />
            <UserProfile user={users} session={session} />
          </div>
        </div>
      </header>
    </>
  );
}
