"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motions/variant";

export default function Hero() {
  return (
    <>
      <section className="py-9 lg:py-0 md:px-[40px] lg:px-24 lg:h-[85vh]  relative overflow-hidden flex items-center justify-center">
        <div className="container mx-auto">
          <div className="flex items-center justify-between gap-3 lg:gap-0">
            <div className="w-full xl:max-w-[580px] flex flex-col items-start justify-center gap-5">
              <motion.h1
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className="text-center md:text-left text-[37px] md:text-[40px] lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#FE0000] to-[#37383A]"
              >
                Where <span>Joyful</span> Cycling Begins
              </motion.h1>
              <motion.p className="text-lg max-w-[580px] mx-auto xl:mx-0 text-center md:text-left" variants={fadeIn("up", 0.5)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.7 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis doloremque amet deserunt atque quos officiis. Voluptatibus illo sed ratione beatae.
              </motion.p>
              <motion.div variants={fadeIn("up", 0.7)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.7 }} className="flex items-center gap-5 mx-auto md:mx-0">
                <Link href="/our-bikes" className="mx-auto md:mx-0">
                  <button className="btn btn-primary rounded-md">Shop Now</button>
                </Link>
                <Link href="/our-bikes" className="mx-auto md:mx-0">
                  <button className="btn btn-accent rounded-md">Our Bikes</button>
                </Link>
              </motion.div>
            </div>
            <motion.div className="hidden md:flex" variants={fadeIn("down", 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.7 }}>
              <Image src="/images/hero.png" alt="hero" width={650} height={650} quality={100} priority className="andry object-cover filter" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
