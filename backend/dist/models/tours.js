"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TourModel = void 0;
const mongoose_1 = require("mongoose");
const IDatabaseSchema_1 = require("../interfaces/IDatabaseSchema");
const tourSchema = new mongoose_1.Schema({
    name: String,
    destination: String,
    durationInDays: Number,
    description: String,
    highlights: [String],
    plans: { type: mongoose_1.Schema.Types.ObjectId, ref: IDatabaseSchema_1.IDatabaseSchema.PLANS },
});
exports.TourModel = (0, mongoose_1.model)(IDatabaseSchema_1.IDatabaseSchema.TOUR, tourSchema);
