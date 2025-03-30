import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import ResturantMenu from "./components/ResturantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appstore from "./utils/appStore";
import Cart from "./components/Cart";

const AppLayout = () => {
  const [userInfo, setUserInfo] = useState(null);

  // fetch API for example, here we'll hard code
  useEffect(() => {
    const fetchedData = {
      name: "Sohom Dasss",
      age: 26,
    };
    setUserInfo(fetchedData.name);
  }, []);

  return (
    <Provider store={appstore}>
      <UserContext.Provider value={{ loggedInUser: userInfo, setUserInfo }}>
        <div className="app-layout">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Body />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/resturants/:resId" element={<ResturantMenu />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </Router>
);
