"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const destination_1 = __importDefault(require("../controllers/destination"));
const destinationRoute = (0, express_1.default)();
destinationRoute.post('/create', destination_1.default.createDestination);
destinationRoute.get('/get', destination_1.default.getDestination);
destinationRoute.get('/getBannerById', destination_1.default.getDestinationById);
exports.default = destinationRoute;
