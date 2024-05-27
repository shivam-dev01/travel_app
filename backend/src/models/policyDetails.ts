import { model, Schema } from "mongoose";
import { IDatabaseSchema } from "../interfaces/IDatabaseSchema";
import { PolicyDetailsProps } from "../types/policyDetails";

const policyDetailsSchema = new Schema({
  inclusions: { type: [String], required: true },
  exclusion: { type: [String], required: true },
  cancilation: { type: [String], required: true },
  paymentTerms: { type: [String], required: true },
  note: { type: [String], required: true },
  Charges: { type: [String], required: true },
  tabName: { type: String, required: false },
  tabDetails: { type: String, required: false },
  name: { type: String, required: true },
});

export const PolicyModel = model<PolicyDetailsProps>(
  IDatabaseSchema.POLICY_DETAILS,
  policyDetailsSchema
);
