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
const sightServices_1 = __importDefault(require("../services/sightServices"));
const httpsResponse_1 = __importDefault(require("../utils/httpsResponse"));
const messages_1 = __importDefault(require("../config/messages"));
const fileHandler_1 = __importDefault(require("../utils/fileHandler"));
const sightsControllers = {
    createSight: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let images = [];
            const bodyData = req.body;
            if (req === null || req === void 0 ? void 0 : req.files) {
                const result = yield fileHandler_1.default.upload(req.files);
                images = result;
            }
            const result = yield sightServices_1.default.createSight(Object.assign(Object.assign({}, bodyData), { siteImages: images }));
            return httpsResponse_1.default.sendResponse(res, result, 200, messages_1.default.success.sight.create);
        }
        catch (error) {
            httpsResponse_1.default.sendErrorResponse(res, error, 500, error === null || error === void 0 ? void 0 : error.messages);
        }
    }),
    getAllSights: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
        }
        catch (error) { }
    }),
    getOneSightByID: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
        }
        catch (error) { }
    }),
    updateSight: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
        }
        catch (error) { }
    }),
    deleteSight: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
        }
        catch (error) { }
    }),
};
exports.default = sightsControllers;
