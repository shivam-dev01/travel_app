import express from "express";
import policyController from "../controllers/policyController";


const policyRoute = express()

policyRoute.post('/create', policyController.createpolicy)
policyRoute.get('/get', policyController.getPolicy)

export default policyRoute