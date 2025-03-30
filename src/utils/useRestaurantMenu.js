import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [restaurantData, setRestaurantData] = useState(null);
  useEffect(() => {
    fetchMenuData();
  }, []);
  const fetchMenuData = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5743545&lng=88.3628734&restaurantId=${resId}`
      );
      const jsonData = await response.json();
      setRestaurantData(jsonData.data);
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  };

  return restaurantData;
};

export default useRestaurantMenu;
