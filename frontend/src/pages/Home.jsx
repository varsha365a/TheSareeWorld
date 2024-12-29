// pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const Banner = styled.div`
  background-image: url('src/assets/banner.avif'); /* Replace with your banner image */
  background-size: cover;
  background-position: center;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin: 20px 0;
  padding: 0 5%;
`;

const BrowseButton = styled(Link)`
  padding: 15px 20px;
  background-color: #822208;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 5px;
  text-decoration: none;
  font-family: ;

  &:hover {
    background-color:#822208;
    color: #ecb94b;
  }
`;

const Home = () => {
  return (
    <Container>
      <Banner>Welcome to TheSareeWorld</Banner>

      <br></br>
      
      <BrowseButton to="/products">PRODUCTS</BrowseButton>

      <Description>
        Discover a wide range of exquisite sarees from across India. Shop the latest designs, traditional weaves, and modern styles, all in one place.
      </Description>
      
      <Description>
        The saree, a traditional Indian garment, holds significant cultural and regional importance. With its diverse variety and unique designs, sarees showcase the rich heritage and craftsmanship of India. From the elegant Banarasi saree to the vibrant kanjivaram saree, there are numerous types of sarees that reflect the distinct styles and traditions of different regions in India.

        Known for its opulent gold and silver brocade work, the Banarasi saree is a classic choice for weddings and special occasions. The kanchipuram saree, typically woven in silk and decorated with intricate motifs, epitomizes the artistry of South Indian weavers. Chanderi sarees, on the other hand, are lightweight and crafted from a blend of silk and cotton, known for their sheer elegance.

        Tussar silk sarees from Bihar and Jharkhand are loved for their natural texture and earthy colors, while Patola sarees from Gujarat are known for their vibrant geometric patterns. Bandhani sarees, famous in Rajasthan and Gujarat, feature tie-and-dye patterns created by skilled artisans. Paithani sarees from Maharashtra are renowned for their intricate borders and peacock motifs.

        Each region in India has its own unique saree styles and weaving techniques. From the delicate Jamdani sarees of West Bengal to the Kota Doria sarees of Rajasthan, the diversity is immense. The intricately embroidered Chikankari sarees, originating from Lucknow in Uttar Pradesh, are a symbol of grace and charm. Maheshwari sarees from Madhya Pradesh exhibit a harmonious blend of silk and cotton, while Sambalpuri sarees from Odisha are known for their vibrant traditional motifs.

        The Assam Silk sarees, made from indigenous silk, reflect the rich cultural heritage of Assam. Baluchari sarees from West Bengal feature exquisite woven depictions of mythological scenes. Muga silk sarees, also from Assam, are known for their glossy texture and golden motifs.

        These are just a few examples of the diverse range of sarees found in India. Each saree tells a story, representing the unique traditions and craftsmanship of its region. In addition to the individual saree types, there are also regional and traditional variations that further contribute to the richness and variety of Indian sarees. From the South Indian sarees known for their vibrant colors and temple designs to the graceful drapes of North Indian sarees, they all have their own distinctive charm.

        Exploring the world of sarees in India is an enchanting journey that celebrates the beauty of traditional textiles and craftsmanship. Whether you choose a saree for a festive occasion or as part of your everyday wardrobe, it is a garment that truly encapsulates the essence of Indian culture and heritage.
      </Description>
    </Container>
  );
};

export default Home;
