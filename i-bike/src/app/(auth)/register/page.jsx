import RegisterForm from "@/components/RegisterForm";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <>
      <div className="bg-amber-500 flex flex-col md:flex-row justify-between items-center gap-8 lg:gap-20 md:px-[40px] lg:px-24">
        <div className="bg-rose-500 relative flex-1 h-[500px]">
          <Image src="/images/register.svg" alt="register" fill priority />
        </div>
        <div className="flex-1 bg-lime-700 flex items-center justify-center h-[500px] w-screen">
          <div className="shadow-md bg-slate-700 rounded-md p-11 md:p-10 lg:p-11 w-[90%] md:w-full lg:w-[88%] xl:w-[65%]">
            <RegisterForm />
          </div>
        </div>
      </div>
    </>
  );
}
