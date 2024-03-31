import dotenv from 'dotenv'
import { Upload } from "@aws-sdk/lib-storage";
import { s3Client } from "./s3Client";

dotenv.config()

const fileHandler = {
    uploadTos3: async (fileData: any, prifix?: String) => {
        try {

            let file: string | null = null;

            const s3Key = prifix ? `${prifix}/${fileData.originalname.trim()}` : `common/${fileData.originalname.trim()}`;


            const upload = new Upload({
                client: s3Client,
                params: {
                    ACL: 'public-read',
                    Bucket: process.env.S3_BUCKET,
                    Key: s3Key,
                    Body: fileData.buffer,
                    ContentType: fileData.mimetype,
                },
            });

            await upload.done()

            file = `https://${process.env.S3_BUCKET}.s3.${process.env.S3_REGION}.amazonaws.com/${s3Key}`;

            console.log('---s3Url---', file)

            return file;
        } catch (error) {
            console.log("Error in fileHandler.upload", error);
            throw new Error(`Problem with file upload! ${error}`);
        }
    },
};

export default fileHandler;