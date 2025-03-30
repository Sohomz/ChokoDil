import { useState, useContext } from "react";
import UserContext from "../utils/UserContext";
import images from "../utils/contants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const [loginBtn, setLoginBtn] = useState(false);
  const userData = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex fixed items-center h-20 p-4 mb-10 bg-gray-800 w-full top-0 z-20">
      <img
        src={images.LOGO_IMG}
        alt="logo"
        className="imglogo"
        style={{ width: "70px", height: "70px" }}
      />
      <ul className="nav flex ml-4 mr-4 space-x-10 justify-end  items-center w-full cursor-pointer text-white">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="font-bold">
          <Link to="/Cart">Cart ({cartItems.length})</Link>
        </li>
        <li>
          <Link to="/About">About Us</Link>
        </li>
        <li>Contact</li>
        <input
          type="button"
          value={loginBtn ? "Log out" : "Log in"} // Change the value of the button
          className="text-white end-2.5 w-24 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => {
            setLoginBtn(!loginBtn);
          }} // Add the onClick event
        />
        <li>{userData.loggedInUser}</li>
      </ul>
    </div>
  );
};

export default Header;
