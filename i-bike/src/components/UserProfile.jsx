import { handleLogout } from "@/lib/database/actions/action";
import Image from "next/image";
import Link from "next/link";
import { IoMdLogOut } from "react-icons/io";
import { useFormStatus } from "react-dom";

export default function UserProfile({ user, session }) {
  const { pending } = useFormStatus();
  console.log(session, "<----userprofile");
  return (
    <>
      <div className="flex items-center justify-center gap-3">
        {session?.user ? (
          <>
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image src={session?.user.image || "/images/noavatar.png"} alt="user" width={50} height={50} className="object-cover w-full h-full" />
            </div>
            <p className="font-medium">Hi, {session?.user.name}</p>
            <form action={handleLogout}>
              <button className="flex items-center justify-center gap-1 bg-[#D6001C] hover:bg-[#ED1D24] transition-all duration-300 text-white font-medium px-2 py-2 rounded-md">
                {pending ? (
                  <div className="loader-btn"></div>
                ) : (
                  <>
                    <div>
                      <IoMdLogOut size={23} />
                    </div>
                    <p>Logout</p>
                  </>
                )}
              </button>
            </form>
          </>
        ) : (
          <Link href="/login" className="bg-[#D6001C] hover:bg-[#ED1D24] transition-all duration-300 text-white font-medium px-5 py-3 rounded-full">
            Login
          </Link>
        )}
      </div>
    </>
  );
}
