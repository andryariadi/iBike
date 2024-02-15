import RegisterForm from "@/components/RegisterForm";
import Image from "next/image";

export const metadata = {
  title: "Register",
  description: "andry ariadi register description",
};

export default function RegisterPage() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 lg:gap-0 md:px-[40px] lg:px-24 py-10">
        <div className="relative flex-1 h-[500px] flex items-center justify-self-end">
          <Image src="/images/register.svg" alt="register" fill priority />
        </div>
        <div className="flex-1 flex items-center justify-center h-[500px] w-screen">
          <div className="shadow-md bg-[#E0E0E0] rounded-md p-11 md:p-10 lg:p-11 w-[90%] md:w-full lg:w-[88%] xl:w-[65%]">
            <RegisterForm />
          </div>
        </div>
      </div>
    </>
  );
}
