import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { NetworkContext } from './NetworkWrapper';
const AppNav = ({ handleRecipeSearch, mealName, setMealName }) => {
  const { enabled, setEnabled } = useContext(NetworkContext);
  const location = useLocation();
  return (
    <nav className="app-header">
      <Link to="/">
        <h1>Recipe buddy</h1>
      </Link>
      <div className="app-header-form">
        {location.pathname === '/' && (
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
        )}
        <label>
          Slow Network?
          <input
            type="checkbox"
            onChange={(e) => setEnabled(e.target.checked)}
            checked={enabled}
          />
        </label>
      </div>
    </nav>
  );
};
export default AppNav;
