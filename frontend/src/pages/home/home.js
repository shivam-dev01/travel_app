import React, { useEffect, useRef, useState } from "react";
import "./home.css";
import { replaceUrl } from "../../utils/replaceUrl";
import { howWeWork } from "../../constants/staticData";
import { Link, useNavigate } from "react-router-dom";
import Inspiration from "../../components/inspiration/inspiration";
import Testimonials from "../../components/testimonial/testimonial";
import footerImage from "../../assets/image/footerImage.png";
import skyCircle from "../../assets/image/skyCircle.png";
import whiteCircle from "../../assets/image/whiteCircle.png";
import Footer from "../../footer/footer";
import useTrippStore from "../../zustand/trippStore";
import { onBookNow } from "../../utils/clickFunctions";

export default function Home() {
  const navigation = useNavigate();
  const { getBannerData, homeBanner, welcomeBanner, chooseBanner } =
    useTrippStore((state) => state);
  const sectionRefs = useRef([]);

  useEffect(() => {
    if (!homeBanner.length) {
      getBannerData()
        .then((res) => {
          console.log("--res--", res);
        })
        .catch((error) => {
          console.log("--error---");
        })
        .finally(() => {
          console.log("--finally");
        });
    }
  }, []);

  return (
    <div className="homeBody">
      <div
        id="section1"
        ref={sectionRefs.current[0]}
        className="homeBannerBody hidden md:flex sm:h-[200px]"
      >
        {homeBanner.map((item, index) => {
          return (
            <div key={index} className="homeBanner">
              <img
                src={replaceUrl(item.file)}
                alt="Home"
                className="homeImageBanner"
              />
              <div className="homeContent">
                <h1 className="headerText text-nowrap">{item.header}</h1>
                <p className="subHeaderText">{item.subHeader}</p>
                <button
                  className="bookNowBtn bg-white outline-none border-none"
                  onClick={() => onBookNow(navigation)}
                >
                  {item.ctaPrimary}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div
        id="section2"
        ref={sectionRefs.current[1]}
        className="middleContentBody"
      >
        <h1 className="extraBoldFontFamily text-5xl mt-56 md:mt-16 leading-none">
          Welcome To India
        </h1>
        <p className="regularFontFamily text-2xl mt-5 leading-none">
          Your ultimate destination for unforgettable travel experiences.
        </p>
        <p className="regularFontFamily text-[16px] mt-6 max-w-[1051px] text-center">
          Whether you’re a wanderlust-filled adventurer, a culture enthusiast,
          or a nature lover, we are here to cater to your every travel desire.
          With Touriist.in, embark on a journey of discovery as we curate
          exceptional tours and itineraries to the most captivating destinations
          around the globe. From breath-taking landscapes to rich historical
          sites and vibrant local cultures, our aim is to create immersive
          travel experiences that leave you spellbound. Trust Touriist.in to
          transform your travel dreams into remarkable memories that will last a
          lifetime. Let the exploration begin!
        </p>
      </div>

      <div
        id="section3"
        ref={sectionRefs.current[2]}
        className="w-full flex flex-col md:flex-row mt-[317px]  md:mt-20 gap-5 pl-0 pr-0 md:pl-[33px] md:pr-[33px]"
      >
        {welcomeBanner.map((item, index) => {
          return (
            <div
              key={index}
              className="flex-1  m-0 px-2 md:p-0  rounded-3xl overflow-hidden relative lg:h-[650px]"
            >
              <img src={replaceUrl(item.file)} className="w-full h-full" />

              <div className="absolute top-14 left-11 w-[320px] md:w-[490px]">
                <h2 className="extraBoldFontFamily text-xl md:text-2xl lg:text-4xl text-white">
                  {item.header}
                </h2>
                <div className="meduimFontFamily text-[12px]  text-left  text-white mt-2">
                  {item.subHeader}
                </div>
              </div>
              <button
                className="absolute bottom-14 left-11 meduimFontFamily bg-white text-black px-9 py-4 rounded-full"
                onClick={() => onBookNow(navigation)}
              >
                {item.ctaPrimary}
              </button>
            </div>
          );
        })}
      </div>

      <div
        id="section4"
        ref={sectionRefs.current[3]}
        className="mt-16 pl-[33px] pr-[33px]"
      >
        <h1 className="extraBoldFontFamily text-center text-3xl mb-7">
          How we work
        </h1>
        <div className="flex flex-col items-center gap-4 md:flex-row justify-between">
          {howWeWork.map((item, index) => {
            return (
              <div
                key={index}
                className="pl-5 pb-5 w-[325px] h-[185px] flex flex-col justify-end rounded-xl bg-grayCustom"
              >
                <img src={item.icon} className="w-5 h-5 mb-[14px]" />
                <div className="boldFontFamily text-sm text-black  mb-4">
                  {item.header}
                </div>
                <Link
                  to={"/policy"}
                  className="boldFontFamily text-xs text-black cursor-pointer"
                >
                  {item.subHeader}
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div
        id="section5"
        ref={sectionRefs.current[4]}
        className="flex flex-col justify-center items-center mt-20 mb-11 pl-[33px] pr-[33px]"
      >
        <h1 className="extraBoldFontFamily text-center text-3xl mb-5">
          Why Choose us?
        </h1>
        <p className="regularFontFamily text-base text-black max-w-[868px] text-center">
          Planning a trip can be overwhelming, but with trippkaro.com, you can
          relax and enjoy the process. Here are a few reasons why you should
          choose us for all your travel needs
        </p>
      </div>

      <div id="section6" ref={sectionRefs.current[5]} className="bg-skyBlue100">
        {chooseBanner.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-3 md:flex-row justify-between p-8"
            >
              <div className="px-4 md:px-16 flex flex-col justify-center">
                <p className="meduimFontFamily text-xs text-black">
                  {item.topHeader}
                </p>
                <h1 className="extraBoldFontFamily text-lg md:text-3xl text-black mt-5">
                  {item.header}
                </h1>
                <p className="regularFontFamily text-sm text-black mt-5">
                  {item.subHeader}
                </p>

                <div className="mt-5">
                  <button
                    className="meduimFontFamily  bg-skyBule text-white rounded-full pl-4 pr-4 pt-[10px] pb-[10px]"
                    onClick={() => onBookNow(navigation)}
                  >
                    {item.ctaPrimary}
                  </button>

                  <Link
                    to={`destination/${item?._id}`}
                    className="meduimFontFamily text-black rounded-full ml-5 border pl-4 pr-4 pt-[10px] pb-[10px]"
                  >
                    {item.ctaSecondary}
                  </Link>
                </div>
              </div>
              <div className="p-33 h-[551px] rounded-3xl">
                <img
                  src={item.file}
                  className="w-[100%] h-[100%] object-fit rounded-3xl"
                />
              </div>
            </div>
          );
        })}
      </div>

      <Inspiration />

      <Testimonials />

      <div className="w-[100%] h-[745] mt-20 overflow-hidden relative flex justify-center pl-[33px] pr-[33px]">
        <img
          src={footerImage}
          alt="Loading..."
          className="w-[100%] h-[100%] rounded-3xl"
        />
        <button
          className="absolute bottom-40 meduimFontFamily bg-white text-black px-9 py-4 rounded-full"
          onClick={() => onBookNow(navigation)}
        >
          Book Now
        </button>
        <div className="flex absolute bottom-10">
          <img src={whiteCircle} className="w-14 h-14 mr-7 cursor-pointer" />
          <img src={skyCircle} className="w-14 h-14 cursor-pointer" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
