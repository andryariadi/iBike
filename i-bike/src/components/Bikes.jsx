"use client";

import { urlFor } from "@/lib/sanityConfig";
import Image from "next/image";
import { CgEye, CgShoppingBag } from "react-icons/cg";
import AddToCartBtn from "./AddToCart";
import Link from "next/link";

export default function Bikes({ bike }) {
  const popularBikeCat = bike.categories.find((cat) => cat.name === "popular");

  // console.log({ popularBikeCat, bike }, "<----dibikescomp");

  return (
    <>
      <div className="group">
        <div className="border h-[328px] mb-5 p-4 overflow-hidden relative">
          <div className="flex justify-center items-center bg-primary/5 w-full h-full group-hover:bg-primary/10 transition-all duration-300">
            {popularBikeCat && <div className="absolute top-8 left-8 bg-accent px-3 py-[5px] text-white text-sm font-medium uppercase rounded-sm">Popular</div>}
            <Image src={urlFor(bike.images[0]).url()} alt={bike.name} width={230} height={230} className="object-cover" />
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center gap-[10px] opacity-0 group-hover:opacity-100 transition-all duration-300">
            <AddToCartBtn id={bike._id} name={bike.name} currency="USD" price={bike.price} description={bike.description} images={bike.images} btnStyles="btn-icon btn-accent hover:scale-110" icon={<CgShoppingBag />} />
            <Link href={`/product/${bike.slug}`} className="hover:scale-110">
              <button className="btn-icon btn-primary">
                <CgEye />
              </button>
            </Link>
          </div>
        </div>
        <h5 className="text-gray-400 font-semibold mb-2">{bike.categories[0].name} Bike</h5>
        <h4 className="mb-1">{bike.name}</h4>
        <p className="text-lg font-bold text-accent">${bike.price}</p>
      </div>
    </>
  );
}
