import React from 'react';

import './steps.scss';

// je veux transformer steps => pour chaque élément je veux un li
// https://fr.reactjs.org/docs/lists-and-keys.html
/* key (prop spéciale) est utilisé par React pour la réconciliation entre le DOM
virtuel et le DOM réel (pouvoir repérer quel élément a été supprimé, par exemple)
=> la valeur de key doit être unique et stable dans le temps (pas index),
idéalement on utilise un id, ici on n'en a pas donc on prend la valeur
*/
const Steps = ({ steps }) => (
  <ul className="steps">
    {steps.map((step) => (
      <li key={step} className="step">
        {step}
      </li>
    ))}
  </ul>
);



export default Steps;
