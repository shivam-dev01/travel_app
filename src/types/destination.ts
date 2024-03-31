import { Schema } from "mongoose";

export interface DestinationProps {
    name: String;
    banner: Schema.Types.ObjectId[];
}
