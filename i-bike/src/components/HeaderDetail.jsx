"use client";

import Image from "next/image";
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";
import Navbar from "./Navbar";
import { CgShoppingBag } from "react-icons/cg";
import CartSidebar from "./CartSidebar";
import UserProfile from "./UserProfile";

export default function HeaderDetail({ users }) {
  // console.log(users, "<----diheaderdetail");

  const { cartCount, handleCartClick } = useShoppingCart();
  return (
    <>
      <header className="bg-white shadow-lg sticky top-0 py-5 z-10 md:px-24">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <Image src="/icons/ibikez.svg" alt="iBikez Logo" width={70} height={70} className="hover:scale-105 transition-all duration-300" />
          </Link>
          <div className="flex items-center gap-5">
            <Navbar />
            <div className="relative cursor-pointer" onClick={() => handleCartClick()}>
              <CgShoppingBag size={28} />
              <div className="absolute bg-accent flex justify-center items-center text-white h-5 w-5 rounded-full -right-1 -bottom-1">
                <p className="font-medium text-xs">{cartCount}</p>
              </div>
            </div>
            <CartSidebar />
            <UserProfile user={users} />
          </div>
        </div>
      </header>
    </>
  );
}
