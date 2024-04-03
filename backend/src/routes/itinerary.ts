import express from "express";
import itineraryController from "../controllers/itineraryController";


const itineraryRoute = express()

itineraryRoute.post('/create', itineraryController.createitinerary)
itineraryRoute.get('/get', itineraryController.getitinerary)

export default itineraryRoute