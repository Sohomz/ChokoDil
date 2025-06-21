import React, { useState, useEffect, useRef } from "react";
import {
  FaRegHandPointer,
  FaQuoteLeft,
  FaStar,
  FaEnvelope,
  FaShippingFast,
  FaHeart,
  FaSmile,
} from "react-icons/fa"; // Added new icons
import ImageShimmer from "./ImageShimmer";
import chocolateImage from "../images/chocolate.png";
import smallChocolateImage from "../images/smallChocolate.png";
import cakeImage from "../images/cake.png";
import brownieImage from "../images/brownie.jpg"; // Assuming you have this image
import mousseImage from "../images/mousse.jpg"; // Assuming you have this image
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchRestaurants, filterByCategory } from "../utils/restaurantSlice";
import { ToastContainer, toast } from "react-toastify"; // For newsletter success/error
import "react-toastify/dist/ReactToastify.css";

// Custom Hero Section Carousel Data
const heroSlides = [
  {
    image: chocolateImage,
    headline: "Handcrafted Chocolates",
    subtext: "Taste the passion in every exquisite piece.",
    bgColor: "from-purple-600 to-pink-500",
  },
  {
    image: cakeImage,
    headline: "Celebration Cakes",
    subtext: "Making your special moments even sweeter.",
    bgColor: "from-blue-500 to-cyan-400",
  },
  {
    image: smallChocolateImage,
    headline: "Everyday Delights",
    subtext: "Small treats, big smiles, anytime, anywhere.",
    bgColor: "from-green-500 to-yellow-400",
  },
];

const testimonials = [
  {
    quote:
      "Absolutely delightful! The chocolates are out of this world, and the delivery was so fast.",
    author: "Priya Sharma",
    rating: 5,
  },
  {
    quote:
      "ChocoDil made our anniversary cake truly special. The taste was heavenly!",
    author: "Amit Singh",
    rating: 5,
  },
  {
    quote:
      "My go-to place for desserts now. Consistently fresh and incredibly tasty.",
    author: "Sneha Reddy",
    rating: 4,
  },
];

const features = [
  {
    icon: <FaHeart className="text-pink-500 text-3xl mb-2" />,
    title: "Handcrafted with Love",
    description:
      "Each item is meticulously made with the finest ingredients and a touch of passion.",
  },
  {
    icon: <FaShippingFast className="text-blue-500 text-3xl mb-2" />,
    title: "Speedy Delivery",
    description:
      "Get your treats delivered fresh and fast, right to your doorstep, typically within 2-3 days.",
  },
  {
    icon: <FaSmile className="text-yellow-500 text-3xl mb-2" />,
    title: "Customer Satisfaction",
    description:
      "Your happiness is our priority. We strive to make every experience a sweet one.",
  },
];

