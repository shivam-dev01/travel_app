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
exports.dbConnectionMiddleware = exports.setupDbConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const process_1 = __importDefault(require("process"));
const setupDbConnection = (dbName) => {
    try {
        return new Promise((resolve, reject) => {
            mongoose_1.default
                .connect(`${process_1.default.env.DB_URL}${dbName}`)
                .then(() => {
                resolve();
            })
                .catch((error) => {
                console.error("--ErrorWhileConnectionDb--", error === null || error === void 0 ? void 0 : error.message);
                reject(error);
            });
        });
    }
    catch (error) {
        console.log("--SetupDbConnectionError--", error);
    }
};
exports.setupDbConnection = setupDbConnection;
const dbConnectionMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, exports.setupDbConnection)("travel");
        next();
    }
    catch (error) {
        console.error("Error establishing database connection:", error);
        return res.status(500).json({ error: "Internal Connection MongoDB Error" });
    }
});
exports.dbConnectionMiddleware = dbConnectionMiddleware;
