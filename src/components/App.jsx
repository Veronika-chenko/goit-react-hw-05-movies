import { Routes, Route } from 'react-router-dom';
// pages
import { SharedLayout } from './SharedLayout';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';
// import { Cast } from 'pages/Cast';
// import { Reviews } from 'pages/Reviews';
// styles
// import { Container, Header, Nav, StyledLink } from './App.styled';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />}>
          <Route path="moviedetails" element={<MovieDetails />}>
            MovieDetails
          </Route>
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

/* <Route path="moviedetails" element={<MovieDetails />}>
  MovieDetails
</Route>
<Route path="cast" element={<Cast />}>
  Cast
</Route>
<Route path="reviews" element={<Reviews />}>
  Reviews
</Route> */

// {
/* <Container>
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
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/movies" element={<Movies />}>
      <Route path="moviedetails" element={<MovieDetails />}>
        MovieDetails
      </Route>
      <Route path="cast" element={<Cast />}>
        Cast
      </Route>
      <Route path="reviews" element={<Reviews />}>
        Reviews
      </Route>
    </Route>
    <Route path="*" element={<Home />} />
  </Routes>
</Container>; */
// }
