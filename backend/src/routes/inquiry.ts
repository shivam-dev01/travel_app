import express from "express";
import inquiryController from "../controllers/inquiryController";

const inquiryRoute = express();

inquiryRoute.post("/create", inquiryController.createInquiry);
inquiryRoute.get("/get", inquiryController.getAllInquiry);

export default inquiryRoute;
