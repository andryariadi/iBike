import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="py-9 lg:py-0 md:px-[40px] lg:px-24 lg:h-screen relative overflow-hidden flex items-center justify-center">
        <div className="container mx-auto">
          <div className="flex items-center justify-between gap-3 lg:gap-0">
            <div className="w-full xl:max-w-[580px] flex flex-col items-start justify-center gap-5">
              <h1 className="text-center md:text-left text-[37px] md:text-[40px] lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#FE0000] to-[#37383A]">
                Where <span>Joyful</span> Cycling Begins
              </h1>
              <p className="text-lg max-w-[580px] mx-auto xl:mx-0 text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis doloremque amet deserunt atque quos officiis. Voluptatibus illo sed ratione beatae.
              </p>
              <div className="flex items-center gap-5 mx-auto md:mx-0">
                <Link href="/our-bikes" className="mx-auto md:mx-0">
                  <button className="btn btn-primary rounded-md">Shop Now</button>
                </Link>
                <Link href="/our-bikes" className="mx-auto md:mx-0">
                  <button className="btn btn-accent rounded-md">Our Bikes</button>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex">
              <Image src="/images/hero.png" alt="hero" width={650} height={650} quality={100} priority className="andry object-cover" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
