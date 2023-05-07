import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  }],
  totalPrice: Number,
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;