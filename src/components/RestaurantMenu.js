import Shimmer from "./Shimmer";
import { useParams, useSearchParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  const {
    name,
    costForTwoMessage,
    avgRating,
    cuisines,
    sla,
    feeDetails,
    totalRatingsString,
  } = resInfo?.data.cards[2].card.card.info;
  // console.log(resInfo?.data.cards[2].card.card.info);
  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) => {
        return (
          category.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );
  // console.log(categories);

  return (
    <div className="w-7/12 flex justify-center flex-col mx-auto">
      <div>
        <h1 className="text-2xl font-bold my-4 p-2">{name}</h1>
        <div className="border-gray-200 border-[1px] rounded-lg shadow-md p-2">
          <p className="text-md font-bold p-2">
            {avgRating} stars({totalRatingsString}) {costForTwoMessage}
          </p>
          <p className="text-sm text-orange-500 font-bold p-2 pb-4 border-b-[1px] underline">
            {cuisines.join(",")}
          </p>
          <p className="text-sm text-gray-600 p-2">
            {sla.lastMileTravelString} | <span>&#x20B9;</span>
            {feeDetails?.fees[0]?.fee / 100} Delivery fee will apply
          </p>
        </div>
      </div>
      <div className="text-gray-500 border-gray-200 border-b-[1px] my-10 relative">
        <div className="text-gray-500 text-sm text-center absolute right-1/2 -top-5 bg-white p-2">
          MENU
        </div>
      </div>

      <div>
        {categories.map((category, index) => {
          return (
            <RestaurantCategory
              key={category?.card?.card?.title}
              data={category?.card?.card}
              showItems={index == showIndex ? true : false}
              setShowIndex={() => {
                setShowIndex(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
export default RestaurantMenu;
