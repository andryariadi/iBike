import BikeCategories from "@/components/BikeCategories";
import { getAllBikes } from "@/lib/data";

export default async function OurBikes() {
  const bikes = await getAllBikes();

  console.log(bikes, "<----diourbikes");
  return (
    <>
      <BikeCategories bikes={bikes} />
    </>
  );
}
