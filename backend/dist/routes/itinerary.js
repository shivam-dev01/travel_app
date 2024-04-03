"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const itineraryController_1 = __importDefault(require("../controllers/itineraryController"));
const itineraryRoute = (0, express_1.default)();
itineraryRoute.post('/create', itineraryController_1.default.createitinerary);
itineraryRoute.get('/get', itineraryController_1.default.getitinerary);
exports.default = itineraryRoute;
