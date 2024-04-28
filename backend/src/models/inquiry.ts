import { model, Schema } from "mongoose";
import { IDatabaseSchema } from "../interfaces/IDatabaseSchema";
import { InquiryProps } from "../types/inquiry";

const inquirySchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
});

export const InquiryModel = model<InquiryProps>(
  IDatabaseSchema.INQUIRY,
  inquirySchema
);
