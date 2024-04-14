import React, { useEffect, useState } from "react";
import "./tripDetails.css";
import useTrippStore from "../../zustand/trippStore";
import { useLocation, useNavigate } from "react-router-dom";
import { replaceUrl } from "../../utils/replaceUrl";
import Testimonials from "../../components/testimonial/testimonial";
import { policyTabs, testimonialnData } from "../../constants/staticData";
import Faqs from "../../components/faqs/faqs";
import Footer from "../../footer/footer";
import CustomPackage from "../../components/customPackage/customPackage";
import nights from "../../assets/svg/nights.svg";
import upArrow from "../../assets/svg/upArrow.svg";
import days from "../../assets/svg/days.svg";
import { person } from "../../utils/personPrice";
import { onBookNow, onPdfClick } from "../../utils/clickFunctions";

export default function TrippDetails() {
  const navigation = useNavigate();
  const { state } = useLocation();
  const { getTripDetailsById } = useTrippStore((state) => state);
  const [tripDetails, setTripDetails] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const [policyTabDetails, setPolicyTabDetails] = useState([]);
  const [policyTabData, setPolicyTabData] = useState(policyTabs);

  const toggleAnswer = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    if (state?.tripId) {
      getData();
    }
  }, [state]);

  useEffect(() => {
    onPolicyTabToggle();
  }, [tripDetails]);

  const getData = async () => {
    try {
      let tripDetails = await getTripDetailsById(state?.tripId);
      setTripDetails(tripDetails);
    } catch (error) {
      console.log("--getDataError--", error?.message);
    }
  };

  const onPolicyTabToggle = async (slug = "inclusions", index = 0) => {
    try {
      if (tripDetails) {
        setPolicyTabData((prevData) =>
          prevData.map((item, i) => ({
            ...item,
            isActive: i === index && true,
          }))
        );
        const policyData = tripDetails[0]?.policyDetails?.[slug];
        setPolicyTabDetails(policyData);
      }
    } catch (error) {
      console.log("--errorPolicyTabToggle--", error?.message);
    }
  };

  return (
    <div className="homeBody">
      {/* Section 1*/}
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
            <button
              className="bookNowBtn bg-white outline-none border-none"
              onClick={() => onBookNow(navigation)}
            >
              {tripDetails[0]?.ctaSecondary || "Get Quote"}
            </button>
          </div>
        </div>
      </div>

      {/* Section 2*/}
      <div className="flex flex-col justify-center items-center mt-20 mx-[300px] text-center">
        <h1 className="extraBoldFontFamily text-5xl text-black">
          {tripDetails[0]?.title}
        </h1>
        <p className="regularFontFamily text-base text-black mt-4">
          {tripDetails[0]?.descprition}
        </p>
      </div>

      {/* Section 3*/}
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

      {/* Section 4*/}
      <div className="px-[33px] mt-8 flex flex-col">
        <div className="flex items-center flex-1 justify-center">
          <button
            className="py-[9px] px-[30px] bg-skyBule rounded-full text-white regularFontFamily text-sms align-middle"
            onClick={() => onBookNow(navigation)}
          >
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

      {/* Section 5*/}
      <div className="px-[33px] mt-20 flex flex-col items-center">
        <h1 className="semiBoldFontFamily text-4xl text-black mb-6">
          {tripDetails[0]?.itineraryDetails?.title}
        </h1>

        <div className="gap-3 flex flex-col">
          {tripDetails[0]?.itineraryDetails?.days?.map((item, index) => {
            return (
              <div
                key={index}
                className="px-[37px] relative bg-grayCustom rounded-xl py-3 cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <h4 className="semiBoldFontFamily text-lg text-black">{`Day-0${
                  index + 1
                } ${item?.title}`}</h4>
                <div
                  className={`animationItinerary ${
                    openIndex === index ? "itineryOpen" : ""
                  }`}
                >
                  <p className="meduimFontFamily text-base text-black">
                    {item?.details?.description}
                  </p>
                  <p className="regularFontFamily text-base text-black mt-2">
                    <span className="meduimFontFamily text-base text-black">
                      Hotspots:
                    </span>{" "}
                    {item?.details?.hotSpots}
                  </p>
                  <p className="regularFontFamily text-base text-black mt-2">
                    <span className="meduimFontFamily text-base text-black">
                      Themes:
                    </span>{" "}
                    {item?.details?.themes}
                  </p>
                  <p className="regularFontFamily text-base text-black mt-2">
                    <span className="meduimFontFamily text-base text-black">
                      Accommodation:
                    </span>{" "}
                    {item?.details?.accommodation}
                  </p>
                </div>
                <img
                  src={upArrow}
                  className={`absolute right-3 top-3 ${
                    openIndex === index
                      ? `transform rotate-0`
                      : "transform rotate-180"
                  }`}
                  alt="oh daddy"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Section 6*/}
      <div className="px-[33px] mt-20">
        <div className="border p-5 bg-gray200 border-grayCustom rounded-xl">
          <div className="flex justify-between">
            {policyTabData?.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`border-[1.8px] ${
                    item.isActive ? `border-green900` : "border-grayCustom"
                  } ${
                    item.isActive ? "bg-green200" : "bg-white"
                  } h-[65px] w-[206px] rounded-xl flex items-center justify-center text-center cursor-pointer`}
                  onClick={() => onPolicyTabToggle(item.slug, index)}
                >
                  <p
                    className={`meduimFontFamily ${
                      item.isActive ? `text-green900` : "text-gray600"
                    } text-base`}
                  >
                    {item.name}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="border-t-2 border-t-grayCustom mt-3 pt-6">
            {policyTabDetails?.map((item, index) => {
              return (
                <div className="flex my-2 items-center">
                  <div className="h-[6px] w-[6px] rounded-full bg-black" />
                  <p
                    key={index}
                    className="semiBoldFontFamily text-lg text-black ml-2"
                  >
                    {item}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Section 7*/}
      <div className="px-[154px] mt-20">
        <CustomPackage
          header="Start a Reservation"
          title={`Embark on a unique journey with Tripp karo, a one-of-a-kind experience that will become a cherished memory in your life. We also offer the option to tailor the tour according to your preferences, making your adventure truly personalized and unforgettable.`}
          btnText="Download Pdf"
          onClick={() =>
            tripDetails[0]?.pdfFile
              ? onPdfClick(tripDetails[0]?.pdfFile)
              : () => {}
          }
        />
      </div>

      {/* Section 8*/}
      <Testimonials data={testimonialnData} />

      {/* Section 9*/}
      <Faqs />

      {/* Section 10*/}
      <Footer />
    </div>
  );
}
