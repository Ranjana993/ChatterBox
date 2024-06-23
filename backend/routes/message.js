import express from "express";
import { sendMessage } from "../controller/messageController.js";
import protectedRoute from "../middlerwares/protectedRoute.js";

const router = express.Router();

router.post("/send/:id",protectedRoute , sendMessage)


export default router