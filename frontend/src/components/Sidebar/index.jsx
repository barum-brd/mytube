import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  flex: 1;
  height: calc(100vh - 60px);
  background-color: #202020;
  position: sticky;
  top: 60px;
`;

const Wrapper = styled.div`
  padding: 20px;
  color: #aaa;
`;

const Menu = styled.div`
  margin-bottom: 10px;
`;

const Title = styled.h3`
  font-size: 13px;
  color: #606060;
`;

const List = styled.ul`
  list-style: none;
  padding: 5px;
`;

const ListItem = styled.li`
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 5px;

  &:hover {
    background-color: #383838;
  }
`;

const Icon = styled.span`
  margin-right: 5px;
  font-size: 20px !important;
`;

const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <Menu>
          <List>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <ListItem>
                <Icon className="fas fa-home"></Icon>
                Home
              </ListItem>
            </Link>
            <ListItem>
              <Icon className="fas fa-fire"></Icon>
              Trending
            </ListItem>
            <ListItem>
              <Icon className="fas fa-subscript"></Icon>
              Subscriptions
            </ListItem>
          </List>
        </Menu>
        <Menu>
          <Title>LIBRARY</Title>
          <List>
            <ListItem>
              <Icon className="fas fa-history"></Icon>
              History
            </ListItem>
            <ListItem>
              <Icon className="fas fa-clock"></Icon>
              Watch Later
            </ListItem>
            <ListItem>
              <Icon className="fas fa-thumbs-up"></Icon>
              Liked Videos
            </ListItem>
          </List>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;