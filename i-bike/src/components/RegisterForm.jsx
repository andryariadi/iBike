import Link from "next/link";

export default function RegisterForm() {
  return (
    <form action="" className="flex flex-col gap-5">
      <input type="text" placeholder="Username" name="username" className="bg-grey-50 px-4 py-3 rounded-md border border-transparent placeholder-gray-500 focus:outline-none focus:border-transparent" />
      <input type="email" placeholder="Email" name="email" className="bg-grey-50 px-4 py-3 rounded-md border border-transparent placeholder-gray-500 focus:outline-none focus:border-transparent" />
      <input type="password" placeholder="Password" name="password" className="bg-grey-50 px-4 py-3 rounded-md border border-transparent placeholder-gray-500 focus:outline-none focus:border-transparent" />
      <input type="password" placeholder="Confirm password" name="passwordRepeat" className="bg-grey-50 px-4 py-3 rounded-md border border-transparent placeholder-gray-500 focus:outline-none focus:border-transparent" />
      <button>Login</button>
      {/* <ButtonRegister /> */}
      {/* {state?.error && <p>{state?.error}</p>} */}
      <Link href="/login">
        Have an account ? <b>Login</b>
      </Link>
    </form>
  );
}