const LandingPage = () => {
  const contentCategories = [
    // Renamed to avoid conflict with `content` in `useEffect`
    {
      img: chocolateImage,
      title: "Bar Chocolate",
      text: "Indulge in our exquisite bar chocolates, crafted to melt in your mouth and elevate your senses. Pure bliss in every bite!",
      category: "chocolate",
    },
    {
      img: smallChocolateImage,
      title: "Small Chocolate",
      text: "Perfectly portioned delightful small chocolates for a quick treat or a sweet surprise. Share the joy!",
      category: "small chocolate",
    },
    {
      img: cakeImage,
      title: "Decadent Cakes",
      text: "Celebrate life's moments with our freshly baked, beautifully designed cakes. Taste the artistry and passion!",
      category: "cake",
    },
    {
      img: brownieImage, // Using a new image
      title: "Gourmet Brownies",
      text: "Rich, fudgy, and irresistibly delicious brownies that are a perfect indulgence for any craving.",
      category: "brownie",
    },
    {
      img: mousseImage, // Using a new image
      title: "Creamy Mousses",
      text: "Light and airy, our mousses are a delicate symphony of flavors, perfect for a sophisticated dessert.",
      category: "mousse",
    },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(
    contentCategories.map(() => false)
  );
  const [currentSlide, setCurrentSlide] = useState(0);
  const newsletterEmailRef = useRef(null); // Ref for newsletter input

  // Logic for filtering if user clicks on button
  const handleCategorySelection = async (category) => {
    toast.info("Loading treats for you...", { autoClose: 1500 }); // Optional: loading toast
    await dispatch(fetchRestaurants()); // Fetch all restaurants
    dispatch(filterByCategory(category)); // Then filter by category
    navigate("/filteredList"); // Navigate to the filtered list page
  };

  // Preload images and manage loading state for category sections
  useEffect(() => {
    const loadImage = (item, index) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = item.img;
        img.onload = () => {
          setTimeout(() => {
            setImageLoaded((prevState) => {
              const updatedState = [...prevState];
              updatedState[index] = true;
              return updatedState;
            });
            resolve();
          }, 300);
        };
        img.onerror = () => {
          console.error(`Failed to load image: ${item.img}`);
          setImageLoaded((prevState) => {
            const updatedState = [...prevState];
            updatedState[index] = true; // Mark as loaded even on error to hide shimmer
            return updatedState;
          });
          resolve();
        };
      });
    };

    const loadAllCategoryImages = async () => {
      for (let i = 0; i < contentCategories.length; i++) {
        await loadImage(contentCategories[i], i);
      }
    };

    const initialLoadDelay = setTimeout(() => {
      loadAllCategoryImages();
    }, 500);

    return () => clearTimeout(initialLoadDelay);
  }, [contentCategories]);

  // Hero carousel auto-play
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, []);

  const handleNewsletterSignup = (e) => {
    e.preventDefault();
    const email = newsletterEmailRef.current.value;
    if (email && email.includes("@") && email.includes(".")) {
      // Simulate API call for newsletter signup
      toast.success("Thank you for subscribing to our newsletter!");
      newsletterEmailRef.current.value = ""; // Clear input
      // Here you would typically send the email to your backend
      console.log("Newsletter signup:", email);
    } else {
      toast.error("Please enter a valid email address.");
    }
  };

  return (
    <div className="select-none container mx-auto p-0 md:p-6 mt-0 md:mt-20 overflow-hidden">
      <ToastContainer />

      {/* Hero Section - Carousel */}
      <section className="relative h-[calc(100vh-80px)] w-full overflow-hidden mb-12 shadow-2xl rounded-b-xl">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center justify-center p-4 md:p-0
              ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}
              bg-gradient-to-br ${slide.bgColor}`}
          >
            <div className="text-center text-white z-20 p-6 bg-black bg-opacity-30 rounded-xl backdrop-blur-sm transform transition-transform duration-1000 ease-in-out">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
                {slide.headline}
              </h1>
              <p className="text-lg md:text-xl font-light mb-8 animate-fade-in-up">
                {slide.subtext}
              </p>
              <Link
                to="/all-items"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-purple-800 bg-white hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg animate-bounce-slow"
              >
                Explore All Delights!
              </Link>
            </div>
            <img
              src={slide.image}
              alt={slide.headline}
              className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
            />
          </div>
        ))}
        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full bg-white transition-all duration-300 ${
                index === currentSlide ? "w-8 opacity-100" : "opacity-50"
              }`}
            ></button>
          ))}
        </div>
      </section>

      {/* "Why Choose Us" Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-100 to-orange-100 text-center mb-12 rounded-lg shadow-lg">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-10">
          Why Choose ChocoDil?
        </h2>
        <div className="flex flex-wrap justify-center gap-8 px-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/4 p-4 bg-white rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300 group"
            >
              <div className="flex justify-center items-center h-16 w-16 mx-auto rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dynamic Category Cards Grid */}
      <section className="py-16 px-4 md:px-0 mb-12">
        <h2 className="text-4xl font-extrabold text-center text-purple-700 mb-12">
          Explore Our Delicious Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
          {contentCategories.map((item, index) => (
            <div
              key={index}
              onClick={() => handleCategorySelection(item.category)}
              className="relative bg-white rounded-xl shadow-xl overflow-hidden cursor-pointer
                         transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl
                         group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }} // Staggered animation
            >
              <div className="relative w-full h-64 overflow-hidden">
                {!imageLoaded[index] ? (
                  <ImageShimmer className="w-full h-full" />
                ) : (
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.text}
                </p>
                <button
                  className="inline-flex items-center gap-2 bg-red-600 text-white font-semibold py-2 px-5 rounded-full
                             hover:bg-red-700 transition duration-300 transform hover:scale-105
                             opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                >
                  View Items <FaRegHandPointer />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-purple-100 text-center mb-12 rounded-lg shadow-lg">
        <h2 className="text-4xl font-extrabold text-purple-800 mb-10">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md relative transform hover:scale-105 transition-transform duration-300"
            >
              <FaQuoteLeft className="text-purple-400 text-4xl absolute top-4 left-4 opacity-30" />
              <p className="text-gray-700 text-lg italic mb-4 mt-8">
                "{testimonial.quote}"
              </p>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-xl ${
                      i < testimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="font-semibold text-gray-800">
                - {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-orange-500 text-white text-center mb-12 rounded-lg shadow-lg">
        <h2 className="text-4xl font-extrabold mb-4">Stay Sweet!</h2>
        <p className="text-lg mb-8">
          Subscribe to our newsletter for exclusive deals, new arrivals, and
          sweet surprises!
        </p>
        <form
          onSubmit={handleNewsletterSignup}
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 px-4"
        >
          <input
            type="email"
            ref={newsletterEmailRef}
            placeholder="Enter your email address"
            className="flex-grow p-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
          <button
            type="submit"
            className="bg-purple-700 text-white font-bold py-3 px-6 rounded-full hover:bg-purple-800 transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Subscribe <FaEnvelope className="inline-block ml-2" />
          </button>
        </form>
      </section>

      {/* Basic Footer (ensure you have a dedicated Footer component for real app) */}
      <footer className="bg-gray-800 text-white py-8 text-center rounded-t-lg">
        <div className="container mx-auto">
          <p>
            &copy; {new Date().getFullYear()} ChocoDil. All rights reserved.
          </p>
          <p className="mt-2 text-sm">
            Crafted with <FaHeart className="inline text-red-500" /> by You.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
