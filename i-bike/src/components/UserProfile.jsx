import { handleLogout } from "@/lib/database/actions/action";
import Image from "next/image";
import Link from "next/link";
import { IoMdLogOut } from "react-icons/io";
import { useFormStatus } from "react-dom";
import { BiLogOutCircle } from "react-icons/bi";

export default function UserProfile({ user, session }) {
  const { pending } = useFormStatus();
  console.log(session, "<----userprofile");
  return (
    <>
      <div className="flex items-center justify-center gap-3 cursor-pointer">
        {session?.user ? (
          <>
            <div className="w-10 h-10 rounded-full overflow-hidden hidden md:flex">
              <Image src={session?.user.image || "/images/noavatar.png"} alt="user" width={50} height={50} className="object-cover w-full h-full" />
            </div>
            <p className="font-semibold hidden lg:flex">Hi, {session?.user.name}</p>
            <form action={handleLogout}>
              <button className="flex items-center justify-center gap-1 bg-[#D6001C] hover:bg-[#ED1D24] transition-all duration-300 text-white font-medium px-1 py-1 md:px-2 md:py-2 rounded-md">
                {pending ? (
                  <div className="loader-btn"></div>
                ) : (
                  <>
                    <div className="text-[20px] md:text-[23px]">
                      <IoMdLogOut />
                    </div>
                    <p className="hidden md:flex">Logout</p>
                  </>
                )}
              </button>
            </form>
          </>
        ) : (
          <Link href="/login" className="bg-[#D6001C] hover:bg-[#ED1D24] transition-all duration-300 text-white font-medium px-2 md:px-4 py-2 rounded-full flex items-center justify-center gap-1">
            <p className="hidden md:flex">Login</p>
            <div className="text-[20px] md:text-[23px]">
              <BiLogOutCircle />
            </div>
          </Link>
        )}
      </div>
    </>
  );
}
