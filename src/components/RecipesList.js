import React from 'react';
import { Link } from 'react-router-dom';

// Named so we can debug easier. Possible to do an anonomous function here but don't do that.
const RecipesList = ({ recipes }) => {
  return (
    <div>
      {recipes && recipes.length ? (
        <div className="recipe-list">
          {recipes.map((recipe) => (
            <Link key={recipe.idMeal} to={`/${recipe.idMeal}`}>
              <div className="recipe-card">
                <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                <h3>{recipe.strMeal}</h3>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div>No Recipes found!</div>
      )}
    </div>
  );
};

export default RecipesList;
