import { model, Schema } from "mongoose";
import { IDatabaseSchema } from "../interfaces/IDatabaseSchema";
import { Tours } from "../types/tours";

const tourSchema = new Schema({
  name: String,
  destination: String,
  durationInDays: Number,
  description: String,
  highlights: [String],
  plans: { type: Schema.Types.ObjectId, ref: IDatabaseSchema.PLANS },
});

export const TourModel = model<Tours>(IDatabaseSchema.TOUR, tourSchema);
