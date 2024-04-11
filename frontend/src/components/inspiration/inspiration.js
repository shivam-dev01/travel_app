import React from "react";
import { inspirationData } from "../../constants/staticData";

export default function Inspiration() {
  return (
    <div className="mt-20">
      <h1 className="extraBoldFontFamily text-4xl text-black text-center">
        Travel Inspiration
      </h1>
      <p className="regularFontFamily text-base text-black text-center mt-3">
        Feel free to let us know if you have any specific requirements or if
        there’s anything else I can assist you with!
      </p>

      <div className="flex flex-1 mt-9">
        {inspirationData.map((item, index) => {
          return (
            <div className="h-[320px] overflow-hidden relative rounded-2xl mx-5">
              <img src={item.image} />
              <p className="absolute bottom-4 left-4 text-white boldFontFamily">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
