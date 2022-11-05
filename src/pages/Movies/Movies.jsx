import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
//
import { getSearchData, IMG_URL } from 'components/services/Api';
import { MovieList, MovieItem } from '../Home/Home.styled';
import { SearchForm } from './Movies.styled';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSubmit = e => {
    const { value } = e.target.elements.searchQuery;
    e.preventDefault();
    if (value.trim() === query) return;
    setQuery(value);
  };

  useEffect(() => {
    if (query === '') return;

    (async function () {
      try {
        const { results } = await getSearchData(query);
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [query]);

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
              <Link to={`${id}`}>
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
