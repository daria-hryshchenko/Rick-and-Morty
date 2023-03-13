import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from './App.styled';
import Loader from 'components/Loader/Loader';
import { HomePage } from 'pages/HomePage/HomePage';

// const HomePage = React.lazy(() => import('pages/HomePage/HomePage'));
// const CharacterInfo = React.lazy(() =>
//   import('./../pages/CharacterInfo/CharacterInfo')
// );

export const App = () => {
  return (
    <Container>
      <HomePage />
      {/* <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<HomePage />} />

          <Route path="*" element={<div>Page not found </div>} />
        </Routes>
      </Suspense> */}
    </Container>
  );
};
