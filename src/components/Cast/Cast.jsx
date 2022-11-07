import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits, IMG_URL } from 'components/services/Api';
import {
  CastList,
  MovieItem,
  ImageWrap,
  InfoWrap,
  ActorName,
} from './Cast.styled';

export default function Cast() {
  const [castList, setCastList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    const signal = {
      signal: controller.signal,
    };
    (async function () {
      try {
        const { cast } = await getMovieCredits(id, signal);
        setCastList(cast);
      } catch (error) {
        console.log(error);
      }
    })();
    return () => {
      controller.abort();
    };
  }, [id]);

  return (
    <CastList>
      {castList.map(({ id, profile_path, character, name }) => (
        <MovieItem key={id}>
          <ImageWrap>
            <img
              src={
                profile_path
                  ? IMG_URL + profile_path
                  : 'https://www.electiondataservices.com/wp-content/uploads/2014/10/sorry-image-not-available.jpg'
              }
              alt={name}
            />
          </ImageWrap>
          <InfoWrap>
            <ActorName>{name}</ActorName>
            <p>Character: {character}</p>
          </InfoWrap>
        </MovieItem>
      ))}
    </CastList>
  );
}
