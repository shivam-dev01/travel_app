"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestimonialModel = void 0;
const mongoose_1 = require("mongoose");
const IDatabaseSchema_1 = require("../interfaces/IDatabaseSchema");
const testimonialSchema = new mongoose_1.Schema({
    stars: { type: Number, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
});
exports.TestimonialModel = (0, mongoose_1.model)(IDatabaseSchema_1.IDatabaseSchema.TESTIMONIAL, testimonialSchema);
