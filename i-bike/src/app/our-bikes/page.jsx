import { getAllBikes } from "@/lib/data";

export default async function OurBikes() {
  const bikes = await getAllBikes();

  console.log(bikes, "<----diourbikes");
  return (
    <>
      <div>Our Bikes Page</div>
    </>
  );
}
