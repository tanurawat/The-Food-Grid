import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // let btnName = "Login";
  const [btnReact, setBtnReact] = useState("Login");
  console.log("Header rendered");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>Cart</li>
          <li>
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
