import React, { useEffect, useState } from "react";
import "./home.css";
import { axiosInstance } from "../../api/axiosIntance";
import { apiEndPoints } from "../../constants/apiEndPoints";
import { replaceUrl } from "../../utils/replaceUrl";
import { howWeWork, testimonialnData } from "../../constants/staticData";
import { Link } from "react-router-dom";
import Inspiration from "../../components/inspiration/inspiration";
import Testimonials from "../../components/testimonial/testimonial";
import footerImage from "../../assets/image/footerImage.png";
import skyCircle from "../../assets/image/skyCircle.png";
import whiteCircle from "../../assets/image/whiteCircle.png";

export default function Home() {
  const [bannerData, setBannerData] = useState([]);
  const [homeBanner, setHomeBanner] = useState([]);
  const [welcomeBanner, setWelcomeBanner] = useState([]);
  const [destinationBanner, setDestinationBanner] = useState([]);
  const [chooseBanner, setChooseBanner] = useState([]);

  useEffect(() => {
    getBannerData();
  }, []);

  const getBannerData = async () => {
    try {
      const bannerResult = await axiosInstance.get(apiEndPoints.getBanner);

      if (bannerResult?.data && bannerResult.data?.result?.length) {
        console.log("----length-----");
        setHomeBanner(
          bannerResult.data.result.filter((item) =>
            item.bannerType.includes("HOME")
          )
        );

        setWelcomeBanner(
          bannerResult.data.result.filter((item) =>
            item.bannerType.includes("WELCOME")
          )
        );

        setDestinationBanner(
          bannerResult.data.result.filter((item) =>
            item.bannerType.includes("DESTINATION")
          )
        );

        setChooseBanner(
          bannerResult.data.result.filter((item) =>
            item.bannerType.includes("CHOOSE")
          )
        );
      }

      // console.log("----bannerResult-----", bannerResult);
    } catch (error) {
      console.log("-----error----", error);
    }
  };

  // console.log("-------HOMEbANNER-----", homeBanner);

  console.log("-------chooseBanner-----", chooseBanner);

  // console.log("-------destinationBanner-----", destinationBanner);

  // console.log("-------chooseBanner-----", chooseBanner);

  return (
    <div className="homeBody">
      <div className="homeBannerBody">
        {homeBanner.map((item, index) => {
          return (
            <div key={index} className="homeBanner">
              <img
                src={replaceUrl(item.file)}
                alt="Home"
                className="homeImageBanner"
              />
              <div className="homeContent">
                <h1 className="headerText">{item.header}</h1>
                <p className="subHeaderText">{item.subHeader}</p>
                <button className="bookNowBtn bg-white outline-none border-none">
                  {item.ctaPrimary}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="middleContentBody">
        <h1 className="extraBoldFontFamily text-5xl mt-16 leading-none">
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

      <div className="w-full flex mt-20 gap-5">
        {welcomeBanner.map((item, index) => {
          return (
            <div
              key={index}
              className="flex-1 h-[325px] m-0 p-0 rounded-3xl overflow-hidden relative lg:h-[650px]"
            >
              <img src={replaceUrl(item.file)} className="w-full h-full" />

              <div className="absolute top-14 left-11 w-[490px]">
                <h2 className="extraBoldFontFamily text-4xl text-white">
                  {item.header}
                </h2>
                <div className="meduimFontFamily text-sm text-white mt-2">
                  {item.subHeader}
                </div>
              </div>
              <button className="absolute bottom-14 left-11 meduimFontFamily bg-white text-black px-9 py-4 rounded-full">
                {item.ctaPrimary}
              </button>
            </div>
          );
        })}
      </div>

      <div className="mt-16">
        <h1 className="extraBoldFontFamily text-center text-3xl mb-7">
          How we work
        </h1>
        <div className="flex justify-between">
          {howWeWork.map((item) => {
            return (
              <div className="pl-5 pb-5 w-[325px] h-[185px] flex flex-col justify-end rounded-xl bg-grayCustom">
                <img src={item.icon} className="w-5 h-5 mb-[14px]" />
                <div className="boldFontFamily text-sm text-black  mb-4">
                  {item.header}
                </div>
                <Link className="boldFontFamily text-xs text-black cursor-pointer">
                  {item.subHeader}
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-20 mb-11">
        <h1 className="extraBoldFontFamily text-center text-3xl mb-5">
          Why Choose us?
        </h1>
        <p className="regularFontFamily text-base text-black max-w-[868px]">
          Planning a trip can be overwhelming, but with trippkaro.com, you can
          relax and enjoy the process. Here are a few reasons why you should
          choose us for all your travel needs
        </p>
      </div>

      <div className="bg-skyBlue100 rounded-lg">
        {chooseBanner.map((item, index) => {
          return (
            <div className="flex justify-between p-8">
              <div className="w-[50%] pl-16 pr-16 flex flex-col justify-center">
                <p className="meduimFontFamily text-xs text-black">
                  {item.topHeader}
                </p>
                <h1 className="extraBoldFontFamily text-3xl text-black mt-5">
                  {item.header}
                </h1>
                <p className="regularFontFamily text-sm text-black mt-5">
                  {item.subHeader}
                </p>

                <div className="mt-5">
                  <button className="meduimFontFamily  bg-skyBule text-white rounded-full w-[111px] h-[38px]">
                    {item.ctaPrimary}
                  </button>

                  <button className="meduimFontFamily text-black rounded-full w-[111px] h-[38px] ml-5 border">
                    {item.ctaSecondary}
                  </button>
                </div>
              </div>
              <div className="w-[50%] p-33 h-[551px] rounded-3xl">
                <img
                  src={item.file}
                  className="w-[100%] h-[100%] rounded-3xl"
                />
              </div>
            </div>
          );
        })}
      </div>

      <Inspiration />

      <Testimonials data={testimonialnData} />

      <div className="w-[100%] h-[745] mt-20 rounded-3xl overflow-hidden relative flex justify-center">
        <img src={footerImage} alt="Loading..." />
        <button className="absolute bottom-40 meduimFontFamily bg-white text-black px-9 py-4 rounded-full">
          Book Now
        </button>
        <div className="flex absolute bottom-10">
          <img src={whiteCircle} className="w-14 h-14 mr-7 cursor-pointer" />
          <img src={skyCircle} className="w-14 h-14 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
