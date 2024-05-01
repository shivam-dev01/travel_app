import React, { useEffect, useState } from "react";
import { ReactComponent as StarIcon } from "../../assets/svg/star.svg";
import { axiosInstance } from "../../api/axiosIntance";
import { apiEndPoints } from "../../constants/apiEndPoints";

export default function Testimonials() {
  const [testimonialData, SetTestimonialData] = useState([]);

  useEffect(() => {
    getTestimonialData();
  }, []);

  async function getTestimonialData() {
    try {
      const result = await axiosInstance.get(apiEndPoints.getTestimonail);
      if (result.data && result.data?.result) {
        SetTestimonialData(result.data.result);
      }
    } catch (error) {
      console.log("---ErrorGetTestimonialData--", error?.message);
    }
  }

  return (
    <div className="mt-0 md:mt-[80px] pl-[33px] pr-[33px]">
      <h1 className="extraBoldFontFamily text-[45px] leading-[50px] text-black text-center">
        What People are Saying
      </h1>
      <p className="regularFontFamily text-base text-black text-center mt-3">
        Don’t take our word for it. Trust our customers
      </p>
      <div className="flex overflow-x-scroll -scroll-20  mt-10 py-[28px] hideScrollBar">
        {testimonialData?.map((item, index) => {
          return (
            <div
              key={index}
              className="h-[366px] w-[280px] md:h-[266px] md:w-[496px] flex-shrink-0 mr-4  bg-pinkCustom rounded-2xl pt-10 px-5 "
            >
              <div className="flex">
                {[...Array(item?.stars)].map((_, index) => {
                  return (
                    <div key={index} className="ml-2">
                      <StarIcon/>
                    </div>
                  );
                })}
              </div>

              <h3 className="boldFontFamily text-[14px] md:text-[24px] leading-[31px] text-black mt-4">
                {item?.name}
              </h3>
              <p className="meduimFontFamily text-base text-black text-[17px] leading-[31px] mt-4">
                {item?.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
