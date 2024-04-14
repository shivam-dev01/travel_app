import React from "react";
import Search from "../../components/search/search";
import Testimonials from "../../components/testimonial/testimonial";
import { testimonialnData } from "../../constants/staticData";
import Faqs from "../../components/faqs/faqs";
import Footer from "../../footer/footer";

export default function Policy() {
  return (
    <div className="homeBody">
      <div className="px-[33px] mt-[10px]">
        <Search placeHolder={"Search"} onChange={() => {}} />
      </div>

      <div className="px-[282px] flex justify-center items-center flex-col mt-8">
        <h1 className="extraBoldFontFamily text-black text-5xl">
          Discover Our Destinations
        </h1>
        <p className="regularFontFamily text-black text-base text-center mt-3">
          At Tripp Karo, we assure you the finest travel experiences,
          meticulously tailored to your preferences. Our transparent policies
          underscore our commitment to customer satisfaction. Whether you’re a
          seasoned traveler or embarking on your first journey, we prioritize
          delivering exceptional service within a budget-friendly range. Your
          needs and requirements are our utmost priority.
        </p>
      </div>

      <div className="px-[33px] relative rounded-xl py-3 cursor-pointer mt-12">
        <h4 className="extraBoldFontFamily text-5xl text-black">
          Curated Travel Packages
        </h4>
        <div className="pr-14">
          <p className="regularFontFamily text-base text-black mt-3">
            Explore a diverse array of destinations across the globe. From the
            snow-capped peaks of the Himalayas to the sun-kissed beaches of
            Bali, we’ve meticulously crafted travel packages that cater to every
            traveler’s dream. Dive into the details of each destination,
            including:
          </p>
          <p className="regularFontFamily text-base text-black mt-2">
            <span className="meduimFontFamily text-base text-black">
              Highlights:
            </span>{" "}
            Uncover the must-see attractions, hidden gems, and local
            experiences.
          </p>
          <p className="regularFontFamily text-base text-black mt-2">
            <span className="meduimFontFamily text-base text-black">
              Activities:
            </span>{" "}
            Whether you’re an adventure enthusiast, a culture buff, or a foodie,
            we’ve got activities to suit your interests.
          </p>
          <p className="regularFontFamily text-base text-black mt-2">
            <span className="meduimFontFamily text-base text-black">
              Accommodation:
            </span>{" "}
            Peek into our handpicked hotels, resorts, and boutique stays.
          </p>
        </div>
      </div>

      <div className="px-[33px] relative rounded-xl py-3 cursor-pointer mt-12">
        <h4 className="extraBoldFontFamily text-5xl text-black">
          Cancellation and Refund
        </h4>
        <div className="pr-14">
          <p className="regularFontFamily text-base text-black mt-3">
            Our cancellation policy ensures flexibility and transparency
          </p>
          <p className="regularFontFamily text-base text-black mt-2">
            <span className="meduimFontFamily text-base text-black">
              Cancellation Window:
            </span>{" "}
            Cancellation policies can vary between tour operators. It’s
            important to review the terms and conditions before booking.
            Typically, a deposit is required to secure the booking, and the
            remaining balance is due before the tour departure. Cancellation
            policies may involve fees based on the timing of the cancellation.
          </p>
          <p className="regularFontFamily text-base text-black mt-2">
            <span className="meduimFontFamily text-base text-black">
              Refund Process:
            </span>{" "}
            We Believe in transparencies with the payments after the discussion
            between the tour operators the payment may be refunded to you with
            immidiate effects. The payment may reflect in account in certain
            period of time according to your Bank Policies.
          </p>
          <p className="regularFontFamily text-base text-black mt-2">
            <span className="meduimFontFamily text-base text-black">
              Last-Minute Changes:
            </span>{" "}
            There is a window for payment returns as, after your booking is
            confirmed we book hotels and other animalities for your trip hence
            the payment refund can also differ.
          </p>
        </div>
      </div>

      <div className="px-[33px] relative rounded-xl py-3 cursor-pointer mt-12">
        <h4 className="extraBoldFontFamily text-5xl text-black">
          Customer Support
        </h4>
        <div className="pr-14">
          <p className="regularFontFamily text-base text-black mt-3">
            24/7 Assistance: Got questions? Need assistance during your trip?
            Our dedicated customer support team is just a call or message away.
            Discover how to reach us via:
          </p>
          <p className="regularFontFamily text-base text-black mt-2">
            <span className="meduimFontFamily text-base text-black">
              Call Us at:
            </span>{" "}
            +91 8506 086 055
          </p>
          <p className="regularFontFamily text-base text-black mt-2">
            <span className="meduimFontFamily text-base text-black">
              For Message or WhatsApp Support:
            </span>{" "}
            +91 8506 086 055
          </p>
          <p className="regularFontFamily text-base text-black mt-2">
            <span className="meduimFontFamily text-base text-black">
              Email Us at:
            </span>{" "}
            operations@trippkaro.com
          </p>
        </div>
      </div>

      <div className="px-[33px] relative rounded-xl py-3 cursor-pointer mt-12">
        <h4 className="extraBoldFontFamily text-5xl text-black">
          Transparent Pricing and Value
        </h4>
        <div className="pr-14">
          <p className="regularFontFamily text-base text-black mt-3">
            We understand the importance of budget-conscious travel. Our pricing
            policies are designed to offer value without compromising quality.
          </p>
          <p className="regularFontFamily text-base text-black mt-2">
            <span className="meduimFontFamily text-base text-black">
              No Hidden Costs:
            </span>{" "}
            What you see is what you pay. We provide transparent pricing, so you
            can make informed decisions.
          </p>
          <p className="regularFontFamily text-base text-black mt-2">
            <span className="meduimFontFamily text-base text-black">
              Affordability:
            </span>{" "}
            Tripp Karo strives to keep travel accessible. Our competitive rates
            ensure that you get the most out of your investment.
          </p>
        </div>
      </div>

      <div className="px-[33px] relative rounded-xl py-3 cursor-pointer mt-12">
        <h4 className="extraBoldFontFamily text-5xl text-black">
          Safety and Well-Being
        </h4>
        <div className="pr-14">
          <p className="regularFontFamily text-base text-black mt-3">
            Your safety is paramount. Our policies prioritize:
          </p>
          <p className="regularFontFamily text-base text-black mt-2">
            <span className="meduimFontFamily text-base text-black">
              Health and Hygiene:
            </span>{" "}
            We partner with reputable providers who adhere to strict health and
            safety protocols.
          </p>
          <p className="regularFontFamily text-base text-black mt-2">
            <span className="meduimFontFamily text-base text-black">
              Emergency Preparedness:
            </span>{" "}
            In unforeseen situations, we have contingency plans to ensure your
            well-being.
          </p>
        </div>
      </div>

      <div className="px-[33px] relative rounded-xl py-3 cursor-pointer mt-12">
        <h4 className="extraBoldFontFamily text-5xl text-black">
          Responsible Travel
        </h4>
        <div className="pr-14">
          <p className="regularFontFamily text-base text-black mt-3">
            Tripp Karo believes in leaving a positive impact:
          </p>
          <p className="regularFontFamily text-base text-black mt-2">
            <span className="meduimFontFamily text-base text-black">
              Environmental Consciousness:
            </span>{" "}
            We promote eco-friendly practices and responsible tourism.
          </p>
          <p className="regularFontFamily text-base text-black mt-2">
            <span className="meduimFontFamily text-base text-black">
              Respect for Communities:
            </span>{" "}
            We encourage cultural sensitivity and respect for local customs.
          </p>
        </div>
      </div>

      <div className="px-[33px] relative rounded-xl py-3 cursor-pointer mt-12">
        <h4 className="extraBoldFontFamily text-5xl text-black">
          Customization and Personalization
        </h4>
        <div className="pr-14">
          <p className="regularFontFamily text-base text-black mt-3">
            At Tripp Karo, we believe that every traveler is unique. Our
            policies reflect this commitment to customization:
          </p>
          <p className="regularFontFamily text-base text-black mt-2">
            <span className="meduimFontFamily text-base text-black">
              Tailored Itineraries:
            </span>{" "}
            We create travel plans that resonate with your interests,
            preferences, and aspirations. Whether you seek adventure, cultural
            immersion, or relaxation, we curate experiences just for you.
          </p>
          <p className="regularFontFamily text-base text-black mt-2">
            <span className="meduimFontFamily text-base text-black">
              Flexible Modifications
            </span>{" "}
            Life is unpredictable, and plans can change. We allow modifications
            to your itinerary, ensuring that your journey remains aligned with
            your evolving needs.
          </p>
        </div>
      </div>

      <Testimonials data={testimonialnData} />

      <Faqs />

      <Footer />
    </div>
  );
}
