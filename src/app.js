import express from "express";
import http from "http";
import { Server as SocketIO } from "socket.io";
import exphbs from "express-handlebars";
import mongoose from "mongoose";
import productManager from './managers/productManager.js';
import { Product } from './models/products.js';

const app = express();
const server = http.createServer(app);
const io = new SocketIO(server);



const mongoDB = 'mongodb://localhost:27017/pokemons';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("connected to MongoDB"))
  .catch((err) => console.log(err));



app.engine(".handlebars", exphbs({ extname: ".handlebars" }));
app.set("view engine", ".handlebars");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/realtimeproducts", (req, res) => {
  res.render("realTimeProducts");
});

io.on("connection", (socket) => {
  console.log("client connected");

  Product.find({}, (err, products) => {
    if (err) console.log(err);
    socket.emit("productos", products);
  });

  socket.on("desconectado", () => {
    console.log("client disconnected");
  });

  socket.on("nuevoProducto", async (product) => {
    const addedProduct = await productManager.add(product);
    io.emit("productos", [addedProduct]);
  });

  socket.on("eliminarProducto", async (id) => {
    const deletedProduct = await productManager.delete(id);
    io.emit("productos", [deletedProduct]);
  });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
