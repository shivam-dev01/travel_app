import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnectionMiddleware } from "./config/dbConnection";
import route from "./routes";

dotenv.config();

const app: Express = express();
const port: number = 3000;
const host = "0.0.0.0"; // Set the host to 0.0.0.0

app.use(express.json());
app.use(cors());
app.use(dbConnectionMiddleware);
app.use("/api", route);

app.listen(port, host, () => {
  console.log(`😍: Server is running at http://${host}:${port}`);
});
