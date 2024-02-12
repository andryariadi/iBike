import Hero from "@/components/Hero";
import PopularBikes from "@/components/PopularBikes";

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
