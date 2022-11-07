import PropTypes from 'prop-types';
import { IMG_URL } from '../services/Api';
import {
  CardInnerWrap,
  MovieImage,
  MovieTitle,
  InfoWrap,
  Title,
  Text,
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
        <MovieTitle>
          {movie.title ?? movie.name}
          <span>({movie.release_date.slice(0, 4)})</span>
        </MovieTitle>
        <Text>User Score: {Math.round(movie.popularity)}%</Text>
        <Title>Overviews</Title>
        <Text>{movie.overview}</Text>
        <Title>Genres</Title>
        <Text>{movie.genres.map(genre => genre.name).join(', ')}</Text>
      </InfoWrap>
    </CardInnerWrap>
  );
}

MovieDetailsCard.propType = {
  movie: PropTypes.object.isRequired,
};
