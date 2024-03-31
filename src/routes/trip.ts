import express from "express";
import tripController from "../controllers/tripController";
import upload from "../config/multer";


const tripRoute = express()

tripRoute.post('/create', upload, tripController.createTrip)
tripRoute.get('/get', tripController.getTrip)
tripRoute.get('/getTripById', tripController.getTripById)
tripRoute.get('/getTripByDestinationId', tripController.getTripByDestinationId)

export default tripRoute
