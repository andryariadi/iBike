import Link from "next/link";
import CarouselPopularBikes from "./CarouselPopularBikes";
import { getPopularBikes } from "@/lib/data";
import { getUsers } from "@/lib/database/dataUser";
import { auth } from "@/lib/auth/auth";

export default async function PopularBikes() {
  const bikes = await getPopularBikes();
  const session = await auth();

  // console.log(session, "<----dipopularcomp");
  // console.log(bikes, "<----dipopularcomp");
  return (
    <>
      <section className="py-5 md:px-[40px] lg:px-24">
        <div className="container mx-auto">
          <h2 className="text-center text-[30px] lg:text-[45px] bg-clip-text text-transparent bg-gradient-to-r from-[#FE0000] to-[#37383A]">Most Popular Bikes</h2>
          <p className="text-center mb-[30px]">The Worlds Premium Brands In One Destination.</p>
          <CarouselPopularBikes bikes={bikes} session={session} />
          <Link href="/our-bikes">
            <button className="btn btn-accent mx-auto rounded-sm border-none">See All Bikes</button>
          </Link>
        </div>
      </section>
    </>
  );
}
