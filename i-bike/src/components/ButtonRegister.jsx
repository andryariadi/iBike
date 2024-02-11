import { useFormStatus } from "react-dom";

export default function ButtonRegister() {
  const { pending } = useFormStatus();
  return (
    <>
      <button className="btn btn-accent w-[100%]">Sign Up</button>
    </>
  );
}
