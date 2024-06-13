import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const [showMore, setShowMore] = useState(false);
  const handleClick = () => {
    setShowMore(!showMore);
  };
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className="px-2">
      {items.map((item) => {
        return (
          <div
            key={item?.card?.info?.id}
            className="border-b-[1px] py-8 border-gray-200 flex justify-between"
          >
            <div className="w-9/12">
              <div>
                {item?.card?.info?.isVeg ? (
                  <FontAwesomeIcon
                    className="text-green-700 text-xs"
                    icon={faCircle}
                  />
                ) : (
                  <FontAwesomeIcon
                    className="text-red-700 text-xs"
                    icon={faCircle}
                  />
                )}
              </div>
              <div className=" text-gray-700 font-medium">
                <span className="text-lg">{item?.card?.info?.name}</span>
                <p className="text-md">
                  <span>&#x20B9;</span>
                  {(item?.card?.info?.defaultPrice ||
                    item?.card?.info?.finalPrice ||
                    item?.card?.info?.price) / 100}
                </p>
              </div>
              <div className="text-gray-500 text-sm py-4">
                {item?.card?.info?.description}
              </div>
              {/* <div className="text-gray-500 text-sm py-4">
                {item?.card?.info?.description.length < 200 ? (
                  item?.card?.info?.description
                ) : showMore ? (
                  item?.card?.info?.description
                ) : (
                  <span>
                    {item?.card?.info?.description.substring(0, 200)}
                    <span className="font-bold" onClick={handleClick}>
                      {!showMore ? "...more" : "...less"}
                    </span>
                  </span>
                )}
              </div> */}
            </div>
            <div className="relative">
              <img
                className="w-28 h-28 bg-cover border-slate-200 border-[1px] rounded-md"
                src={CDN_URL + item?.card?.info?.imageId}
                alt=""
              />
              <button
                className="px-6 py-1 font-bold text-[#279C82] text-lg border-2 border-[#279C82] rounded-md shadow-sm absolute top-24 bg-white left-3"
                onClick={() => {
                  handleAddItem(item);
                }}
              >
                ADD
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
