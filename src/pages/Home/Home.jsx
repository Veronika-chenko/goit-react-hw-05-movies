import { useState, useEffect } from 'react';
import { getTrending } from 'components/services/Api';
import { TopTitle } from './Home.styled';
import MovieList1 from 'components/MovieItem';

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
      <TopTitle>Trending today</TopTitle>
      <MovieList1 movies={movieList} />
    </>
  );
}
