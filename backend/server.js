const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/TheSareeWorld")
  .then(() => console.log("Connected to MongoDB via Compass"))
  .catch((err) => console.error("MongoDB connection failed:", err));

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies

// Static file serving for images
app.use("/images", express.static(path.join(__dirname, "images")));

const PORT = 5000;

// Dummy Products with Image Paths
const products = [
  {
    id: "1",
    name: "Silk Saree",
    price: 2500,
    description: "Beautiful silk saree.",
    image: "http://localhost:5000/images/silk-saree.jpg",
  },
  {
    id: "2",
    name: "Cotton Saree",
    price: 1200,
    description: "Lightweight cotton saree.",
    image: "http://localhost:5000/images/cotton-saree.jpg",
  },
  {
    id: "3",
    name: "Designer Saree",
    price: 3500,
    description: "Elegant designer saree.",
    image: "http://localhost:5000/images/designer-saree.jpg",
  },
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
  const exists = cart.find((item) => item.id === product.id);
  if (exists) {
    return res.status(400).json({ message: "Product already in cart" });
  }
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

// Default endpoint for testing
app.get("/", (req, res) => {
  res.send("Welcome to TheSareeWorld API!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
