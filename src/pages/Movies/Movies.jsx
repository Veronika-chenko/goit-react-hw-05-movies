import { useState, useEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { getSearchData } from 'components/services/Api';
import { SearchForm } from './Movies.styled';
import MovieCollection from 'components/MovieCollection';
import { TopTitle } from '../Home/Home.styled';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '' && movieName === '') return;
    if (movieName) setQuery(movieName);
    (async function () {
      try {
        const { results } = await getSearchData(query);
        setMovieList(results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movieName, query]);

  const handleSubmit = e => {
    const { value } = e.target.elements.searchQuery;
    e.preventDefault();
    if (value.trim() === query) return;
    setQuery(value);
    updateQueryString(value);
  };

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <TopTitle>Movies</TopTitle>
      <div>
        <SearchForm onSubmit={handleSubmit}>
          <input type="text" name="searchQuery" />
          <button type="submit">Search</button>
        </SearchForm>
        <MovieCollection movies={movieList} />
      </div>
      <Outlet />
    </>
  );
}
