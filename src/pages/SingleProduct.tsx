import { LoaderFunction, useLoaderData } from "react-router-dom";
import { formatPrice, customFetch } from "../utils";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Product } from "../types";
import { AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import { generateAmountOptions } from "../utils";

interface ProuctProps {
  product: Product;
}

export const loader: LoaderFunction = async ({ params }) => {
  const response: AxiosResponse = await customFetch.get(
    `/products/${params.id}`
  );
  return { product: response.data.product };
};

const SingleProduct = () => {
  const { product } = useLoaderData() as ProuctProps;
  const { image, name, price, description, colors, company } = product;
  const dollarsAmount = formatPrice(price);
  const [productColor, setProductColor] = useState<string>(colors[0]);
  const [amount, setAmount] = useState<number>(1);

  const handleAmount = (e: { target: { value: string } }) => {
    setAmount(parseInt(e.target.value));
  };

  const dispatch = useDispatch();
  const cartProduct = {
    cartID: product.id + productColor,
    productID: product.id,
    image,
    name,
    price,
    amount,
    productColor,
    company,
  };

  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>

      <div className="mt-6 grid gap-y-8 lg:grid-cols-2  lg:gap-x-16">
        <img
          src={image}
          alt={name}
          className="w-96 h-96 object-cover lg:w-full  "
        />

        <div>
          <h1 className="capitalize text-3xl font-bold font-worksans">
            {name}
          </h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2 font-sans">
            {company}
          </h4>

          <p className="mt-3 text-xl">{dollarsAmount}</p>

          <p className="mt-6 leading-8 font-sans">{description}</p>

          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              colors
            </h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type="button"
                    className={`badge  w-6 h-6 mr-2  ${
                      color === productColor && "border-2 border-secondary"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <h4 className="text-md font-medium tracking-wider capitalize">
                amount
              </h4>
            </label>
            <select
              className="select select-secondary select-bordered select-md"
              value={amount}
              onChange={handleAmount}
            >
              {generateAmountOptions(20)}
            </select>
          </div>

          <div className="mt-10 ">
            <button className="btn btn-secondary btn-md" onClick={addToCart}>
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleProduct;
