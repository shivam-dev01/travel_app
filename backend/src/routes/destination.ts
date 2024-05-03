import express from "express";
import destinationController from "../controllers/destination";

const destinationRoute = express();

destinationRoute.post("/create", destinationController.createDestination);
destinationRoute.get("/get", destinationController.getDestination);
destinationRoute.get(
  "/getBannerById",
  destinationController.getDestinationById
);

export default destinationRoute;
