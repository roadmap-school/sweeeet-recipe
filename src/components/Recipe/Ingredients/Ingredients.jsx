import React from 'react';

import Ingredient from './Ingredient';
import './ingredients.scss';

// Ingredients sert de passe-plat pour fournir l'ingrédient à Ingredient
// ... => spread operator, on déverse tout ce qui est dans ingredient
// {...ingredient} => je fournis name, quantity, unit, id
// {ingredient} => je fournis un objet
const Ingredients = ({ ingredients }) => (
  <ul className="ingredients">
    {ingredients.map((ingredient) => (
      <Ingredient
        key={ingredient.id}
        {...ingredient}
      />
    ))}
  </ul>
);

export default Ingredients;
