import { Routes, Route } from 'react-router-dom';
// pages
import { SharedLayout } from './SharedLayout';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'components/MovieDetails';
import { Cast } from './Cast';
import { Reviews } from './Reviews';
import { useState, useEffect } from 'react';
// styles
import { getMovieDetails } from './services/Api';
import { getMovieCredits, getMovieReviews } from './services/Api';
// import { Container, Header, Nav, StyledLink } from './App.styled';

export const App = () => {
  const [selectedMovieId, setSelectedMovie] = useState(null);
  const [currMovie, setCurrMovie] = useState(null);
  const [castList, setCastList] = useState([]);
  const [reviewList, setReviewList] = useState([]);

  const handleClick = movieId => {
    setSelectedMovie(movieId);
  };

  useEffect(() => {
    if (!selectedMovieId) return;
    const controller = new AbortController();
    const signal = {
      signal: controller.signal,
    };

    (async function () {
      try {
        const { cast } = await getMovieCredits(selectedMovieId, signal);
        setCastList(cast);
        console.log(cast);
      } catch (error) {
        console.log(error);
      }
    })();

    (async function () {
      try {
        const { results } = await getMovieReviews(selectedMovieId, signal);
        setReviewList(results);
        console.log(results);
      } catch (error) {
        console.log(error);
      }
    })();

    return () => {
      controller.abort();
    };
  }, [selectedMovieId]);

  useEffect(() => {
    if (!selectedMovieId) return;
    const controller = new AbortController();
    const signal = {
      signal: controller.signal,
    };

    (async function () {
      try {
        const data = await getMovieDetails(selectedMovieId, signal);
        // console.log(data);
        setCurrMovie(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [selectedMovieId]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home onClick={handleClick} />} />
        <Route path="/movies" element={<Movies />}></Route>
        <Route
          path="/movie-details"
          element={<MovieDetails movie={currMovie} movieId={selectedMovieId} />}
        >
          <Route path="cast" element={<Cast cast={castList} />}>
            Cast
          </Route>
          <Route path="reviews" element={<Reviews reviewList={reviewList} />}>
            Reviews
          </Route>
        </Route>

        {/* <Route
          path="cast"
          element={<Cast cast={castList} />}
          onClick={() => getCastList}
        >
          Cast
        </Route>
        <Route path="reviews" element={<Reviews />}>
          Reviews
        </Route>
        <Route path="*" element={<Home />} /> */}
      </Route>
    </Routes>
  );
};
//
// {
/* <Route
            path="/movies/:movieId"
            element={<MovieDetails movie={currMovie} />}
          > */
// }
// {
/* MovieDetails */
// }
// {
/* <Route path="cast" element={<Cast />}>
              Cast
            </Route>
            <Route path="reviews" element={<Reviews />}>
              Reviews
            </Route> */
// }
// {
/* </Route> */
// }
// {
/* </Route> */
// }

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
