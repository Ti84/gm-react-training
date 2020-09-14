import React from 'react';
import { Link } from 'react-router-dom';

class RecipeCard extends React.Component {
  render() {
    const { recipe } = this.props;
    return (
      <Link key={recipe.idMeal} to={`/${recipe.idMeal}`}>
        <div className="recipe-card">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h3>{recipe.strMeal}</h3>
        </div>
      </Link>
    );
  }
}

export default RecipeCard;
