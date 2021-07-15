import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import SignIn from './pages/SingIn';
import GlobalStyle from './styles/global';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <SignIn />
    <GlobalStyle />
  </>
);

export default App;
