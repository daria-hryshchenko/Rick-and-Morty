import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { requestCharactersById } from 'api/api';
import Loader from 'components/Loader/Loader';
import {
  Container,
  GoBackBtn,
  IconBack,
  Description,
  Wrap,
  ImgCharacter,
  Name,
  Heading,
  WrapDescription,
  List,
  ListItem,
  Title,
  SubTitle,
} from './CharacterInfo.styled';

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
    <Container>
      <GoBackBtn to={'/'}>
        <IconBack />
        <Description>Go back</Description>
      </GoBackBtn>
      {loading && <Loader />}
      {character !== null && (
        <Wrap character={character}>
          <ImgCharacter src={character.image} alt={character.name} />
          <Name>{character.name}</Name>
          <WrapDescription>
            <Heading>Informations</Heading>
            <List>
              <ListItem>
                <Title>Gender</Title>
                <SubTitle>{character.gender}</SubTitle>
              </ListItem>
              <ListItem>
                <Title>Status</Title>
                <SubTitle>{character.status}</SubTitle>
              </ListItem>
              <ListItem>
                <Title>Specie</Title>
                <SubTitle>{character.species}</SubTitle>
              </ListItem>
              <ListItem>
                <Title>Origin</Title>
                <SubTitle>{character.origin.name}</SubTitle>
              </ListItem>
              <ListItem>
                <Title>Type</Title>
                <SubTitle>
                  {character.type === '' ? 'Unknown' : character.type}
                </SubTitle>
              </ListItem>
            </List>
          </WrapDescription>
        </Wrap>
      )}
      {error && <div>Oops, some error occured... Message:{error}</div>}
    </Container>
  );
};
