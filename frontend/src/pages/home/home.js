import React, { useEffect, useState } from "react";
import "./home.css";
import { axiosInstance } from "../../api/axiosIntance";
import { apiEndPoints } from "../../constants/apiEndPoints";
import { replaceUrl } from "../../utils/replaceUrl";

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

  console.log("-------welcomeBanner-----", welcomeBanner.length);

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
    </div>
  );
}
