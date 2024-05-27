import { Request, Response } from "express";
import { BannerProps } from "../types/banners";
import httpResponse from "../utils/httpsResponse";
import messages from "../config/messages";
import { ItineraryModel } from "../models/itinerary";

const itineraryController = {
  createitinerary: async (req: Request, res: Response) => {
    try {
      const bodyData: BannerProps = req.body;

      console.log("----bodyData----", bodyData);

      if (!bodyData || !Object.keys(bodyData).length) {
        throw new Error("No data provided.");
      }

      const result = await ItineraryModel.create({ ...bodyData });

      return httpResponse.sendResponse(
        res,
        result,
        200,
        messages.success.itinerary.create
      );
    } catch (error: any) {
      httpResponse.sendErrorResponse(res, error, 400, error?.message);
    }
  },

  getitinerary: async (req: Request, res: Response) => {
    try {
      const result = await ItineraryModel.find();

      return httpResponse.sendResponse(
        res,
        result,
        200,
        messages.success.itinerary.get
      );
    } catch (error: any) {
      httpResponse.sendErrorResponse(res, error, 400, error?.message);
    }
  },

  getItineraryById: async (req: Request, res: Response) => {
    try {
      const { bannerId } = req.query;

      console.log("----bannerId----", bannerId);

      if (!bannerId) {
        throw new Error("Banner Id is missing.");
      }

      const result = await ItineraryModel.findById(bannerId).populate(
        "destination"
      );

      return httpResponse.sendResponse(
        res,
        result,
        200,
        messages.success.itinerary.get
      );
    } catch (error: any) {
      httpResponse.sendErrorResponse(res, error, 400, error?.message);
    }
  },

  updateItinerary: async (req: Request, res: Response) => {
    try {
      console.log("---reqBody---", req.body);
    } catch (error: any) {
      httpResponse.sendErrorResponse(res, error, 400, error?.message);
    }
  },

  deleteItinerary: async (req: Request, res: Response) => {
    try {
    } catch (error: any) {
      httpResponse.sendErrorResponse(res, error, 400, error?.message);
    }
  },
};

export default itineraryController;
