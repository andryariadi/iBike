import { handleLogout } from "@/lib/database/actions/action";
import Image from "next/image";
import Link from "next/link";
import { IoMdLogOut } from "react-icons/io";

export default function UserProfile({ user, session }) {
  console.log(session, "<----userprofile");
  return (
    <>
      <div className="flex items-center justify-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <Image src={session?.user.image || "/images/noavatar.png"} alt="user" width={50} height={50} className="object-cover w-full h-full" />
        </div>
        <p className="font-medium">Hi, {session?.user.name}</p>
        {session ? (
          <form action={handleLogout}>
            <button className="flex items-center justify-center gap-2 bg-[#D6001C] hover:bg-[#ED1D24] transition-all duration-300 text-white font-medium px-3 py-2 rounded-md">
              <div>
                <IoMdLogOut size={23} />
              </div>
              <p>Logout</p>
            </button>
          </form>
        ) : (
          <Link href="/login" className="bg-[#D6001C] hover:bg-[#ED1D24] transition-all duration-300 text-white font-medium px-5 py-3 rounded-md">
            Login
          </Link>
        )}
      </div>
    </>
  );
}
