// components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color:#822208;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  color: #ecb94b;
  font-family: 'Lobster', cursive;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.li`
  a {
    color: white;
    font-weight: bold;
  }
`;

const Navbar = () => (
  <NavbarContainer>
    <Logo>TheSareeWorld</Logo>
    <NavLinks>
      <NavLink><Link to="/">Home</Link></NavLink>
      <NavLink><Link to="/products">Products</Link></NavLink>
      <NavLink><Link to="/cart">Cart</Link></NavLink>
    </NavLinks>
  </NavbarContainer>
);

export default Navbar;
