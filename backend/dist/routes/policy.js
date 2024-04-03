"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const policyController_1 = __importDefault(require("../controllers/policyController"));
const policyRoute = (0, express_1.default)();
policyRoute.post('/create', policyController_1.default.createpolicy);
policyRoute.get('/get', policyController_1.default.getPolicy);
exports.default = policyRoute;
