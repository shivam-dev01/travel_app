import { model, Schema } from "mongoose";
import { IDatabaseSchema } from "../interfaces/IDatabaseSchema";
import { BannerProps } from "../types/banners";

const bannerSchema = new Schema({
    header: { type: String, required: true },
    destination: { type: Schema.ObjectId, ref: IDatabaseSchema.DESTINATION, required: true },
    subHeader: { type: String, required: true },
    topHeader: { type: String, required: false },
    ctaPrimary: { type: String, required: true },
    ctaSecondary: { type: String, required: false },
    file: { type: String, required: false },
    fileType: { type: String, required: false },
    bannerType: ["HOME", "WELCOME", "CHOOSE", "DESTINATION"]
});

export const BannerModel = model<BannerProps>(
    IDatabaseSchema.BANNER,
    bannerSchema
);
