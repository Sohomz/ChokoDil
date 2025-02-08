import React from "react";
import Card from "./Card";
import useFetchCakeCard from "../utils/useFetchCakeCard";

const Body = () => {
  const fetchedCakeData = useFetchCakeCard();
  return (
    <div className="mt-30">
      <h1 className="flex justify-center">
        <Card />
      </h1>
    </div>
  );
};

export default Body;
