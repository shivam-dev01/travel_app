import React from "react";

export default function InputForm() {
  return (
    <div className="form-div  h-full boldFontFamily">
      <h2>Drop Us Your Basic Details We Will Connect You?</h2>
      <input
        className="bg-[#EFEFEF] p-2 w-full h-[55px] mt-5 rounded-lg meduimFontFamily pl-5 text-black placeholder-black focus:outline-skyBule"
        placeholder="Full Name"
      ></input>

      <input
        className="bg-[#EFEFEF] p-2 w-full h-[55px] mt-5 rounded-lg meduimFontFamily pl-5 text-black placeholder-black focus:outline-skyBule"
        placeholder="Phone Number"
      ></input>

      <input
        className="bg-[#EFEFEF] p-2 w-full h-[55px] mt-5 rounded-lg meduimFontFamily pl-5 text-black placeholder-black focus:outline-skyBule"
        placeholder="Email Address"
      ></input>

      <button className="bg-[#3B9AA4] p-2 w-full mt-8 h-14 rounded-full text-[#fff]">
        Submit
      </button>
    </div>
  );
}
