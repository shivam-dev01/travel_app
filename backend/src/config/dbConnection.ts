import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import process from "process";

export const setupDbConnection = (dbName: String) => {
  try {
    return new Promise<void>((resolve, reject) => {
      mongoose
        .connect(`${process.env.DB_URL}${dbName}`)
        .then(() => {
          resolve();
        })
        .catch((error: any) => {
          console.error("--ErrorWhileConnectionDb--", error?.message);
          reject(error);
        });
    });
  } catch (error) {
    console.log("--SetupDbConnectionError--", error);
  }
};

export const dbConnectionMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await setupDbConnection("travel");
    next();
  } catch (error) {
    console.error("Error establishing database connection:", error);
    return res.status(500).json({ error: "Internal Connection MongoDB Error" });
  }
};
