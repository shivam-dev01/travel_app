import React, { useState } from "react";
import { faqsData } from "../../constants/staticData";
import plus from "../../assets/svg/plus.svg";
import cross from "../../assets/svg/cross.svg";

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="mt-14 bg-[#ECF5F6] py-5 lg:py-[54px] px-4 lg:px-[33px]">
      <div className=" extraBoldFontFamily text-heading text-[25px] md:text-[45px] leading-[55px] font-semibold">
        FAQ’s
      </div>
      <div className="faq-question h-fit w-full mt-4 bg-[#fff]">
        {faqsData.map((item, index) => (
          <div
            key={index}
            className="py-5 px-10 border-b-[1.8px] border-gray100 flex gap-4 cursor-pointer items-center justify-between"
            onClick={() => toggleAnswer(index)}
          >
            <div className="m-0 p-0 max-w-[1200px]">
              <div className="flex items-baseline gap-2">
                <div className="text-md md:text-3xl font-bold text-[#acacac]">{`0${item.number}`}</div>
                <h2 className="text-md md:text-2xl font-bold ml-2 ">
                  {item.question}
                </h2>
              </div>
              <div
                className={`answerAnimation ${
                  openIndex === index ? "open" : ""
                } ml-11`}
              >
                <p className="text-sm mt-4">{item.answer}</p>
              </div>
            </div>

            {/* <div className="cursor-pointer" onClick={() => toggleAnswer(index)}>
              <img
                src={openIndex === index ? cross : plus}
                alt={openIndex === index ? "Collapse" : "Expand"}
              />
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
