import multer from "multer";

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     console.log("--fileName--", file);
//     cb(null, file.originalname);
//   },
// });

const storage = multer.memoryStorage()

const upload = multer({
  storage,
  limits: { fieldSize: 1024 * 1024 * 20 },
}).single('file');

export default upload;
