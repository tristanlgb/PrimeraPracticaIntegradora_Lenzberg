import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  author: String,
  text: String,
  timestamp: String,
});

const Message = mongoose.model('Message', messageSchema);

export default Message;