import { model, Schema } from "mongoose";
import { IDatabaseSchema } from "../interfaces/IDatabaseSchema";
import { TripDetailsProps } from "../types/tripDetails";
import { PolicyModel } from "./policyDetails";

const tripDetailsSchema = new Schema({
  destination: { type: Schema.ObjectId, ref: IDatabaseSchema.DESTINATION },
  images: { type: [String], required: true },
  includedText: { type: String, required: true },
  title: { type: String, required: true },
  descprition: { type: String, required: true },
  days: { type: String, required: true },
  nights: { type: String, required: true },
  transport: { type: Boolean, required: true },
  breakFast: { type: Boolean, required: true },
  hotel: { type: Boolean, required: true },
  sightSeeing: { type: Boolean, required: true },
  policyDetails: { type: Schema.ObjectId, ref: IDatabaseSchema.POLICY_DETAILS },
  itineraryDetails: {
    type: Schema.ObjectId,
    ref: IDatabaseSchema.ITINERY_DETAILS,
  },
  ctaPrimary: { type: String, required: true },
  amount: { type: Number, required: true },
  person: { type: Number, required: true },
  discount: { type: Number, required: false },
  amountAfterDiscount: { type: Number, required: false },
  header: { type: String, required: true },
  subHeader: { type: String, required: true },
  ctaSecondary: { type: String, required: true },
  pdfFile: { type: String, required: true },
  bannerImage: { type: String, required: true },
});

export const TripModel = model<TripDetailsProps>(
  IDatabaseSchema.TRIP_DETAILS,
  tripDetailsSchema
);
