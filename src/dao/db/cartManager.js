import Cart from '../models/Cart.js';

const cartManager = {
  getAll: async () => {
    return await Cart.find({}).populate('products');
  },
  add: async (cart) => {
    return await Cart.create(cart);
  },
  delete: async (id) => {
    return await Cart.findByIdAndDelete(id);
  },
};

export default cartManager;
