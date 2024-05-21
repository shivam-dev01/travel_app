"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bannerController_1 = __importDefault(require("../controllers/bannerController"));
const multer_1 = __importDefault(require("../config/multer"));
const bannerRoute = (0, express_1.default)();
bannerRoute.post("/create", multer_1.default, bannerController_1.default.createBanner);
bannerRoute.get("/get", bannerController_1.default.getBanner);
bannerRoute.get("/getBannerById", bannerController_1.default.getBannerById);
bannerRoute.get("/getBannerByDestinationId", bannerController_1.default.getBannerByDestinationId);
bannerRoute.delete("/deleteBannerById", bannerController_1.default.deleteBanner);
exports.default = bannerRoute;
