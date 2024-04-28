import { Request, Response } from "express";
import { InquiryProps } from "../types/inquiry";
import { InquiryModel } from "../models/inquiry";
import httpResponse from "../utils/httpsResponse";
import messages from "../config/messages";

const inquiryController = {
  createInquiry: async (req: Request, res: Response) => {
    try {
      const bodyData: InquiryProps = req.body;

      if (!bodyData || !Object.keys(bodyData).length) {
        throw new Error("No data provided.");
      }

      const result = await InquiryModel.create(bodyData);

      return httpResponse.sendResponse(
        res,
        result,
        200,
        messages.success.inquiry.create
      );
    } catch (error: any) {
      httpResponse.sendErrorResponse(res, error, 400, error?.message);
    }
  },

  getAllInquiry: async (req: Request, res: Response) => {
    try {
      const result = await InquiryModel.find();
      return httpResponse.sendResponse(
        res,
        result,
        200,
        messages.success.inquiry.get
      );
    } catch (error: any) {
      httpResponse.sendErrorResponse(res, error, 500, error?.message);
    }
  },
};

export default inquiryController;
