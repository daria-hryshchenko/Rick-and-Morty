// import React, { Suspense } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import { Container } from './App.styled';
// import Loader from 'components/Loader/Loader';
// import { CharacterInfo } from 'pages/CharacterInfo/CharacterInfo';
// import { HomePage } from 'pages/HomePage/HomePage';
// import LoginPage from 'pages/LoginPage/LoginPage';
// import Logout from 'components/Logout/Logout';
// import { AuthContextProvider } from './../auth/AuthContext';

// export const App = () => {
//   return (
//     <Container>
//       <AuthContextProvider>
//         <Suspense fallback={<Loader />}>
//           <Routes>
//             <Route index path="/" element={<LoginPage />} />
//             <Route path="/home" element={<HomePage />} />
//             <Route path="/character/:characterId" element={<CharacterInfo />} />
//             <Route path="*" element={<div>Page not found </div>} />
//           </Routes>
//         </Suspense>
//       </AuthContextProvider>
//     </Container>
//   );
// };

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from 'components/Navbar';
import PrivateRoute from 'auth/PrivateRoute';
import { AuthContextProvider } from 'auth/AuthContext';
import { HomePage } from 'pages/HomePage/HomePage';
import LoginPage from 'pages/LoginPage/LoginPage';
import { CharacterInfo } from 'pages/CharacterInfo/CharacterInfo';

export const App = () => {
  return (
    <div>
      <AuthContextProvider>
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
        </Routes>
      </AuthContextProvider>
    </div>
  );
};
