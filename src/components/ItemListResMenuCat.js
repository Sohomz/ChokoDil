import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PlusCircleIcon, TrashIcon } from "@heroicons/react/24/outline"; // Using Heroicons for icons
import nullImageIcon from "../images/nullImage.png";

function ItemListResMenuCat({ items, id }) {
  //id from cart.js to help in removeItem
  const dispatch = useDispatch();
  //console.log(items);

  const handleClick = () => {
    try {
      dispatch(addItem(items));
      toast.success(`${items.name} added to cart!`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
      });
    } catch (err) {
      toast.error("Failed to add item to cart.", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
      });
    }
  };

  const handelRemove = () => {
    try {
      dispatch(removeItem(id));
    } catch (err) {
      toast.error("Failed to remove item from cart.", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
      });
    }
  };

  return (
    <div className="mt-4 rounded-lg shadow-md overflow-hidden bg-white border border-gray-100">
      <div className="px-5 py-4 flex items-center">
        {/* Image */}
        <div className="relative w-20 h-20 rounded-md overflow-hidden shadow-sm mr-4">
          <img
            src={
              typeof items.image === undefined ||
              items.image === null ||
              items.image == ""
                ? nullImageIcon
                : items.image
            }
            alt={items.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Item Details */}
        <div className="flex-grow justify-between">
          <h3 className="text-lg font-semibold text-gray-800 tracking-tight">
            {items.name}
          </h3>
          <span className="font-semibold text-indigo-600 text-md">
            ₹{parseFloat(items.price).toFixed(2)}
          </span>
        </div>
        <div>
          <label className="p-5 rounded-md shadow-md">
            Quantity {items.quantity}
          </label>
        </div>

        {/* Actions */}
        <div className="ml-4 flex flex-col items-end">
          <button
            className="bg-green-500 hover:bg-green-600 text-white shadow-md rounded-full p-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
            onClick={handleClick}
          >
            <PlusCircleIcon className="h-5 w-5" />
          </button>
          <button
            className="mt-2 bg-red-500 hover:bg-red-600 text-white shadow-md rounded-full p-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
            onClick={handelRemove}
          >
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      <ToastContainer
        className="mt-20"
        position="top-right"
        autoClose={1000}
        hideProgressBar={true}
      />
    </div>
  );
}

export default ItemListResMenuCat;
