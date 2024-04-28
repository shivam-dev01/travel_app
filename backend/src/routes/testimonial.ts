import express from "express";
import testimonialController from "../controllers/testimonialController";


const testimonialRoute = express()

testimonialRoute.post('/create', testimonialController.createTestimonial)
testimonialRoute.get('/get', testimonialController.getTestimonial)

export default testimonialRoute