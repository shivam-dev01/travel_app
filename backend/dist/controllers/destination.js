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
const banners_1 = require("../models/banners");
const httpsResponse_1 = __importDefault(require("../utils/httpsResponse"));
const messages_1 = __importDefault(require("../config/messages"));
const destination_1 = require("../models/destination");
const destinationController = {
    createDestination: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const bodyData = req.body;
            console.log("----bodyData-Des---", bodyData);
            if (!bodyData || !Object.keys(bodyData).length) {
                throw new Error("No data provided.");
            }
            const existingRecord = yield destination_1.DestinationModel.findOne({
                name: bodyData.name,
            });
            if (existingRecord) {
                throw new Error("Destination with the same name already exists.");
            }
            const result = yield destination_1.DestinationModel.create(bodyData);
            return httpsResponse_1.default.sendResponse(res, result, 200, messages_1.default.success.destination.create);
        }
        catch (error) {
            console.log("----errorMessahe-----", error === null || error === void 0 ? void 0 : error.message);
            httpsResponse_1.default.sendErrorResponse(res, error, 400, error === null || error === void 0 ? void 0 : error.message);
        }
    }),
    getDestination: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield banners_1.BannerModel.find();
            return httpsResponse_1.default.sendResponse(res, result, 200, messages_1.default.success.banner.get);
        }
        catch (error) {
            httpsResponse_1.default.sendErrorResponse(res, error, 400, error === null || error === void 0 ? void 0 : error.message);
        }
    }),
    getDestinationById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { bannerId } = req.query;
            console.log("----bannerId----", bannerId);
            if (!bannerId) {
                throw new Error("Banner Id is missing.");
            }
            const result = yield banners_1.BannerModel.findById(bannerId);
            return httpsResponse_1.default.sendResponse(res, result, 200, messages_1.default.success.banner.get);
        }
        catch (error) {
            httpsResponse_1.default.sendErrorResponse(res, error, 400, error === null || error === void 0 ? void 0 : error.message);
        }
    }),
    updateDestination: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log("---reqBody---", req.body);
        }
        catch (error) {
            httpsResponse_1.default.sendErrorResponse(res, error, 400, error === null || error === void 0 ? void 0 : error.message);
        }
    }),
    deleteDestination: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
        }
        catch (error) {
            httpsResponse_1.default.sendErrorResponse(res, error, 400, error === null || error === void 0 ? void 0 : error.message);
        }
    }),
};
exports.default = destinationController;
