import express from "express";
import tripRoute from "./trip";
import testimonialRoute from "./testimonial";
import policyRoute from "./policy";
import bannerRoute from "./banner";
import destinationRoute from "./destination";
import itineraryRoute from "./itinerary";
import inquiryRoute from "./inquiry";

const route = express();

route.use("/trip", tripRoute);
route.use("/testimonial", testimonialRoute);
route.use("/policy", policyRoute);
route.use("/banner", bannerRoute);
route.use("/destination", destinationRoute);
route.use("/itinerary", itineraryRoute);
route.use("/inquiry", inquiryRoute);
export default route;
