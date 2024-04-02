import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  //Local State Variable using react hooks
  //Initially this list of restaurants should be empty
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

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
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.80150&lng=76.40000&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsondata = await data.json();

    setListOfRestaurants(
      jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
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
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
