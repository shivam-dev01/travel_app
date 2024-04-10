import React, { useEffect, useState } from "react";
import "./contact.css";
import banner from "../../assets/image/bannerContact.png"; // Import the image
import location from "../../assets/image/loc.png"; // Import the image
import phone from "../../assets/image/phn.png"; // Import the image
import message from "../../assets/image/msg.png"; // Import the image
import plus from "../../assets/image/plus.png"; // Import the image

export default function ContactUs() {
  return (
    <div className="contactBody">
      <div className="contactBannerBody">
        <div className="contactBanner">
          <img src={banner} alt="Home" className="contactImageBanner" />
          <div className="contactContent">
            {/* <p className="contactsubHeaderText ">
              We understand that planning a trip can be overwhelming, which is
              why we’ve made it our mission tomake it easy and enjoyable for
              you. Our website trippkaro.com is packed with useful tips,
              recommendations, and insider information to help you get the most
              out of your travels.{" "}
            </p> */}
          </div>
        </div>
      </div>

      <div className="middleContactContentBody ">
        <div className="first-cont flex flex-row justify-between ">
          <div className="heading   p-[40px]  w-[44%]  border-2 border-[#3B9AA4] rounded-xl">
            <h1 className="heading  extraBoldFontFamily text-[44px] text-[#1C1C1C] leading-[66px]">Reach Us</h1>
            <p className="text-hed regularFontFamily text-[16px] leading-[24px] text-[#666666] mt-5">
              We at trippkaro.com understand all of your tour and travelling
              needs and provide packages for different domestic and
              international destination to make your TOUR one of a kind
              experience of your life.
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
                    Sector 62, Noida
                  </h1>
                </li>
                <li className="list w-full flex h-[55px] mt-5">
                  <img className="img h-[54px] w-[54px]" src={message}></img>
                  <h1 className="text-[#3B9AA4] text-[23px] leading-[35px] semiBoldFontFamily ml-10 mt-2 ">
                    operations@trippkaro.com
                  </h1>
                </li>
              </ul>
            </div>
          </div>
          <div className="form  flex justify-center pt-[75px] w-[54%]  border-2 border-[#3B9AA4] rounded-xl ">
            <div className="form-div h-[362px] ps-4 w-[479px]">
              <h2>Drop Us Your Basic Details We Will Connect You?</h2>
              <input
                className="bg-[#EFEFEF] p-3 w-[100%] mt-6 rounded-lg"
                placeholder="FullName"
              ></input>
              <input
                className="bg-[#EFEFEF] p-3 w-[100%] mt-6 rounded-lg"
                placeholder="Email"
              ></input>
              <input
                className="bg-[#EFEFEF] p-3 w-[100%] mt-6 rounded-lg"
                placeholder="Phone"
              ></input>

              <button className="bg-[#3B9AA4] p-2 w-[100%] mt-8 rounded-3xl text-[#fff]">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="faq-box h-[817px] overflow-hidden pb-10 bg-[#ECF5F6]  pt-5 px-5">
        <div className=" extraBoldFontFamily text-heading text-[45px] leading-[55px] font-semibold">FAQ’s</div>
        <div className="faq-question h-fit w-full mt-4 bg-[#fff]">

          <div className="question py-5 px-10 border-b-2 flex flex-row  gap-4">
            <div className="text-3xl font-bold text-[#acacac] ">01</div>
            <div className="w-[1400px]" >
              <h2 className="text-2xl font-bold">How do I book a tour?</h2>
              <p className="text-sm mt-4">
                You can book a tour by contacting a reputable tour operator or
                travel agency either through their website, over the phone, or
                in person. They will provide information on available tours,
                itineraries, pricing, and booking procedures.
              </p>
            </div>
            <div className="pt-4">
                <img src={plus}></img>
            </div>
          </div>
          <div className="question py-5 px-10 border-b-2 flex flex-row  gap-4">
            <div className="text-3xl font-bold text-[#acacac] ">02</div>
            <div className="w-[1400px]">
              <h2 className="text-2xl font-bold">What is included in a tour package?</h2>
            </div>
            <div className="pt-4">
                <img src={plus}></img>
            </div>
          </div>
          <div className="question py-5 px-10 border-b-2 flex flex-row  gap-4">
            <div className="text-3xl font-bold text-[#acacac] ">03</div>
            <div className="w-[1400px]">
              <h2 className="text-2xl font-bold">Can I customize a tour itinerary?</h2>
            </div>
            <div className="pt-4">
                <img src={plus}></img>
            </div>
          </div>
          <div className="question py-5 px-10 border-b-2 flex flex-row  gap-4">
            <div className="text-3xl font-bold text-[#acacac] ">04</div>
            <div className="w-[1400px]">
              <h2 className="text-2xl font-bold">What are the payment and cancellation policies for tours?</h2>
            </div>
            <div className="pt-4">
                <img src={plus}></img>
            </div>
          </div>
          <div className="question py-5 px-10 border-b-2 flex flex-row  gap-4">
            <div className="text-3xl font-bold text-[#acacac] ">05</div>
            <div className="w-[1400px]">
              <h2 className="text-2xl font-bold">Contact Us</h2>
            </div>
            <div className="pt-4">
                <img src={plus}></img>
            </div>
          </div>
        </div>
      </div>

      <div className="sec-cont  py-2 ">
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
