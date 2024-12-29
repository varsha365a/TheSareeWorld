// pages/Products.jsx
import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import styled from 'styled-components';

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Replace with your API or local data
    setProducts([
      { id: 1, name: 'Banarasi Saree', price: 5000, image: 'src/assets/banarasi.jpg' },
      { id: 2, name: 'Kanchipuram Saree', price: 7000, image: 'src/assets/kanchipuram-saree.jpg' },
      { id: 3, name: 'Chanderi Saree', price: 2000, image: 'src/assets/chanderi-saree.jpg' },
      { id: 4, name: 'Tussar silk Saree', price: 5000, image: 'src/assets/tussar-silk-saree.jpg' },
      { id: 5, name: 'Patola Saree', price: 7000, image: 'src/assets/patola-sarees.jpg' },
      { id: 6, name: 'Bandhani Saree', price: 2000, image: 'src/assets/bandhani-saree.jpg' },
      { id: 7, name: 'Paithani Saree', price: 5000, image: 'src/assets/paithani-saree.jpg' },
      { id: 8, name: 'Jamdani Saree', price: 7000, image: 'src/assets/jamdani-saree.jpg' },
      { id: 9, name: 'Kota Doria Saree', price: 2000, image: 'src/assets/kota-doria-saree.jpg' },
      { id: 10, name: 'Pochampally Saree', price: 5000, image: 'src/assets/pochampally-saree.jpg' },
      { id: 11, name: 'Chikankari Saree', price: 7000, image: 'src/assets/chikankari-saree.jpg' },
      { id: 12, name: 'Kerala kasavu Saree', price: 2000, image: 'src/assets/kerala-kasavu-saree.jpg' },
    ]);
  }, []);

  const handleAddToCart = (product) => {
    console.log('Add to cart:', product);
  };

  return (
    <ProductsContainer>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
      ))}
    </ProductsContainer>
  );
};

export default Products;
