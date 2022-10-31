import { useState } from 'react';
import { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getSearchData, IMG_URL } from 'components/services/Api';
import { MovieList, MovieItem } from '../Home/Home.styled';
import { SearchForm } from './Movies.styled';
// page of movie search by keyword

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

    const controller = new AbortController();
    const signal = {
      signal: controller.signal,
    };

    (async function () {
      try {
        const { results } = await getSearchData(query, signal);
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    })();

    return () => {
      controller.abort();
    };
  }, [query]);

  return (
    <div>
      <h1>Movies</h1>
      <div>
        <SearchForm onSubmit={handleSubmit}>
          <input type="text" autoComplete="off" name="searchQuery" />
          <button type="submit">Search</button>
        </SearchForm>
        <MovieList>
          {movies.map(({ id, poster_path, title, name }) => (
            <MovieItem key={id}>
              <img src={IMG_URL + poster_path} alt={title ?? name} />
              <p>{title ?? name}</p>
            </MovieItem>
          ))}
        </MovieList>
        <ul>
          <li>
            <Link to="moviedetails">MovieDetails</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
