import Card, { withOnlineLabel } from "./Card.js";
import { useEffect } from "react";
import Shimmer from "./Shimmer.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { useSelector, useDispatch } from "react-redux";
import { fetchRestaurants } from "../utils/restaurantSlice.js";

const Body = () => {
  const RestaurantCardOnline = withOnlineLabel(Card);
  const dispatch = useDispatch();

  const { filteredList, list, loading, error } = useSelector(
    (state) => state.restaurants
  );

  // Fetch restaurants on component mount
  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  // Check online status
  const onlineOfflineStatus = useOnlineStatus();

  if (!onlineOfflineStatus) {
    return (
      <h1 className="text-center text-red-500 mt-20 min-h-screen">
        Hey, you are offline
      </h1>
    );
  }

  if (loading) {
    return <Shimmer />;
  }

  if (error) {
    return (
      <h1 className="text-center text-red-500">
        Failed to fetch menu items. Please try again later...
      </h1>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 mt-24">
      <div className="flex flex-wrap p-10 justify-evenly items-center">
        {filteredList.map((item) =>
          !item.isAvailable ? (
            <Card key={item.id} passData={item} />
          ) : (
            <RestaurantCardOnline key={item.id} passData={item} />
          )
        )}
      </div>
    </div>
  );
};

export default Body;
