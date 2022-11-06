import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IMG_URL } from 'components/services/Api';
import { TopTitle, MovieList, MovieItem } from './Home.styled';

export const Home = ({ movies }) => {
  const location = useLocation();
  if (!movies) return;

  return (
    <>
      <TopTitle>Trending today</TopTitle>
      <MovieList>
        {movies.map(({ id, poster_path, title, name }) => (
          <MovieItem key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <img src={IMG_URL + poster_path} alt={title ?? name} />
              <p>{title ?? name}</p>
            </Link>
          </MovieItem>
        ))}
      </MovieList>
    </>
  );
};

Home.propType = {
  movies: PropTypes.object.isRequired,
};
