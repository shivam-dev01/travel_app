
import { Request, Response } from "express";
import httpResponse from "../utils/httpsResponse";
import messages from "../config/messages";
import { PolicyModel } from "../models/policyDetails";
import { PolicyDetailsProps } from "../types/policyDetails";

const policyController = {
    createpolicy: async (req: Request, res: Response) => {

        try {

            const bodyData: PolicyDetailsProps = req.body

            if (!bodyData || !Object.keys(bodyData).length) {
                throw new Error('No data provided.')
            }

            const result = await PolicyModel.create(bodyData)

            return httpResponse.sendResponse(
                res,
                result,
                200,
                messages.success.policy.create
            )

        } catch (error: any) {
            httpResponse.sendErrorResponse(res, error, 400, error?.message);
        }
    },

    getPolicy: async (req: Request, res: Response) => {

        try {

            const result = await PolicyModel.find()

            return httpResponse.sendResponse(res,
                result,
                200,
                messages.success.trip.create
            )

        } catch (error: any) {
            httpResponse.sendErrorResponse(res, error, 400, error?.message);
        }
    },

    getPolicyById: async (req: Request, res: Response) => {
        try {
            const tripId = req.params

            if (!tripId) {
                throw new Error('Trip Id is missing.')
            }

            const result = await PolicyModel.findById(tripId)

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

    updatePolicy: async () => {

        try {

        } catch (error) {

        }
    },

    deletePolicy: async () => {

        try {

        } catch (error) {

        }
    },
}

export default policyController