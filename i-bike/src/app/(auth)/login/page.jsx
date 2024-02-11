import LoginForm from "@/components/LoginForm";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { handleGithubLogin, handleGoogleLogin } from "@/lib/database/actions/action";

export default function LoginPage() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center mt-5 md:mt-0 md:px-[40px] lg:px-24">
        <div className="flex-1  flex items-center justify-center h-[500px] w-screen">
          <div className="flex flex-col gap-7 shadow-md bg-[#E0E0E0] rounded-md p-11 md:p-10 lg:p-11 w-[90%] md:w-full lg:w-[88%] xl:w-[65%]">
            <div className="flex flex-col gap-5">
              <form action={handleGoogleLogin}>
                <button className="btn flex items-center justify-center gap-5 bg-transparent border-2 border-zinc-50 w-full py-[28px] text-zinc-50 rounded-md hover:bg-gray-50 hover:text-gray-500 transition-all duration-300">
                  <div>
                    <FcGoogle size={30} />
                  </div>
                  <p>Google</p>
                </button>
              </form>
              <form action={handleGithubLogin}>
                <button className="btn flex items-center justify-center gap-5 bg-transparent border-2 border-zinc-50 hover:bg-gray-50 text-zinc-50 hover:text-gray-500 transition-all duration-300 w-full py-[28px] rounded-md">
                  <div>
                    <BsGithub size={30} />
                  </div>
                  <p>GitHub</p>
                </button>
              </form>
            </div>
            <LoginForm />
          </div>
        </div>
        <div className="relative flex-1 h-[500px]">
          <Image src="/images/login.svg" alt="register" fill priority />
        </div>
      </div>
    </>
  );
}
