"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const facility_1 = __importDefault(require("./facility"));
const sight_1 = __importDefault(require("./sight"));
const route = (0, express_1.default)();
route.use("/facility", facility_1.default);
route.use("/sight", sight_1.default);
exports.default = route;
