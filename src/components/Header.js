import { useState, useEffect, useRef } from "react";
import images from "../utils/contants"; // Assuming images.LOGO_IMG is defined here
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBox from "./SearchBox";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import chocolateIcon from "../images/dark-chocolate.png";
import cartIcon from "../images/shopping-bag.png";
import aboutUsIcon from "../images/about-us.png";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const location = useLocation();
  const [isMobileView, setIsMobileView] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Ref for the whole header for outside click detection

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Effect to determine mobile view
  useEffect(() => {
    const handleResize = () => {
      // Tailwind's 'md' breakpoint is 768px, so matching that for consistency
      setIsMobileView(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Effect to close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close menu if click is outside the header and menu is open
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    // Add/remove event listener based on menu state
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup: remove listener when component unmounts or isMenuOpen changes to false
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]); // Re-run effect when isMenuOpen changes

  return (
    <div
      ref={menuRef} // Attach ref to the main header div
      className="fixed top-0 left-0 w-full z-20 shadow-lg bg-slate-100 text-black h-20 flex items-center justify-between px-4 md:px-8" // Added px-4 for default padding, md:px-8 for desktop
    >
      {/* Logo */}
      <Link to="/" className="flex-shrink-0">
        <img
          src={images.LOGO_IMG}
          alt="CocoDil Logo"
          className="select-none w-[60px] h-[60px] md:w-[70px] md:h-[70px] object-contain" // Responsive sizing for logo
        />
      </Link>

      {/* Search Box (Conditional rendering based on path and view) */}
      {location.pathname === "/filteredList" ? (
        <div className="flex-grow max-w-lg mx-4 sm:mx-2 md:mx-1">
          <SearchBox isMenuOpen={isMenuOpen} />
        </div>
      ) : (
        // Title for other pages
        <h1 className="font-semibold text-xl md:text-3xl ml-4 md:ml-12 flex-grow text-left">
          ChocoDil
        </h1>
      )}

      {/* Desktop Navigation (hidden on mobile) */}
      <ul className="hidden md:flex items-center justify-between space-x-6 lg:space-x-10 text-base lg:text-lg font-semibold">
        <li>
          <Link
            to="/"
            className="flex flex-col items-center hover:text-gray-700 transition-colors"
          >
            <img
              className="h-7 w-7 object-contain"
              src={chocolateIcon}
              alt="Home"
            />
            <span className="mt-1 text-xs">Home</span>
          </Link>
        </li>
        <li>
          <Link
            to="/Cart"
            className="flex flex-col items-center relative hover:text-gray-700 transition-colors"
          >
            <div className="relative">
              <img
                className="h-7 w-7 object-contain"
                src={cartIcon}
                alt="Cart"
              />
              {cartItems.length > 0 && ( // Only show badge if items exist
                <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full text-xs px-1.5 py-0.5 min-w-[18px] text-center">
                  {cartItems.length}
                </span>
              )}
            </div>
            <span className="mt-1 text-xs">Cart</span>
          </Link>
        </li>
        <li>
          <Link
            to="/About"
            className="flex flex-col items-center hover:text-gray-700 transition-colors"
          >
            <img
              className="h-7 w-7 object-contain"
              src={aboutUsIcon}
              alt="About Us"
            />
            <span className="mt-1 text-xs">About</span>
          </Link>
        </li>
        <li>
          {/* Consider a Link for Contact Us as well */}
          <Link
            to="/Contact"
            className="flex flex-col items-center hover:text-gray-700 transition-colors"
          >
            <span className="text-base md:text-lg">Contact Us</span>
          </Link>
        </li>
      </ul>

      {/* Mobile Hamburger/Close Icon & Mini-Nav (visible on mobile) */}
      <div className="flex items-center justify-between md:hidden">
        {/* Mobile Home Icon (if needed, otherwise remove) */}
        <Link to="/">
          <img
            className="h-8 w-8 object-contain"
            src={chocolateIcon}
            alt="Home"
          />
        </Link>

        {/* Mobile Cart Icon */}
        <Link to="/Cart" className="mx-2">
          <div className="relative">
            <img className="h-7 w-7 object-contain" src={cartIcon} alt="Cart" />
            {cartItems.length > 0 && ( // Only show badge if items exist
              <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full text-xs px-1.5 py-0.5 min-w-[18px] text-center">
                {cartItems.length}
              </span>
            )}
          </div>
        </Link>

        {/* Hamburger/Close Button */}
        <button
          onClick={toggleMenu}
          className="text-2xl p-2 focus:outline-none"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileView && ( // Only render this if it's a mobile view
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setIsMenuOpen(false)} // Close menu if clicking outside the sidebar part
        >
          <ul
            className={`absolute top-0 left-0 w-3/4 max-w-xs h-full bg-slate-50 shadow-2xl py-6 px-6 flex flex-col space-y-6 transform transition-transform duration-300 ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
          >
            <li className="mb-4">
              <Link
                to="/"
                className="flex items-center text-gray-800 hover:text-gray-600 font-semibold text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <img className="h-8 w-8 mr-3" src={chocolateIcon} alt="Home" />
                Home
              </Link>
            </li>
            <li className="border-t border-gray-200 pt-6">
              {" "}
              {/* Separator after Home/Logo */}
              <Link
                to="/About"
                className="flex items-center text-gray-800 hover:bg-slate-100 p-3 rounded-md transition-colors w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                <img
                  className="h-6 w-6 mr-3"
                  src={aboutUsIcon}
                  alt="About Us"
                />
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className="flex items-center text-gray-800 hover:bg-slate-100 p-3 rounded-md transition-colors w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                {/* Placeholder for contact icon if you have one */}
                <span className="h-6 w-6 mr-3 flex items-center justify-center">
                  📞
                </span>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
