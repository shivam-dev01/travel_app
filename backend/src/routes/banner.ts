import express from "express";
import bannerController from "../controllers/bannerController";
import upload from "../config/multer";


const bannerRoute = express()

bannerRoute.post('/create', upload, bannerController.createBanner)
bannerRoute.get('/get', bannerController.getBanner)
bannerRoute.get('/getBannerById', bannerController.getBannerById)
bannerRoute.get('/getBannerByDestinationId', bannerController.getBannerByDestinationId)

export default bannerRoute