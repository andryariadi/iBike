import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <div className="flex justify-center items-center h-dvh">
        <Image src="/images/error.svg" alt="error" width={700} height={700} />
      </div>
    </>
  );
}
