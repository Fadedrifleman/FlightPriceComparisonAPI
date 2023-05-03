import express from "express";
const router = express.Router();
import { getHome, getPrices } from "../controllers/flight.js";

router.get("/", getHome);

export default router;