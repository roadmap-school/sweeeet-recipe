import React from 'react';

const Ingredient = ({ name, unit, quantity }) => (
  <li className="ingredient">
    <span className="quantity">{quantity} {unit}</span> {name}
  </li>
);



export default Ingredient;
