import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IMG_URL } from '../services/Api';
import {
  MovieList,
  MovieItem,
  ImageWrap,
  MovieTitle,
} from 'components/MovieCollection/MovieCollection.styled';

export default function MovieCollection({ movies }) {
  const location = useLocation();
  if (!movies) return;

  return (
    <MovieList>
      {movies.map(({ id, poster_path, title, name }) => (
        <MovieItem key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <ImageWrap>
              <img
                src={
                  poster_path
                    ? IMG_URL + poster_path
                    : 'https://www.electiondataservices.com/wp-content/uploads/2014/10/sorry-image-not-available.jpg'
                }
                alt={title ?? name}
              />
            </ImageWrap>
            <MovieTitle>{title ?? name}</MovieTitle>
          </Link>
        </MovieItem>
      ))}
    </MovieList>
  );
}

MovieCollection.propType = {
  movies: PropTypes.object.isRequired,
};
