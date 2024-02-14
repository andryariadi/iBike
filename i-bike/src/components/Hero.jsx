import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="bg-amber-500 py-5 md:py-7 lg:py-5 md:px-[40px] lg:px-24 lg:h-screen relative overflow-hidden flex items-center justify-center">
        <div className="bg-rose-500 container mx-auto">
          <div className="bg-cyan-500 flex items-center justify-between">
            <div className="bg-green-500 w-full xl:max-w-[580px] flex flex-col items-start justify-center gap-5">
              <h1 className="text-center lg:text-left md:text-[43px] lg:text-6xl">
                Where <span>Joyful</span> Cycling Begins
              </h1>
              <p className="bg-teal-500 text-lg max-w-[580px] mx-auto xl:mx-0 text-center lg:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis doloremque amet deserunt atque quos officiis. Voluptatibus illo sed ratione beatae.
              </p>
              <div className="flex items-center gap-5 mx-auto lg:mx-0">
                <Link href="/our-bikes" className="mx-auto md:mx-0">
                  <button className="btn btn-primary">Shop Now</button>
                </Link>
                <Link href="/our-bikes" className="mx-auto md:mx-0">
                  <button className="btn btn-accent">Our Bikes</button>
                </Link>
              </div>
            </div>
            <div className="bg-black hidden md:flex">
              <Image src="/images/hero.png" alt="hero" width={650} height={650} quality={100} priority className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
