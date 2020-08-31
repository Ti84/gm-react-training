import React from 'react';
import './Normalize.css';
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import Recipes from './components/Recipes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Recipes path="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
