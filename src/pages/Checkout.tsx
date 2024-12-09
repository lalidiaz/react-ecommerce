import { useAppSelector } from "../hooks";
import { CheckoutForm, SectionTitle, CartTotals } from "../components";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";
import { store } from "../store";

export const loader = () => () => {
  const user = store.getState().userState.user;

  if (!user) {
    toast.warn("You must be logged in to checkout");
    return redirect("/login");
  }
  return null;
};

const Checkout = () => {
  const cartItems = useAppSelector((state) => state.cartState.cartTotal);

  if (cartItems.length === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }

  return (
    <>
      <SectionTitle text="Place your order" />
      <div className="mt-8 grid gap-8  md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};
export default Checkout;
