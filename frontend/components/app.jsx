import React from 'react';
import NavBarContainer from './home/navbar_container';

const App = ({children}) => (
  <div>
    <NavBarContainer />
    {children}
  </div>
);

export default App;
