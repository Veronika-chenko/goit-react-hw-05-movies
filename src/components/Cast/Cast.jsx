import { IMG_URL } from 'components/services/Api';
//
import { CastList } from './Cast.styled';

export const Cast = ({ cast }) => {
  return (
    <CastList>
      {cast.map(({ id, profile_path, character, name }) => (
        <li key={id}>
          <div>
            <img
              src={
                profile_path
                  ? IMG_URL + profile_path
                  : 'https://www.electiondataservices.com/wp-content/uploads/2014/10/sorry-image-not-available.jpg'
              }
              alt={name}
            />
          </div>
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </CastList>
  );
};
