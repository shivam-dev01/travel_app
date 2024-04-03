"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacilityModel = void 0;
const mongoose_1 = require("mongoose");
const IDatabaseSchema_1 = require("../interfaces/IDatabaseSchema");
const facilitySchema = new mongoose_1.Schema({
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
        type: mongoose_1.Schema.Types.ObjectId,
        ref: IDatabaseSchema_1.IDatabaseSchema.SIGHT,
        required: false,
    },
    resortName: { type: String, required: true },
    images: { type: [String], required: false },
    includedMeals: { type: [String], required: true },
    activities: { type: [String], required: false },
    facilities: { type: [String], required: true },
});
exports.FacilityModel = (0, mongoose_1.model)(IDatabaseSchema_1.IDatabaseSchema.FACILITY, facilitySchema);
