import { useState, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import {
  Container,
  HeroImage,
  Input,
  CharactersList,
  CharacterItem,
} from './HomePage.styled';
import { requestCharacters } from 'api/api';
import Loader from 'components/Loader/Loader';

import HeroImg from 'images/PngItem_438051 1-min.png';

export const HomePage = () => {
  const location = useLocation();
  //   console.log(location);

  const [characters, setCharacters] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getCharacters() {
      try {
        setIsLoading(true);
        const data = await requestCharacters();
        setCharacters(
          [...data.results].sort((a, b) => a.name.localeCompare(b.name))
        );
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getCharacters();
  }, []);

  return (
    <Container>
      <HeroImage src={HeroImg} alt="title Rick and Morty" />
      <Input type="text" placeholder="Filter by name..." name="character" />
      <CharactersList>
        {isLoading && <Loader />}
        {characters !== null &&
          characters.map(({ id, species, name, image }) => {
            return (
              <CharacterItem key={id}>
                <NavLink to={`/character/${id}`} state={{ from: location }}>
                  <img src={image} alt={name} width="240px" height="168px" />
                  <p>{name}</p>
                  <p>{species}</p>
                </NavLink>
              </CharacterItem>
            );
          })}
        {error && <div>Oops, some error occured... Message:{error}</div>}
      </CharactersList>
    </Container>
  );
};
