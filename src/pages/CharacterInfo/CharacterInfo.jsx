import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { requestCharactersById } from 'api/api';
import Loader from 'components/Loader/Loader';

export const CharacterInfo = () => {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { characterId } = useParams();

  useEffect(() => {
    setLoading(true);
    requestCharactersById(characterId)
      .then(data => {
        setCharacter(data);
      })
      .catch(error => setError(error.message))
      .finally(setLoading(false));
  }, [characterId]);
  return (
    <div>
      <NavLink to={'/'}>🡐 Go back</NavLink>
      {loading && <Loader />}
      {character !== null && (
        <div character={character}>
          <img src={character.image} alt={character.name} />
          <p>{character.name}</p>
          <p>Informations</p>
          <ul>
            <li>
              <p>Gender</p>
              <p>{character.gender}</p>
            </li>
            <li>
              <p>Status</p>
              <p>{character.status}</p>
            </li>
            <li>
              <p>Specie</p>
              <p>{character.species}</p>
            </li>
            <li>
              <p>Origin</p>
              <p>{character.origin.name}</p>
            </li>
            <li>
              <p>Type</p>
              <p>{character.type === '' ? 'Unknown' : character.type}</p>
            </li>
          </ul>
        </div>
      )}
      {error && <div>Oops, some error occured... Message:{error}</div>}
    </div>
  );
};
