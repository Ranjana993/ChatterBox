import express from "express";
import { getMessage, sendMessage } from "../controller/messageController.js";
import protectedRoute from "../middlerwares/protectedRoute.js";

const router = express.Router();

router.get("/get/:id", protectedRoute, getMessage)
router.post("/send/:id",protectedRoute , sendMessage)


export default router