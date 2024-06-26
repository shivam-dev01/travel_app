import React from "react";
import { useNavigate } from "react-router-dom";

export default function CustomPackage({ header, title, btnText, onClick }) {
  return (
    <div className="flex flex-col p-[14px] lg:p-12 lg:flex-row items-start lg:items-center justify-between gap-1 lg:gap-4 rounded-xl lg:rounded-[28px] bg-pinkCustom">
      <div>
        <h1 className="extraBoldFontFamily text-black text-2xl xl:text-5xl">
          {header}
        </h1>
        <p className="meduimFontFamily text-xs lg:text-base text-gray500 mt-4 max-w-[778px]">
          {title}
        </p>
      </div>
      <button
        className="regularFontFamily mt-2 lg:mt-0 h-[39.14px] lg:h-[48px] w-[152px] text-[15.94px] lg:text-[22.4px] rounded-full bg-skyBule text-white flex justify-center items-center"
        onClick={onClick}
      >
        {btnText}
      </button>
    </div>
  );
}
