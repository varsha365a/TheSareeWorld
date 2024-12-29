// components/Footer.jsx
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #822208;
  color: white;
  text-align: center;
  padding: 10px 0;
  margin-top: 20px;
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; 2024 TheSareeWorld. All Rights Reserved.</p>
  </FooterContainer>
);

export default Footer;
