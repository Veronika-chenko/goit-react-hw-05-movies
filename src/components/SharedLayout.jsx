import { Outlet } from 'react-router-dom';
import { Container, Header, Nav, StyledLink, Layout } from './App.styled';
import { Suspense } from 'react';

export default function SharedLayout() {
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
      <Suspense fallback={<div>Loading...</div>}>
        <Layout>
          <Outlet />
        </Layout>
      </Suspense>
    </Container>
  );
}
