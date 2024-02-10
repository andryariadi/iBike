import Link from "next/link";

export default function LoginForm() {
  return (
    <form action="" className="flex flex-col justify-center items-center gap-5">
      <input type="text" placeholder="Username" name="username" autoComplete="on" className="px-5 py-3 w-[100%] bg-gray-200 rounded-md border border-transparent placeholder-gray-500 focus:outline-none focus:border-transparent" />
      <input type="email" placeholder="Email" name="email" className="px-5 py-3 w-[100%] bg-gray-200 rounded-md border border-transparent placeholder-gray-500 focus:outline-none focus:border-transparent" />
      <input type="password" placeholder="Password" name="password" className="px-5 py-3 w-[100%] bg-gray-200 rounded-md border border-transparent placeholder-gray-500 focus:outline-none focus:border-transparent" />
      <input type="password" placeholder="Confirm password" name="passwordRepeat" className="px-5 py-3 w-[100%] bg-gray-200 rounded-md border border-transparent placeholder-gray-500 focus:outline-none focus:border-transparent" />
      <button className="btn btn-accent w-[100%]">Login</button>
      {/* <ButtonRegister /> */}
      {/* {state?.error && <p>{state?.error}</p>} */}
      <Link href="/login" className="text-center text-xs">
        Have an account ? <b className="text-accent">Login</b>
      </Link>
    </form>
  );
}
