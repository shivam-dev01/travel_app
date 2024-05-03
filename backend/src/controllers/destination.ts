import { Request, Response } from "express";
import { BannerProps } from "../types/banners";
import { BannerModel } from "../models/banners";
import httpResponse from "../utils/httpsResponse";
import messages from "../config/messages";
import { DestinationModel } from "../models/destination";
import { DestinationProps } from "../types/destination";

const destinationController = {
  createDestination: async (req: Request, res: Response) => {
    try {
      const bodyData: DestinationProps = req.body;

      console.log("----bodyData-Des---", bodyData);

      if (!bodyData || !Object.keys(bodyData).length) {
        throw new Error("No data provided.");
      }

      const existingRecord = await DestinationModel.findOne({
        name: bodyData.name,
      });

      if (existingRecord) {
        throw new Error("Destination with the same name already exists.");
      }

      const result = await DestinationModel.create(bodyData);

      return httpResponse.sendResponse(
        res,
        result,
        200,
        messages.success.destination.create
      );
    } catch (error: any) {
      console.log("----errorMessahe-----", error?.message);
      httpResponse.sendErrorResponse(res, error, 400, error?.message);
    }
  },

  getDestination: async (req: Request, res: Response) => {
    try {
      const result = await BannerModel.find();

      return httpResponse.sendResponse(
        res,
        result,
        200,
        messages.success.banner.get
      );
    } catch (error: any) {
      httpResponse.sendErrorResponse(res, error, 400, error?.message);
    }
  },

  getDestinationById: async (req: Request, res: Response) => {
    try {
      const { bannerId } = req.query;

      console.log("----bannerId----", bannerId);

      if (!bannerId) {
        throw new Error("Banner Id is missing.");
      }

      const result = await BannerModel.findById(bannerId);

      return httpResponse.sendResponse(
        res,
        result,
        200,
        messages.success.banner.get
      );
    } catch (error: any) {
      httpResponse.sendErrorResponse(res, error, 400, error?.message);
    }
  },

  updateDestination: async (req: Request, res: Response) => {
    try {
      console.log("---reqBody---", req.body);
    } catch (error: any) {
      httpResponse.sendErrorResponse(res, error, 400, error?.message);
    }
  },

  deleteDestination: async (req: Request, res: Response) => {
    try {
    } catch (error: any) {
      httpResponse.sendErrorResponse(res, error, 400, error?.message);
    }
  },
};

export default destinationController;
