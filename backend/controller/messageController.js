import Conversation from "../models/conversation";
import Message from "../models/messageModel.js";


export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id
  
  
    let conversation = await Conversation.find({
      participants: { $all: [senderId, receiverId] }
    })
  
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId]
      })
    }
    const newMessage = new Message({
      senderId, receiverId, message
    })
  
    if (newMessage) {
      Conversation.messages.push(newMessage._id)
    }
    res.status(201).json({ success: true, newMessage })
  
  
  } catch (error) {
    console.log("Something went wrong while sending message" , error.message);
    return res.status(500).json({success:false , message:"Something went wrong while sending message"})
  }
}