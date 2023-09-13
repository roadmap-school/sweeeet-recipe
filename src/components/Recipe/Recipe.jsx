// == Import npm
import React from 'react';
import { useParams } from 'react-router-dom';

// == Import
import Header from '../../components/Recipe/Header/Header';
import Ingredients from '../../components/Recipe/Ingredients/Ingredients';
import Steps from '../../components/Recipe/Steps/Steps';

import './recipe.scss';


// == Composant
const Recipe = ({ recipe }) => {
  const { slug } = useParams();
  console.log("slug: " + slug);
  
  return (
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
};


// == Export
export default Recipe;
