import { Request, Response, NextFunction } from "express";
import { ValidationChain, validationResult } from "express-validator";
import httpResponse from "./httpsResponse";
import messages from "../config/messages";

const validateFunction = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await Promise.all(validations.map((validation) => validation.run(req)));
      const errors = validationResult(req);
      if (errors.isEmpty()) {
        return next();
      }

      httpResponse.sendErrorResponse(
        res,
        errors.array(),
        400,
        messages.error.badRequest
      );
    } catch (error) {
      httpResponse.sendErrorResponse(
        res,
        [new Error(messages.error.internalServer)],
        500,
        messages.error.internalServer
      );
    }
  };
};

export default validateFunction;
