import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppNav from './components/AppNav';
import RecipeDetails from './components/RecipeDetails';
import RecipesList from './components/RecipesList';
import RecipeFilters from './components/RecipeFilters';
import './Normalize.css';
import './App.css';

class App extends React.Component {
  state = {
    mealName: '',
    recipes: [],
    filter: '',
  };

  fetchRecipes = async (url) => {
    try {
      const data = await fetch(url);
      const json = await data.json();
      this.setState({ ...this.state, recipes: json && json.meals });
    } catch (e) {
      console.error(e);
    }
  };

  recipeSearch = (e) => {
    e.preventDefault();
    this.setState({ ...this.state, filter: '' });
    this.fetchRecipes(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.state.mealName}`
    );
  };

  handleFilter = ({ target }) => {
    this.setState({ ...this.state, filter: target.value, mealName: '' });
    this.fetchRecipes(
      `https://www.themealdb.com/api/json/v1/1/filter.php?${target.getAttribute(
        'data-filter'
      )}=${target.value}`
    );
  };

  render() {
    const { mealName, filter, recipes } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <AppNav
            handleRecipeSearch={this.recipeSearch}
            mealName={mealName}
            setMealName={this.setMealName}
          />
          <Switch>
            <Route exact path="/">
              <RecipeFilters
                handleFilter={this.handleFilter}
                activeFilter={filter}
              />
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
}

export default App;
