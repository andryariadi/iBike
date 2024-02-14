import Hero from "@/components/Hero";
import PopularBikes from "@/components/PopularBikes";

export const metadata = {
  title: "Popular Bikes | iBike",
  description: "andry ariadi our bikes description",
};

export default async function Home() {
  return (
    <>
      <main>
        <Hero />
        <PopularBikes />
      </main>
    </>
  );
}
