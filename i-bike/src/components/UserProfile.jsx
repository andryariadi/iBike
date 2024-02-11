import { handleLogout } from "@/lib/database/actions/action";
import Image from "next/image";
import Link from "next/link";
import { IoMdLogOut } from "react-icons/io";

export default function UserProfile({ user, session }) {
  console.log(user, session, "<----userprofile");
  return (
    <>
      <div className="flex items-center justify-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <Image src={user[0].imgUrl || "/images/noavatar.png"} alt="user" width={48} height={48} className="object-cover w-full h-full" />
        </div>
        <p className="font-medium">Hi, {user[0].username}</p>
        {session ? (
          <form action={handleLogout}>
            <button>
              <div>
                <IoMdLogOut size={23} />
              </div>
              <p>Logout</p>
            </button>
          </form>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>
    </>
  );
}
