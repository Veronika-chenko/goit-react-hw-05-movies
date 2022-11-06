import { useState, useEffect } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
//
import { getMovieDetails } from 'components/services/Api';
import { MovieCard } from 'components/MovieCard';
import { AdditionalInfoWrap } from './MovieDetails.styled';

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
      <Link to={backLinkHref}>Go back</Link>
      <MovieCard movie={movie} />
      <p style={{ marginBottom: '8px' }}>Additional information</p>
      <AdditionalInfoWrap>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </AdditionalInfoWrap>
      <Outlet />
    </>
  );
}
