import React, { useState } from 'react';
import './Normalize.css';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RecipesList from './components/RecipesList';
import AppNav from './components/AppNav';

function App() {
  const [mealName, setMealName] = useState('');
  const [recipes, setRecipes] = useState([]);

  const fetchRecipeByName = async () => {
    try {
      const data = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
      );
      const json = await data.json();
      setRecipes(json && json.meals);
      console.log(json.meals);
    } catch (e) {
      console.log(e);
    }
  };

  const recipeSearch = (e) => {
    // prevent html form post.
    e.preventDefault();
    fetchRecipeByName();
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
          <Route path="/">
            <RecipesList recipes={recipes} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
