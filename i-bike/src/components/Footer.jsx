"use client";

import Link from "next/link";
import { RiInstagramFill, RiTwitterFill, RiYoutubeFill, RiPinterestFill, RiFacebookFill } from "react-icons/ri";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motions/variant";

export default function Footer() {
  return (
    <>
      <footer className="py-5 md:px-[40px] lg:px-24 bg-primary text-white text-center flex flex-col gap-5">
        <div className="container mx-auto">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <motion.h3 variants={fadeIn("up", 0.1)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.7 }} className="capitalize leading-tight text-2xl md:text-3xl">
                Subscribe to our newslatter
              </motion.h3>
              <motion.p variants={fadeIn("up", 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.7 }} className="text-white/60">
                Be the first to get the lates news about trends, promotions and much more!
              </motion.p>
            </div>
            <motion.form variants={fadeIn("up", 0.4)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.7 }} action="" className="flex items-center flex-col md:flex-row w-full max-w-[720px] mx-auto gap-2">
              <input type="email" placeholder="Your email address" name="email" className="px-5 py-3 w-[100%] bg-gray-50 border border-transparent placeholder-text-primary text-primary focus:outline-none focus:border-transparent" />
              <button className="btn btn-accent w-full md:max-w-[150px] h-[50 px] rounded-none">Join</button>
            </motion.form>
            <motion.div variants={fadeIn("up", 0.5)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.7 }} className="flex justify-center gap-5 text-white/60">
              <Link href="/" className="hover:text-accent transition-all duration-300">
                <RiInstagramFill size={20} />
              </Link>
              <Link href="/" className="hover:text-accent transition-all duration-300">
                <RiYoutubeFill size={20} />
              </Link>
              <Link href="/" className="hover:text-accent transition-all duration-300">
                <RiTwitterFill size={20} />
              </Link>
              <Link href="/" className="hover:text-accent transition-all duration-300">
                <RiFacebookFill size={20} />
              </Link>
              <Link href="/" className="hover:text-accent transition-all duration-300">
                <RiPinterestFill size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
        <motion.div variants={fadeIn("up", 0.6)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.7 }} className="py-6 border-t border-b border-white/5 text-white/60">
          Copyright &copy; {new Date().getFullYear()} iBike. All Rights Reserved
        </motion.div>
      </footer>
    </>
  );
}
