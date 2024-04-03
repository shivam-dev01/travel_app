"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinationModel = void 0;
const mongoose_1 = require("mongoose");
const IDatabaseSchema_1 = require("../interfaces/IDatabaseSchema");
const destinationSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    banner: { type: [mongoose_1.Schema.ObjectId], ref: IDatabaseSchema_1.IDatabaseSchema.BANNER },
});
exports.DestinationModel = (0, mongoose_1.model)(IDatabaseSchema_1.IDatabaseSchema.DESTINATION, destinationSchema);
