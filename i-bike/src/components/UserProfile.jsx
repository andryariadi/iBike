import Image from "next/image";

export default function UserProfile({ user }) {
  console.log(user, "<----userprofile");
  return (
    <>
      <div className="flex items-center justify-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <Image src={user[0].imgUrl || "/images/noavatar.png"} alt="user" width={48} height={48} className="object-cover w-full h-full" />
        </div>
        <p className="font-medium">Hi, {user[0].username}</p>
      </div>
    </>
  );
}
