import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemListResMenuCat from "./ItemListResMenuCat";
import { clearCart } from "../utils/cartSlice";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const deleteCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="mt-24 text-center p-10">
      <h1 className="text-2xl">Cart</h1>
      <button
        className="bg-red-800 text-white rounded-md shadow-sm p-4"
        onClick={deleteCart}
      >
        Clear cart
      </button>
      <div className="text-center mt-10 bg-slate-100 ">
        {cartItems.length == 0 ? (
          <div> Cart is Empty !! </div>
        ) : (
          <div className="border border-b-slate-500 mt-4">
            {cartItems.map((ci) => {
              return <ItemListResMenuCat items={ci} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
