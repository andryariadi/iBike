import Image from "next/image";
import { urlFor } from "@/lib/sanityConfig";
import { FaPlus, FaMinus, FaX } from "react-icons/fa6";
import { useShoppingCart } from "use-shopping-cart";

export default function CartItem({ item }) {
  const { removeItem, incrementItem, decrementItem } = useShoppingCart();

  return (
    <>
      <div className="flex items-center justify-between gap-3 md:gap-0 w-full mb-3 border-b border-slate-200">
        <div className="relative w-[110px] h-[110px]">{item.images && <Image src={urlFor(item.images[0]).url()} alt={item.name} fill priority sizes="(max-width: 110px) 110px, 110px" className="object-contain" />}</div>
        <div className="w-full max-w-[180px] flex flex-col justify-center">
          <div className="flex items-center justify-between">
            <h5>{item.name}</h5>
            <button
              onClick={() => {
                removeItem(item.id);
              }}
            >
              <FaX className="text-sm" />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <button>
                <FaMinus size={10} onClick={() => decrementItem(item.id)} />
              </button>
              <div className="font-semibold">{item.quantity}</div>
              <button>
                <FaPlus size={10} onClick={() => incrementItem(item.id)} />
              </button>
            </div>
            <div className="text-accent font-semibold text-balance">${item.price * item.quantity}</div>
          </div>
        </div>
      </div>
    </>
  );
}
