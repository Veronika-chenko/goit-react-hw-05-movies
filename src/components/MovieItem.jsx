import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IMG_URL } from './services/Api';
import { MovieList, MovieItem, MovieTitle } from 'pages/Home/Home.styled';

export default function MovieList1({ movies }) {
  const location = useLocation();
  if (!movies) return;
  return (
    <MovieList>
      {movies.map(({ id, poster_path, title, name }) => (
        <MovieItem key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <img src={IMG_URL + poster_path} alt={title ?? name} />
            <MovieTitle>{title ?? name}</MovieTitle>
          </Link>
        </MovieItem>
      ))}
    </MovieList>
  );
}

MovieList1.propType = {
  movies: PropTypes.object.isRequired,
};
