import { TbShoppingBagPlus } from "react-icons/tb";
import { useShoppingCart } from "use-shopping-cart";

export default function CheckoutBtn() {
  const { redirectToCheckout } = useShoppingCart();

  console.log(redirectToCheckout, "<-----dicheckoutBtn1");

  const handleCheckout = async () => {
    try {
      const res = await redirectToCheckout();

      if (res?.error) {
        console.log(res, "<----dicheckoutBtn2");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button className="btn btn-primary w-full flex items-center justify-center gap-3" onClick={handleCheckout}>
        <div>
          <TbShoppingBagPlus size={23} />
        </div>
        <p>Checkout</p>
      </button>
    </>
  );
}
