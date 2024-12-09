import { redirect, useLoaderData, LoaderFunction } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { store } from "../store";
import { OrdersList, PaginationContainer, SectionTitle } from "../components";
import { customFetch } from "../utils";

export const loader: LoaderFunction = async ({ request }) => {
  const user = store.getState().userState.user;

  if (!user) {
    toast.warn("You must be logged in to view orders");
    return redirect("/login");
  }
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  try {
    const response = await customFetch.get("/orders", {
      params,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    return { orders: response.data.data, meta: response.data.meta };
  } catch (error) {
    let errorMessage = "please double check your credentials";

    if (axios.isAxiosError(error) && error.response) {
      errorMessage = error.response.data?.error?.message || errorMessage;

      if (error.response.status === 401 || error.response.status === 403) {
        return redirect("/login");
      }
    }

    toast.error(errorMessage);
    return null;
  }
};

const Orders = () => {
  const { meta } = useLoaderData();

  if (meta.pagination.total < 1) {
    return <SectionTitle text="Please make an order" />;
  }

  return (
    <>
      <SectionTitle text="Your Orders" />
      <OrdersList />
      <PaginationContainer />
    </>
  );
};
export default Orders;
