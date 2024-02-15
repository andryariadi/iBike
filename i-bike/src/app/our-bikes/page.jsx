import BikeCategories from "@/components/BikeCategories";
import { auth } from "@/lib/auth/auth";
import { getAllBikes } from "@/lib/data";

export const metadata = {
  title: "Our Bikes",
  description: "andry ariadi our bikes description",
};

export default async function OurBikes() {
  const bikes = await getAllBikes();
  const session = await auth();

  // console.log(bikes, "<----diourbikes");
  return (
    <>
      <BikeCategories bikes={bikes} session={session} />
    </>
  );
}
