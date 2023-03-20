import React from 'react';
import Bottem from './Components/Bottom';
import Main from './Components/Main';
import GlobalStyles from './GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Main />
        <Bottem />
      </div>
    </>
  );
}

export default App;
