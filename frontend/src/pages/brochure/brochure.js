import React, { useEffect } from "react";
import Footer from "../../footer/footer";
import Faqs from "../../components/faqs/faqs";
import Testimonials from "../../components/testimonial/testimonial";
import Search from "../../components/search/search";
import useTrippStore from "../../zustand/trippStore";
import { onPdfClick } from "../../utils/clickFunctions";

export default function Brochure() {
  const { eBrochureTrip, getAllTripDetails } = useTrippStore();

  useEffect(() => {
    if (!eBrochureTrip.length) {
      getAllTripDetails();
    }
  }, []);

  console.log("--eBrochureTrip--", JSON.stringify(eBrochureTrip, null, 2));

  return (
    <div className="homeBody">
      <div className="px-2 md:px-[33px] mt-[10px]">
        <Search placeHolder={"Search Destination"} onChange={() => {}} />
      </div>

      <div className="px-4 xl:px-[282px] flex justify-center items-center flex-col mt-8">
        <h1 className="extraBoldFontFamily text-black text-xl md:text-5xl">
          Explore our E-Brochure
        </h1>
        <p className="regularFontFamily text-black text-sm lg:text-lg md:text-base text-center mt-3">
          At Tripp Karo, we assure you the finest travel experiences,
          meticulously tailored to your preferences. Our transparent policies
          underscore our commitment to customer satisfaction. Whether you’re a
          seasoned traveler or embarking on your first journey, we prioritize
          delivering exceptional service within a budget-friendly range. Your
          needs and requirements are our utmost priority.
        </p>
      </div>

      <div className="px-[33px] mt-10">
        {eBrochureTrip?.map((item, index) => {
          return (
            <div className="flex flex-col border-[1.5px] px-4 md:px-10 py-4 md:flex-row justify-between items-center rounded-2xl border-skyBule">
              <div className="max-w-[1000px]">
                <h1 className="extraBoldFontFamily text-black text-2xl">
                  {item?.title}
                </h1>
                <p className="regularFontFamily text-black pr-12 text-lg md:text-base mt-3">
                  {item?.descprition}
                </p>
              </div>
              <button
                className="regularFontFamily mt-8 lg:mt-0 h-[48px] w-[152px] text-nowrap px-2 rounded-full bg-skyBule text-white flex justify-center items-center"
                onClick={() => onPdfClick(item?.pdfFile)}
              >
                Download Pdf
              </button>
            </div>
          );
        })}
      </div>

      <Testimonials />
      <Faqs />
      <Footer />
    </div>
  );
}
