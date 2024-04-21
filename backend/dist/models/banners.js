"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannerModel = void 0;
const mongoose_1 = require("mongoose");
const IDatabaseSchema_1 = require("../interfaces/IDatabaseSchema");
const bannerSchema = new mongoose_1.Schema({
    header: { type: String, required: true },
    destination: {
        type: mongoose_1.Schema.ObjectId,
        ref: IDatabaseSchema_1.IDatabaseSchema.DESTINATION,
        required: true,
    },
    subHeader: { type: String, required: true },
    topHeader: { type: String, required: false },
    ctaPrimary: { type: String, required: true },
    ctaSecondary: { type: String, required: false },
    file: { type: String, required: false },
    fileType: { type: String, required: false },
    bannerType: ["HOME", "WELCOME", "CHOOSE", "DESTINATION"],
    isVisible: { type: Boolean, default: true },
});
exports.BannerModel = (0, mongoose_1.model)(IDatabaseSchema_1.IDatabaseSchema.BANNER, bannerSchema);
