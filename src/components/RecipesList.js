import React from 'react';

// Named so we can debug easier. Possible to do an anonomous function here but don't do that.
const RecipesList = ({ recipes }) => {
  return (
    <div>
      {recipes && recipes.length ? (
        <div>{recipes.map(recipe => <div key={recipe.idMeal}>{recipe.strMeal}</div>)}</div>
      ) : (
        <div>No Recipes found!</div>
      )}
    </div>
  );
};

export default RecipesList;
