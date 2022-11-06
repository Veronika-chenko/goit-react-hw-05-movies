import { useState, useEffect } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'components/services/Api';
import MovieDetailsCard from 'components/MovieDetailsCard';
import {
  TopTitle,
  AdditionalInfoWrap,
  StyledLink,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const [movie, setCurrMovieData] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const controller = new AbortController();
    const signal = {
      signal: controller.signal,
    };
    (async function () {
      try {
        const data = await getMovieDetails(id, signal);
        setCurrMovieData(data);
      } catch (error) {
        console.log(error);
      }
    })();

    return () => {
      controller.abort();
    };
  }, [id]);

  return (
    <>
      <Link
        to={backLinkHref}
        style={{ display: 'inline-block', marginBottom: '8px' }}
      >
        Go back
      </Link>
      <MovieDetailsCard movie={movie} />
      <TopTitle>Additional information</TopTitle>
      <AdditionalInfoWrap>
        <li>
          <StyledLink to="cast">Cast</StyledLink>
        </li>
        <li>
          <StyledLink to="reviews">Reviews</StyledLink>
        </li>
      </AdditionalInfoWrap>
      <Outlet />
    </>
  );
}
