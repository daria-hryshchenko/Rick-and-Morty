import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0;
  width: 1020px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const HeroImage = styled.img`
  display: block;
`;

export const Input = styled.input`
  width: 100%;
`;

export const CharactersList = styled.div`
  display: flex;
  flex-direction: wrap;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 51px;
`;

export const CharacterItem = styled.div`
  width: 240px;
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
`;
