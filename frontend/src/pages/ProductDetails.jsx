import React, { useState } from "react";

const ProductDetails = ({ product }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);

    // Optionally send the product to the backend
    fetch("http://localhost:5000/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.error("Error adding to cart:", err));
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <h3>Price: ₹{product.price}</h3>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
