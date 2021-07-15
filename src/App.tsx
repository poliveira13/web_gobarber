import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import SignIn from './pages/SingIn';
import SignUp from './pages/SingUp';
import GlobalStyle from './styles/global';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <SignUp />
    <GlobalStyle />
  </>
);

export default App;
