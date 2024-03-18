"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const IDatabaseSchema_1 = require("../interfaces/IDatabaseSchema");
const userSchema = new mongoose_1.Schema({
    name: String,
    email: String,
    password: String,
    mobile: String,
});
exports.UserModel = (0, mongoose_1.model)(IDatabaseSchema_1.IDatabaseSchema.USER, userSchema);
