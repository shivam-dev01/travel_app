"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolicyModel = void 0;
const mongoose_1 = require("mongoose");
const IDatabaseSchema_1 = require("../interfaces/IDatabaseSchema");
const policyDetailsSchema = new mongoose_1.Schema({
    inclusions: { type: [String], required: true },
    exclusion: { type: [String], required: true },
    cancilation: { type: [String], required: true },
    paymentTerms: { type: [String], required: true },
    note: { type: [String], required: true },
    Charges: { type: [String], required: true },
    tabName: { type: String, required: false },
    tabDetails: { type: String, required: false },
});
exports.PolicyModel = (0, mongoose_1.model)(IDatabaseSchema_1.IDatabaseSchema.POLICY_DETAILS, policyDetailsSchema);
