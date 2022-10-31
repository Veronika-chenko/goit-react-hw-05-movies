import { Outlet } from 'react-router-dom';
import { Container, Header, Nav, StyledLink } from './App.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies" end>
            Movies
          </StyledLink>
        </Nav>
      </Header>
      <Outlet />
    </Container>
  );
};
