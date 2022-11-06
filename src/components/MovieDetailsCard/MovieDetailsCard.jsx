import PropTypes from 'prop-types';
import { IMG_URL } from '../services/Api';
import {
  CardInnerWrap,
  MovieImage,
  Title,
  InfoWrap,
} from './MovieDetailsCard.styled';

export default function MovieDetailsCard({ movie }) {
  if (!movie) return;
  return (
    <CardInnerWrap>
      <MovieImage
        src={IMG_URL + movie.poster_path}
        alt={movie.title ?? movie.name}
      />
      <InfoWrap>
        <Title>
          {movie.title ?? movie.name}
          <span>({movie.release_date.slice(0, 4)})</span>
        </Title>
        <p>User Score: {Math.round(movie.popularity)}%</p>
        <h3>Overviews</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
      </InfoWrap>
    </CardInnerWrap>
  );
}

MovieDetailsCard.propType = {
  movie: PropTypes.object.isRequired,
};
