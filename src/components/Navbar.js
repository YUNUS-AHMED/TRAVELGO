import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

export default function Navbar() {
  const [iconstate, setIconstate] = useState(false);
  const toggleIconState = () => {
    setIconstate(!iconstate);
  };

  const navigate = useNavigate();

  const handleSignUpClick = () => {
    // Navigate to the sign-up page when the "Sign Up" button is clicked
    navigate("/signup");
  };
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">TravelGO</h1>

      <div className="menu-icons" onClick={toggleIconState}>
        <i className={iconstate ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={iconstate ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          );
        })}
        <button onClick={handleSignUpClick}>Sign Up</button>
      </ul>
    </nav>
  );
}
