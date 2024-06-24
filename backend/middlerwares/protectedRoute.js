import jwt from "jsonwebtoken";
import User from "../models/authModel.js";
import cookieParser from 'cookie-parser'; // Make sure this middleware is used in your app

const protectedRoute = async (req, res, next) => {
  try {
    // Access the JWT token from cookies
    const token = req.cookies.jwt; // Corrected from req.cookie.jwt to req.cookies.jwt
    if (!token) {
      return res.status(401).json({ message: "No token provided, authorization denied" });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.SECRET_TOKEN);
    if (!decoded) {
      return res.status(401).json({ message: "Invalid token, authorization denied" });
    }

    // Find the user by ID from the token's payload
    const user = await User.findById(decoded.userId).select("-password"); // Exclude password from the user data
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Attach the user object to the request object
    req.user = user;
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error("Error in protectedRoute middleware:", error);
    // Handle specific JWT errors for better client feedback
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ success: false, message: "Token has expired" });
    } else if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ success: false, message: "Invalid token" });
    } else {
      return res.status(500).json({ success: false, message: "Server error in protected route" });
    }
  }
};

export default protectedRoute;
