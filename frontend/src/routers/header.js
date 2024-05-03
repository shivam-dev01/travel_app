import React, { useRef, useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { routes } from "../constants/routes";
import logoImage from "../assets/image/tippKaroLogo.png";
import chevron from "../assets/svg/chevron.svg";
import useTrippStore from "../zustand/trippStore";
import upDown from "../assets/svg/upDown.svg";
import bars from "../assets/svg/bars.svg";

export default function Header() {
  const { destination, getBannerData } = useTrippStore((state) => state);
  const [menu, setMenu] = useState(routes);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const modalRef = useRef(null);

  useEffect(() => {
    if (destination.length) {
      updateDestination();
    } else {
      getBannerData().then(() => {});
    }
  }, [destination]);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (modalRef.current && !modalRef.current.contains(event.target)) {
  //       setActiveIndex(null);
  //     }
  //   };

  //   if (activeIndex !== null) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   } else {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [activeIndex]);

  const updateDestination = async () => {
    try {
      const temp = [...menu];

      temp[2].subMenu = destination;

      setMenu(temp);
    } catch (error) {
      console.log("--errorUpdateDestination--", error);
    }
  };

  const onToggleMenu = (index) => {
    setMenu((prevMenu) =>
      prevMenu.map((item, i) => ({
        ...item,
        isActive: i === index && true,
      }))
    );

    if (index === 2) return setActiveIndex(index);

    setActiveIndex(null);
  };

  function closeModal() {
    setActiveIndex(null);
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="top-header">
      <div className="container mx-auto  flex justify-between items-center pt-[60px] pb-[15px] md:pt-[80px] md:pb-[35px]">
        <Link to={"/"} onClick={() => onToggleMenu(0)}>
          <img
            src={logoImage}
            alt="Logo"
            className="logoImage object-contain"
          />
        </Link>

        <div className="hidden md:flex text-[12px]">
          {menu.map((item, index) => {
            return (
              <div key={index} className="relative">
                <Link
                  to={item.name !== "Destinations" ? item.slug : null}
                  className={item.isActive ? "activeRouteLink" : "routeLinks"}
                  onClick={() => onToggleMenu(index)}
                >
                  {item.name}
                </Link>
                {item.name === "Destinations" && (
                  <img
                    src={upDown}
                    alt="oh yeah"
                    className={`absolute top-[11px] right-[18px] ${
                      activeIndex
                        ? `transform rotate-0`
                        : "transform rotate-180"
                    }`}
                  />
                )}
                {item.name === "Destinations" && index === activeIndex && (
                  <div
                    ref={modalRef}
                    className="absolute flex flex-col z-50 items-center left-0 w-[310px] bg-white rounded-xl py-5 shadow-lg top-8"
                  >
                    <h3 className="semiBoldFontFamily text-lg text-black align-middle mb-2">
                      Destination Packages
                    </h3>
                    <div className="px-6 w-[100%] border-t-[1.8px] border-y-grayCustom pb-5">
                      {item.subMenu?.map((subItem, subIndex) => (
                        <div
                          key={subIndex}
                          className="flex border-b-[1.8px] w-[100%] justify-between items-center border-y-grayCustom cursor-pointer"
                          onClick={closeModal}
                        >
                          <Link
                            to={`${item.slug}/${subItem?._id}`}
                            className="regularFontFamily text-lg py-3"
                          >
                            {subItem?.header}
                          </Link>
                          <img src={chevron} alt="chevron" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <Link
          to={"/contact-us#form"}
          className="bookNowButton hidden"
          onClick={() => onToggleMenu(5)}
        >
          Book Now
        </Link>
        {/* <div className="md:hidden">
          <img alt="menu" className="pr-8 cursor-pointer " src={bars} />
        </div> */}

        <div className="md:hidden">
          <img
            alt="menu"
            className="pr-8 cursor-pointer"
            src={bars}
            onClick={toggleMenu}
          />

          {isMenuOpen && (
            <div className="absolute top-0 right-0 bg-white w-64 p-4 shadow-lg flex flex-col">
              {menu.map((item, index) => (
                <Link
                  key={index}
                  to={item.name !== "Destinations" ? item.slug : null}
                  className={item.isActive ? "activeRouteLink" : "routeLinks"}
                  onClick={() => onToggleMenu(index)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
