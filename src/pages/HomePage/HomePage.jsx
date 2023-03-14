import { useState, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import {
  Container,
  HeroImage,
  CharactersList,
  CharacterItem,
} from './HomePage.styled';

import HeroImg from 'images/PngItem_438051 1-min.png';
import { requestSeachByName } from 'api/api';

export const HomePage = () => {
  const location = useLocation();

  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    requestSeachByName(query)
      .then(data => {
        setCharacters([...data].sort((a, b) => a.name.localeCompare(b.name)));
        // console.log(data);
      })
      .catch(error => console.error(error));
  }, [query]);

  return (
    <Container>
      <HeroImage src={HeroImg} alt="title Rick and Morty" />
      <input
        type="text"
        placeholder="Filter by name..."
        className={'input'}
        onChange={event => setQuery(event.target.value)}
        value={query}
      />
      <CharactersList>
        {characters.map(({ id, species, name, image }) => {
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
      </CharactersList>
    </Container>
  );
};