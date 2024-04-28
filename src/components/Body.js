import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  //Local State Variable using react hooks
  //Initially this list of restaurants should be empty
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log("Body rendered");
  //   let listOfRestaurants = [
  //     {
  //       info: {
  //         id: "163182",
  //         name: "Crazy Restaurant",
  //         cloudinaryImageId: "k7ymsiurdlyxdjsfjuly",
  //         costForTwo: "₹350 for two",
  //         cuisines: [
  //           "North Indian",
  //           "Chinese",
  //           "Thalis",
  //           "Beverages",
  //           "Desserts",
  //         ],
  //         avgRating: 3.7,
  //         sla: {
  //           deliveryTime: 18,
  //         },
  //       },
  //     },
  //     {
  //       info: {
  //         id: "231546",
  //         name: "Mani Ram Kachori Wale",
  //         cloudinaryImageId: "xbbewuvowzkdqco2ecx2",
  //         costForTwo: "₹120 for two",
  //         cuisines: ["North Indian", "Street Food", "Salads"],
  //         avgRating: 4.8,
  //         sla: {
  //           deliveryTime: 26,
  //         },
  //       },
  //     },
  //   ];

  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7039849&lng=76.9009191&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsondata = await data.json();

    setListOfRestaurants(
      jsondata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(
      jsondata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
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
        <button
          className="filter-btn"
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
      <div className="res-container">
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
