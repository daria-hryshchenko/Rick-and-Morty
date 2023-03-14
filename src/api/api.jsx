import axios from 'axios';

export const requestCharacters = async () => {
  const { data } = await axios.get(
    'https://rickandmortyapi.com/api/character/'
  );
  return data;
};

export const requestCharactersById = async id => {
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  return data;
};

export const requestSeachByName = async input => {
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/character/?name=${input}`
  );
  return data.results;
};
