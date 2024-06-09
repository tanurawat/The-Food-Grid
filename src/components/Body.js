import { useContext, useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import UserContext from "../utils/UserContext";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //Local State Variable using react hooks
  //Initially this list of restaurants should be empty

  const { loggedInUser, setUserName } = useContext(UserContext);
  const [searchText, setSearchText] = useState("");

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false) {
    return (
      <h1>Looks like you are offline. Please check your internet connection</h1>
    );
  }

  //Use this if you want the restaurant card with promoted label
  // const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7039849&lng=76.9009191&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex justify-center px-2 py-4 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.15)] my-2">
        <div className="search">
          <input
            type="text"
            className="search-box border border-solid border-black rounded-sm px-2 py-1 m-2"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 rounded-sm bg-[#279C82] text-white border-2 border-[#279C82] font-xl m-2"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="filter-btn px-4 py-1 rounded-sm text-[#279C82] font-semibold border border-solid border-[#279C82] m-2"
            onClick={() => {
              const filteredRes = listOfRestaurants.filter((restaurant) => {
                return restaurant.info.avgRating > 4.4;
              });
              setFilteredRestaurants(filteredRes);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div>
          <label htmlFor="user-name">Username</label>
          <input
            id="user-name"
            className="filter-btn px-4 py-1 rounded-sm bg-gray-50 border border-solid border-gray-300 m-2"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="pl-36 p-2 m-2">
        <h1 className="font-bold text-2xl ">
          Restaurants offering online food delivery services
        </h1>
      </div>
      <div className="res-container flex flex-wrap justify-center">
        {filteredRestaurants.map((restaurant) => (
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
