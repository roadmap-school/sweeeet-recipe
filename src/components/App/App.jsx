// == Import npm
import React, { useEffect } from 'react';

// == Import
import Nav from '../../containers/Nav/nav';
import Page from '../Page/Page';

// == Composant
const App = ({ fetchRecipes }) => {
  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="app">
      <Nav />
      <Page />
    </div>
  )
};

// == Export
export default App;
