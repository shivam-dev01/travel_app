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
const fileHandler_1 = __importDefault(require("../utils/fileHandler"));
const S3folderType_1 = require("../interfaces/S3folderType");
const bannerController = {
    createBanner: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const file = req.file;
            const bodyData = req.body;
            console.log("----bodyData----", bodyData);
            console.log("-----file-----", file);
            if (!bodyData || !Object.keys(bodyData).length) {
                throw new Error("No data provided.");
            }
            let fileData = {
                file: null,
                fileType: null,
            };
            if (file) {
                fileData.file = yield fileHandler_1.default.uploadTos3(file, S3folderType_1.S3folderTypes.BANNERS);
                fileData.fileType = file.mimetype;
            }
            const result = yield banners_1.BannerModel.create(Object.assign({}, bodyData));
            return httpsResponse_1.default.sendResponse(res, result, 200, messages_1.default.success.banner.create);
        }
        catch (error) {
            httpsResponse_1.default.sendErrorResponse(res, error, 400, error === null || error === void 0 ? void 0 : error.message);
        }
    }),
    getBanner: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield banners_1.BannerModel.find({ isVisible: true }).populate("destination");
            return httpsResponse_1.default.sendResponse(res, result, 200, messages_1.default.success.banner.get);
        }
        catch (error) {
            httpsResponse_1.default.sendErrorResponse(res, error, 400, error === null || error === void 0 ? void 0 : error.message);
        }
    }),
    getBannerById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { bannerId } = req.query;
            console.log("----bannerId----", bannerId);
            if (!bannerId) {
                throw new Error("Banner Id is missing.");
            }
            const result = yield banners_1.BannerModel.findById(bannerId).populate("destination");
            return httpsResponse_1.default.sendResponse(res, result, 200, messages_1.default.success.banner.get);
        }
        catch (error) {
            httpsResponse_1.default.sendErrorResponse(res, error, 400, error === null || error === void 0 ? void 0 : error.message);
        }
    }),
    getBannerByDestinationId: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { destinationId } = req.query;
            console.log("----bannerId----", destinationId);
            if (!destinationId) {
                throw new Error("Destination Id is missing.");
            }
            const result = yield banners_1.BannerModel.find({
                destination: destinationId,
                isVisible: true,
            }).populate("destination");
            return httpsResponse_1.default.sendResponse(res, result, 200, messages_1.default.success.banner.get);
        }
        catch (error) {
            httpsResponse_1.default.sendErrorResponse(res, error, 400, error === null || error === void 0 ? void 0 : error.message);
        }
    }),
    updateBanner: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log("---reqBody---", req.body);
        }
        catch (error) {
            httpsResponse_1.default.sendErrorResponse(res, error, 400, error === null || error === void 0 ? void 0 : error.message);
        }
    }),
    deleteBanner: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
        }
        catch (error) {
            httpsResponse_1.default.sendErrorResponse(res, error, 400, error === null || error === void 0 ? void 0 : error.message);
        }
    }),
};
exports.default = bannerController;
