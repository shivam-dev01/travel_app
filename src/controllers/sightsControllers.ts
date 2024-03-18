import { Request, Response } from "express";
import { Sight } from "../types/sights";
import sightService from "../services/sightServices";
import httpResponse from "../utils/httpsResponse";
import messages from "../config/messages";
import fileHandler from "../utils/fileHandler";

const sightsControllers = {
  createSight: async (req: Request, res: Response) => {
    try {
      let images: any = [];
      const bodyData: Sight = req.body;
      if (req?.files) {
        const result = await fileHandler.upload(req.files);
        images = result;
      }

      const result = await sightService.createSight({
        ...bodyData,
        siteImages: images,
      });
      return httpResponse.sendResponse(
        res,
        result,
        200,
        messages.success.sight.create
      );
    } catch (error: any) {
      httpResponse.sendErrorResponse(res, error, 500, error?.messages);
    }
  },
  getAllSights: async () => {
    try {
    } catch (error) {}
  },
  getOneSightByID: async () => {
    try {
    } catch (error) {}
  },
  updateSight: async () => {
    try {
    } catch (error) {}
  },
  deleteSight: async () => {
    try {
    } catch (error) {}
  },
};

export default sightsControllers;
