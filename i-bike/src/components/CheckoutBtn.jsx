import { TbShoppingBagPlus } from "react-icons/tb";

export default function CheckoutBtn({ btnStyles, text, icon, id, name, currency, price, description, images }) {
  return (
    <>
      <button className="btn btn-primary w-full flex items-center justify-center gap-3">
        <div>
          <TbShoppingBagPlus size={23} />
        </div>
        <p>Checkout</p>
      </button>
    </>
  );
}
