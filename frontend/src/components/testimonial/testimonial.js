import React from "react";
import stars from "../../assets/image/stars.png"; // Import the image

export default function Testimonials({ data = [] }) {
  return (
    <div className="mt-20">
      <h1 className="extraBoldFontFamily text-4xl text-black text-center">
        What People are Saying
      </h1>
      <p className="regularFontFamily text-base text-black text-center mt-3">
        Don’t take our word for it. Trust our customers
      </p>
      <div className="testi flex overflow-x-scroll -scroll-20  mt-10 hideScrollBar">
        {data.map((item, index) => {
          return (
            <div className="w-[426px] h-[220px] flex-shrink-0 mr-4  bg-pinkCustom rounded-2xl pt-10 px-5 ">
              {[...Array(item?.rating)].map((_, index) => {
                <i key={index} className="fas fa-star"></i>;
              })}

              <img src={stars} />

              <h3 className="meduimFontFamily text-base text-black mt-3">
                {item?.header}
              </h3>
              <p className="meduimFontFamily text-base text-black mt-3">
                {item?.subHeader}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
