"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const inquiryController_1 = __importDefault(require("../controllers/inquiryController"));
const inquiryRoute = (0, express_1.default)();
inquiryRoute.post("/create", inquiryController_1.default.createInquiry);
inquiryRoute.get("/get", inquiryController_1.default.getAllInquiry);
exports.default = inquiryRoute;
