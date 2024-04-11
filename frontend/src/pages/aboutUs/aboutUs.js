import React, { useEffect, useState } from "react";
import "./aboutUs.css";
import { axiosInstance } from "../../api/axiosIntance";
import { apiEndPoints } from "../../constants/apiEndPoints";
import { replaceUrl } from "../../utils/replaceUrl";
import { howWeWork, testimonialnData } from "../../constants/staticData";
import { Link } from "react-router-dom";
import Inspiration from "../../components/inspiration/inspiration";
import Testimonials from "../../components/testimonial/testimonial";
import banner from "../../assets/image/aboutUs/bannerAbout.png"; // Import the image
import destOne from "../../assets/image/aboutUs/image-destOne.png"; // Import the image
import destTwo from "../../assets/image/aboutUs/image-destTwo.png"; // Import the image
import ourTeam from "../../assets/image/aboutUs/ourTeam.png"; // Import the image
import Footer from "../../footer/footer";

export default function AboutUs() {
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
    <div className="aboutBody">
      <div className="aboutBannerBody">
        {homeBanner.map((item, index) => {
          return (
            <div key={index} className="aboutBanner">
              <img src={banner} alt="Home" className="aboutImageBanner" />
              <div className="aboutContent">
                <h1 className="headerText">About Us</h1>
                <p className="subHeaderText">
                  We understand that planning a trip can be overwhelming, which
                  is why we’ve made it our mission tomake it easy and enjoyable
                  for you. Our website trippkaro.com is packed with useful tips,
                  recommendations, and insider information to help you get the
                  most out of your travels.{" "}
                </p>
                {/* <button className="bookNowBtn bg-white outline-none border-none">
                  {item.ctaPrimary}
                </button> */}
              </div>
            </div>
          );
        })}
      </div>

      <div className="middleContentBody">
        <h1 className="extraBoldFontFamily text-5xl mt-16 leading-none">
          Our Mission
        </h1>
        <p className="regularFontFamily text-2xl mt-5 leading-none">
          We maximize your vacation experience the right way.{" "}
        </p>
        <p className="regularFontFamily text-[16px] mt-6 max-w-[1051px] text-center">
          We at trippkaro.com understand that planning a trip can be
          overwhelming, which is why we’ve made it our mission to make it easy
          <br></br>
          and enjoyable for you. Our website is packed with useful tips,
          recommendations, and insider information to help you get the most{" "}
          <br></br>out of your travels. Whether you’re looking to explore a new
          city, relax on a beach, or immerse yourself in a new culture, we’ve
          got<br></br> you covered.
        </p>
      </div>

      <div className="middleContentBody">
        <h1 className="extraBoldFontFamily text-5xl mt-16 leading-none">
          Our Vision{" "}
        </h1>
        <p className="regularFontFamily text-2xl mt-5 leading-none">
          We aim to inspire wanderlust and create memories that will last a
          lifetime.{" "}
        </p>
        <p className="regularFontFamily text-[16px] mt-6 max-w-[1051px] text-center">
          Our vision is to become the leading travel company, providing
          exceptional and customized travel experiences to our customers. We aim
          to inspire wanderlust and create memories that will last a lifetime.
          We strive to offer personalized travel solutions that exceed customer
          expectations, while maintaining the highest standards of quality,
          service, and sustainability. Our commitment to excellence and passion
          for travel drives us to continuously innovate and evolve, creating
          unforgettable experiences for our customers.
        </p>
      </div>

      <div className=" rounded-lg">
        {chooseBanner.map((item, index) => {
          return (
            <div className="flex justify-between p-8">
              <div className="w-[50%] pl-16 pr-16 flex flex-col justify-center">
                <h1 className="extraBoldFontFamily text-3xl text-black mt-5">
                  Let your adventures be our <br></br>dreams{" "}
                </h1>
                <p className="regularFontFamily text-xs text-black mt-5">
                  We invite you to contact us for a meeting or telephone
                  conversation, allowing us to understand and craft your travel
                  plans to meet your specific expectations and preferences.
                </p>

                <div className="mt-5">
                  <button className="meduimFontFamily  bg-skyBule text-white rounded-full w-[111px] h-[38px]">
                    Get In touch
                  </button>

                  {/* <button className="meduimFontFamily text-black rounded-full w-[111px] h-[38px] ml-5 border">
                    {item.ctaSecondary}
                  </button> */}
                </div>
              </div>
              <div className="w-[50%] p-33 h-[456px] rounded-3xl">
                <img src={destOne} className="w-[100%] h-[100%] rounded-3xl" />
              </div>
            </div>
          );
        })}
      </div>

      <div className=" rounded-lg">
        {chooseBanner.map((item, index) => {
          return (
            <div className="flex justify-between p-8">
              <div className="w-[50%] p-33 h-[456px] rounded-3xl">
                <img src={destTwo} className="w-[100%] h-[100%] rounded-3xl" />
              </div>
              <div className="w-[50%] pl-16 pr-16 flex flex-col justify-center">
                <h1 className="extraBoldFontFamily text-3xl text-black mt-5">
                  It’s time for a new adventure.
                </h1>
                <p className="regularFontFamily text-xs text-black mt-5">
                  Our team is made up of experienced travellers from all over
                  the world who bring a wealth of knowledge and expertise to the
                  table. We’ve been there, done that, and want to share our
                  experiences with you so that you can have the trip of a
                  lifetime.
                </p>

                <div className="mt-5">
                  <button className="meduimFontFamily  bg-skyBule text-white rounded-full w-[111px] h-[38px]">
                    Get In touch
                  </button>

                  {/* <button className="meduimFontFamily text-black rounded-full w-[111px] h-[38px] ml-5 border">
                    {item.ctaSecondary}
                  </button> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-skyBlue100 rounded-lg">
        {chooseBanner.map((item, index) => {
          return (
            <div className="flex justify-between p-8">
              <div className="w-[50%] pl-16 pr-16 flex flex-col justify-center">
                <p className="meduimFontFamily text-xs text-black">
                  The team that excels
                </p>
                <h1 className="extraBoldFontFamily text-3xl text-black mt-5">
                  We maximize your vacation<br></br> experience the right way.
                </h1>
                <p className="regularFontFamily text-sm text-black mt-5">
                  We at trippkaro.com understand that planning a trip can be
                  overwhelming, which is why we’ve made it our mission to make
                  it easy and enjoyable for you. Our website is packed with
                  useful tips, recommendations, and insider information to help
                  you get the most out of your travels. Whether you’re looking
                  to explore a new city, relax on a beach, or immerse yourself
                  in a new culture, we’ve got you covered.
                </p>

                <div className="mt-2">
                  <h1 className="extraBoldFontFamily text-xl text-black mt-2">
                  Curtsey: Trippkaro.com
                  </h1>
                </div>
              </div>
              <div className="w-[50%] p-33 h-[451px] rounded-3xl">
                <img src={ourTeam} className="w-[100%] h-[100%] rounded-3xl" />
              </div>
            </div>
          );
        })}
      </div>

      {/* <Inspiration /> */}

      <Testimonials data={testimonialnData} />

      <Footer />
    </div>
  );
}
