import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'MesMessagesage',
      default:[]
    }
  ]
}, { timestamps: true })

export default Conversation = new mongoose.model("Conversation", conversationSchema)