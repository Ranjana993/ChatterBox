import express from "express"
import protectedRoute from "../middlerwares/protectedRoute.js"
import { getUserForSidebar } from "../controller/userControllerSidebar.js"

const router = express.Router()

router.get("/", protectedRoute, getUserForSidebar)

export default router 