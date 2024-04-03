
import { Request, Response } from "express";
import { TripModel } from "../models/tripDetails";
import httpResponse from "../utils/httpsResponse";
import messages from "../config/messages";
import { TestimonialModel } from "../models/testimonial";
import { TestimonialProps } from "../types/testimonial";

const testimonialController = {
    createTestimonial: async (req: Request, res: Response) => {

        try {

            const bodyData: TestimonialProps = req.body

            if (!bodyData || !Object.keys(bodyData).length) {
                throw new Error('No data provided.')
            }

            const result = await TestimonialModel.create(bodyData)

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

    getTestimonial: async (req: Request, res: Response) => {

        try {

            const result = await TripModel.find()

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

    getTestimonialById: async (req: Request, res: Response) => {
        try {
            const testimonialId = req.params

            if (!testimonialId) {
                throw new Error('Trip Id is missing.')
            }

            const result = await TripModel.findById(testimonialId)

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

    updateTestimonial: async () => {

        try {

        } catch (error) {

        }
    },

    deleteTestimonial: async () => {

        try {

        } catch (error) {

        }
    },
}

export default testimonialController