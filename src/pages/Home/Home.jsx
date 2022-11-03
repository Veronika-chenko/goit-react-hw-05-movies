import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { getTrending, IMG_URL } from 'components/services/Api'; //Home
import { TopTitle, MovieList, MovieItem } from './Home.styled';
// import { getMovieDetails } from '../../components/services/Api'; //by Id

export const Home = ({ onClick }) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // const navigate = useNavigate();
  // #1
  useEffect(() => {
    const controller = new AbortController();
    const signal = {
      signal: controller.signal,
    };
    (async function () {
      try {
        const { results } = await getTrending(signal);
        // console.log(results);
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    })();

    return () => {
      controller.abort();
    };
  }, []);

  // #2
  // useEffect(() => {
  //   if (selectedMovie === null) return;
  //   const controller = new AbortController();
  //   const signal = {
  //     signal: controller.signal,
  //   };
  //   (async function () {
  //     try {
  //       const data = await getMovieDetails(selectedMovie, signal);
  //       console.log(data);
  //       // setMovies(results);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, [selectedMovie]);

  const handleItemClick = id => {
    setSelectedMovie(id);
    console.log(id);
    onClick(selectedMovie);
  };

  return (
    <div style={{ marginTop: '12px' }}>
      <TopTitle>Trending today</TopTitle>
      <MovieList>
        {movies.map(({ id, poster_path, title, name }) => (
          <MovieItem key={id} onClick={() => handleItemClick(id)}>
            <img src={IMG_URL + poster_path} alt={title ?? name} />
            <p>{title ?? name}</p>
          </MovieItem>
        ))}
      </MovieList>
    </div>
  );
};
