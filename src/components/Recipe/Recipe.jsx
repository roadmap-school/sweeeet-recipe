// == Import npm
import React from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeBySlug } from '../../Utils/Selectors';

// == Import
import Header from '../../components/Recipe/Header/Header';
import Ingredients from '../../components/Recipe/Ingredients/Ingredients';
import Steps from '../../components/Recipe/Steps/Steps';

import './recipe.scss';


// == Composant
const Recipe = ({ recipes }) => {

  const { slug } = useParams();
  const recipeFound = getRecipeBySlug(recipes, slug);

  return (
    <div className="recipe">
      <Header
        title={recipeFound.title}
        author={recipeFound.author}
        difficulty={recipeFound.difficulty}
        thumbnail={recipeFound.thumbnail}
      />
      <Ingredients ingredients={recipeFound.ingredients} />
      <Steps steps={recipeFound.instructions} />
    </div>
  );
};


// == Export
export default Recipe;
