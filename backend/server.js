import express from "express"
import dotenv from "dotenv"
import authrouter from "./routes/authRoute.js";
import connectDB from "./database/dbConnect.js";
import messageRoutes from "./routes/message.js"


const app = express();
dotenv.config()

// middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use("/api/auth", authrouter)
app.use("/api/messages" , messageRoutes)
const PORT = process.env.PORT || 8000


app.get("/", (req, res) => {
  res.send("Hello World ")
})


app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`))
connectDB()