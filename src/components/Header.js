import { LOGO_URL } from "../utils/constant";
import {Link} from "react-router"
import { useState } from "react";
const Header = () => {
  const [btnName, setLogin] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contactUs">Contact Us</Link></li>
          <li><Link to="/">Cart</Link></li>
          <button
            className="login"
            onClick={() => {
              setLogin(btnName === 'Login' ? 'Logout':'Login');
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
