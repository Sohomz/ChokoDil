import images from "../utils/contants.js";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = (props) => {
  const {
    id,
    name,
    description,
    price,
    quantity,
    isVeg,
    isAvailable,
    category,
    subCategory,
    offer,
    daysToDeliver,
    rating,
    image,
  } = props.passData;
  //console.log(loggedInUser);

  const starsArray = [1, 2, 3, 4, 5];
  const fullStar = Math.floor(rating);
  const halfStar = Number(rating) - Number(fullStar) >= 0.5 ? 1 : 0;
  const nullStar = images.TOTAL_STARS - (fullStar + halfStar);
  const [imageLoaded, setImageLoaded] = useState(false);
  const dispatch = useDispatch();

  const handleAdd = () => {
    try {
      dispatch(addItem(props));
      toast.success("Item added to your cart");
    } catch (err) {
      toast.error("Failed to add the item");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="card-items mt-10 w-80 bg-white border-2 border-magenta-500 rounded-lg shadow-lg shadow-slate-600 transition-transform duration-300 hover:scale-105">
        <div className="relative">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-t-lg w-full h-48 z-0"></div>
          )}
          <img
            className="rounded-t-lg w-full h-48 object-contain"
            src={image}
            alt="Food"
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        <div className="px-5 pb-5">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold tracking-tight text-gray-900">
              {name.split(" ").length < 4
                ? name.split(" ").join(" ")
                : name.split(" ").slice(0, 4).join(" ")}
            </h1>
            <>
              {isVeg ? (
                <span className="bg-green-600 text-white text-xs font-semibold px-2.5 py-1 rounded">
                  Veg
                </span>
              ) : (
                <span className="bg-red-700 text-white text-xs font-semibold px-2.5 py-1 rounded">
                  Non-Veg
                </span>
              )}
            </>
          </div>

          <h5 className="text-sm font-semibold mt-2 tracking-tight text-gray-900">
            {description}
          </h5>

          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              {/* Full Star Icon */}
              {starsArray.slice(0, fullStar).map((index) => {
                return (
                  <svg
                    key={`fullStar-${index}`}
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                );
              })}
              {/* Half Star Icon */}
              {starsArray.slice(0, halfStar).map((index) => {
                return (
                  <svg
                    key={`halfStar-${index}`}
                    className="w-4 h-4 text-gray-200"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 22 20"
                  >
                    <defs>
                      <linearGradient
                        id="halfYellow"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop
                          offset="50%"
                          style={{ stopColor: "#FBBF24", stopOpacity: 1 }}
                        />{" "}
                        {/* yellow-300 */}
                        <stop
                          offset="50%"
                          style={{ stopColor: "#4B5563", stopOpacity: 1 }}
                        />{" "}
                        {/* gray-600 */}
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#halfYellow)"
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                );
              })}
              {/* Null Star Icon */}
              {starsArray.slice(0, nullStar).map((index) => {
                return (
                  <svg
                    key={`nullStar-${index}`}
                    className="w-4 h-4 text-gray-200"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                );
              })}
            </div>

            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ">
              {rating}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-gray-900">
              INR {price}.00
            </span>
            <button
              className="bg-green-600 shadow-lg hover:bg-green-700 shadow-lime-600 px-4 text-white font-bold py-3 rounded-md"
              onClick={() => {
                handleAdd();
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

//Higher order component
export const withOnlineLabel = (Card) => {
  return (props) => {
    return (
      <div className="relative inline-block">
        <h5 className="px-2 bg-green-700 text-white shadow-lg absolute top-8 left-4 rounded-lg z-10">
          Available
        </h5>
        <Card {...props} />
      </div>
    );
  };
};
export default Card;
