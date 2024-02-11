import { getUsers } from "@/lib/database/dataUser";
import HeaderDetail from "./HeaderDetail";
import { auth } from "@/lib/auth/auth";

export default async function Header() {
  const users = await getUsers();
  const session = await auth();

  // console.log(session, "<----diheader");
  // console.log(users, "<----diheader");
  return (
    <>
      <HeaderDetail users={users} session={session} />
    </>
  );
}
