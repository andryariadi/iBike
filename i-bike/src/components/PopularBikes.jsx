import { getData } from "@/libs/data";

export default async function PopularBikes() {
  const bikes = await getData();

  console.log(bikes, "<----dipopularcomp");
  return (
    <>
      <div>Popular Bikes</div>
    </>
  );
}
