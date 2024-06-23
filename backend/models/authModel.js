import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  fullName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  confirmPass: { type: String, required: true },
  gender: { type: String, required: true, enum: ["male", "female"] },
  profilePic: { type: String, default: "" }
}, { timestamps: true })

const User = mongoose.model("User", userSchema)
export default User