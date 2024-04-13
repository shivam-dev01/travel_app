import React from "react";

export default function CustomPackage({ header, title, btnText }) {
  return (
    <div className="flex px-12 py-14 items-center justify-between rounded-[28px] bg-pinkCustom">
      <div>
        <h1 className="extraBoldFontFamily text-black text-5xl">{header}</h1>
        <p className="meduimFontFamily text-base text-gray500 mt-4 max-w-[778px]">
          {title}
        </p>
      </div>
      <button className="regularFontFamily h-[48px] w-[152px] rounded-full bg-skyBule text-white flex justify-center items-center">
        {btnText}
      </button>
    </div>
  );
}
