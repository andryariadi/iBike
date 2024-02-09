import Link from "next/link";

export default function RegisterForm() {
  return (
    <form action="">
      <input type="text" placeholder="Username" name="username" />
      <input type="email" placeholder="Email" name="email" />
      <input type="password" placeholder="Password" name="password" />
      <input type="password" placeholder="Confirm password" name="passwordRepeat" />
      {/* <ButtonRegister /> */}
      {/* {state?.error && <p>{state?.error}</p>} */}
      <Link href="/login">
        Have an account ? <b>Login</b>
      </Link>
    </form>
  );
}
