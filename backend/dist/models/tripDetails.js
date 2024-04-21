"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripModel = void 0;
const mongoose_1 = require("mongoose");
const IDatabaseSchema_1 = require("../interfaces/IDatabaseSchema");
const tripDetailsSchema = new mongoose_1.Schema({
    destination: { type: mongoose_1.Schema.ObjectId, ref: IDatabaseSchema_1.IDatabaseSchema.DESTINATION },
    images: { type: [String], required: true },
    includedText: { type: String, required: true },
    title: { type: String, required: true },
    descprition: { type: String, required: true },
    days: { type: String, required: true },
    nights: { type: String, required: true },
    transport: { type: Boolean, required: true },
    breakFast: { type: Boolean, required: true },
    hotel: { type: Boolean, required: true },
    sightSeeing: { type: Boolean, required: true },
    policyDetails: { type: mongoose_1.Schema.ObjectId, ref: IDatabaseSchema_1.IDatabaseSchema.POLICY_DETAILS },
    itineraryDetails: {
        type: mongoose_1.Schema.ObjectId,
        ref: IDatabaseSchema_1.IDatabaseSchema.ITINERY_DETAILS,
    },
    ctaPrimary: { type: String, required: true },
    amount: { type: Number, required: true },
    person: { type: Number, required: true },
    discount: { type: Number, required: false },
    amountAfterDiscount: { type: Number, required: false },
    header: { type: String, required: true },
    subHeader: { type: String, required: true },
    ctaSecondary: { type: String, required: true },
    pdfFile: { type: String, required: true },
});
exports.TripModel = (0, mongoose_1.model)(IDatabaseSchema_1.IDatabaseSchema.TRIP_DETAILS, tripDetailsSchema);
