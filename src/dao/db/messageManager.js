
import Message from '../models/Message.js';

const messageManager = {
  getAll: async () => {
    return await Message.find({});
  },
  add: async (message) => {
    return await Message.create(message);
  },
};

export default messageManager;
