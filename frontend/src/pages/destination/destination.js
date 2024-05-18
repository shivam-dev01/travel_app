import React, { useEffect, useState } from "react";
import "./destination.css";
import { useParams, useNavigate } from "react-router-dom";
import useTrippStore from "../../zustand/trippStore";
import { replaceUrl } from "../../utils/replaceUrl";
import Footer from "../../footer/footer";
import nights from "../../assets/svg/nights.svg";
import beds from "../../assets/svg/beds.svg";
import sights from "../../assets/svg/sights.svg";
import breakFast from "../../assets/svg/breakFast.svg";
import transport from "../../assets/svg/transport.svg";
import days from "../../assets/svg/days.svg";
import { person } from "../../utils/personPrice";
import CustomPackage from "../../components/customPackage/customPackage";
import { onBookNow } from "../../utils/clickFunctions";

export default function Destination() {
  const navigation = useNavigate();
  let { destId } = useParams();
  const { getDestById, getTripByDest, tripDetails, banner } = useTrippStore(
    (state) => state
  );

  const [destDetails, setDestDeatils] = useState([]);

  useEffect(() => {
    getDestData();
  }, [destId, banner]);

  async function getDestData() {
    try {
      let result = await getDestById(destId);
      setDestDeatils(result);

      if (result && result?.length) {
        await getTripByDest(result[0]?.destination?._id);
      }
    } catch (error) {
      console.log("--errorGetDestData--", error?.message);
    }
  }

  const onToggletripCard = (_id) => {
    try {
      navigation("/tripp", { state: { tripId: _id, destId } });
    } catch (error) {
      console.log("----error----", error?.message);
    }
  };

  // console.log(destDetails, "--destId---", destId);

  // console.log("---tripDetails--", JSON.stringify(tripDetails, null, 2));

  return (
    <div className="destBody">
      <div className="homeBannerBody">
        {destDetails?.map((item, index) => {
          return (
            <div key={index} className="homeBanner">
              <img
                src={replaceUrl(item?.file)}
                alt="Home"
                className="homeImageBanner"
              />
              <div className="absolute flex flex-col top-[20px] md:top-[210px] justify-center items-center px-[24px] md:px-[158px]">
                <h1 className="againstRegularFontFamily text-white text-lg text-nowrap md:text-wrap md:text-7xl mb-5">
                  {item?.header}
                </h1>
                <p className="subHeaderText">{item?.subHeader}</p>
                <button
                  className="bookNowBtn bg-white outline-none border-none"
                  onClick={() => onBookNow(navigation)}
                >
                  {item?.ctaPrimary}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col justify-center items-center mt-7 lg:mt-20 mx-12 md:mx-[300px] text-center">
        <h1 className="extraBoldFontFamily  text-2xl lg:text-5xl text-black">
          Start a Reservation
        </h1>
        <p className="regularFontFamily text-xs lg:text-base text-[#4D5461] leading-[25.6px] mt-4">
          Experience an unparalleled journey with our TOUR. It’s not just a
          trip, it’s a unique chapter in your life’s story with trippkaro.com.
          We also offer the flexibility to customize your tour based on your
          preferences, ensuring a truly personalized adventure
        </p>
      </div>

      <div className="flex flex-wrap gap-6 px-4 lg:px-[33px] mt-7 lg:mt-20 justify-between">
        {tripDetails.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[445px] border border-grayCustom2 rounded-3xl overflow-hidden"
            >
              <div className="relative">
                <img
                  src={item?.images[0]}
                  alt="loading..."
                  className="w-[100%] h-[250px]"
                />
                <div className="meduimFontFamily absolute px-4 py-[6px] rounded-full bg-green100 text-green bottom-[-15px] left-[23px]">
                  {item?.destination?.name}
                </div>
              </div>
              <div className="px-[23px] relative m-0 p-0">
                <h4 className="boldFontFamily text-black text-[17.77px] lg:text-xl mt-7">
                  {item?.title}
                </h4>
                <div className="flex mt-2">
                  <div className="flex justify-center items-center">
                    <img src={nights} alt="night" />
                    <p className="meduimFontFamily text-black text-[13.33px] lg:text-base ml-2">{`${item.nights} Nights`}</p>
                  </div>

                  <div className="flex justify-center items-center ml-5">
                    <img src={days} alt="day" />
                    <p className="meduimFontFamily text-black text-[13.33px] lg:text-base ml-2">{`${item.days} Days`}</p>
                  </div>
                </div>
                <h4 className="meduimFontFamily text-[16.26px] lg:text-lg text-black mt-2">
                  {item?.includedText}
                </h4>

                <div className="flex flex-wrap gap-4 mt-2">
                  {item?.transport && (
                    <div className="flex justify-center items-center">
                      <img src={transport} alt="transport" />
                      <p className="meduimFontFamily text-black text-[12.44px] lg:text-base ml-2">
                        Transfers
                      </p>
                    </div>
                  )}
                  {item?.breakFast && (
                    <div className="flex justify-center items-center">
                      <img src={breakFast} alt="breakFast" />
                      <p className="meduimFontFamily text-black text-[12.44px] lg:text-base ml-2">
                        Breakfast
                      </p>
                    </div>
                  )}
                  {item?.hotel && (
                    <div className="flex justify-center items-center">
                      <img src={beds} alt="beds" />
                      <p className="meduimFontFamily text-black text-[12.44px] lg:text-base ml-2">
                        Hotel
                      </p>
                    </div>
                  )}
                  {item?.sightSeeing && (
                    <div className="flex justify-center items-center">
                      <img src={sights} alt="sights" />
                      <p className="meduimFontFamily text-black text-[12.44px] lg:text-base ml-2">
                        Sightseeing
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-center py-3 border-t-[1.8px] mt-4 border-grayCustom2">
                  <button
                    className="h-[30.29px] w-[134.59px] bg-skyBule rounded-full text-white regularFontFamily text-sm"
                    onClick={() => onToggletripCard(item?._id)}
                  >
                    {item.ctaPrimary}
                  </button>
                  <h2 className="boldFontFamily text-lg text-black">
                    ₹ {item.amount}{" "}
                    <span className="regularFontFamily text-base text-gray500">
                      /{person(item.person)}
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="px-4 lg:px-[154px] mt-7 lg:mt-20">
        <CustomPackage
          header="Need Custom Package"
          title="Tripp Karo understands that planning a trip can be overwhelming, which is why we’ve made it our mission to make it easy and enjoyable for you. If you have an unique request for package reach us we will resolve it immediately "
          btnText="Contact Us"
          onClick={() => onBookNow(navigation)}
        />
      </div>

      <Footer />
    </div>
  );
}
