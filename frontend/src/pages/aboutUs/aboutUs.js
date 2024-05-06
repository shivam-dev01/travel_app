import React from "react";
import "./aboutUs.css";
import Testimonials from "../../components/testimonial/testimonial";
import banner from "../../assets/image/aboutUs/bannerAbout.png";
import destOne from "../../assets/image/aboutUs/image-destOne.png";
import destTwo from "../../assets/image/aboutUs/image-destTwo.png";
import ourTeam from "../../assets/image/aboutUs/ourTeam.png";
import Footer from "../../footer/footer";
import { useNavigate } from "react-router-dom";
import { onBookNow } from "../../utils/clickFunctions";

export default function AboutUs() {
  const navigation = useNavigate();
  return (
    <div className="aboutBody">
      <div className="aboutBannerBody">
        <div className="aboutBanner">
          <img src={banner} alt="Home" className="aboutImageBanner" />
          <div className="aboutContent">
            <h1 className="AboutHeaderText regularFontFamily">About Us</h1>
            <p className="aboutSubHeaderText">
              We understand that planning a trip can be overwhelming, which is
              why we’ve made it our mission tomake it easy and enjoyable for
              you. Our website trippkaro.com is packed with useful tips,
              recommendations, and insider information to help you get the most
              out of your travels.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="middleContentBody container mx-auto ">
        <h1 className="extraBoldFontFamily leading-[62.4px] text-3xl md:text-5xl mt-16 ">
          Our Mission
        </h1>
        <p className="regularFontFamily leading-[18.2px] text-[14px] text-center md:text-[24px] mt-5 ">
          We maximize your vacation experience the right way.{" "}
        </p>
        <p className="regularFontFamily  text-[15px] md:text-[16px] leading-[24px] px-4 md:px-24 mt-6 text-center">
          We at trippkaro.com understand that planning a trip can be
          overwhelming, which is why we’ve made it our mission to make it easy
          and enjoyable for you. Our website is packed with useful tips,
          recommendations, and insider information to help you get the most out
          of your travels. Whether you’re looking to explore a new city, relax
          on a beach, or immerse yourself in a new culture, we’ve got you
          covered.
        </p>
      </div>

      <div className="container mx-auto px-3 md:px-0">
        <h1 className="extraBoldFontFamily leading-[62.4px] text-center mt-36 text-3xl md:text-5xl  ">
          Our Vision{" "}
        </h1>
        <p className="regularFontFamily leading-[18.2px] text-[18px] text-center md:text-[24px] mt-5 ">
          We aim to inspire wanderlust and create memories that will last a
          lifetime.{" "}
        </p>
    
        <p className="regularFontFamily text-[16px] leading-[24px] mt-6 text-center px-4 md:px-24 "> 
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

      <div className="rounded-lg h-fit  mt-[80px]">
        <div className="flex  flex-col md:flex-row justify-between gap-4 p-8">
          <div className=" flex flex-col md:w-[50%] md:pl-16 md:pr-16  justify-center">
            <h1 className="extraBoldFontFamily text-[20px] md:text-[44px] leading-[50.4px] text-black mt-5">
              Let your adventures be our dreams{" "}
            </h1>
            <p className="regularFontFamily text-[15px] leading-[23.81px] text-[#666666] mt-5">
              We invite you to contact us for a meeting or telephone
              conversation, allowing us to understand and craft your travel
              plans to meet your specific expectations and preferences.
            </p>

            <div className="mt-5">
              <button
                className="meduimFontFamily  bg-skyBule text-white rounded-full w-[181px] h-[56px]"
                onClick={() => onBookNow(navigation)}
              >
                Get In touch
              </button>

              {/* <button className="meduimFontFamily text-black rounded-full w-[111px] h-[38px] ml-5 border">
                    {item.ctaSecondary}
                  </button> */}
            </div>
          </div>
          <div className="md:w-[696px] md:p-33 md:h-[456px] rounded-3xl">
            <img src={destTwo} className="w-[100%] h-[100%] rounded-3xl" />
          </div>
        </div>
      </div>

      <div className="rounded-lg h-fit mt-[80px]">
      <div className="flex flex-col md:flex-row-reverse gap-4 justify-between p-8">
 
  <div className="flex md:w-[50%] md:pl-16 md:pr-16 flex-col justify-center">
    <h1 className="extraBoldFontFamily text-[44px] leading-[50.4px] text-black mt-5">
      It’s time for a new adventure.
    </h1>
    <p className="regularFontFamily text-[15px] leading-[23.81px] text-[#666666] mt-5">
      Our team is made up of experienced travellers from all over the world who bring a wealth of knowledge and expertise to the table. We’ve been there, done that, and want to share our experiences with you so that you can have the trip of a lifetime.
    </p>
    <div className="mt-5">
      <button className="meduimFontFamily  bg-skyBule text-white rounded-full w-[181px] h-[56px]" onClick={() => onBookNow(navigation)}>
        Get In touch
      </button>
      {/* <button className="meduimFontFamily text-black rounded-full w-[111px] h-[38px] ml-5 border">
            {item.ctaSecondary}
          </button> */}
    </div>
  </div>
  <div className="md:w-[696px] md:p-33 md:h-[456px] rounded-3xl ">
    <img src={destOne} className="w-[100%] h-[100%] rounded-3xl" />
  </div>
</div>

      </div>

      <div className="bg-skyBlue100 rounded-lg  mt-[80px]">
      <div className="flex flex-col lg:flex-row gap-4 justify-between p-8">
  <div className="w-full lg:w-1/2 lg:h-[463px] rounded-3xl">
    <img src={ourTeam} className="w-full h-full object-cover rounded-3xl" />
  </div>
  <div className="w-full lg:w-1/2 lg:pl-16 lg:pr-16 flex flex-col justify-center">
    <p className="meduimFontFamily text-center lg:text-left text-[20px] lg::text-[45px] leading-[50px] text-black">
      The team that excels
    </p>
    <h1 className="extraBoldFontFamily text-center lg:text-left  text-[26px] md:text-[28px] lg:text-[36px]  text-black mt-5">
      We maximize your vacation<br></br> experience the right way.
    </h1>
    <p className="regularFontFamily text-[12px] lg:text-[16px] md:leading-[32px] text-black mt-5">
      We at Tripp Karo understand that planning a trip can be
      overwhelming, which is why we’ve made it our mission to make it
      easy and enjoyable for you. Our website is packed with useful
      tips, recommendations, and insider information to help you get the
      most out of your travels. Whether you’re looking to explore a new
      city, relax on a beach, or immerse yourself in a new culture,
      we’ve got you covered.
    </p>
    <div className="mt-2">
      <h1 className="extraBoldFontFamily lg:text-left text-center text-[24px] leading-[50px] text-black mt-2">
        Curtsey: Tripp Karo
      </h1>
    </div>
  </div>
</div>

      </div>

      {/* <Inspiration /> */}

      <Testimonials />

      <Footer />
    </div>
  );
}
