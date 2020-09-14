import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NetworkContext } from './NetworkWrapper';

const RecipeCard = ({ recipe }) => {
  const { enabled } = useContext(NetworkContext);
  return (
    <Link key={recipe.idMeal} to={`/${recipe.idMeal}`}>
      <div className={`recipe-card ${enabled ? 'slow-network' : ''}`}>
        {!enabled && <img src={recipe.strMealThumb} alt={recipe.strMeal} />}
        <h3>{recipe.strMeal}</h3>
      </div>
    </Link>
  );
};

export default RecipeCard;
