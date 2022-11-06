import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';
//
import { getSearchData, IMG_URL } from 'components/services/Api';
import { MovieList, MovieItem } from '../Home/Home.styled';
import { SearchForm } from './Movies.styled';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  //
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const handleSubmit = e => {
    const { value } = e.target.elements.searchQuery;
    e.preventDefault();
    if (value.trim() === query) return;
    setQuery(value);
    // update саме на submit
    updateQueryString(value);
  };

  useEffect(() => {
    if (query === '' && movieName === '') return;
    if (movieName) setQuery(movieName);
    (async function () {
      try {
        const { results } = await getSearchData(query);
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movieName, query]);

  return (
    <>
      <h1>Movies</h1>
      <div>
        <SearchForm onSubmit={handleSubmit}>
          <input type="text" name="searchQuery" />
          <button type="submit">Search</button>
        </SearchForm>
        <MovieList>
          {movies.map(({ id, poster_path, title, name }) => (
            <MovieItem key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                <img src={IMG_URL + poster_path} alt={title ?? name} />
                <p>{title ?? name}</p>
              </Link>
            </MovieItem>
          ))}
        </MovieList>
      </div>
      <Outlet />
    </>
  );
};
