import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

const Product = mongoose.model('Product', productSchema);

const products = [
  { name: 'Bulbasaur', price: 10 },
  { name: 'Charmander', price: 10 },
  { name: 'Squirtle', price: 10 },
  { name: 'Pikachu', price: 10 },
  { name: 'Jigglypuff', price: 10 },
  { name: 'Gyarados', price: 10 },
  { name: 'Dragonite', price: 10 },
  { name: 'Mew', price: 10 },
  { name: 'Typhlosion', price: 10 },
  { name: 'Espeon', price: 10 },
];

export { products, Product };
