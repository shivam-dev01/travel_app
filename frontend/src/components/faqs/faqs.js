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
    <div className="mt-14 bg-[#ECF5F6] py-[54px] px-[33px]">
      <div className=" extraBoldFontFamily text-heading text-[45px] leading-[55px] font-semibold">
        FAQ’s
      </div>
      <div className="faq-question h-fit w-full mt-4 bg-[#fff]">
        {faqsData.map((item, index) => (
          <div
            key={index}
            className="question py-5 px-10 border-b-[1.8px] border-gray100 flex flex-row  gap-4 cursor-pointer"
            onClick={() => toggleAnswer(index)}
          >
            <div className="text-3xl font-bold text-[#acacac]">{`0${item.number}`}</div>
            <div className="w-[1400px]">
              <h2 className="text-2xl font-bold">{item.question}</h2>

              <div
                className={`answerAnimation ${
                  openIndex === index ? "open" : ""
                }`}
              >
                <p className="text-sm mt-4">{item.answer}</p>
              </div>
            </div>
            <div
              className="pt-4 cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <img
                src={openIndex === index ? cross : plus}
                alt={openIndex === index ? "Collapse" : "Expand"}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
