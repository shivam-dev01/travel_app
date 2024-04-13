import React, { useEffect, useState } from "react";
import useTrippStore from "../../zustand/trippStore";
import { useLocation, useParams } from "react-router-dom";
import { replaceUrl } from "../../utils/replaceUrl";
import Testimonials from "../../components/testimonial/testimonial";
import { testimonialnData } from "../../constants/staticData";
import Faqs from "../../components/faqs/faqs";
import Footer from "../../footer/footer";
import CustomPackage from "../../components/customPackage/customPackage";
import nights from "../../assets/svg/nights.svg";
import beds from "../../assets/svg/beds.svg";
import sights from "../../assets/svg/sights.svg";
import breakFast from "../../assets/svg/breakFast.svg";
import transport from "../../assets/svg/transport.svg";
import days from "../../assets/svg/days.svg";
import { person } from "../../utils/personPrice";

export default function TrippDetails() {
  const { state } = useLocation();
  const { getTripDetailsById } = useTrippStore((state) => state);
  const [tripDetails, setTripDetails] = useState([]);

  useEffect(() => {
    if (state?.tripId) {
      getData();
    }
  }, [state]);

  const getData = async () => {
    try {
      let tripDetails = await getTripDetailsById(state?.tripId);
      setTripDetails(tripDetails);
    } catch (error) {
      console.log("--getDataError--", error?.message);
    }
  };

  //   console.log("---dest---", JSON.stringify(destDetails, null, 2));
  //   console.log("---tripDetails---", JSON.stringify(tripDetails, null, 2));

  return (
    <div className="homeBody">
      <div className="homeBannerBody">
        <div className="homeBanner">
          <img
            src={replaceUrl(tripDetails[0]?.bannerImage)}
            alt="Oh Yeah"
            className="homeImageBanner"
          />
          <div className="absolute flex flex-col top-[210px] justify-center items-center px-[158px]">
            <h1 className="againstRegularFontFamily text-white text-7xl mb-5">
              {tripDetails[0]?.header}
            </h1>
            <p className="subHeaderText">{tripDetails[0]?.subHeader}</p>
            <button className="bookNowBtn bg-white outline-none border-none">
              {tripDetails[0]?.ctaSecondary || "Get Quote"}
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-20 mx-[300px] text-center">
        <h1 className="extraBoldFontFamily text-5xl text-black">
          {tripDetails[0]?.title}
        </h1>
        <p className="regularFontFamily text-base text-black mt-4">
          {tripDetails[0]?.descprition}
        </p>
      </div>

      <div className="flex justify-center items-center mt-5">
        <div className="flex flex-col items-center px-12 py-7 rounded-2xl bg-pink200">
          <div className="flex mt-2">
            <div className="flex justify-center items-center">
              <img src={nights} alt="night" />
              <p className="meduimFontFamily text-black text-base ml-2">{`${tripDetails[0]?.nights} Nights`}</p>
            </div>

            <div className="flex justify-center items-center ml-5">
              <img src={days} alt="day" />
              <p className="meduimFontFamily text-black text-base ml-2">{`${tripDetails[0]?.days} Days`}</p>
            </div>
          </div>
          <h2 className="boldFontFamily text-[35px] text-black mt-5">
            ₹ {tripDetails[0]?.amount}{" "}
            <span className="regularFontFamily text-[30px] text-gray500">
              /{person(tripDetails[0]?.person)}
            </span>
          </h2>
        </div>
      </div>

      <div className="px-[33px] mt-8 flex flex-col">
        <div className="flex items-center flex-1 justify-center">
          <button className="py-[9px] px-[30px] bg-skyBule rounded-full text-white regularFontFamily text-sms align-middle">
            Book Now
          </button>
        </div>
        <div className="flex overflow-x-scroll -scroll-20 hideScrollBar gap-2 mt-16">
          {tripDetails[0]?.images?.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[334px] h-[334px] rounded-3xl overflow-hidden"
              >
                <img src={item} alt="banner" className="w-[100%] h-[100%]" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="px-[154px] mt-20">
        <CustomPackage
          header="Reservation"
          title={`Embark on a unique journey with our TOUR, a one-of-a-kind experience that will become a cherished memory in your life. We also offer the option to tailor the tour according to your preferences, making your adventure truly personalized and unforgettable.`}
          btnText="Download Pdf"
        />
      </div>

      <Testimonials data={testimonialnData} />

      <Faqs />

      <Footer />
    </div>
  );
}
