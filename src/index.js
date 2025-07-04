import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router, // Use BrowserRouter explicitly if you want to use basename
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
import CreateItem from "./components/CreateItem";
import ItemsTable from "./components/ItemsTable";
import LandingPage from "./components/LandingPage";
import { useState, useEffect } from "react";
import ContactUs from "./components/ContactUs";
import PrivacyPolicy from "./components/PrivacyPolicy";

const AppLayout = () => {
  const [userInfo, setUserInfo] = useState(null);

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
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <<< KEY CHANGE 1: Add basename to Router
  <Router basename="/ChokoDil">
    <Routes>
      {/*
        KEY CHANGE 2: The '/' route now refers to the BASE_URL (e.g., /ChokoDil).
        Using 'index' makes LandingPage the default component when at the base path.
      */}
      <Route path="/" element={<AppLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/resturants/:resId" element={<ResturantMenu />} />
        <Route path="/create" element={<CreateItem />} />
        <Route path="/itemsTable" element={<ItemsTable />} />
        <Route path="/filteredList" element={<Body />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />

        {/* This will catch any invalid paths *within* the /ChokoDil base */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </Router>
);
