// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import Header from '../../components/Recipe/Header/Header';
import Ingredients from '../../components/Recipe/Ingredients/Ingredients';
import Steps from '../../components/Recipe/Steps/Steps';

import './recipe.scss';


// == Composant
const Recipe = ({ recipe }) => (
  <div className="recipe">
    <Header
      title={recipe.title}
      author={recipe.author}
      difficulty={recipe.difficulty}
      thumbnail={recipe.thumbnail}
    />
    <Ingredients ingredients={recipe.ingredients} />
    <Steps steps={recipe.instructions} />
  </div>
);

Recipe.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    ingredients: PropTypes.array.isRequired,
    instructions: PropTypes.array.isRequired,
  }).isRequired,
};

// == Export
export default Recipe;
