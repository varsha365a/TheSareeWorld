import React, { useState, useEffect } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Kanjivaram Saree", price: 1000 },
    { id: 2, name: "Kasavu Saree", price: 500 },
    { id: 3, name: "Banarasi saree", price: 2000 },
  ]);

  useEffect(() => {
    fetch("http://localhost:5000/api/cart")
      .then((response) => response.json())
      .then((data) => setCartItems(data))
      .catch((err) => console.error("Error fetching cart items:", err));
  }, []);

  const removeFromCart = (productId) => {
    fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        setCartItems(cartItems.filter((item) => item.id !== productId));
      })
      .catch((err) => console.error("Error removing from cart:", err));
  };

  return (
    <div className="cart-container">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <h3>{item.name}</h3>
          <p>Price: ₹{item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
