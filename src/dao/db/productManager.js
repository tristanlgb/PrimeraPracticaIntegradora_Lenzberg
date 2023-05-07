import Product from '../models/products.js';

const productManager = {
getAll: async () => {
return await Product.find({});
},
add: async (product) => {
return await Product.create(product);
},
delete: async (id) => {
return await Product.deleteOne({ _id: id });
},
};

export default productManager;