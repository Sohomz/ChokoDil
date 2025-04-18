import { useState, useEffect, useRef } from "react";
import images from "../utils/contants";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBox from "./SearchBox";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Font, { Text } from "react-font";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);
  const location = useLocation();
  const [isMobileView, setIsMobileView] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    // Initial check on component mount
    handleResize();
    // Listen for window resize events
    window.addEventListener("resize", handleResize);
    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //this code is to handle outsideclick, then close the menu in mobile devices
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div
      ref={menuRef}
      className=" flex fixed items-center h-20 p-4 w-full top-0 z-20 shadow-lg bg-slate-100 text-black"
    >
      <div className="flex justify-between items-center w-full">
        <img
          src={images.LOGO_IMG}
          alt="logo"
          className="select-none"
          style={{ width: "70px", height: "70px" }}
        />
        {location.pathname === "/filteredList" ? (
          <SearchBox isMenuOpen={isMenuOpen} />
        ) : (
          <Font className="lg:mr-16 sm:mr-10 md:mr-10 select-none">
            <Text family="Monoton" className="tracking-widest text-3xl">
              CraftyKoKo
            </Text>
          </Font>
        )}

        {isMobileView ? (
          // Mobile View
          <div className="flex items-center justify-end">
            <button
              onClick={toggleMenu} //function to toggle if menu is open or closed. If open then mobile view, elsedesktop
              className="text-black text-2xl focus:outline-none"
            >
              {/* icons */}
              {isMenuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            </button>
            {isMenuOpen && (
              <ul className="absolute inset-y-0 left-0 top-20 bg-slate-50 shadow-lg py-4 px-6 flex flex-col space-y-4 w-1/2 h-screen transition-transform transform translate-x-0">
                <li className="hover:bg-slate-200 shadow-md p-4">
                  <Link to="/">Menu</Link>
                </li>
                <li className="hover:bg-slate-200 shadow-md p-4">
                  <Link to="/Cart" className="flex items-center">
                    <div className="relative mr-1">
                      <div className="scale-150">
                        <AiOutlineShoppingCart />
                      </div>
                      <span className="absolute -top-2 left-3 m-2 rounded-full bg-red-500 px-1 text-xs text-red-50">
                        {cartItems.length}
                      </span>
                    </div>
                  </Link>
                </li>
                <li className="hover:bg-slate-200 shadow-md p-4">
                  <Link to="/About">About Us</Link>
                </li>
                <li className="hover:bg-slate-200 shadow-md p-4">Contact</li>
              </ul>
            )}
          </div>
        ) : (
          // Desktop View
          <ul className="nav font-semibold flex ml-4 mr-4 space-x-10 justify-end items-center cursor-pointer text-black">
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
                      className="h-12 w-8 text-black"
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
            <li className="hover:bg-slate-200  p-4">
              <Link to="/About">About Us</Link>
            </li>
            <li className="hover:bg-slate-200  p-4">Contact</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
