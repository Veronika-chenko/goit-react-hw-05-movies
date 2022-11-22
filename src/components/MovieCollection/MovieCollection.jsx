import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IMG_URL } from '../services/Api';
import {
  MovieList,
  MovieItem,
  ImageWrap,
  InfoWrap,
  MovieTitle,
  MovieText,
} from 'components/MovieCollection/MovieCollection.styled';
import { ScrollTop } from 'components/MovieCollection/MovieCollection.styled';
import { FiChevronUp } from 'react-icons/fi';

export default function MovieCollection({ movies }) {
  const location = useLocation();
  if (!movies) return;

  return (
    <>
      <MovieList>
        {movies.map(({ id, poster_path, title, name, release_date }) => (
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
              <InfoWrap>
                <MovieTitle>{title ?? name}</MovieTitle>
                <MovieText>
                  {release_date ? release_date.slice(0, 4) : '?'}
                </MovieText>
              </InfoWrap>
            </Link>
          </MovieItem>
        ))}
      </MovieList>
      <ScrollTop smooth component={<FiChevronUp />} />
    </>
  );
}

MovieCollection.propType = {
  movies: PropTypes.object.isRequired,
};
