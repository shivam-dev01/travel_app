import React from "react";
import { ReactComponent as FacebookIcon } from "../../assets/svg/Facebook.svg";
import { ReactComponent as InstagramIcon } from "../../assets/svg/Instagram.svg";
import { ReactComponent as XIcon } from "../../assets/svg/X.svg";
import { ReactComponent as YouTubeIcon } from "../../assets/svg/Youtube.svg";

export default function TopHeader() {
  return (
    <div className="flex fixed top-0 w-full bg-black items-center justify-between px-[33px] py-[10px] transitionClass">
      <div className="flex justify-between md:justify-none w-full">
        <div className="text-[12px]  md:text-[17px] semiBoldFontFamily text-white">
          Call us @:{" "}
          <span className="text-[#3B9AA4] text-nowrap font-semibold">
            +91 8506 086 055{" "}
          </span>
        </div>
        <div className="semiBoldFontFamily text-[12px]  md:text-[17px] text-white ml-6 md:mr-8">
          Email Us @:{" "}
          <span className="text-[#3B9AA4] font-semibold">
            <a
              href="mailto:operations@trippkaro.com"
              className="underline"
              target="_blank"
            >
              operations@trippkaro.com
            </a>
          </span>
        </div>
      </div>
      <div className="hidden md:flex">
        <div className="flex cursor-pointer">
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
  );
}
