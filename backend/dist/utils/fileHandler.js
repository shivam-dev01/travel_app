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
const dotenv_1 = __importDefault(require("dotenv"));
const lib_storage_1 = require("@aws-sdk/lib-storage");
const s3Client_1 = require("./s3Client");
const client_s3_1 = require("@aws-sdk/client-s3");
dotenv_1.default.config();
const fileHandler = {
    uploadTos3: (fileData, prifix) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let file = null;
            const s3Key = prifix
                ? `${prifix}/${fileData.originalname.trim()}`
                : `common/${fileData.originalname.trim()}`;
            const upload = new lib_storage_1.Upload({
                client: s3Client_1.s3Client,
                params: {
                    ACL: "public-read",
                    Bucket: process.env.S3_BUCKET,
                    Key: s3Key,
                    Body: fileData.buffer,
                    ContentType: fileData.mimetype,
                },
            });
            yield upload.done();
            file = `https://${process.env.S3_BUCKET}.s3.${process.env.S3_REGION}.amazonaws.com/${s3Key}`;
            console.log("---s3Url---", file);
            return file;
        }
        catch (error) {
            console.log("Error in fileHandler.upload", error);
            throw new Error(`Problem with file upload! ${error}`);
        }
    }),
    deleteFromS3: (key) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const params = {
                Bucket: "trippkaro",
                Key: key,
            };
            const command = new client_s3_1.DeleteObjectCommand(params);
            const deleteResult = yield s3Client_1.s3Client.send(command);
            console.log("----deleteResult-----", deleteResult);
            return true;
        }
        catch (error) {
            console.log("Error in fileHandler.upload", error);
            throw new Error(`Problem with file delete! ${error}`);
        }
    }),
};
exports.default = fileHandler;
