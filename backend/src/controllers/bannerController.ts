
import { Request, Response } from "express";
import { BannerProps } from "../types/banners";
import { BannerModel } from "../models/banners";
import httpResponse from "../utils/httpsResponse";
import messages from "../config/messages";
import fileHandler from "../utils/fileHandler";
import { S3folderTypes } from "../interfaces/S3folderType";


const bannerController = {

    createBanner: async (req: Request, res: Response) => {
        try {
            const file = req.file
            const bodyData: BannerProps = req.body

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
                fileData.file = await fileHandler.uploadTos3(file, S3folderTypes.BANNERS)
                fileData.fileType = file.mimetype
            }


            const result = await BannerModel.create({ ...bodyData, ...fileData })

            return httpResponse.sendResponse(
                res,
                result,
                200,
                messages.success.banner.create
            );

        } catch (error: any) {
            httpResponse.sendErrorResponse(res, error, 400, error?.message);
        }
    },

    getBanner: async (req: Request, res: Response) => {
        try {

            const result = await BannerModel.find().populate("destination")

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

    getBannerById: async (req: Request, res: Response) => {
        try {
            const { bannerId } = req.query


            console.log('----bannerId----', bannerId)

            if (!bannerId) {
                throw new Error('Banner Id is missing.')
            }

            const result = await BannerModel.findById(bannerId).populate("destination")

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

    getBannerByDestinationId: async (req: Request, res: Response) => {
        try {
            const { destinationId } = req.query


            console.log('----bannerId----', destinationId)

            if (!destinationId) {
                throw new Error('Destination Id is missing.')
            }

            const result = await BannerModel.find({ destination: destinationId }).populate('destination')

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

    updateBanner: async (req: Request, res: Response) => {

        try {
            console.log('---reqBody---', req.body)

        } catch (error: any) {
            httpResponse.sendErrorResponse(res, error, 400, error?.message);
        }
    },

    deleteBanner: async (req: Request, res: Response) => {

        try {

        } catch (error: any) {
            httpResponse.sendErrorResponse(res, error, 400, error?.message);
        }
    }
}


export default bannerController