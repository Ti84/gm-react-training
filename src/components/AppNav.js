import React from 'react';
import { Link } from 'react-router-dom';
const AppNav = ({ handleRecipeSearch, mealName, setMealName }) => {
  return (
    <nav className="app-header">
      <Link to="/">
        <h1>Recipe buddy</h1>
      </Link>
      <form onSubmit={(e) => handleRecipeSearch(e)}>
        <input
          type="text"
          aria-label="recipe name"
          placeholder="Search recipe by name"
          value={mealName}
          onChange={({ target }) => setMealName(target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </nav>
  );
};
export default AppNav;
