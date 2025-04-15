import { useState, useEffect } from "react";
import images from "../utils/contants";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBox from "./SearchBox";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);
  const location = useLocation();
  const [isMobileView, setIsMobileView] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    // Initial check on component mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex fixed items-center h-20 p-4 w-full top-0 z-20 shadow-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white">
      <img
        src={images.LOGO_IMG}
        alt="logo"
        className="imglogo"
        style={{ width: "70px", height: "70px" }}
      />
      {location.pathname === "/" ? <SearchBox /> : null}

      {isMobileView ? (
        // Mobile View
        <div className="flex items-center justify-end w-full">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none"
          >
            {isMenuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </button>
          {isMenuOpen && (
            <ul className="absolute top-20 right-0 bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg rounded-md py-4 px-6 flex flex-col items-end space-y-4 w-48">
              <li className="hover:text-gray-200">
                <Link to="/">Menu</Link>
              </li>
              <li className="hover:text-gray-200">
                <Link to="/Cart" className="flex items-center">
                  <div className="relative mr-1 scale-75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                    <span className="absolute -top-1 left-3 rounded-full bg-red-500 p-0.5 px-2 text-xs text-red-50">
                      {cartItems.length}
                    </span>
                  </div>
                  Cart
                </Link>
              </li>
              <li className="hover:text-gray-200">
                <Link to="/About">About Us</Link>
              </li>
              <li className="hover:text-gray-200">Contact</li>
              <li>
                <button
                  value={loginBtn ? "Log out" : "Log in"}
                  className="text-white w-24 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => setLoginBtn(!loginBtn)}
                >
                  {loginBtn ? "Log out" : "Log in"}
                </button>
              </li>
            </ul>
          )}
        </div>
      ) : (
        // Desktop View
        <ul className="nav font-semibold flex ml-4 mr-4 space-x-10 justify-end items-center w-full cursor-pointer text-white">
          <li className="bg-white text-pink-500 font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-gray-100">
            <Link to="/">Menu</Link>
          </li>
          <li className="flex">
            <Link to="/Cart">
              <div className="mr-1">
                <div className="relative scale-75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-12 w-8 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                  <span className="absolute -top-2 left-4 rounded-full bg-red-500 p-0.5 px-2 text-sm text-red-50">
                    {cartItems.length}
                  </span>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/About">About Us</Link>
          </li>
          <li>Contact</li>
          <input
            type="button"
            value={loginBtn ? "Log out" : "Log in"}
            className="text-white w-24 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => setLoginBtn(!loginBtn)}
          />
        </ul>
      )}
    </div>
  );
};

export default Header;
