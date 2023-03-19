import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { ReactComponent as IconArrow } from 'images/arrow_back_24px.svg';

export const Container = styled.div`
  width: 312px;
  margin: 0 auto;

  @media screen and (min-width: 1440px) {
    width: 1020px;
  }
`;

export const GoBackBtn = styled(NavLink)`
  display: flex;
  align-items: baseline;
  gap: 8px;
  text-decoration: none;
  margin-bottom: 77px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 31px;
  }
`;

export const IconBack = styled(IconArrow)``;

export const Description = styled.p`
  font-family: 'Karla';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  text-transform: uppercase;
  color: #000000;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

export const ImgCharacter = styled.img`
  width: 150px;
  height: 148px;
  border: 5px solid #f2f2f7;
  border-radius: 150px;
  margin-bottom: 34px;

  @media screen and (min-width: 1440px) {
    width: 300px;
    height: 300px;
    margin-bottom: 16px;
  }
`;

export const Name = styled.h2`
  display: flex;
  align-items: center;
  text-align: center;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  margin-bottom: 35px;
  margin-top: 0;
  color: #081f32;

  @media screen and (min-width: 1440px) {
    font-size: 48px;
    line-height: 56px;
  }
`;

export const WrapDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: baseline;
  width: 312px;
  padding-right: 8px;
  margin: 0;
`;

export const Heading = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.15px;
  color: #8e8e93;
  margin-bottom: 16px;
  margin-top: 0;

  @media screen and (min-width: 1440px) {
    align-self: auto;
    margin: 0 auto 48px;
  }
`;

export const List = styled.ul`
  margin: 0;
  padding-left: 16px;
  margin-bottom: 85px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 142px;
  }
`;

export const ListItem = styled.li`
  width: 296px;
  border-bottom: 1px solid rgba(33, 33, 33, 0.08);
  padding-top: 9px;
  padding-bottom: 12px;

  @media screen and (min-width: 1440px) {
    width: 413px;
  }
`;

export const Title = styled.h4`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #081f32;
`;

export const SubTitle = styled.p`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: #6e798c;
`;
