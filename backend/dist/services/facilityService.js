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
Object.defineProperty(exports, "__esModule", { value: true });
const facilities_1 = require("../models/facilities");
const facilityService = {
    createFacility: (data) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const Result = yield facilities_1.FacilityModel.create(data);
            return Result;
        }
        catch (error) {
            throw new Error(error === null || error === void 0 ? void 0 : error.message);
        }
    }),
    getAllFacilities: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
        }
        catch (error) { }
    }),
    getOneFacility: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
        }
        catch (error) { }
    }),
    updateFacility: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
        }
        catch (error) { }
    }),
    deleteFacility: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
        }
        catch (error) { }
    }),
};
exports.default = facilityService;
