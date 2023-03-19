import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';

import GlobalStyle from 'GlobalStyles/GlobalStyles.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Rick-and-Morty/">
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
