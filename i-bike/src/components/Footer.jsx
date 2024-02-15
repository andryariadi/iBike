import Link from "next/link";
import { RiInstagramFill, RiTwitterFill, RiYoutubeFill, RiPinterestFill, RiFacebookFill } from "react-icons/ri";

export default function Footer() {
  return (
    <>
      <footer className="py-5 md:px-[40px] lg:px-24 bg-primary text-white text-center flex flex-col gap-5">
        <div className="container mx-auto">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <h3 className="capitalize leading-tight text-2xl">Subscribe to our newslatter</h3>
              <p className="text-white/60">Be the first to get the lates news about trends, promotions and much more!</p>
            </div>
            <form action="" className="flex items-center flex-col md:flex-row w-full max-w-[720px] mx-auto gap-2">
              <input type="email" placeholder="Your email address" name="email" className="px-5 py-3 w-[100%] bg-gray-50 border border-transparent placeholder-text-primary text-primary focus:outline-none focus:border-transparent" />
              <button className="btn btn-accent w-full md:max-w-[150px] h-[50 px] rounded-none">Join</button>
            </form>
            <div className="flex justify-center gap-5 text-white/60">
              <Link href="/" className="hover:text-accent transition-all duration-300">
                <RiInstagramFill size={20} />
              </Link>
              <Link href="/" className="hover:text-accent transition-all duration-300">
                <RiYoutubeFill size={20} />
              </Link>
              <Link href="/" className="hover:text-accent transition-all duration-300">
                <RiTwitterFill size={20} />
              </Link>
              <Link href="/" className="hover:text-accent transition-all duration-300">
                <RiFacebookFill size={20} />
              </Link>
              <Link href="/" className="hover:text-accent transition-all duration-300">
                <RiPinterestFill size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="py-6 border-t border-b border-white/5 text-white/60">Copyright &copy; {new Date().getFullYear()} iBike. All Rights Reserved</div>
      </footer>
    </>
  );
}
