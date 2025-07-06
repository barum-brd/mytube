import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  height: 60px;
  background-color: #202020;
  color: white;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: red;
  margin-right: 20px;
`;

const MenuItem = styled.div`
  margin-left: 25px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>MyTube</Logo>
          <MenuItem>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              Home
            </Link>
          </MenuItem>
        </Left>
      </Wrapper>
    </Container>
  );
};

export default Navbar;