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
const facilityService_1 = __importDefault(require("../services/facilityService"));
const httpsResponse_1 = __importDefault(require("../utils/httpsResponse"));
const messages_1 = __importDefault(require("../config/messages"));
const facilityController = {
    createFacility: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const bodyData = req.body;
            if (!bodyData || !Object.keys(bodyData).length) {
                throw new Error("No data provided");
            }
            const result = yield facilityService_1.default.createFacility(bodyData);
            return httpsResponse_1.default.sendResponse(res, result, 200, messages_1.default.success.facility.create);
        }
        catch (error) {
            //   console.log("--errorInCreateFacilityController--", error);
            httpsResponse_1.default.sendErrorResponse(res, error, 500, error === null || error === void 0 ? void 0 : error.message);
        }
    }),
    getAllFacilities: () => __awaiter(void 0, void 0, void 0, function* () { }),
    getOneFacility: () => __awaiter(void 0, void 0, void 0, function* () { }),
    updateFacility: () => __awaiter(void 0, void 0, void 0, function* () { }),
    deleteFacility: () => __awaiter(void 0, void 0, void 0, function* () { }),
};
exports.default = facilityController;
