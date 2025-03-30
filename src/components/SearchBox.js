import FilterBox from "./FilterBox";
import { useState } from "react";
import Popup from "./Popup";

const SearchBox = ({
  listToUpdate,
  setListToUpdate,
  filteredResturant,
  setFilteredResturant,
}) => {
  //I have to pass it because searchBox has the filterBox component
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="fixed top-28 z-40 flex justify-center w-screen ">
      <div className="flex">
        <input
          type="search"
          id="default-search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            try {
              const filteredSearchValue = listToUpdate.filter((res) => {
                const resName = res.info.name
                  .toLowerCase()
                  .includes(searchText.trim().toLowerCase());
                const cuisineString = res.info.cuisines.join(" ");
                const cuisineSearch = cuisineString
                  .toLowerCase()
                  .includes(searchText.trim().toLowerCase());
                return resName || cuisineSearch;
              });
              if (filteredSearchValue.length === 0) {
                throw new Error("No resturant found..... Refresh the page");
              } else {
                setFilteredResturant(filteredSearchValue);
              }
            } catch (e) {
              setError(true);
              setShowPopup(true);
              //console.log(e);

              // setTimeout(() => {
              //   setShowPopup(false);
              //   setError(false);
              // }, 1000);
            }
          }} // Add the onChange event
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search for foods, restrants, etc."
          required
        />
        <input
          className="bg-blue-500  p-3 text-white font-bold rounded-md hover:bg-blue-600"
          type="button"
          value={"Search"}
          onClick={() => {
            try {
              const filteredSearchValue = listToUpdate.filter((res) => {
                const resName = res.info.name
                  .toLowerCase()
                  .includes(searchText.trim().toLowerCase());
                const cuisineString = res.info.cuisines.join(" ");
                const cuisineSearch = cuisineString
                  .toLowerCase()
                  .includes(searchText.trim().toLowerCase());
                return resName || cuisineSearch;
              });
              if (filteredSearchValue.length === 0) {
                throw new Error("No resturant found..... Refresh the page");
              } else {
                setFilteredResturant(filteredSearchValue);
              }
            } catch (e) {
              setError(true);
              setShowPopup(true);
              //console.log(e);

              setTimeout(() => {
                setShowPopup(false);
                setError(false);
              }, 1000);
            }
          }}
        />
      </div>
      <FilterBox
        listToUpdate={listToUpdate}
        setListToUpdate={setListToUpdate}
        filteredResturant={filteredResturant}
        setFilteredResturant={setFilteredResturant}
      />

      <Popup message="No restaurant found." showPopup={showPopup} />
    </div>
  );
};

export default SearchBox;
