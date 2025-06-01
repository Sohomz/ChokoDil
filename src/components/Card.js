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
    // 'price' is now the current, discounted price
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

  const starsArray = [1, 2, 3, 4, 5];
  const fullStar = Math.floor(rating);
  const halfStar = Number(rating) - Number(fullStar) >= 0.5 ? 1 : 0;
  const nullStar = images.TOTAL_STARS - (fullStar + halfStar);
  const [imageLoaded, setImageLoaded] = useState(false);
  const dispatch = useDispatch();
  const originalPrice = price / ((100 - offer) / 100);

  const handleAdd = () => {
    try {
      dispatch(addItem(props.passData));
      toast.success("Item added to your cart!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (err) {
      toast.error("Failed to add the item!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <ToastContainer className="mt-20" />
      {/* Outer wrapper for hover effect, and a subtle "pop" on hover */}
      <div className="relative group perspective-1000">
        <div
          className="
          card-items mt-10 w-80 bg-white
          border-4 border-[#333] rounded-2xl
          overflow-hidden shadow-cartoon
          transition-all duration-300
          group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-cartoon-lg
        "
        >
          {/* Image Section */}
          <div className="relative w-full h-48 bg-gray-50 flex items-center justify-center border-b-4 border-[#333]">
            {(!imageLoaded || image.length == 0) && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center text-gray-400 text-sm">
                Loading Yumminess...
              </div>
            )}
            <img
              className={`w-full h-full object-contain transition-opacity duration-300 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              src={
                image.length > 0 || image != "" || imageLoaded
                  ? image
                  : images.PLACEHOLDER_IMG
              }
              alt={name}
              onLoad={() => setImageLoaded(true)}
              onError={(e) => {
                e.target.src = images.PLACEHOLDER_IMG;
                setImageLoaded(false);
              }}
            />
            {offer && (
              <div className="absolute top-4 right-4 bg-lime-600 text-white text-sm font-extrabold px-3 py-1.5 rounded-full rotate-3 shadow-md">
                {offer}% off 🎉
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="p-5">
            <div className="flex justify-between items-start mb-3">
              <h1 className="text-2xl font-black text-gray-900 leading-tight pr-2">
                {name.split(" ").length < 4
                  ? name.split(" ").join(" ")
                  : name.split(" ").slice(0, 4).join(" ")}
              </h1>
              {isVeg !== undefined && (
                <span
                  className={`text-sm font-bold px-3 py-1.5 rounded-full ${
                    isVeg
                      ? "bg-green-400 text-green-900"
                      : "bg-red-400 text-red-900"
                  } border-2 border-[#333]`}
                >
                  {isVeg ? "Veg" : "Non-Veg"}
                </span>
              )}
            </div>

            <p className="text-base text-gray-700 mb-4 line-clamp-2">
              {description}
            </p>

            {/* Rating Section - With bolder stars and a fun rating badge */}
            <div className="flex items-center mt-3 mb-5">
              <div className="flex items-center space-x-0.5 rtl:space-x-reverse">
                {/* Full Star Icon */}
                {starsArray.slice(0, fullStar).map((index) => {
                  return (
                    <svg
                      key={`fullStar-${index}`}
                      className="w-5 h-5 text-yellow-500"
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
                      className="w-5 h-5 text-gray-300"
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
                          />
                          <stop
                            offset="50%"
                            style={{ stopColor: "#D1D5DB", stopOpacity: 1 }}
                          />
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
                      className="w-5 h-5 text-gray-300"
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

              <span className="bg-yellow-300 text-yellow-900 text-sm font-extrabold px-3 py-1 rounded-full border-2 border-yellow-500">
                {rating}
              </span>
            </div>
            <div>
              {offer > 0 && (
                <span className="text-2xl text-gray-600 font-semibold relative overflow-hidden">
                  <span className="relative">
                    ₹ {parseFloat(originalPrice).toFixed(2)}
                    <span className="absolute left-0 top-1/2 w-full h-0.5 bg-gray-500 transform -translate-y-1/2 animate-strikethrough"></span>
                  </span>
                </span>
              )}
            </div>

            {offer > 0 ? (
              <div className=" flex items-center justify-between -mt-1">
                <div className="items-baseline space-x-2">
                  <span className="text-2xl font-extrabold text-[#5A3825]">
                    ₹{parseFloat(price).toFixed(2)}/-
                  </span>
                </div>

                <button
                  className="
                  bg-red-600 text-white font-extrabold text-base
                  py-3 px-5 rounded-lg border-2 border-red-700
                  transition-all duration-200
                  hover:bg-red-700 hover:scale-105 active:scale-95
                  focus:outline-none focus:ring-4 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-white
                  disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:border-gray-400 disabled:bg-gray-500
                "
                  onClick={() => {
                    handleAdd();
                  }}
                  disabled={!isAvailable}
                >
                  {isAvailable ? "Add to Cart" : "Sold Out!"}
                </button>
              </div>
            ) : (
              <div className=" flex items-center justify-between mt-11">
                <div className="items-baseline space-x-2">
                  <span className="text-2xl font-extrabold text-[#5A3825]">
                    ₹{parseFloat(price).toFixed(2)}/-
                  </span>
                </div>

                <button
                  className="
                  bg-red-600 text-white font-extrabold text-base
                  py-3 px-5 rounded-lg border-2 border-red-700
                  transition-all duration-200
                  hover:bg-red-700 hover:scale-105 active:scale-95
                  focus:outline-none focus:ring-4 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-white
                  disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:border-gray-400 disabled:bg-gray-500
                "
                  onClick={() => {
                    handleAdd();
                  }}
                  disabled={!isAvailable}
                >
                  {isAvailable ? "Add to Cart" : "Sold Out!"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

//Higher order component (CSS updated for cartoon style)
export const withOnlineLabel = (Card) => {
  return (props) => {
    const showLabel = props.passData.isAvailable === true;

    return (
      <div className="relative inline-block">
        {showLabel && (
          <h5
            className="
            px-4 py-1.5 bg-green-500 text-white font-extrabold
            absolute top-8 left-4 rounded-full z-10
            border-2 border-green-700 rotate-n3
            shadow-md animate-bounce-subtle
          "
          >
            Available! ✨
          </h5>
        )}
        <Card {...props} />
      </div>
    );
  };
};
export default Card;
