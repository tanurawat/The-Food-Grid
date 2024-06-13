import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  // let btnName = "Login";
  const [btnReact, setBtnReact] = useState("Login");
  const data = useContext(UserContext);
  const onlineStatus = useOnlineStatus();

  //subscribing to the store
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="sticky top-0 z-40 mb-2 h-[90px]">
      <div className="header w-full flex justify-between bg-[#279C82] py-2 text-[#f0edd9] text-lg ">
        <div className="logo-container px-4 ">
          {/* <img className="logo w-28" src={LOGO_URL} alt="logo" /> */}
          <a href="https://imgbb.com/">
            <img
              className="w-32"
              src="https://i.ibb.co/PCfLssd/Untitled.png"
              alt="Untitled"
              border="0"
            />
          </a>
        </div>
        <div className="nav-items flex items-center">
          <ul className="flex p-4 ">
            <li className="px-4">
              Online Status : {onlineStatus ? "🟢" : "🔴"}
            </li>
            <li className="px-4">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="px-4">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="px-4">
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li className="px-4">
              <Link to={"/grocery"}>Grocery</Link>
            </li>
            <li className="px-4">
              <Link to={"/cart"}>Cart ({cartItems.length} items)</Link>
            </li>
            <li className="px-4">
              <button
                className="login"
                onClick={() => {
                  btnReact === "Login"
                    ? setBtnReact("Logout")
                    : setBtnReact("Login");
                }}
              >
                {btnReact}
              </button>
            </li>
            <li className="px-4">{data.loggedInUser}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
