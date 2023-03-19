import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Container,
  HeroImage,
  CharactersList,
  CharacterItem,
  Image,
  Input,
  Label,
  IconFind,
  NavToCharacter,
  List,
  NameCharacter,
  SpeciesCharacter,
  Notification,
  Iframe,
  Title,
} from './HomePage.styled';

import HeroImg from 'images/PngItem_438051 1-min.png';
import { requestSeachByName } from 'api/api';

export const HomePage = () => {
  const location = useLocation();

  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.target.value);
    localStorage.setItem('inputValue', event.target.value);
  };

  useEffect(() => {
    if (query === null) {
      return;
    }
    requestSeachByName(query)
      .then(data => {
        if (data === undefined) {
          return setCharacters([]);
        }
        setCharacters([...data].sort((a, b) => a.name.localeCompare(b.name)));
        setQuery(localStorage.getItem('inputValue'));
      })
      .catch(error => {
        console.error(error);
      });
  }, [query]);
  return (
    <Container>
      <HeroImage src={HeroImg} alt="title Rick and Morty" />
      <Label>
        <IconFind />
        <Input
          type="text"
          placeholder="Filter by name..."
          onChange={handleChange}
          value={query === null ? '' : query}
        />
      </Label>

      {characters.length !== 0 ? (
        <CharactersList>
          {characters.map(({ id, species, name, image }) => {
            return (
              <CharacterItem key={id}>
                <NavToCharacter
                  to={`/character/${id}`}
                  state={{ from: location }}
                >
                  <Image src={image} alt={name} />
                  <List>
                    <NameCharacter>{name}</NameCharacter>
                    <SpeciesCharacter>{species}</SpeciesCharacter>
                  </List>
                </NavToCharacter>
              </CharacterItem>
            );
          })}
        </CharactersList>
      ) : (
        <Notification>
          <Title>No results found</Title>
          <Iframe
            src="https://giphy.com/embed/lpzHeOQQKhQ0I5UbhL"
            className="giphy-embed"
            allowFullScreen
          ></Iframe>
        </Notification>
      )}
    </Container>
  );
};
