"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SightModel = void 0;
const mongoose_1 = require("mongoose");
const IDatabaseSchema_1 = require("../interfaces/IDatabaseSchema");
const sightSchema = new mongoose_1.Schema({
    siteName: { type: String, requires: true },
    siteImages: { type: [String], required: false },
    description: { type: String, required: true },
    rating: { type: Number, required: false },
    nearbyAttractions: { type: [String], required: false },
    durationInHours: { type: Number, required: false },
    cost: { type: Number, require: false },
});
exports.SightModel = (0, mongoose_1.model)(IDatabaseSchema_1.IDatabaseSchema.SIGHT, sightSchema);
