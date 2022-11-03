// /movies/:movieId'
// a page with detailed information about the movie.
import { Link, Outlet } from 'react-router-dom';
import { IMG_URL } from 'components/services/Api';
import {
  MovieCard,
  MovieImage,
  Title,
  InfoWrap,
  AdditionalInfoWrap,
} from './MovieDetails.styled';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { getMovieCredits } from 'components/services/Api';

// приходить movieId -> нужен новый запрос
export const MovieDetails = ({ movie }) => {
  if (!movie) return;
  const {
    poster_path,
    title,
    name,
    popularity,
    release_date,
    overview,
    genres,
  } = movie;
  const genreList = genres.map(genre => genre.name).join(', ');

  return (
    <>
      <MovieCard>
        <MovieImage src={IMG_URL + poster_path} alt={title ?? name} />
        <InfoWrap>
          <Title>
            {title ?? name}
            <span>({release_date.slice(0, 4)})</span>
          </Title>
          <p>User Score: {Math.round(popularity)}%</p>
          <h3>Overviews</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genreList}</p>
        </InfoWrap>
      </MovieCard>
      <p>Additional information</p>
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
};
