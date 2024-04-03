import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { routes } from "../constants/routes";
import logoImage from "../assets/image/tippKaroLogo.png";
import FillButton from "../components/buttons/fillButton";

export default function Header() {
  const [menu, setMenu] = useState(routes);

  const onToggleMenu = (index) => {
    setMenu((prevMenu) =>
      prevMenu.map((item, i) => ({
        ...item,
        isActive: i === index && true,
      }))
    );
  };

  return (
    <header className="top-header">
      <Link to={"/"} onClick={() => onToggleMenu(0)}>
        <img src={logoImage} alt="Logo" className="logoImage" />
      </Link>

      <div>
        {menu.map((item, index) => {
          return (
            <Link
              key={index}
              to={item.slug}
              className={item.isActive ? "activeRouteLink" : "routeLinks"}
              onClick={() => onToggleMenu(index)}
            >
              {item.name}
            </Link>
          );
        })}
      </div>

      <Link
        to={"/book-now"}
        className="bookNowButton"
        onClick={() => onToggleMenu(5)}
      >
        Book Now
      </Link>
    </header>
  );
}
