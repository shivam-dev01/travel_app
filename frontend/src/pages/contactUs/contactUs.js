import React, { useEffect, useState } from "react";
import "./contact.css";
import banner from "../../assets/image/bannerContact.png";
import location from "../../assets/image/loc.png";
import phone from "../../assets/image/phn.png";
import message from "../../assets/image/msg.png";
import PrivacyPolicy from "../../components/privacyPolicy/privacyPolicy";
import InputForm from "../../components/form/form";
import Faqs from "../../components/faqs/faqs";

export default function ContactUs() {
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

      <div className="middleContactContentBody ">
        <div className="first-cont flex flex-row justify-between space-x-10">
          <div className="heading   p-[40px]  w-[50%]  border-2 border-[#3B9AA4] rounded-xl">
            <h1 className="heading  extraBoldFontFamily text-[44px] text-[#1C1C1C] leading-[66px]">
              Reach Us
            </h1>
            <p className="text-hed regularFontFamily text-[16px] leading-[24px] text-[#666666] mt-5">
              We at Tripp Karo understand all of your tour and travelling needs
              and provide packages for different domestic and international
              destination to make your TOUR one of a kind experience of your
              life.
            </p>
            <div className="contactUs mt-5 flex justify-between">
              <ul className="w-full">
                <li className="list w-full flex h-[55px] ">
                  <img className="img h-[54px] w-[54px]" src={location}></img>
                  <h1 className="text-[#3B9AA4] text-[23px] leading-[35px] semiBoldFontFamily ml-10 mt-2 ">
                    Sector 62, Noida
                  </h1>
                </li>
                <li className="list w-full flex h-[55px]  mt-5">
                  <img className="img h-[54px] w-[54px]" src={phone}></img>
                  <h1 className="text-[#3B9AA4] text-[23px] leading-[35px] semiBoldFontFamily ml-10 mt-2 ">
                    +91 8506 086 055
                  </h1>
                </li>
                <li className="list w-full flex h-[55px] mt-5">
                  <img className="img h-[54px] w-[54px]" src={message}></img>
                  <h1 className="text-[#3B9AA4] text-[23px] leading-[35px] semiBoldFontFamily ml-10 mt-2 ">
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

          <div className="form  flex justify-center pt-[65px] pl-[78px] pr-[78px] w-[50%]  border-2 border-[#3B9AA4] rounded-xl ">
            <InputForm />
          </div>
        </div>
      </div>

      <Faqs />

      <PrivacyPolicy />
    </div>
  );
}
