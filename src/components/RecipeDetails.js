import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const getFilteredIngredients = (mealData) => {
      let filteredIngredients = [];

      // Setup ingredient data
      for (let i = 0; i < 20; i++) {
        if (mealData[`strIngredient${i + 1}`]) {
          filteredIngredients.push(
            `${mealData[`strIngredient${i + 1}`]} - ${
              mealData[`strMeasure${i + 1}`]
            }`
          );
        }
      }
      return filteredIngredients;
    };

    const fetchRecipe = async () => {
      try {
        const data = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
        );
        const json = await data.json();
        const mealData = json.meals[0];

        const filteredIngredients = getFilteredIngredients(mealData);

        setRecipeDetails(mealData);
        setIngredients(filteredIngredients);
      } catch (e) {
        console.error(e);
      }
    };

    fetchRecipe();
  }, [recipeId]);

  return (
    <div className="recipe-details">
      {recipeDetails ? (
        <div>
          <h2>
            {recipeDetails.strMeal} - {recipeDetails.strArea}
          </h2>
          <section>
            <h3>Ingredients:</h3>
            <ul className="recipe-details-list">
              {ingredients &&
                ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
            </ul>
          </section>
          <section>
            <h3>Instructions: </h3>
            <p>{recipeDetails.strInstructions}</p>
          </section>
          <section className="resources">
            <div>
              <span>Recipe Source: </span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={recipeDetails.strSource}
              >
                {recipeDetails.strSource}
              </a>
            </div>
            <div>
              <span>Youtube Source: </span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={recipeDetails.strYoutube}
              >
                {recipeDetails.strYoutube}
              </a>
            </div>
          </section>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default RecipeDetails;
