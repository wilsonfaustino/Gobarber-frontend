import React from 'react';

import SigIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import GlobalStyle from './styles/global';

import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SigIn />
    </AuthProvider>

    <GlobalStyle />
  </>
);

export default App;
