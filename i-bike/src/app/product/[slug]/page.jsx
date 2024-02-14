import AddToCartBtn from "@/components/AddToCartBtn";
import SkeletonBike from "@/components/SkeletonBike";
import { auth } from "@/lib/auth/auth";
import { getDataBySlug } from "@/lib/data";
import { urlFor } from "@/lib/sanityConfig";
import { Bike, Clock, PackageCheck, RefreshCw, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function ProductDetailPage({ params }) {
  const { slug } = params;

  const bike = await getDataBySlug(slug);
  const session = await auth();

  console.log(bike, "<----didetailpage");
  return (
    <>
      <section className="py-12 md:px-[40px] lg:px-24">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-14">
            <div className="bg-primary/5 hover:bg-primary/10 transition-all duration-300 xl:flex-1 flex justify-center items-center h-[460px] xl:h-[540px] xl:w-[700px]">
              <Suspense fallback={<SkeletonBike />}>
                <Image src={urlFor(bike.images[0]).url()} alt={bike.name} title={bike.name} width={480} height={480} priority className="md:hover:scale-105 transition-all duration-300" />
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
                <AddToCartBtn id={bike._id} name={bike.name} currency="USD" price={bike.price} price_id={bike.price_id} description={bike.description} images={bike.images} text="Add To Cart" btnStyles="btn btn-accent" session={session} />
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
