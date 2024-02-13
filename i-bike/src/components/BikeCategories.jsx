"use client";

import { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";

export default function BikeCategories({ bikes }) {
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

  console.log({ category, price, filteredBikes }, "<-----dibikecategories");

  return (
    <>
      <section className="bg-rose-500 py-5 md:px-[40px] lg:px-24 min-h-[1200px]">
        <div className="container mx-auto">
          <div className="flex flex-col">
            <aside className="flex flex-col gap-5 bg-[#E0E0E0] rounded-md w-full p-4 xl:w-[300px] xl:h-[84vh] xl:fixed">
              <RadioGroup defaulValue="all" className="flex flex-col gap-3">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="all" id="all" onClick={() => setCategory("all")}></RadioGroupItem>
                  <Label htmlFor="all">All</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="road" id="road" onClick={() => setCategory("road")}></RadioGroupItem>
                  <Label htmlFor="road">Road</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="professional" id="professional" onClick={() => setCategory("professional")}></RadioGroupItem>
                  <Label htmlFor="professional">Professional</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="extreme" id="extreme" onClick={() => setCategory("extreme")}></RadioGroupItem>
                  <Label htmlFor="extreme">Extreme</Label>
                </div>
              </RadioGroup>
              <div className="flex flex-col gap-3">
                <div className="text-lg font-medium flex items-center gap-3">
                  Max Price:
                  <span className="text-accent font-semibold">${price}</span>
                  <span>{filteredBikes.length > 1 ? `${filteredBikes.length} items` : filteredBikes === 0 ? `${filteredBikes.length} items` : `${filteredBikes.length} item`}</span>
                </div>
                <Slider defaultValue={[900]} max={1000} step={1} onValueChange={(val) => setPrice(val[0])} />
              </div>
            </aside>
            <main className="bg-blue-300 w-full xl:w-[950px] ml-auto">Ariadi</main>
          </div>
        </div>
      </section>
    </>
  );
}
