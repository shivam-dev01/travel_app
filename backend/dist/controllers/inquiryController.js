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
const inquiry_1 = require("../models/inquiry");
const httpsResponse_1 = __importDefault(require("../utils/httpsResponse"));
const messages_1 = __importDefault(require("../config/messages"));
const inquiryController = {
    createInquiry: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const bodyData = req.body;
            if (!bodyData || !Object.keys(bodyData).length) {
                throw new Error("No data provided.");
            }
            const result = yield inquiry_1.InquiryModel.create(bodyData);
            return httpsResponse_1.default.sendResponse(res, result, 200, messages_1.default.success.inquiry.create);
        }
        catch (error) {
            httpsResponse_1.default.sendErrorResponse(res, error, 400, error === null || error === void 0 ? void 0 : error.message);
        }
    }),
    getAllInquiry: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield inquiry_1.InquiryModel.find();
            return httpsResponse_1.default.sendResponse(res, result, 200, messages_1.default.success.inquiry.get);
        }
        catch (error) {
            httpsResponse_1.default.sendErrorResponse(res, error, 500, error === null || error === void 0 ? void 0 : error.message);
        }
    }),
};
exports.default = inquiryController;
