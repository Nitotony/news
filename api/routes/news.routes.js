import express from "express";
import { gennews } from "../controllers/genews.controller.js";

const router = express.Router();

router.post("/gennews",gennews);


export default router;