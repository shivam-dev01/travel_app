"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanModel = void 0;
const mongoose_1 = require("mongoose");
const IDatabaseSchema_1 = require("../interfaces/IDatabaseSchema");
const planSchema = new mongoose_1.Schema({
    name: String,
    facilities: { type: mongoose_1.Schema.Types.ObjectId, ref: IDatabaseSchema_1.IDatabaseSchema.FACILITY },
    pricePerPerson: Number,
});
exports.PlanModel = (0, mongoose_1.model)(IDatabaseSchema_1.IDatabaseSchema.PLANS, planSchema);
