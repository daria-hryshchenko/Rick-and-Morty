import styled from 'styled-components';

export const Container = styled.div`
  width: 312px;
  margin: 0 auto;
`;

export const HeroImage = styled.img`
  display: block;
  width: 312px;
  height: 104px;

  margin-bottom: 32px;

  @media screen and (min-width: 1440px) {
    width: 600px;
    height: 200px;
  }
`;

export const Input = styled.input`
  /* width: 100%; */
  padding: 16px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 8px;
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

export const Image = styled.img``;
