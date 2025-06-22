import { useDispatch, useSelector } from "react-redux";
import ItemListResMenuCat from "./ItemListResMenuCat";
import { clearCart } from "../utils/cartSlice";
import { useEffect } from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { toast, ToastContainer } from "react-toastify";
import cartEmptyIcon from "../images/cartEmpty.png";

function Cart() {
  const cartItemsWhole = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const groupedCartItems = {}; // Use an object to group items by their ID

  cartItemsWhole.forEach((item) => {
    if (groupedCartItems[item.id]) {
      // If the item (by ID) already exists, increment its quantity
      groupedCartItems[item.id].quantity += 1;
    } else {
      // If it's a new unique item, add it with a quantity of 1
      groupedCartItems[item.id] = { ...item, quantity: 1 };
    }
  });

  // Convert the grouped object into an array for rendering
  // This `itemsToRender` will contain unique items, each with an added 'quantity' property
  const itemsToRender = Object.values(groupedCartItems);

  const handleClearCart = () => {
    if (
      cartItemsWhole.length > 0 &&
      window.confirm("Do you want to clear cart?")
    ) {
      dispatch(clearCart());
      toast.success("Your cart has been cleared!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: true,
      });
    } else if (cartItemsWhole.length === 0) {
      toast.info("Your cart is already empty!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: true,
      });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-28 pb-10 bg-gray-50 flex justify-center">
      <ToastContainer
        className="mt-20"
        position="top-right"
        autoClose={1500}
        hideProgressBar={true}
      />
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-xl p-6 sm:p-8">
        <div className="flex justify-between items-center border-b pb-4 mb-6 border-gray-200">
          <h1 className="text-3xl font-bold text-gray-800">Your Cart</h1>
          {cartItemsWhole.length > 0 ? (
            <button
              className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
              onClick={handleClearCart}
              disabled={cartItemsWhole.length === 0}
            >
              <XCircleIcon className="h-5 w-5" />
              <span className="font-semibold">Clear Cart</span>
            </button>
          ) : null}
        </div>

        {cartItemsWhole.length === 0 ? (
          <div className="text-center py-10">
            <img
              src={cartEmptyIcon}
              alt="Empty Shopping Cart"
              className="mx-auto h-48 w-48 mb-6 object-contain"
            />
            <p className="text-xl text-gray-600 font-medium mb-4">
              Your cart is empty!
            </p>
            <p className="text-gray-500">
              Looks like you haven't added anything yet. Go back and explore our
              delicious menu!
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {itemsToRender.map((item, index) => (
              <ItemListResMenuCat
                key={item.id + index}
                items={item}
                id={item.id}
                qty={item.quantity} //passing it to the itemlistResMEnu to get the qty and print
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
