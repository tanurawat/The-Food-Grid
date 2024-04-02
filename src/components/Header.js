import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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
