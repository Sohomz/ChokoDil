import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

function ItemListResMenuCat({ items }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    //dispatch an action
    dispatch(addItem(items));
    console.log("itemlsit", items.card);
  };
  return (
    <div className="border-b-2">
      <div className="flex justify-between">
        <div className="w-3/4">
          <div className="font-semibold">{items.card.info.name}</div>
          <span className="font-semibold font-serif">
            {parseFloat(items.card.info.price / 100).toFixed(2)}
          </span>
          <p className="font-light">
            {items.card.info.description.replace("NO MSG.", "").trim()}
          </p>
        </div>
        <div className="relative min-w-max">
          <button
            className="p-2 bg-green-700 text-white shadow-lg rounded-sm absolute top-0 right-0 hover:bg-green-900"
            onClick={handleClick}
          >
            ADD+
          </button>
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${items.card.info.imageId}`}
            alt={items.card.info.name}
            className="h-32 w-32 rounded-xl"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default ItemListResMenuCat;
