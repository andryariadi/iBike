"use client";

import Link from "next/link";
import CarouselPopularBikes from "./CarouselPopularBikes";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motions/variant";

export default function PopularBikesComp({ bikes, session }) {
  return (
    <>
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="text-center text-[30px] lg:text-[45px] bg-clip-text text-transparent bg-gradient-to-r from-[#FE0000] to-[#37383A]"
        >
          Most Popular Bikes
        </motion.h2>
        <motion.p variants={fadeIn("up", 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.7 }} className="text-center mb-[30px]">
          The Worlds Premium Brands In One Destination.
        </motion.p>
        <motion.div variants={fadeIn("up", 0.5)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.7 }}>
          <CarouselPopularBikes bikes={bikes} session={session} />
        </motion.div>
        <motion.div variants={fadeIn("up", 0.7)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.7 }}>
          <Link href="/our-bikes">
            <button className="btn btn-accent mx-auto rounded-sm border-none">See All Bikes</button>
          </Link>
        </motion.div>
      </div>
    </>
  );
}
