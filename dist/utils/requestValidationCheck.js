"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const httpsResponse_1 = __importDefault(require("./httpsResponse"));
const messages_1 = __importDefault(require("../config/messages"));
const validateFunction = (validations) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield Promise.all(validations.map((validation) => validation.run(req)));
            const errors = (0, express_validator_1.validationResult)(req);
            if (errors.isEmpty()) {
                return next();
            }
            httpsResponse_1.default.sendErrorResponse(res, errors.array(), 400, messages_1.default.error.badRequest);
        }
        catch (error) {
            httpsResponse_1.default.sendErrorResponse(res, [new Error(messages_1.default.error.internalServer)], 500, messages_1.default.error.internalServer);
        }
    });
};
exports.default = validateFunction;
