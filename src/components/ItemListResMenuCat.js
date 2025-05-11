import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ItemListResMenuCat({ items, index }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    try {
      dispatch(addItem(items));
      toast.success("Item added to the list");
    } catch (err) {
      toast.error("Failed to add the item");
    }
  };

  const handelRemove = (index) => {
    try {
      dispatch(removeItem({ index }));
    } catch (err) {
      toast.error("Failed to remove item");
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="border-b-2 shadow-lg rounded-md shadow-slate-500 mt-6 items-center">
        <div className="flex justify-between">
          <div className="w-3/4">
            <div className="font-semibold">{items.passData.name}</div>
            <span className="font-semibold font-serif">
              {parseFloat(items.passData.price).toFixed(2)}
            </span>
            <p className="font-light">{items.passData.description}</p>
          </div>
          <div className="relative min-w-max">
            <button
              className="p-2 bg-green-700 text-white shadow-lg rounded-sm absolute top-0 right-0 hover:bg-green-900"
              onClick={handleClick}
            >
              ADD+
            </button>
            <img
              src={items.passData.image}
              alt={items.passData.name}
              className="h-32 w-32 rounded-xl"
            ></img>
          </div>
        </div>
        <button
          className="p-3 bg-red-600 text-white font-bold rounded-md mb-2"
          onClick={() => {
            handelRemove(index); //index coming from map func from where its called Cart.js
          }}
        >
          Remove
        </button>
      </div>
    </>
  );
}

export default ItemListResMenuCat;
