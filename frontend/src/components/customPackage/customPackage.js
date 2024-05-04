import React from "react";
import { useNavigate } from "react-router-dom";

export default function CustomPackage({ header, title, btnText, onClick }) {
  return (
    <div className="flex flex-col  px-12 py-14 lg:flex-row items-center justify-between gap-4 rounded-[28px] bg-pinkCustom">
      <div>
        <h1 className="extraBoldFontFamily text-black text-2xl xl:text-5xl">{header}</h1>
        <p className="meduimFontFamily text-lg xl:text-base text-gray500 mt-4 max-w-[778px]">
          {title}
        </p>
      </div>
      <button
        className="regularFontFamily mt-12 lg:mt-0 h-[48px] w-[152px] rounded-full bg-skyBule text-white flex justify-center items-center"
        onClick={onClick}
      >
        {btnText}
      </button>
    </div>
  );
}
