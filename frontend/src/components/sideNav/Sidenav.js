import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useTrippStore from "../../zustand/trippStore";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
// import { TiArrowSortedUp } from "react-icons/ti";
const Sidenav = ({ setToggleSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { destination, getBannerData } = useTrippStore((state) => state);

  const [routes, setRoutes] = useState([
    { name: "Home", slug: "/", type: "text" },
    { name: "About Us", slug: "/about-us", type: "text" },
    { name: "Destinations", slug: "/destinations", type: "text", subMenu: [] },
    { name: "E-Brochure", slug: "/e-brochure", type: "text" },
    { name: "Contact Us", slug: "/contact-us", type: "text" },
  ]);

  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (destination.length) {
      updateDestination();
    } else {
      getBannerData().then(() => {});
    }
  }, [destination]);

  const updateDestination = async () => {
    try {
      const temp = [...routes];
      temp[2].subMenu = destination; // Update the subMenu for "Destinations"
      setRoutes(temp);
    } catch (error) {
      console.log("--errorUpdateDestination--", error);
    }
  };

  const handleNavigation = (slug) => {
    navigate(slug);
    setToggleSidebar(false);
  };

  const toggleSubMenu = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  console.log(location.pathname);
  return (
    <div className="w-full h-screen bg-gray-100 absolute top-0 z-10 flex justify-end">
      <div className="w-[273px] h-full bg-white px-4 py-4 pl-6">
        <div
          className="w-full text-right cursor-pointer flex justify-end"
          onClick={() => setToggleSidebar(false)}
        >
          <IoCloseSharp size={20} />
        </div>
        <div className="flex flex-col gap-6">
          {routes.map((route, index) => (
            <div key={route.slug}>
              <div
                className="flex justify-between items-center"
                onClick={() =>
                  route.name === "Destinations"
                    ? toggleSubMenu(index)
                    : handleNavigation(route.slug)
                }
              >
                <div
                  className={`cursor-pointer ${
                    route.slug === location.pathname ? "font-bold" : ""
                  }`}
                >
                  {route.name}
                </div>
                {route.name === "Destinations" && (
                  <div>
                    {activeIndex === index ? (
                      <TiArrowSortedUp />
                    ) : (
                      <TiArrowSortedDown />
                    )}
                  </div>
                )}
              </div>
              {route.name === "Destinations" && activeIndex === index && (
                <div className="text-[13px] leading-[21px]">
                  {route.subMenu.map((subItem) => (
                    <div
                      key={subItem._id}
                      className={`cursor-pointer ${
                        `/destination/${subItem._id}` === location.pathname
                          ? "font-bold"
                          : ""
                      }`}
                      onClick={() =>
                        handleNavigation(`/destination/${subItem._id}`)
                      }
                    >
                      {subItem.header}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
