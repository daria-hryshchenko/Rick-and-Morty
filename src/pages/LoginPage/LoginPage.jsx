import React, { useEffect } from 'react';
import { UserAuth } from 'auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Container, Iframe, List, Item, Button } from './LoginPage.styled';
import { HeroImage } from 'pages/HomePage/HomePage.styled';
import HeroImg from 'images/PngItem_438051 1-min.png';
import { GoogleButton } from 'react-google-button';

const LoginPage = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/home');
    }
  }, [user]);

  return (
    <Container>
      <List>
        <Item>
          <HeroImage src={HeroImg} alt="title Rick and Morty" />
        </Item>
        <Item>
          <GoogleButton onClick={handleGoogleSignIn} />
          <Iframe
            src="https://giphy.com/embed/SvGFA2WF9IP0WjmzvE"
            className="giphy-embed"
            allowFullScreen
          ></Iframe>
        </Item>
      </List>
    </Container>
  );
};

export default LoginPage;
