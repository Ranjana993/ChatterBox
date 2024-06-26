import Conversation from "../models/conversation.js";
import Message from "../models/messageModel.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // this will run in parallel
    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: usertoChatId } = req.params;
    const senderId = req.user._id
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, usertoChatId] },
    }).populate("messages");


    if (!conversation) return res.status(200).json([])
    res.status(200).json({ success: true, message :conversation.messages})
  
  } catch (error) {
    console.log("Something went wrong while getting messages from server ", error);
    return res.status(500).json({ error: "Internal server error" })
  }
}