import React, { useState } from "react";
import "./footer.css";
import tippKaroLogo from "../assets/image/tippKaroLogo.png"; // Import the image
import footerIcons from "../assets/image/footer-icon.png"; // Import the image

export default function Footer() {
  return (
    <div className="footerBody  ">
      <div className="first-cont flex flex-row justify-between ">
        <div className="heading  w-[600px]">
          <div className="heading-logo h-[70px] w-[200px]">
            <img src={tippKaroLogo}></img>
          </div>
          <h1 className="heading text-xl font-medium">Get in touch</h1>
          <p className="heading text-sm mt-5">
            We at trippkaro.com understand all of your tour and travelling needs
            and<br></br> provide packages for different domestic and
            international destination to <br></br>make your TOUR one of a kind
            experience of your life.
          </p>
          <div className="contactUs mt-5 flex justify-between">
            <div>
              Call us @:
              <span className="text-[#3B9AA4] font-semibold">
                +91 8506 086 055{" "}
              </span>
            </div>
            <div>
              Email Us @:
              <span className="text-[#3B9AA4] font-semibold">
                operations@trippkaro.com{" "}
              </span>
            </div>
          </div>
          <div className="folow-div mt-4">
            <h2>Follow Us On</h2>
            <img src={footerIcons} className="img-icon mt-2"></img>
          </div>
        </div>
        <div className="form  px-[75px] py-5 w-[600px] ">
          <div className="form-div  h-full ">
            <h2>Drop Us Your Basic Details We Will Connect You?</h2>
            <input
              className="bg-[#EFEFEF] p-2 w-full mt-5 rounded-2xl pl-7 h-[55px]"
              placeholder="Full Name"
            ></input>
            <input
              className="bg-[#EFEFEF] p-2 w-full mt-5 rounded-2xl pl-7 h-[55px]"
              placeholder="Email"
            ></input>
            <input
              className="bg-[#EFEFEF] p-2 w-full mt-5 rounded-2xl pl-7 h-[55px]"
              placeholder="Phone"
            ></input>

            <button className="bg-[#3B9AA4] w-full mt-5 rounded-full text-[#fff] h-[54px]">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="sec-cont mt-5 py-2 ">
        <div className="copyright  w-96 ">
          <div className="flex flex-row text-xs justify-between">
            <div>Privacy Policy</div>
            <div>Terms & Conditions</div>
            <div>Manage Your Cookies</div>
          </div>
          <p className="text-xs text-center mt-1">Ⓒ trippkaro.com 2024</p>
        </div>
      </div>
    </div>
  );
}
