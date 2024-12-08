import axios from "axios";

const productionUrl = import.meta.env.VITE_API_URL;

export const customFetch = axios.create({
  baseURL: productionUrl,
});

export const formatPrice = (price: number) => {
  const dollarsAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price / 100);
  return dollarsAmount;
};
