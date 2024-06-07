import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  // let btnName = "Login";
  const [btnReact, setBtnReact] = useState("Login");
  const data = useContext(UserContext);
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header flex justify-between bg-red-600">
      <div className="logo-container px-4">
        <img className="logo w-28" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex p-4 ">
          <li className="px-4">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
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
          <li className="px-4">Cart</li>
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
  );
};

export default Header;
