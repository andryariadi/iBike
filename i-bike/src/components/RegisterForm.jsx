"use client";

import { useFormState } from "react-dom";
import Link from "next/link";
import { register } from "@/lib/database/actions/action";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ButtonSubmit from "./ButtonSubmit";

export default function RegisterForm() {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state, router]);

  return (
    <form action={formAction} className="flex flex-col justify-center items-center gap-7">
      <input type="text" placeholder="Username" name="username" className="px-5 py-3 w-[100%] bg-gray-50 rounded-md border border-transparent placeholder-gray-500 focus:outline-none focus:border-transparent" />
      <input type="email" placeholder="Email" name="email" className="px-5 py-3 w-[100%] bg-gray-50 rounded-md border border-transparent placeholder-gray-500 focus:outline-none focus:border-transparent" />
      <input type="password" placeholder="Password" name="password" className="px-5 py-3 w-[100%] bg-gray-50 rounded-md border border-transparent placeholder-gray-500 focus:outline-none focus:border-transparent" />
      <input type="password" placeholder="Confirm password" name="passwordRepeat" className="px-5 py-3 w-[100%] bg-gray-50 rounded-md border border-transparent placeholder-gray-500 focus:outline-none focus:border-transparent" />
      <ButtonSubmit title="Register" />
      {state?.error && <p>{state?.error}</p>}
      <Link href="/login" className="text-center text-xs">
        Have an account ? <b className="text-accent">Login</b>
      </Link>
    </form>
  );
}
