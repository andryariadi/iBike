"use client";

import { Suspense, useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import Bikes from "./Bikes";
import SkeletonBike from "./SkeletonBike";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motions/variant";

export default function BikeCategories({ bikes, session }) {
  const [category, setCategory] = useState("all");
  const [filteredBikes, setFilteredBikes] = useState([]);
  const [price, setPrice] = useState(900);

  useEffect(() => {
    const filtered = bikes.filter((bike) => {
      const categoryMatch = category === "all" ? bikes : bike.categories.some((cat) => cat.name === category);
      const priceMatch = bike.price <= price;
      return categoryMatch && priceMatch;
    });
    setFilteredBikes(filtered);
  }, [category, price, bikes]);

  console.log(bikes, "<-----dibikecategories");
  // console.log({ category, price, filteredBikes }, "<-----dibikecategories");

  return (
    <>
      <section className="py-5 md:px-[40px] lg:px-24">
        <div className="container mx-auto">
          <div className="flex flex-col">
            <aside className="flex flex-col gap-5 rounded-md w-full p-4 xl:w-[300px] xl:h-[84vh] xl:fixed">
              <RadioGroup defaulValue="all" className="flex flex-col gap-3">
                <motion.div variants={fadeIn("right", 0.1)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.7 }} className="flex items-center space-x-2">
                  <RadioGroupItem value="all" id="all" onClick={() => setCategory("all")}></RadioGroupItem>
                  <Label htmlFor="all">All</Label>
                </motion.div>
                <motion.div variants={fadeIn("right", 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.7 }} className="flex items-center space-x-2">
                  <RadioGroupItem value="road" id="road" onClick={() => setCategory("road")}></RadioGroupItem>
                  <Label htmlFor="road">Road</Label>
                </motion.div>
                <motion.div variants={fadeIn("right", 0.5)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.7 }} className="flex items-center space-x-2">
                  <RadioGroupItem value="professional" id="professional" onClick={() => setCategory("professional")}></RadioGroupItem>
                  <Label htmlFor="professional">Professional</Label>
                </motion.div>
                <motion.div variants={fadeIn("right", 0.7)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.7 }} className="flex items-center space-x-2">
                  <RadioGroupItem value="extreme" id="extreme" onClick={() => setCategory("extreme")}></RadioGroupItem>
                  <Label htmlFor="extreme">Extreme</Label>
                </motion.div>
              </RadioGroup>
              <motion.div variants={fadeIn("right", 0.9)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.7 }} className="flex flex-col gap-3">
                <div className="text-lg font-medium flex items-center gap-3">
                  Max Price:
                  <span className="text-accent font-bold">${price}</span>
                  <span>({filteredBikes.length > 1 ? `${filteredBikes.length} items` : filteredBikes === 0 ? `${filteredBikes.length} items` : `${filteredBikes.length} item`})</span>
                </div>
                <Slider defaultValue={[900]} max={1000} step={1} onValueChange={(val) => setPrice(val[0])} />
              </motion.div>
            </aside>
            <main className="w-full xl:w-[950px] ml-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] p-4">
                {filteredBikes.length < 1 ? (
                  <h2>No bikes found!</h2>
                ) : (
                  <>
                    {filteredBikes.map((bike) => (
                      <motion.div variants={fadeIn("up", 0.5)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.7 }}>
                        <Suspense fallback={<SkeletonBike />}>
                          <Bikes bike={bike} key={bike.id} session={session} />
                        </Suspense>
                      </motion.div>
                    ))}
                  </>
                )}
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
}
