import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList.js";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  console.log(cartItems);
  return (
    <div className="w-7/12 m-auto">
      <button
        className="px-6 py-1 font-bold text-[#279C82] text-lg border-2 border-[#279C82] rounded-md shadow-sm bg-white"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems.length == 0 && <h1>Cart is empty. Add items to the cart</h1>}
      <ItemList items={cartItems} />
    </div>
  );
};
export default Cart;
