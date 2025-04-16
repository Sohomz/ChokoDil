import Card, { withOnlineLabel } from "./Card.js";
import Shimmer from "./Shimmer.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { useSelector } from "react-redux";

const Body = () => {
  // Check online status
  const onlineOfflineStatus = useOnlineStatus();
  const RestaurantCardOnline = withOnlineLabel(Card);
  const { filteredList, loading, error } = useSelector(
    (state) => state.restaurants
  );

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

  if (!filteredList || filteredList.length === 0) {
    return <Shimmer />;
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
