
import { Request, Response } from "express";
import { TripDetailsProps } from "../types/tripDetails";
import { TripModel } from "../models/tripDetails";
import httpResponse from "../utils/httpsResponse";
import messages from "../config/messages";
import fileHandler from "../utils/fileHandler";
import { S3folderTypes } from "../interfaces/S3folderType";

const tripController = {
    createTrip: async (req: Request, res: Response) => {

        try {
            const file = req.file
            const bodyData: TripDetailsProps = req.body


            if (!bodyData || !Object.keys(bodyData).length) {
                throw new Error('No data provided.')
            }

            console.log('----bodyData----', bodyData)
            console.log('-----file-----', file)

            if (!bodyData || !Object.keys(bodyData).length) {
                throw new Error('No data provided.')
            }

            let fileData: { file: string | null, fileType: string | null } = {
                file: null,
                fileType: null
            }

            if (file) {
                fileData.file = await fileHandler.uploadTos3(file, S3folderTypes.CARDS)
                fileData.fileType = file.mimetype
            }

            const result = await TripModel.create({ ...bodyData, ...fileData })

            return httpResponse.sendResponse(
                res,
                result,
                200,
                messages.success.trip.create
            )

        } catch (error: any) {
            httpResponse.sendErrorResponse(res, error, 400, error?.message);
        }
    },

    getTrip: async (req: Request, res: Response) => {

        try {

            const result = await TripModel.find().populate('destination').populate("policyDetails").populate("itineraryDetails")

            return httpResponse.sendResponse(res,
                result,
                200,
                messages.success.trip.create
            )

        } catch (error: any) {
            httpResponse.sendErrorResponse(res, error, 400, error?.message);
        }
    },

    getTripById: async (req: Request, res: Response) => {
        try {
            const { tripId } = req.query

            if (!tripId) {
                throw new Error('Trip Id is missing.')
            }

            const result = await TripModel.findById(tripId).populate('destination').populate("policyDetails").populate("itineraryDetails")

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


    getTripByDestinationId: async (req: Request, res: Response) => {
        try {
            const { destinationId } = req.query

            if (!destinationId) {
                throw new Error('Destination Id is missing.')
            }

            const result = await TripModel.find({ destination: destinationId }).populate('destination').populate("policyDetails").populate("itineraryDetails")

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

    updateTrip: async () => {

        try {

        } catch (error) {

        }
    },

    deleteTrip: async () => {

        try {

        } catch (error) {

        }
    },
}

export default tripController