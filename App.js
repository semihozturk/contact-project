import 'react-native-gesture-handler';
import React from 'react';

import AppNavContainer from './src/navigations/index.js';
import GlobalProvider from './src/context/Provider.js';

const App = () => {
  return (
    <GlobalProvider>
      <AppNavContainer />    
    </GlobalProvider>
  );
};

export default App;
