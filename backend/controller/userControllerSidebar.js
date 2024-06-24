import User from "../models/authModel.js";

export const getUserForSidebar = async (req, res) => {
  try {
    const loggedinUser = req.user._id
    // console.log(req.user._id);

    const allUsers = await User.find({ _id: { $ne: loggedinUser } }).select(["-password" , "-confirmPass"])
    console.log(allUsers);
    return res.status(200).json(allUsers)

  } catch (error) {
    console.log("something went wrong while getting user for sidebar ");
    res.status(500).json({ success: false, message: "Internal server error" })
  }
}