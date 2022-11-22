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
  const {
    poster_path,
    title,
    name,
    release_date,
    popularity,
    overview,
    genres,
  } = movie;
  const genreList = genres.map(genre => genre.name).join(', ');

  return (
    <CardInnerWrap>
      <MovieImage
        src={
          poster_path
            ? IMG_URL + poster_path
            : 'https://www.electiondataservices.com/wp-content/uploads/2014/10/sorry-image-not-available.jpg'
        }
        alt={title ?? name}
      />
      <InfoWrap>
        <MovieTitle>
          {title ?? name}
          <span>({release_date.slice(0, 4)})</span>
        </MovieTitle>
        <Text>User Score: {Math.round(popularity)}%</Text>
        <Title>Overviews</Title>
        <Text>{overview}</Text>
        <Title>Genres</Title>
        <Text>{genreList}</Text>
      </InfoWrap>
    </CardInnerWrap>
  );
}

MovieDetailsCard.propType = {
  movie: PropTypes.object.isRequired,
};
