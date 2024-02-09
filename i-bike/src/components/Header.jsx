import { getUsers } from "@/lib/database/dataUser";
import HeaderDetail from "./HeaderDetail";
import { user } from "pg/lib/defaults";

export default async function Header() {
  const users = await getUsers();

  // console.log(users, "<----diheader");
  return (
    <>
      <HeaderDetail users={users} />
    </>
  );
}
