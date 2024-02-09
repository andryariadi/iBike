import RegisterForm from "@/components/RegisterForm";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <>
      <div className="bg-amber-500 flex justify-between items-center gap-20 px-24">
        <div className="bg-rose-500 relative flex-1 h-[500px]">
          <Image src="/images/register.svg" alt="register" fill priority />
        </div>
        <div className="bg-cyan-500 flex-1">
          <RegisterForm />
        </div>
      </div>
    </>
  );
}
