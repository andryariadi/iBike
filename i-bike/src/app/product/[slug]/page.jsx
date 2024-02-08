import AddToCartBtn from "@/components/AddToCart";
import SkeletonBike from "@/components/SkeletonBike";
import { getDataBySlug } from "@/lib/data";
import { urlFor } from "@/lib/sanityConfig";
import { Bike, Clock, PackageCheck, RefreshCw, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function ProductDetail({ params }) {
  const { slug } = params;

  const bike = await getDataBySlug(slug);

  console.log(bike, "<----didetailpage");
  return (
    <>
      <section className="py-12">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-14">
            <div className="bg-primary/5 hover:bg-primary/10 transition-all duration-300 xl:flex-1 flex justify-center items-center h-[460px] xl:h-[540px] xl:w-[700px]">
              <Suspense fallback={<SkeletonBike />}>
                <Image src={urlFor(bike.images[0]).url()} alt={bike.name} width={480} height={480} priority className="md:hover:scale-105 transition-all duration-300" />
              </Suspense>
            </div>
            <div className="flex-1 flex flex-col justify-center items-start gap-10">
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <ChevronLeft size={20} />
                <p>Back To Home</p>
              </Link>
              <div className="flex flex-col gap-6 items-start">
                <div>
                  <h3>{bike.name}</h3>
                  <p className="text-lg font-semibold text-accent">${bike.price}</p>
                </div>
                <p>{bike.description}</p>
                <AddToCartBtn text="Add To Cart" btnStyles="btn btn-accent" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                  <PackageCheck size={20} className="text-accent" />
                  <p>Free shipping on order over $150</p>
                </div>
                <div className="flex gap-2">
                  <RefreshCw size={20} className="text-accent" />
                  <p>Free return for 30 days</p>
                </div>
                <div className="flex gap-2">
                  <Bike size={20} className="text-accent" />
                  <p>The bicycles partially assembled and benefit from transport insurance</p>
                </div>
                <div className="flex gap-2">
                  <Clock size={20} className="text-accent" />
                  <p>Fast delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
