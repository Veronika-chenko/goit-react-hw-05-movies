import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'components/services/Api';
import MovieDetailsCard from 'components/MovieDetailsCard';
import {
  TopTitle,
  AdditionalInfoWrap,
  GoBackLink,
  StyledLink,
} from './MovieDetails.styled';
import { ErrorMessage } from 'components/App.styled';

export default function MovieDetails() {
  const [error, setError] = useState(null);
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
        if (error.message === 'Request failed with status code 404')
          setError(error);
      }
    })();

    return () => {
      controller.abort();
    };
  }, [id]);

  return (
    <>
      {error && (
        <>
          <ErrorMessage>
            Oh no... It looks like you've reached a query that doesn't exist
          </ErrorMessage>
          <GoBackLink to={backLinkHref}>Go back</GoBackLink>
        </>
      )}
      {!error && (
        <>
          <GoBackLink to={backLinkHref}>Go back</GoBackLink>
          <MovieDetailsCard movie={movie} />
          <TopTitle>Additional information</TopTitle>
          <AdditionalInfoWrap>
            <li>
              <StyledLink to="cast" state={location.state}>
                Cast
              </StyledLink>
            </li>
            <li>
              <StyledLink to="reviews" state={location.state}>
                Reviews
              </StyledLink>
            </li>
          </AdditionalInfoWrap>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
}
