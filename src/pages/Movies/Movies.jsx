import { useState, useEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { getSearchMovies } from 'components/services/Api';
import MovieCollection from 'components/MovieCollection';
import { PageTitle } from 'components/App.styled';
import { SearchForm, SearchInput, SearchButton } from './Movies.styled';

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
        const { results } = await getSearchMovies(query);
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
      <PageTitle>Movies</PageTitle>
      <div>
        <SearchForm onSubmit={handleSubmit}>
          <SearchInput type="text" name="searchQuery" />
          <SearchButton type="submit">
            <FiSearch />
          </SearchButton>
        </SearchForm>
        <MovieCollection movies={movieList} />
      </div>
      <Outlet />
    </>
  );
}
