import { CDN_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faPersonBiking } from "@fortawesome/free-solid-svg-icons/faPersonBiking";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData?.info;
  const arr = cuisines.join(", ");

  return (
    <div className="res-card transition hover:ease-in m-4 border-2 border-slate-100 hover:shadow-md  w-72 rounded-lg">
      <img
        className="res-logo rounded-t-lg h-44 w-full"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <div className="px-2 py-4 text-gray-700">
        <h3 className="font-bold text-lg text-black truncate">{name}</h3>
        <h4 className="truncate">{cuisines.join(", ")}</h4>

        <h4>
          <FontAwesomeIcon icon={faStar} className="text-[#279C82] pr-2" />
          {avgRating} |{" "}
          <FontAwesomeIcon icon={faPersonBiking} className="text-gray-700" />{" "}
          {sla.deliveryTime} minutes
        </h4>
      </div>
    </div>
  );
};
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-sm ">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
