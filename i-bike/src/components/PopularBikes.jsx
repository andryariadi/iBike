import { getData } from "@/lib/data";
import Link from "next/link";
import CarouselPopularBikes from "./CarouselPopularBikes";

export default async function PopularBikes() {
  const bikes = await getData();

  console.log(bikes, "<----dipopularcomp");
  return (
    <>
      <section className="py-24 bg-red-700">
        <div className="container mx-auto bg-gray-700">
          <h2 className="text-center">Most Popular Bikes</h2>
          <p className="text-center mb-[30px]">The Worlds Premium Brands In One Destination.</p>
          <CarouselPopularBikes />
          <Link href="/our-bikes">
            <button className="btn btn-accent mx-auto">See All Bikes</button>
          </Link>
        </div>
      </section>
    </>
  );
}
