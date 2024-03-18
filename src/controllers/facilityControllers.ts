import { Request, Response } from "express";
import { Facility } from "../types/facilities";
import facilityService from "../services/facilityService";
import httpResponse from "../utils/httpsResponse";
import messages from "../config/messages";

const facilityController = {
  createFacility: async (req: Request, res: Response) => {
    try {
      const bodyData: Facility = req.body;
      if (!bodyData || !Object.keys(bodyData).length) {
        throw new Error("No data provided");
      }

      const result = await facilityService.createFacility(bodyData);
      return httpResponse.sendResponse(
        res,
        result,
        200,
        messages.success.facility.create
      );
    } catch (error: any) {
      //   console.log("--errorInCreateFacilityController--", error);
      httpResponse.sendErrorResponse(res, error, 500, error?.message);
    }
  },
  getAllFacilities: async () => {},
  getOneFacility: async () => {},
  updateFacility: async () => {},
  deleteFacility: async () => {},
};

export default facilityController;
