import express from "express";
import validateFunction from "../utils/requestValidationCheck";
import { requestValidation } from "../config/requestValidation";
import sightsControllers from "../controllers/sightsControllers";
import upload from "../config/multer";

const sightRoutes = express.Router();

sightRoutes.post(
  "/create",
  upload,
  validateFunction(requestValidation.createSight),
  sightsControllers.createSight
);

export default sightRoutes;
