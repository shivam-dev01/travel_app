// import { useNavigate } from "react-router-dom";

export const onPdfClick = (link) => {
  try {
    window.open(link, "_blank");
  } catch (error) {
    console.log("--erroronPdfClick--", error?.message);
  }
};

export const onBookNow = (navigation) => {
  navigation("/contact-us#form");
};

export const onLearnClick = (navigation) => {
  navigation("/policy");
};
