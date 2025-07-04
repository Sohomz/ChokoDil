import images from "../utils/contants.js"; // Assuming this path is correct
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // useSelector is not used but kept in import as in original code
import { addItem } from "../utils/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa"; // Import star icons

const CardModernWhite = (props) => {
  const {
    id,
    name,
    description,
    price,
    isVeg,
    isAvailable,
    category,
    subCategory,
    offer,
    daysToDeliver,
    rating,
    image,
  } = props.passData;
  const isInCart = {};
  const quantityInCart = useSelector(
    (state) => state.cart.items.filter((cartItem) => cartItem.id === id).length //to get the count how many in cart slice
  );
  const forTheQty = Object.values(isInCart);
  //console.log(forTheQty[0].quantity);
  const [imageLoaded, setImageLoaded] = useState(false);
  const dispatch = useDispatch();
  const originalPrice = offer
    ? parseFloat(price / ((100 - offer) / 100)).toFixed(2)
    : price;

  const handleAdd = () => {
    try {
      dispatch(addItem(props.passData));
      toast.success("Item added to cart!", {
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
      toast.error("Failed to add item!", {
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

  // Helper for rendering stars
  const renderStars = (ratingValue) => {
    const fullStars = Math.floor(ratingValue);
    const hasHalfStar = ratingValue - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} className="text-yellow-500 w-4 h-4" />
        ))}
        {hasHalfStar && (
          <FaStarHalfAlt key="half" className="text-yellow-500 w-4 h-4" />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} className="text-gray-300 w-4 h-4" />
        ))}
        <span className="ml-2 text-sm font-semibold text-gray-700">
          ({ratingValue})
        </span>
        {quantityInCart > 0 ? (
          <span className=" border border-green-700 p-1 ml-10">
            {quantityInCart} item/s in cart
          </span>
        ) : null}
      </div>
    );
  };

  return (
    <>
      <ToastContainer className="mt-36" />
      <div className="relative group p-4 animate-slideUp">
        {/* Added padding to the group for spacing */}
        <div
          className="
            w-80 bg-white rounded-xl overflow-hidden
            shadow-lg hover:shadow-xl transition-all duration-300
            transform hover:-translate-y-1 hover:scale-[1.01]
          "
        >
          {/* Image Section */}
          <div className="relative w-full h-48 bg-gray-50 flex items-center justify-center overflow-hidden">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center text-gray-400 text-sm">
                Loading Image...
              </div>
            )}
            <img
              className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              src={image && image.length > 0 ? image : images.PLACEHOLDER_IMG}
              alt={name}
              onLoad={() => setImageLoaded(true)}
              onError={(e) => {
                e.target.src = images.PLACEHOLDER_IMG;
                setImageLoaded(true); // Still mark as loaded to hide shimmer even if placeholder
              }}
            />
            {offer > 0 && (
              <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md transform rotate-3">
                {offer}% OFF
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="p-5 flex flex-col justify-between h-[calc(100%-12rem)]">
            <div className="flex justify-between items-start mb-2">
              <h1 className="text-xl font-extrabold text-gray-900 leading-tight pr-2">
                {name}
              </h1>
              {isVeg !== undefined && (
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    isVeg
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {isVeg ? "Veg" : "Non-Veg"}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {description}
            </p>
            {/* Rating Section */}
            {rating && renderStars(rating)}
            {/* Price and Add to Cart */}
            <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
              <div>
                {offer > 0 && (
                  <span className="text-sm text-gray-500 line-through mr-2">
                    ₹{originalPrice}
                  </span>
                )}
                <span className="text-xl font-bold text-gray-900">
                  ₹{parseFloat(price).toFixed(2)}/-
                </span>
              </div>

              <button
                className={`
                  bg-red-600 text-white font-semibold text-sm
                  py-2.5 px-4 rounded-lg
                  transition-all duration-200 ease-in-out
                  hover:bg-red-800 hover:scale-105 active:scale-95
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white
                  ${
                    !isAvailable
                      ? "opacity-60 cursor-not-allowed bg-gray-400 hover:bg-gray-400 hover:scale-100"
                      : ""
                  }
                `}
                onClick={handleAdd}
                disabled={!isAvailable}
              >
                {isAvailable ? "Add to Cart" : "Sold Out!"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Higher order component for the label
export const withOnlineLabel = (CardComponent) => {
  // Renamed parameter for clarity
  return (props) => {
    const showLabel = props.passData.isAvailable === true;

    return (
      <div className="relative inline-block">
        {showLabel && (
          <span
            className="
              absolute top-2 left-2 px-3 py-1 bg-green-500 text-white text-xs font-bold
              rounded-md shadow-sm z-10
              transform -rotate-1 translate-x-1 translate-y-1
            "
          >
            Available
          </span>
        )}
        <CardComponent {...props} />
      </div>
    );
  };
};

export default CardModernWhite; // Export this as the default
