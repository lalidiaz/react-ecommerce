import { Hero, FeaturedProducts } from "../components";
import { customFetch } from "../utils";
import { LoaderDataProducts } from "../types";

const url = "/products?featured=true";

export const loader = async (): Promise<LoaderDataProducts> => {
  const response = await customFetch.get(url);
  const products = response.data.products;
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};
export default Landing;
