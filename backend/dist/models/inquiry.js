"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InquiryModel = void 0;
const mongoose_1 = require("mongoose");
const IDatabaseSchema_1 = require("../interfaces/IDatabaseSchema");
const inquirySchema = new mongoose_1.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
});
exports.InquiryModel = (0, mongoose_1.model)(IDatabaseSchema_1.IDatabaseSchema.INQUIRY, inquirySchema);
