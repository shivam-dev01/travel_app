import { Response } from "express";
import messages from "../config/messages";
const httpResponse = {
  sendResponse: (
    response: Response,
    data: any,
    statusCode = 200,
    message = "Succeed"
  ) => {
    response.status(statusCode).json({
      status: true,
      result: data,
      statusCode,
      message,
    });
  },
  sendErrorResponse: (
    response: Response,
    error: any,
    statusCode = 500,
    message = "Failed"
  ) => {
    response.status(statusCode).json({
      status: false,
      error,
      statusCode,
      message,
    });
  },
  unauthorizedResponse: (response: Response) => {
    response.status(403).json({
      status: false,
      statusCode: 403,
      message: messages.error.unAuthorized,
    });
  },
};

export default httpResponse;
