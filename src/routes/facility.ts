import express from "express";
import facilityController from "../controllers/facilityControllers";
import validateFunction from "../utils/requestValidationCheck";
import { requestValidation } from "../config/requestValidation";

const facilityRoutes = express.Router();

facilityRoutes.post(
  "/create",
  validateFunction(requestValidation.createFacility),
  facilityController.createFacility
);

export default facilityRoutes;
