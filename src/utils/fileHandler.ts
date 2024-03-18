import { FileProps } from "../types/file";

const fileHandler = {
  upload: async (fileData: any) => {
    try {
      let files: String[] = [];
      if (fileData["zipFile"]) {
        fileData["zipFile"].forEach((file: FileProps) => {
          files.push(file.originalname);
        });
      }
      return files;
    } catch (error) {
      console.log("Error in fileHandler.upload", error);
      throw new Error(`Problem with file upload! ${error}`);
    }
  },
};

export default fileHandler;
