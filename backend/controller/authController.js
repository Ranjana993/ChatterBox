import User from "../models/authModel.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateTone.js";

export const signUpController = async (req, res) => {
  console.log(req.body);

  const { username, fullName, password, confirmPass, gender } = req.body;

  // Check if all fields are provided
  if (!username || !fullName || !password || !confirmPass || !gender) {
    return res.status(400).json({ status: false, message: "Please fill all the fields" });
  }

  // Check if passwords match
  if (password !== confirmPass) {
    return res.status(400).json({ status: false, message: "Passwords do not match" });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ success: false, message: "User already exists with this username" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const girlProfile = `https://avatar.iran.liara.run/girl/${username}`;
    const boyProfile = `https://avatar.iran.liara.run/boy/${username}`;

    // Create a new user
    const newUser = new User({
      username,
      fullName,
      password: hashedPassword,
      confirmPass: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfile : girlProfile
    });
    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res)
      await newUser.save();
      return res.status(201).json({
        success: true,
        message: "User saved successfully",
        newUser: {
          username: newUser.username,
          fullName: newUser.fullName,
          gender: newUser.gender,
          profilePic: newUser.profilePic
        }
      });
    }
    else {
      return res.status(401).json({ success: false, message: "data is invalid" });
    }

  } catch (error) {
    console.error("Error in signUpController:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};


export const loginController = async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  try {
    if (!username || !password) {
      return res.status(402).json({ status: false, message: "please fill in the username and password" });
    }
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(403).json({ status: false, message: "user not found please signup first " })
    }
    const decriptPassword = await bcrypt.compare(password, user.password);
    if (!decriptPassword) {
      return res.status(403).json({ status: false, message: "Invalid password" })
    }

    generateTokenAndSetCookie(user._id, res)
    return res.status(201).json({
      success: true,
      message: "User login successfully",
      newUser: {
        username: user.username,
        fullName: user.fullName,
        gender: user.gender,
        profilePic: user.profilePic
      }
    });

  } catch (error) {
    console.log("Something went wrong while login user ", error.message);
    return res.status(500).json({ success: false, message: "Internal Server Error" })
  }
};


export const logoutUser = async (req, res) => {
  try {
    await res.cookie("jwt", { maxAge: 0 })
    return res.status(200).json({ success: true, message: "user logged out successfully" })
  } catch (error) {
    console.log("Something went wrong while logout user ", error.message);
    return res.status(500).json({ success: false, message: "Internal Server Error" })
  }
}