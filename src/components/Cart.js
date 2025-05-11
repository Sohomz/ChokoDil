import { useDispatch, useSelector } from "react-redux";
import ItemListResMenuCat from "./ItemListResMenuCat";
import { clearCart } from "../utils/cartSlice";
import { useEffect } from "react";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();
  const deleteCart = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Save cartItems to localStorage whenever it changes
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="mt-24 text-center p-10 min-h-screen">
      <h1 className="text-2xl">Cart</h1>
      <button
        className="bg-red-800 text-white rounded-md shadow-sm p-4"
        onClick={deleteCart}
      >
        Clear cart
      </button>
      <div className="text-center mt-10 bg-white ">
        {cartItems.length == 0 ? (
          <div> Cart is Empty !! </div>
        ) : (
          <div className="mt-9">
            {cartItems.map(
              (
                ci,
                index //syntax array.map(element, index, array)
              ) => (
                <div key={ci.id}>
                  <ItemListResMenuCat items={ci} index={index} />
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
