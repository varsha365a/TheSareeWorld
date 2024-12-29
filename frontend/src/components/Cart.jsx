import React, { useState, useEffect } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

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
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
