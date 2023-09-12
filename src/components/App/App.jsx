// == Import npm
import React from 'react';

// == Import
import Nav from '../Nav/Nav';
import Page from '../Page/Page';

import recipes from '../../data/data';

// == Composant
const App = () => (
  <div className="app">
    <Nav recipes={recipes} />
    <Page recipes={recipes} />
  </div>
);

// == Export
export default App;
