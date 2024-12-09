import { Form, redirect, ActionFunction } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import { formatPrice } from "../utils";
import { toast } from "react-toastify";
import { clearCart } from "../features/cart/cartSlice";
import { customFetch } from "../utils";
import { store } from "../store";
import axios from "axios";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const { name, address } = Object.fromEntries(formData);
  const user = store.getState().userState.user;
  const { cartItems, orderTotal, numItemsInCart, tax, shipping } =
    store.getState().cartState;

  const info = {
    name,
    address,
    chargeTotal: orderTotal,
    orderTotal: formatPrice(orderTotal),
    cartItems,
    numItemsInCart,
    tax,
    shipping,
  };

  try {
    await customFetch.post(
      "/orders",
      { data: info },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    store.dispatch(clearCart());
    toast.success("order placed successfully");
    return redirect("/orders");
  } catch (error) {
    console.log(error);

    let errorMessage = "please double check your credentials";

    if (axios.isAxiosError(error) && error.response) {
      errorMessage = error.response.data?.error?.message || errorMessage;

      if (error.response.status === 401 || error.response.status === 403) {
        return redirect("/");
      }
    }

    toast.error(errorMessage);
    return null;
  }
};

const CheckoutForm = () => {
  return (
    <Form method="POST" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl">Shipping Information</h4>
      <FormInput label="first name" name="name" type="text" />
      <FormInput label="address" name="address" type="text" />
      <div className="mt-4">
        <SubmitBtn text="Place Your Order" />
      </div>
    </Form>
  );
};
export default CheckoutForm;
