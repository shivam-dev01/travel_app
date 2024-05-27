import { model, Schema } from "mongoose";
import { IDatabaseSchema } from "../interfaces/IDatabaseSchema";
import { DestinationProps } from "../types/destination";

const itinerarySchema = new Schema({
  title: { type: String, required: true },
  days: [
    {
      title: { type: String, required: true },
      details: {
        description: { type: String, required: false },
        hotSpots: { type: String, required: false },
        themes: { type: String, required: false },
        accommodation: { type: String, required: false },
      },
    },
  ],
});

export const ItineraryModel = model<DestinationProps>(
  IDatabaseSchema.ITINERY_DETAILS,
  itinerarySchema
);
