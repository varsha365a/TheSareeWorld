const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const mongoURI = "your-mongodb-connection-string"; // Replace with your MongoDB URI

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON

const PORT = 5000;

// Dummy Products
const products = [
  { id: "1", name: "Silk Saree", price: 2500, description: "Beautiful silk saree." },
  { id: "2", name: "Cotton Saree", price: 1200, description: "Lightweight cotton saree." },
  { id: "3", name: "Designer Saree", price: 3500, description: "Elegant designer saree." },
];

// API Endpoints
// Get all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Add to cart (dummy implementation)
let cart = [];
app.post("/api/cart", (req, res) => {
  const product = req.body;
  cart.push(product);
  res.status(201).json({ message: "Product added to cart", cart });
});

// Get cart items
app.get("/api/cart", (req, res) => {
  res.json(cart);
});

// Remove from cart
app.delete("/api/cart/:id", (req, res) => {
  const productId = req.params.id;
  cart = cart.filter((item) => item.id !== productId);
  res.json({ message: "Product removed from cart", cart });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
