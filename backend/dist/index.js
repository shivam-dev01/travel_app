"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const dbConnection_1 = require("./config/dbConnection");
const routes_1 = __importDefault(require("./routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 4000;
const host = "0.0.0.0";
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(dbConnection_1.dbConnectionMiddleware);
app.use("/api", routes_1.default);
app.listen(port, host, () => {
    console.log(`😍: Server is running at http://${host}:${port}`);
});
