import { useState, useEffect } from 'react';
import { getTrending } from 'components/services/Api';
import MovieCollection from 'components/MovieCollection';
import { PageTitle } from 'components/App.styled';

export default function Home() {
  const [movieList, setMovieList] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = {
      signal: controller.signal,
    };
    (async function () {
      try {
        const { results } = await getTrending(signal);
        setMovieList(results);
      } catch (error) {
        console.log(error);
      }
    })();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <PageTitle>Trending today</PageTitle>
      <MovieCollection movies={movieList} />
    </>
  );
}
