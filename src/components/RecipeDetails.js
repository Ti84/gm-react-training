import React from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
  // https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772
  const { recipeId } = useParams();
  return <div>{recipeId}</div>
};

export default RecipeDetails;