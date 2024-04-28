import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const jsondata = await data.json();
    setResInfo(jsondata);
  };

  if (resInfo === null) return <Shimmer />;

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  const { name, costForTwoMessage, avgRating } =
    resInfo?.data.cards[2].card.card.info;

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {avgRating} stars - {costForTwoMessage}
      </p>
      <h4>menu</h4>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs. "}
            {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
