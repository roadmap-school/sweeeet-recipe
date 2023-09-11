// == Import npm
import React from 'react';

// == Import
import Recipe from '../Recipe/Recipe';
import Nav from '../Nav/Nav';
import Page from '../Page/Page';

import data from '../../data/data';

// == Composant
const App = () => (
  <div className="app">
    <Nav />
    <Page />
  </div>
);

// == Export
export default App;
