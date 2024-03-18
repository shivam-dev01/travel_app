"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const requestValidationCheck_1 = __importDefault(require("../utils/requestValidationCheck"));
const requestValidation_1 = require("../config/requestValidation");
const sightsControllers_1 = __importDefault(require("../controllers/sightsControllers"));
const multer_1 = __importDefault(require("../config/multer"));
const sightRoutes = express_1.default.Router();
sightRoutes.post("/create", multer_1.default, (0, requestValidationCheck_1.default)(requestValidation_1.requestValidation.createSight), sightsControllers_1.default.createSight);
exports.default = sightRoutes;
