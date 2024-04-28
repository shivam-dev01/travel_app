"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tripController_1 = __importDefault(require("../controllers/tripController"));
const multer_1 = __importDefault(require("../config/multer"));
const tripRoute = (0, express_1.default)();
tripRoute.post('/create', multer_1.default, tripController_1.default.createTrip);
tripRoute.get('/get', tripController_1.default.getTrip);
tripRoute.get('/getTripById', tripController_1.default.getTripById);
tripRoute.get('/getTripByDestinationId', tripController_1.default.getTripByDestinationId);
exports.default = tripRoute;
