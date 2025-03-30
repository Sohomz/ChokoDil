import { useState } from "react";
import images from "../utils/contants";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBox from "./SearchBox";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);
  const location = useLocation(); // Get the current route used to display Searchbox or not

  return (
    <div className="flex fixed items-center h-20 p-4 w-full top-0 z-20 shadow-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white">
      <img
        src={images.LOGO_IMG}
        alt="logo"
        className="imglogo"
        style={{ width: "70px", height: "70px" }}
      />
      {location.pathname === "/" ? <SearchBox /> : null}

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
    </div>
  );
};

export default Header;
