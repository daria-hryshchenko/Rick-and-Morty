import axios from 'axios';

export const requestCharactersById = async id => {
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );

  return data;
};

export const requestSeachByName = async query => {
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/character/?name=${query}`
  );

  return data.results;
};
