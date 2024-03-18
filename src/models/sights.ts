import { model, Schema } from "mongoose";
import { IDatabaseSchema } from "../interfaces/IDatabaseSchema";
import { Sight } from "../types/sights";

const sightSchema = new Schema({
  siteName: { type: String, requires: true },
  siteImages: { type: [String], required: false },
  description: { type: String, required: true },
  rating: { type: Number, required: false },
  nearbyAttractions: { type: [String], required: false },
  durationInHours: { type: Number, required: false },
  cost: { type: Number, require: false },
});

export const SightModel = model<Sight>(IDatabaseSchema.SIGHT, sightSchema);
