import { useEffect, useState } from "react";

const useFetchCakeCard = () => {
  const [cakeJson, setCakeJson] = useState({});
  useEffect(() => fetchCake), [];

  const fetchCake = async () => {
    try {
      const cakeFetchData = await fetch(
        "https://www.swiggy.com/dapi/restaurants/search/v3?lat=22.5743545&lng=88.3628734&str=Cake&trackingId=9512d088-09b1-9a35-5993-378809bc2855&submitAction=ENTER&queryUniqueId=53554c7a-f737-18bc-c680-f5cef8b195e0"
      );
      const jsonConverted = await cakeFetchData.json();
      console.log(jsonConverted);
    } catch (error) {
      console.log("error");
    }
  };
};

export default useFetchCakeCard;
