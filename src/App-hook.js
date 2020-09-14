import React, { useState } from 'react';
import './Normalize.css';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RecipesList from './components/RecipesList';
import AppNav from './components/AppNav';
import RecipeFilters from './components/RecipeFilters';
import RecipeDetails from './components/RecipeDetails';

function App() {
  const [mealName, setMealName] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [filter, setFilter] = useState('');

  const fetchRecipes = async (url) => {
    try {
      const data = await fetch(url);
      const json = await data.json();
      setRecipes(json && json.meals);
    } catch (e) {
      console.error(e);
    }
  };

  const recipeSearch = (e) => {
    e.preventDefault();
    setFilter('');
    fetchRecipes(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
    );
  };

  const handleFilter = ({ target }) => {
    setFilter(target.value);
    setMealName('');
    fetchRecipes(
      `https://www.themealdb.com/api/json/v1/1/filter.php?${target.getAttribute(
        'data-filter'
      )}=${target.value}`
    );
  };

  return (
    <div className="App">
      <BrowserRouter>
        <AppNav
          handleRecipeSearch={recipeSearch}
          mealName={mealName}
          setMealName={setMealName}
        />
        <Switch>
          <Route exact path="/">
            <RecipeFilters handleFilter={handleFilter} activeFilter={filter} />
            <RecipesList recipes={recipes} />
          </Route>
          <Route path="/:recipeId">
            <RecipeDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
