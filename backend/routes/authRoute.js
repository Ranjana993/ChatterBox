import express from "express"
import { loginController, logoutUser, signUpController } from "../controller/authController.js";

const authrouter = express.Router();

authrouter.post("/sign-up" , signUpController)
authrouter.post("/login", loginController)
authrouter.post("/logout", logoutUser)


export default authrouter