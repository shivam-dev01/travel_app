import React from "react";
import search from "../../assets/svg/search.svg";

export default function Search({ placeHolder, onChange }) {
  return (
    <div className="py-[42px] flex justify-center bg-pink200 rounded-3xl">
      <div className="w-[610px] h-[44px] border-[2px] rounded-xl border-grayCustom flex overflow-hidden bg-white items-center">
        <img className="w-[22px] h-[22px] ml-4" src={search} alt="search" />
        <input
          className="regularFontFamily w-[100%] bg-white ml-4 h-[100%] outline-none text-black placeholder-gray500"
          placeholder={placeHolder}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
