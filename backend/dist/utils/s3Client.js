"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.s3Client = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const credentials = {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
};
const region = process.env.S3_REGION;
exports.s3Client = new client_s3_1.S3Client({
    region,
    credentials,
});
