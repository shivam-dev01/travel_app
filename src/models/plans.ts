import { model, Schema } from "mongoose";
import { IDatabaseSchema } from "../interfaces/IDatabaseSchema";
import { Plan } from "../types/plans";

const planSchema = new Schema({
  name: String,
  facilities: { type: Schema.Types.ObjectId, ref: IDatabaseSchema.FACILITY },
  pricePerPerson: Number,
});

export const PlanModel = model<Plan>(IDatabaseSchema.PLANS, planSchema);
