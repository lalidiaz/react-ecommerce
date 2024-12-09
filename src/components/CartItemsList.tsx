import { useAppSelector } from "../hooks";
import CartItem from "./CartItem";

const CartItemsList = () => {
  const cartItems = useAppSelector((state) => state.cartState.cartItems);

  return (
    <div>
      {cartItems.map((item) => {
        return <CartItem key={item.cartID} cartItem={item} />;
      })}
    </div>
  );
};
export default CartItemsList;
