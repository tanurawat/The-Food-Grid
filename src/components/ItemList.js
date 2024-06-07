import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div className="px-2">
      {items.map((item) => {
        return (
          <div
            key={item?.card?.info?.id}
            className="border-b-[1px] py-4 border-gray-200 flex justify-between"
          >
            <div className="w-9/12">
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
            </div>
            <div className=" relative">
              <img
                className="w-28 h-28 bg-cover"
                src={CDN_URL + item?.card?.info?.imageId}
                alt=""
              />
              <button className="px-6 py-1 font-bold text-green-600 text-lg rounded-md border-gray-200 border-[1px] shadow-sm absolute bottom-0 bg-white left-3">
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
