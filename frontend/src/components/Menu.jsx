import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
  padding: 20px 10px;
`;

const Logo = styled.h1`
  font-size: 24px;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.logo};
`;

const Item = styled.div`
  padding: 12px 0;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Logo>MyTube</Logo>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <Item>Home</Item>
      </Link>
      <Link to="/trends" style={{ textDecoration: "none", color: "inherit" }}>
        <Item>Trends</Item>
      </Link>
      <Link to="/subscriptions" style={{ textDecoration: "none", color: "inherit" }}>
        <Item>Subscriptions</Item>
      </Link>
      <Link to="/search" style={{ textDecoration: "none", color: "inherit" }}>
        <Item>Search</Item>
      </Link>
      <Link to="/signin" style={{ textDecoration: "none", color: "inherit" }}>
        <Item>Sign In</Item>
      </Link>
      <Item onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </Item>
    </Container>
  );
};

export default Menu;