import { S3Client } from "@aws-sdk/client-s3";
import dotenv from 'dotenv';

dotenv.config();

const credentials: any = {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS_KEY
}

const region: string | undefined = process.env.S3_REGION



export const s3Client = new S3Client({
    region,
    credentials
})