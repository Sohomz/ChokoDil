import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilteredRestaurants } from "../utils/restaurantSlice";
import Popup from "./Popup";

const SearchBox = ({ isMenuOpen }) => {
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();
  const listToUpdateBackup = useSelector(
    (state) => state.restaurants.filteredList2nd
  );

  const handleSearch = (e) => {
    const input = e.target.value;
    setSearchText(input);

    try {
      const filteredSearchValue = listToUpdateBackup.filter((res) => {
        //when finidng use list
        const itemName = res.name
          .toLowerCase()
          .includes(input.trim().toLowerCase());

        const subCategoryName = res.subCategory
          .toLowerCase()
          .includes(input.trim().toLowerCase());
        return itemName || subCategoryName;
      });

      if (filteredSearchValue.length === 0) {
        throw new Error("No item found :( ");
      } else {
        dispatch(setFilteredRestaurants(filteredSearchValue)); // Dispatch the filtered list to Redux
        setError(false);
        setShowPopup(false);
      }
    } catch (error) {
      setError(true);
      setShowPopup(true);

      // Automatically hide popup after 1 second
      setTimeout(() => {
        setShowPopup(false);
        setError(false);
      }, 1000);
    }
  };

  return (
    <div className={`sm:mx-1 md:mx-1 mx-1`}>
      <div className="relative">
        <div className="flex">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            value={searchText}
            onChange={handleSearch} // Trigger the search logic
            className="block w-full p-4 ps-10 text-base text-gray-900 shadow-md rounded-lg bg-gray-50"
            placeholder="Search for foods, restaurants..."
            required
          />
        </div>
      </div>
      <Popup message="No item found :(" showPopup={showPopup} />
    </div>
  );
};

export default SearchBox;
