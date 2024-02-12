import { TbShoppingBagPlus } from "react-icons/tb";
import { useShoppingCart } from "use-shopping-cart";
// import { useFormStatus } from "react-dom";

export default function CheckoutBtn() {
  const { redirectToCheckout } = useShoppingCart();
  // const { pending } = useFormStatus();

  // console.log(redirectToCheckout, "<-----dicheckoutBtn1");

  const handleCheckout = async () => {
    try {
      const res = await redirectToCheckout();

      if (res?.error) {
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <button className="btn btn-primary w-full flex items-center justify-center gap-3" onClick={handleCheckout}>
        {/* {pending ? (
          <div className="loader-btn"></div>
        ) : (
          <>
            <div>
              <TbShoppingBagPlus size={23} />
            </div>
            <p>Checkout</p>
          </>
        )} */}
        <div>
          <TbShoppingBagPlus size={23} />
        </div>
        <p>Checkout</p>
      </button>
    </>
  );
}
