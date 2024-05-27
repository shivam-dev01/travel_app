"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItineraryModel = void 0;
const mongoose_1 = require("mongoose");
const IDatabaseSchema_1 = require("../interfaces/IDatabaseSchema");
const itinerarySchema = new mongoose_1.Schema({
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
exports.ItineraryModel = (0, mongoose_1.model)(IDatabaseSchema_1.IDatabaseSchema.ITINERY_DETAILS, itinerarySchema);
