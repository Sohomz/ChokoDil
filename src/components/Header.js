import { useState, useEffect, useRef } from "react";
import images from "../utils/contants";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBox from "./SearchBox";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Font, { Text } from "react-font";
import chocolateIcon from "../images/dark-chocolate.png";
import cartIcon from "../images/shopping-bag.png";
import aboutUsIcon from "../images/about-us.png";

const Header = () => {
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
        ) : !isMobileView ? (
          <Font className="lg:mr-16 sm:mr-10 md:mr-10 select-none">
            <Text family="Monoton" className="tracking-widest text-3xl">
              CraftyKoKo
            </Text>
          </Font>
        ) : (
          <Font className="lg:mr-16 sm:mr-10 md:mr-10 select-none">
            <Text family="Monoton" className="tracking-widest text-2xl">
              CraftyKoKo
            </Text>
          </Font>
        )}

        {isMobileView ? (
          // Mobile View
          <div className="flex items-center justify-end">
            <div className="p-4">
              <Link to="/">
                <img className="h-10" src={chocolateIcon}></img>
              </Link>
            </div>
            <button className="p-4">
              <Link to="/Cart" className="flex items-center">
                <div className="relative mr-1">
                  <div className="scale-150">
                    <img className="h-6" src={cartIcon}></img>
                  </div>
                  <span className="absolute -top-2 left-3 m-2 rounded-full bg-red-500 px-1 text-xs text-red-50">
                    {cartItems.length}
                  </span>
                </div>
              </Link>
            </button>
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
                  <Link to="/About">
                    <li className="hover:bg-slate-200  p-4">About us</li>
                  </Link>
                </li>
                <li className="hover:bg-slate-200 shadow-md p-4">
                  <Link to="/About">
                    <li className="hover:bg-slate-200  p-4">Contact us</li>
                  </Link>
                </li>
              </ul>
            )}
          </div>
        ) : (
          // Desktop View
          <ul className="nav font-semibold flex ml-4 mr-4 space-x-10 justify-end items-center cursor-pointer text-black">
            <li>
              <Link to="/">
                <img className="h-10" src={chocolateIcon}></img>
              </Link>
            </li>
            <li className="flex">
              <Link to="/Cart">
                <div className="mr-1">
                  <div className="relative scale-75">
                    <div className="scale-150">
                      <img className="h-7" src={cartIcon}></img>
                    </div>
                    <span className="absolute -top-2 left-4 rounded-full bg-red-500 p-0.5 px-2 text-sm text-red-50">
                      {cartItems.length}
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li className="p-4">
              <Link to="/About">
                <img className="h-10" src={aboutUsIcon}></img>
              </Link>
            </li>
            <li className="hover:bg-slate-200  p-4">Contact us</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
