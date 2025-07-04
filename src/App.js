import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Interlink from './components/interlink';

function App() {
  return (
    <ThemeProvider>
      <Interlink />
    </ThemeProvider>
  );
}

export default App;
