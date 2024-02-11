"use client";

import { useFormState } from "react-dom";
import Link from "next/link";
import { login } from "@/lib/database/actions/action";

export default function LoginForm() {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <form action={formAction} className="flex flex-col justify-center items-center gap-5">
      <input type="text" placeholder="Username" name="username" className="px-5 py-3 w-[100%] bg-gray-50 rounded-md border border-transparent placeholder-gray-500 focus:outline-none focus:border-transparent" />
      <input type="password" placeholder="Password" name="password" className="px-5 py-3 w-[100%] bg-gray-50 rounded-md border border-transparent placeholder-gray-500 focus:outline-none focus:border-transparent" />
      <button className="btn btn-accent w-[100%]">Login</button>
      {/* <ButtonRegister /> */}
      {state?.error && <p>{state?.error}</p>}
      <Link href="/register" className="text-center text-xs">
        Have an account ? <b className="text-accent">Sing Up</b>
      </Link>
    </form>
  );
}
