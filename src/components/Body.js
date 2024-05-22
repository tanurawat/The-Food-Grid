import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  //Local State Variable using react hooks
  //Initially this list of restaurants should be empty

  const [searchText, setSearchText] = useState("");
  const Restaurants = useRestaurantList();
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    setFilteredRestaurant(Restaurants);
    setListOfRestaurants(Restaurants);
  });

  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false) {
    return (
      <h1>Looks like you are offline. Please check your internet connection</h1>
    );
  }
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex justify-center">
        <div className="search">
          <input
            type="text"
            className="search-box border border-solid border-black rounded-sm px-4 py-1 m-2"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 rounded-sm bg-green-400 border border-solid border-green-500 m-2"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="filter-btn px-4 py-1 rounded-sm bg-gray-200 border border-solid border-gray-300 m-2"
            onClick={() => {
              const filteredRes = listOfRestaurants.filter((restaurant) => {
                return restaurant.info.avgRating > 4;
              });
              setListOfRestaurants(filteredRes);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap justify-center">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
