import jwt from "jsonwebtoken"
import User from "../models/authModel";


export default protectedRoute = async (req, res, next) => {
  try {
    const token = req.cookie.jwt;
    if (!token) {
      return res.status(401).json({ message: "No token provided" })
    }
    const decoded = jwt.verify(token, process.env.SECRET_TOKEN)
    if (!decoded) {
      return res.status(401).json({ message: "Invalid token" })
    }
    const user = await User.findById(decoded.userId).select("-password")
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }
    req.user = user;
    next()
  } catch (error) {
    console.log("Something went wrong in protected route");
    return res.status(500).json({ success: false, message: "Invalid token" });
  }
}