import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="sec-cont mt-5  py-5">
      <div className="copyright">
        <div className="flex flex-row text-[10px] md:text-sm justify-between">
          <div className="underline text-nowrap meduimFontFamily cursor-pointer">
            Privacy Policy
          </div>
          <div className="px-3">|</div>
          <div className="underline text-nowrap meduimFontFamily cursor-pointer">
            Terms & Conditions
          </div>
          <div className="px-3">|</div>
          <div className="underline  text-nowrap meduimFontFamily cursor-pointer">
            Manage Your Cookies
          </div>
        </div>

        <p className="text-[16px] text-center mb-12 mt-2 meduimFontFamily">
          Ⓒ trippkaro.com 2024
        </p>
      </div>
    </div>
  );
}
