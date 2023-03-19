import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from 'components/Navbar/Navbar';
import Loader from 'components/Loader/Loader';
import PrivateRoute from 'auth/PrivateRoute';
import { AuthContextProvider } from 'auth/AuthContext';
import { Container } from './App.styled';

const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const CharacterInfo = lazy(() => import('pages/CharacterInfo/CharacterInfo'));

export const App = () => {
  return (
    <Container>
      <AuthContextProvider>
        <Suspense fallback={<Loader />}>
          <Navbar />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/character/:characterId"
              element={
                <PrivateRoute>
                  <CharacterInfo />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<div>Page not found </div>} />
          </Routes>
        </Suspense>
      </AuthContextProvider>
    </Container>
  );
};
