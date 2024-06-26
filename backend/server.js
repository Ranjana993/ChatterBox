import express from "express"
import dotenv from "dotenv"
import authrouter from "./routes/authRoute.js";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./database/dbConnect.js";
import messageRoutes from "./routes/message.js"
import cookieParser from 'cookie-parser';
import cors from "cors"




const app = express();
const PORT = process.env.PORT || 8000
dotenv.config()

// middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(cookieParser())



app.use("/api/auth", authrouter)
app.use("/api/messages" , messageRoutes)
app.use("/api/users", userRoutes)



app.get("/", (req, res) => {
  res.send("Hello World ")
})


app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`))
connectDB()