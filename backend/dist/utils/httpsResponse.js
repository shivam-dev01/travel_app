"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const messages_1 = __importDefault(require("../config/messages"));
const httpResponse = {
    sendResponse: (response, data, statusCode = 200, message = "Succeed") => {
        response.status(statusCode).json({
            status: true,
            result: data,
            statusCode,
            message,
        });
    },
    sendErrorResponse: (response, error, statusCode = 500, message = "Failed") => {
        response.status(statusCode).json({
            status: false,
            error,
            statusCode,
            message,
        });
    },
    unauthorizedResponse: (response) => {
        response.status(403).json({
            status: false,
            statusCode: 403,
            message: messages_1.default.error.unAuthorized,
        });
    },
};
exports.default = httpResponse;
