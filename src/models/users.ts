import { model, Schema } from "mongoose";
import { Users } from "../types/users";
import { IDatabaseSchema } from "../interfaces/IDatabaseSchema";

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  mobile: String,
});

export const user = model<Users>(IDatabaseSchema.USER, userSchema);
