import React, { Suspense } from 'react';
import { Container } from './App.styled';
import Loader from 'components/Loader/Loader';

export const App = () => {
  return (
    <Container>
      <Suspense fallback={<Loader />}></Suspense>
    </Container>
  );
};
