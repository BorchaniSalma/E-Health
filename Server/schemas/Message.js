import mongoose from "mongoose";

const MessageSchema = mongoose.Schema({
  content: String,
  Sender: String,
  Receiver: String,
});

const Message = mongoose.model("Message", MessageSchema);
export default Message;
