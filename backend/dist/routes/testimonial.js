"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const testimonialController_1 = __importDefault(require("../controllers/testimonialController"));
const testimonialRoute = (0, express_1.default)();
testimonialRoute.post('/create', testimonialController_1.default.createTestimonial);
testimonialRoute.post('/get', testimonialController_1.default.getTestimonial);
exports.default = testimonialRoute;
