import { Facility } from "./facilities";

export interface Plan {
  name: String;
  facilities: Facility[];
  pricePerPerson: Number;
}
