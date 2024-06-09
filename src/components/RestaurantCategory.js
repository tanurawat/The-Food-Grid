import React, { useState } from "react";
import ItemList from "./ItemList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div className="mx-auto border-b-[12px] border-gray-200">
        <div
          className="flex justify-between my-1 cursor-pointer px-2 py-4"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>
            {showItems ? (
              <FontAwesomeIcon icon={faSortUp} />
            ) : (
              <FontAwesomeIcon icon={faSortDown} />
            )}
          </span>
        </div>
        {/* accordian body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
