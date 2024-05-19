import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const routes = [
  { name: "Home", slug: "/", type: "text" },
  { name: "About Us", slug: "/about-us", type: "text" },
  { name: "Destinations", slug: "/destinations", type: "text", subMenu: [] },
  { name: "E-Brochure", slug: "/e-brochure", type: "text" },
  { name: "Contact Us", slug: "/contact-us", type: "text" },
];

const Sidenav = ({ setToggleSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (slug) => {
    navigate(slug);
    setToggleSidebar(false);
  };

  return (
    <div className="w-full h-screen bg-gray-100 absolute top-0 z-10 flex justify-end">
      <div className="w-[273px] h-full bg-white px-4 py-4 pl-6">
        <div
          className="w-full text-right cursor-pointer"
          onClick={() => setToggleSidebar(false)}
        >
          X
        </div>
        <div className="flex flex-col gap-6">
          {routes.map((route) => (
            <div
              key={route.slug}
              className={`cursor-pointer ${
                route.slug === location.pathname ? "font-bold" : ""
              }`}
              onClick={() => handleNavigation(route.slug)}
            >
              {route.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
