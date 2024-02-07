"use client";

import { urlFor } from "@/lib/sanityConfig";
import Image from "next/image";
import { CgEye, CgShoppingBag } from "react-icons";
import AddToCart from "./AddToCart";

export default function Bikes({ bike }) {
  const popularBikeCat = bike.categories.find((cat) => cat.name === "popular");

  console.log({ popularBikeCat, bike }, "<----dibikescomp");

  return (
    <>
      <div className="group">
        <div className="border h-[328px] mb-5 p-4 overflow-hidden relative">
          <div className="flex justify-center items-center bg-primary/5 w-full h-full group-hover:bg-primary/10 transition-all duration-300">
            {popularBikeCat && <div className="absolute top-8 left-8 bg-accent px-3 text-white text-sm font-medium uppercase rounded-sm">Popular</div>}
            <Image src={urlFor(bike.images[0]).url()} alt={bike.name} width={250} height={250} className="object-cover" />
          </div>
          <div>
            <AddToCart />
          </div>
        </div>
      </div>
    </>
  );
}
