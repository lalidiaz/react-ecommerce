import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils";
import { LoaderFunction } from "react-router-dom";

export const loader: LoaderFunction = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  console.log("params", params);
  const response = await customFetch.get(`/products`, {
    params,
  });

  const products = response.data.products;
  const meta = response.data.meta;

  return { products, meta, params };
};

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};
export default Products;
