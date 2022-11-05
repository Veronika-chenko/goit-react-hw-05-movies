import { Outlet } from 'react-router-dom';
import { Container, Header, Nav, StyledLink, Layout } from './App.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Nav>
      </Header>
      <Layout>
        <Outlet />
      </Layout>
    </Container>
  );
};
