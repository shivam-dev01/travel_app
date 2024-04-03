"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const facilityControllers_1 = __importDefault(require("../controllers/facilityControllers"));
const requestValidationCheck_1 = __importDefault(require("../utils/requestValidationCheck"));
const requestValidation_1 = require("../config/requestValidation");
const facilityRoutes = express_1.default.Router();
facilityRoutes.post("/create", (0, requestValidationCheck_1.default)(requestValidation_1.requestValidation.createFacility), facilityControllers_1.default.createFacility);
exports.default = facilityRoutes;
