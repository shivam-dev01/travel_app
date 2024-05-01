import React, { useEffect, useRef } from "react";
import "./contact.css";
import banner from "../../assets/image/bannerContact.png";
import location from "../../assets/image/loc.png";
import phone from "../../assets/image/phn.png";
import message from "../../assets/image/msg.png";
import PrivacyPolicy from "../../components/privacyPolicy/privacyPolicy";
import InputForm from "../../components/form/form";
import Faqs from "../../components/faqs/faqs";

export default function ContactUs() {
  const formRef = useRef(null);
  useEffect(() => {
    if (window.location.hash === "#form") {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="contactBody">
      <div className="contactBannerBody">
        <div className="contactBanner">
          <img src={banner} alt="Home" className="contactImageBanner" />
          <div className="contactContent">
            <h1 className="headerText">Contact Us</h1>
            <p className="contactsubHeaderText ">
              Let’s plan the trip of your dreams
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-8 w-full mt-12 ">  
        <div className="flex flex-col w-full md:flex-row gap-8">
          <div className="heading   p-[40px]    border-2 border-[#3B9AA4] rounded-xl md:w-1/2">
            <h1 className="heading  extraBoldFontFamily text-[30px] md:text-[44px] text-[#1C1C1C] leading-[66px]">
              Reach Us
            </h1>
            <p className="text-hed regularFontFamily text-[14px] md:text-[16px] leading-[24px] text-[#666666] mt-5">
              We at Tripp Karo understand all of your tour and travelling needs
              and provide packages for different domestic and international
              destination to make your TOUR one of a kind experience of your
              life.
            </p>
            <div className="contactUs mt-5 flex justify-between">
              <ul className="w-full">
                <li className="list w-full flex items-center gap-4 h-[55px] ">
                  <img className="img h-[35px] w-[35px] lg:h-[54px] lg:w-[54px]" src={location}></img>
                  <h1 className="text-[#3B9AA4] text-nowrap text-[17px] lg:text-[23px] leading-[35px] semiBoldFontFamily ">
                    Sector 62, Noida
                  </h1>
                </li>
                <li className="list w-full flex h-[55px] items-center gap-4  mt-5">
                  <img className="img h-[35px] w-[35px] lg:h-[54px] lg:w-[54px]" src={phone}></img>
                  <h1 className="text-[#3B9AA4] text-nowrap text-[17px] lg:text-[23px] leading-[35px] semiBoldFontFamily">
                    +91 8506 086 055
                  </h1>
                </li>
                <li className="list w-full flex h-[55px] gap-4 items-center mt-5">
                  <img className="img h-[35px] w-[35px] lg:h-[54px] lg:w-[54px]" src={message}></img>
                  <h1 className="text-[#3B9AA4] text-nowrap text-[17px] lg:text-[23px] leading-[35px] semiBoldFontFamily">
                    <a
                      href="mailto:operations@trippkaro.com"
                      className="underline"
                      target="_blank"
                    >
                      operations@trippkaro.com
                    </a>
                  </h1>
                </li>
              </ul>
            </div>
          </div>

          <div
            ref={formRef}
            className="form md:w-1/2 flex justify-center px-4  py-6 md:px-8  border-2 border-[#3B9AA4] rounded-xl "
          >
            <InputForm />
          </div>
        </div>
      </div>

      <Faqs />

      <PrivacyPolicy />
    </div>
  );
}
