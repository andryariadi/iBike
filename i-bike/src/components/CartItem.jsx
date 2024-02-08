import Image from "next/image";
import { urlFor } from "@/lib/sanityConfig";
import { FaPlus, FaMinus, FaX } from "react-icons/fa6";

export default function CartItem({ item }) {
  return (
    <>
      <div className="flex items-center justify-between w-full mb-4 border-b border-slate-200">
        <div className="relative w-[110px] h-[110px]">{item.images && <Image src={urlFor(item.images[0]).url()} alt={item.name} fill priority sizes="(max-width: 110px) 110px, 110px" className="object-contain" />}</div>
        <div className="bg-amber-500 w-full max-w-[180px] flex flex-col justify-center">
          <div className="flex items-center justify-between">
            <h5>{item.name}</h5>
            <button>
              <FaX className="text-sm" />
            </button>
          </div>
          <div>
            <div>
              <button>
                <FaMinus />
              </button>
              <button>
                <FaPlus />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
