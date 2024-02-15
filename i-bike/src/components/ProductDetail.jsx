"use client";

import Image from "next/image";
import { Suspense } from "react";
import SkeletonBike from "./SkeletonBike";
import Link from "next/link";
import AddToCartBtn from "./AddToCartBtn";
import { urlFor } from "@/lib/sanityConfig";
import { Bike, Clock, PackageCheck, RefreshCw, ChevronLeft } from "lucide-react";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motions/variant";

export default function ProductDetailComp({ bike, session }) {
  return (
    <>
      <div className="flex flex-col xl:flex-row gap-14">
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="bg-primary/5 hover:bg-primary/10 transition-all duration-300 xl:flex-1 flex justify-center items-center h-[460px] xl:h-[540px] xl:w-[700px]"
        >
          <Suspense fallback={<SkeletonBike />}>
            <Image src={urlFor(bike.images[0]).url()} alt={bike.name} title={bike.name} width={480} height={480} priority className="md:hover:scale-105 transition-all duration-300" />
          </Suspense>
        </motion.div>
        <div className="flex-1 flex flex-col justify-center items-start gap-10">
          <motion.div variants={fadeIn("left", 0.1)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.7 }}>
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <ChevronLeft size={20} />
              <p>Back To Home</p>
            </Link>
          </motion.div>
          <div className="flex flex-col gap-6 items-start">
            <motion.div variants={fadeIn("left", 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.7 }}>
              <h3>{bike.name}</h3>
              <p className="text-lg font-semibold text-accent">${bike.price}</p>
            </motion.div>
            <motion.p variants={fadeIn("left", 0.5)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.7 }}>
              {bike.description}
            </motion.p>
            <motion.div variants={fadeIn("left", 0.6)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.7 }}>
              <AddToCartBtn id={bike._id} name={bike.name} currency="USD" price={bike.price} price_id={bike.price_id} description={bike.description} images={bike.images} text="Add To Cart" btnStyles="btn btn-accent" session={session} />
            </motion.div>
          </div>
          <div className="flex flex-col gap-3">
            <motion.div variants={fadeIn("left", 0.7)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.7 }} className="flex gap-2">
              <PackageCheck size={20} className="text-accent" />
              <p>Free shipping on order over $150</p>
            </motion.div>
            <motion.div variants={fadeIn("left", 0.8)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.7 }} className="flex gap-2">
              <RefreshCw size={20} className="text-accent" />
              <p>Free return for 30 days</p>
            </motion.div>
            <motion.div variants={fadeIn("left", 0.9)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.7 }} className="flex gap-2">
              <Bike size={20} className="text-accent" />
              <p>The bicycles partially assembled and benefit from transport insurance</p>
            </motion.div>
            <motion.div variants={fadeIn("left", 0.9)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.7 }} className="flex gap-2">
              <Clock size={20} className="text-accent" />
              <p>Fast delivery</p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
