import { model, Schema } from "mongoose";
import { IDatabaseSchema } from "../interfaces/IDatabaseSchema";
import { Facility } from "../types/facilities";

const facilitySchema = new Schema({
  stayingTime: {
    nights: { type: Number, required: true },
    days: { type: Number, required: true },
  },
  breakfast: { type: Boolean, required: true },
  carForPickup: {
    carName: { type: String, required: true },
    features: [String],
  },
  sightseeing: {
    type: Schema.Types.ObjectId,
    ref: IDatabaseSchema.SIGHT,
    required: false,
  },
  resortName: { type: String, required: true },
  images: { type: [String], required: false },
  includedMeals: { type: [String], required: true },
  activities: { type: [String], required: false },
  facilities: { type: [String], required: true },
});

export const FacilityModel = model<Facility>(
  IDatabaseSchema.FACILITY,
  facilitySchema
);
