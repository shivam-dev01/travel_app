import { Schema } from "mongoose";
import { Sight } from "./sights";

export interface Facility {
  stayingTime: {
    nights: String;
    days: String;
  };
  breakfast: Boolean;
  carForPickup: {
    carName: String;
    features: String[];
  };
  sightseeing?: Schema.Types.ObjectId;
  resortName: String;
  images: String[];
  pricePerPerson: Number;
  includedMeals: String[];
  activities: String[];
  facilities: String[];
}
