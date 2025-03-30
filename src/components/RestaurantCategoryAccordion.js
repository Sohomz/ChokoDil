import React from "react";
import ItemListResMenuCat from "./ItemListResMenuCat";

function RestaurantCategoryAccordion({ data, showItem, setShowIndex }) {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    // Accordion Header
    <div className="w-2/3 justify-between mx-auto my-4 bg-slate-100 shadow-lg p-4 rounded-md ">
      <div className="font-bold text-lg cursor-pointer" onClick={handleClick}>
        <div>
          {data?.title} ({data?.itemCards.length})
        </div>
        <div className="flex justify-end">🔽</div>
      </div>
      <br></br>
      {/* //Accordion Body */}

      {showItem ? (
        data?.itemCards.map((item) => {
          return (
            <div key={item.card.info.id}>
              <ItemListResMenuCat items={item} />
              <br></br>
            </div>
          );
        })
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default RestaurantCategoryAccordion;
