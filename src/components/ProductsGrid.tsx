import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";
import { LoaderDataProducts } from "../types";

const ProductsGrid = () => {
  const { products } = useLoaderData() as LoaderDataProducts;

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
      {products.map((product) => {
        const { name, price, image } = product;
        const dollarsAmount = formatPrice(price);
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="card w-full hover:shadow-2xl transition duration-300 border border-black"
          >
            <figure className="px-4 pt-4">
              <img
                src={image}
                alt={name}
                className="rounded-lg h-64 md:h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title capitalize tracking-wider font-worksans">
                {name}
              </h2>
              <span className="text-primary">{dollarsAmount}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsGrid;
