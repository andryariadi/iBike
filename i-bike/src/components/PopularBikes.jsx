import { getPopularBikes } from "@/lib/data";
import { auth } from "@/lib/auth/auth";
import PopularBikesComp from "./PopularBikesComp";

export default async function PopularBikes() {
  const bikes = await getPopularBikes();
  const session = await auth();

  // console.log(session, "<----dipopularcomp");
  // console.log(bikes, "<----dipopularcomp");
  return (
    <>
      <section className="py-5 md:px-[40px] lg:px-24">
        <PopularBikesComp bikes={bikes} session={session} />
      </section>
    </>
  );
}
