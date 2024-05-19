import { model, Schema } from "mongoose";
import { IDatabaseSchema } from "../interfaces/IDatabaseSchema";
import { DestinationProps } from "../types/destination";

const destinationSchema = new Schema({
  name: { type: String, required: true },
  banner: { type: [Schema.ObjectId], ref: IDatabaseSchema.BANNER },
});

export const DestinationModel = model<DestinationProps>(
  IDatabaseSchema.DESTINATION,
  destinationSchema
);
