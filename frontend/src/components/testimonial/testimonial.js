import React from "react";
import stars from "../../assets/image/stars.png";
import { ReactComponent as StarIcon } from "../../assets/svg/star.svg";

export default function Testimonials({ data = [] }) {
  return (
    <div className="mt-[80px] pl-[33px] pr-[33px]">
      <h1 className="extraBoldFontFamily text-[45px] leading-[50px] text-black text-center">
        What People are Saying
      </h1>
      <p className="regularFontFamily text-base text-black text-center mt-3">
        Don’t take our word for it. Trust our customers
      </p>
      <div className="testi flex overflow-x-scroll -scroll-20  mt-10 py-[28px] hideScrollBar">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className=" h-[266px] w-[496px] flex-shrink-0 mr-4  bg-pinkCustom rounded-2xl pt-10 px-5 "
            >
              <div className="flex">
                {[...Array(item?.rating)].map((_, index) => {
                  return (
                    <div className="ml-2">
                      <StarIcon />
                    </div>
                  );
                })}
              </div>

              <h3 className="boldFontFamily text-[24px] leading-[31px] text-black mt-4">
                {item?.header}
              </h3>
              <p className="meduimFontFamily text-base text-black text-[17px] leading-[31px] mt-4">
                {item?.subHeader}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
