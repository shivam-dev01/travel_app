"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        console.log("--fileName--", file);
        cb(null, file.originalname);
    },
});
const upload = (0, multer_1.default)({
    storage,
    limits: { fieldSize: 1024 * 1024 * 20 },
}).fields([
    { name: "zipFile", maxCount: 1 },
    { name: "imageFile", maxCount: 1 },
]);
exports.default = upload;
