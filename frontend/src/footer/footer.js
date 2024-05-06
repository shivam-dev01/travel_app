import React from "react";
import "./footer.css";
import tippKaroLogo from "../assets/image/tippKaroLogo.png";
import { ReactComponent as FacebookIcon } from "../assets/svg/Facebook.svg";
import { ReactComponent as InstagramIcon } from "../assets/svg/Instagram.svg";
import { ReactComponent as XIcon } from "../assets/svg/X.svg";
import { ReactComponent as YouTubeIcon } from "../assets/svg/Youtube.svg";
import InputForm from "../components/form/form";
import PrivacyPolicy from "../components/privacyPolicy/privacyPolicy";

export default function Footer() {
  return (
    <div className="footerBody">
      <div className="flex justify-center items-center mb-6">
        <div className="border w-[93%] fle border-grayCustom2"></div>
      </div>
      <div className="first-cont flex flex-col  lg:flex-row justify-between px-10 pl-[33px] pr-[33px]">
        <div className="heading  ">
          <div className="">
            <img className="h-[31px] md:h-[86px] object-contain" src={tippKaroLogo}></img>
          </div>
          <div className="div-cont mt-[40px]">
            <h1 className="heading text-[19px] md:text-[24px] leading-[43px] boldFontFamily">
              Get in touch
            </h1>
            <p className="heading text-[17px] leading-[30px] regularFontFamily">
              We at Tripp Karo understand all of your tour and travelling needs
              and<br></br> provide packages for different domestic and
              international destination to <br></br>make your TOUR one of a kind
              experience of your life.
            </p>
            <div className="contactUs mt-5 flex flex-col md:flex-row gap-8  text-[17px] leading-[23px]">
              <div className="semiBoldFontFamily text-[17px]">
                Call us @:{" "}
                <span className="text-[#3B9AA4] text-[15px] md:text-[17px] font-semibold">
                  +91 8506 086 055{" "}
                </span>
              </div>
              <div className="semiBoldFontFamily text-[15px] md:text-[17px] text-nowrap">
                Email Us @:{" "}
                <span className="text-[#3B9AA4] font-semibold">
                  <a href="mailto:operations@trippkaro.com" className="underline" target="_blank">
                    operations@trippkaro.com
                  </a>
                </span>
              </div>
            </div>
            <div className="folow-div mt-5">
              <h2 className="semiBoldFontFamily text-[17px]">Follow Us On</h2>
              <div className="flex mt-4 cursor-pointer">
                <FacebookIcon />
                <div className="ml-4 cursor-pointer">
                  <InstagramIcon />
                </div>
                <div className="ml-4 cursor-pointer">
                  <XIcon />
                </div>
                <div className="ml-4 cursor-pointer">
                  <YouTubeIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form py-3 md:w-[581x] mt-4">
          <InputForm />
        </div>
      </div>

      <PrivacyPolicy />
    </div>
  );
}
