import Shimmer from "../components/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategoryAccordion from "./RestaurantCategoryAccordion";
import { useState } from "react";

const ResturantMenu = () => {
  const { resId } = useParams();
  const restaurantData = useRestaurantMenu(resId);
  const getCardData = (index) => restaurantData?.cards?.[index]?.card?.card;
  const restaurantInfo = getCardData(0)?.text;
  const [showIndex, setShowIndex] = useState(null);
  // const rating = getCardData(2)?.info?.avgRating;
  // const costForTwo = getCardData(2)?.info?.costForTwoMessage;
  // const areaName = getCardData(2)?.info?.areaName;
  // const minDeliveryTime = getCardData(2)?.info?.sla?.minDeliveryTime;
  // const maxDeliveryTime = getCardData(2)?.info?.sla?.maxDeliveryTime;

  // const menuItems = restaurantData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[8]?.card?.card?.itemCards;

  const categories =
    restaurantData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) => {
        return (
          category.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  if (!restaurantData) {
    return <Shimmer />;
  }

  const handleShowIndex = (index) => {
    setShowIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="mt-24 mb-20">
      <h1 className="font-bold my-6 text-2xl text-center">{restaurantInfo}</h1>
      {/* Category accordian */}
      <div>
        {categories.map((cat, index) => {
          return (
            <RestaurantCategoryAccordion
              data={cat.card?.card}
              key={cat.card?.card?.categoryId}
              showItem={index === showIndex ? true : false}
              setShowIndex={() => {
                handleShowIndex(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ResturantMenu;
