import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnectionMiddleware } from "./config/dbConnection";
import route from "./routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(dbConnectionMiddleware);
app.use("/api", route);

app.listen(port, () => {
  console.log(`😍: Server is running at http://localhost:${port}`);
});
