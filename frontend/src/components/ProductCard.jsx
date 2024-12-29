// components/ProductCard.jsx
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Info = styled.div`
  padding: 10px;
`;

const Button = styled.button`
  background-color: #ecb94b;
  color: white;
  border: none;
  padding: 10px;
  margin-top: 10px;
`;

const ProductCard = ({ product, onAddToCart }) => (
  <Card>
    <Image src={product.image} alt={product.name} />
    <Info>
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>
      <Button onClick={() => onAddToCart(product)}>Add to Cart</Button>
    </Info>
  </Card>
);

export default ProductCard;
