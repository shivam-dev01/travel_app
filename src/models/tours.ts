import { model, Schema } from "mongoose";
import { Users } from "../types/users";
import { IDatabaseSchema } from "../interfaces/IDatabaseSchema";

const tourSchema = new Schema({
  name: String,
  destination: String,
  durationInDays: Number,
  description: String,
  highlights: [String],
  // plans: [planSchema],
});

export const user = model<Users>(IDatabaseSchema.TOUR, tourSchema);
