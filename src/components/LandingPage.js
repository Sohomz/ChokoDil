import React, { useState, useEffect } from "react";
import { FaRegHandPointer } from "react-icons/fa";
import ImageShimmer from "./ImageShimmer";
import chocolateImage from "../images/chocolate.png";
import smallChocolateImage from "../images/smallChocolate.png";
import cakeImage from "../images/cake.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { filterByCategory } from "../utils/restaurantSlice";
import { useSelector, useDispatch } from "react-redux";
import { fetchRestaurants, filterByCategory } from "../utils/restaurantSlice";

const LandingPage = () => {
  const content = [
    {
      img: chocolateImage,
      title: "Bar Chocolate",
      text: "What do cookies and friends have in common? You can never have too many.",
      category: "chocolate",
    },
    {
      img: smallChocolateImage,
      title: "Small Chocolate",
      text: "Enjoy our delicious treats anywhere across the country!",
      category: "small chocolate",
    },
    {
      img: cakeImage,
      title: "Cake",
      text: "We bring you exclusive deals on all your favorite sweets!",
      category: "cake",
    },
  ];
  // Logic for filtering if user click on button
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(content.map(() => false));

  const handleCategorySelection = (category) => {
    dispatch(fetchRestaurants()).then(() => {
      dispatch(filterByCategory(category));

      navigate("/filteredList");
    });
  };
  useEffect(() => {
    setTimeout(() => {
      content.forEach((item, index) => {
        const img = new Image();
        img.src = item.img;
        img.onload = () => handleOnLoad(index);
      });
    }, 200);
  }, []); //whenevr image loads, it will be called, why I used this Image tag, because HTML was facing issue while JS can do the same job for image loading

  const handleOnLoad = (index) => {
    setTimeout(() => {
      setImageLoaded((prevState) => {
        const updatedState = [...prevState];
        updatedState[index] = true;
        return updatedState;
      });
    }, 200); // Adds a 200ms delay before setting state to true
  };
  // always use spread operator if loop is going on inside JSX and you want to update state variable

  return (
    <div className="select-none container mx-auto p-6 mt-20">
      {content.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center ${
            index % 2 === 0
              ? "border-2 border-gray-400 rounded-lg shadow-lg"
              : "md:flex-row-reverse"
          } mb-6 p-6 `}
        >
          {/* Image Section */}
          <div className="select-none w-full flex justify-center m-4">
            {imageLoaded[index] ? (
              // here no need to call HandleLoad because useEffectis doing that already on page loading
              //here just Onload, use some good visualize effect
              <img
                src={item.img}
                alt={item.title}
                className="select-none rounded-lg w-3/4 md:w-96 object-cover transition-opacity duration-500 opacity-0"
                onLoad={(e) => {
                  e.target.classList.remove("opacity-0");
                  e.target.classList.add("opacity-100");
                }}
              />
            ) : (
              <ImageShimmer />
            )}
          </div>

          {/* Text Section */}
          <div className="select-none md:w-1/2 text-center">
            <h2 className="text-center text-2xl font-bold">{item.title}</h2>
            <p className="text-center mt-2 text-gray-700">{item.text}</p>
            <div className="flex mt-4 justify-center">
              <button
                className="flex gap-2 items-center bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"
                onClick={() => {
                  handleCategorySelection(item.category);
                }}
              >
                Click here for more <FaRegHandPointer />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LandingPage;
