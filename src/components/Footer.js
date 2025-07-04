import images from "../utils/contants";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaHeart } from "react-icons/fa";
import { useState, useEffect } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isMobileView, setIsMobileView] = useState(false);

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

  return (
    <footer className="bg-gray-100 py-10 px-4 md:px-8 shadow-inner mt-16">
      <div className="mx-auto max-w-screen-xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-8 md:space-y-0">
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src={images.LOGO_IMG}
                className="h-12 w-12 mr-3 object-contain"
                alt="ChocoDil Logo"
              />
              <span className="self-center text-3xl font-bold whitespace-nowrap text-chocolate">
                ChocoDil
              </span>
            </Link>
            <p className="text-sm text-gray-600 mt-4 max-w-xs text-center md:text-left">
              Crafting delightful moments, one sweet treat at a time.
            </p>
          </div>
          {!isMobileView && (
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 text-center md:text-left">
              <div>
                <h3 className="mb-4 text-lg font-semibold text-gray-800 uppercase">
                  Explore
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>
                    <Link
                      to="/"
                      className="hover:text-red-600 transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="hover:text-red-600 transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contactUs"
                      className="hover:text-red-600 transition-colors"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/filteredList"
                      className="hover:text-red-600 transition-colors"
                    >
                      Shop
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-semibold text-gray-800 uppercase">
                  Legal
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>
                    <Link
                      to="/privacyPolicy"
                      className="hover:text-red-600 transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/terms-conditions"
                      className="hover:text-red-600 transition-colors"
                    >
                      Terms &amp; Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/refund-policy"
                      className="hover:text-red-600 transition-colors"
                    >
                      Refund Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="my-10" />
        <div className="flex flex-col sm:flex-row sm:justify-between items-center text-center sm:text-left space-y-4 sm:space-y-0">
          <span className="text-sm text-gray-600">
            © {currentYear}{" "}
            <Link to="/" className="text-red-500 hover:underline font-semibold">
              ChocoDil™
            </Link>
            . All Rights Reserved.
          </span>
          <p className="mt-2 text-sm">
            Crafted with <FaHeart className="inline text-red-500" /> by You.
          </p>
          <div className="flex space-x-6">
            <Link
              to="https://www.facebook.com/your-chocoDil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-red-600 transition-colors"
            >
              <FaFacebookF className="w-6 h-6" />
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link
              to="https://www.instagram.com/your-craftykoko"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-red-600 transition-colors"
            >
              <FaInstagram className="w-6 h-6" />
              <span className="sr-only">Instagram page</span>
            </Link>
            <Link
              to="https://www.twitter.com/your-craftykoko"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-red-600 transition-colors"
            >
              <FaTwitter className="w-6 h-6" />
              <span className="sr-only">Twitter page</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
