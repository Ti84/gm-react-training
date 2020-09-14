import React from 'react';
import RecipeCard from './RecipeCard';

// Named so we can debug easier. Possible to do an anonomous function here but don't do that.
const RecipesList = ({ recipes }) => {
  return (
    <div>
      {recipes && recipes.length ? (
        <div className="recipe-list">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div>No Recipes found!</div>
      )}
    </div>
  );
};

export default RecipesList;
