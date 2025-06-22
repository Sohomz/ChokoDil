import { useDispatch } from "react-redux";
import { addItem, removeItem, removeWholeItem } from "../utils/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PlusCircleIcon, TrashIcon } from "@heroicons/react/24/outline"; // Using Heroicons for icons
import nullImageIcon from "../images/nullImage.png";

function ItemListResMenuCat({ items, id, qty }) {
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

  const handelRemoveWhole = () => {
    try {
      dispatch(removeWholeItem(id));
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
        <div className="flex-grow justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800 tracking-tight">
            {items.name}
          </h3>
          <span className="font-semibold text-green-700 text-md gap-3">
            ₹{parseFloat(items.price).toFixed(2) * qty} (₹
            {parseFloat(items.price).toFixed(2)}/pcs)
          </span>
        </div>

        {/* Actions */}
        <div className="ml-4 flex flex-col items-end">
          <div className="flex items-center space-x-2 border border-gray-300 rounded-md py-1 px-2">
            <button
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full w-6 h-6 flex items-center justify-center text-lg font-bold transition-colors duration-200"
              onClick={handelRemove}
            >
              -
            </button>
            <span className="text-lg font-semibold text-gray-800 select-none min-w-[20px] text-center">
              {qty}
            </span>
            <button
              className=" text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full w-6 h-6 flex items-center justify-center text-lg font-bold transition-colors duration-200"
              onClick={handleClick}
            >
              +
            </button>
          </div>
          <button
            className="text-md font-semibold text-gray-500 select-none text-center p-4"
            onClick={handelRemoveWhole}
          >
            Remove
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
