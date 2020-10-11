import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const APP_ID = 'b13bf049';
  const APP_KEY = '30b97669ea8643014a5967d0e402ba50';

  const EXAMPLE_REQ = 
  `https://api.edamam.com/search?q=vegan&app_id=${APP_ID}&app_key=${APP_KEY}`;

  {/* The State Hook lets you make a state (variable) and update it*/}
  const [recipes, setRecipes] = useState([]);

  {/* The Effect Hook lets you perform side effects in function components.*/}
  {/* The second parameter (the empty brackets) keeps useEffect from running every single time our page re-renders */}
  {/* useEffect will run everytime something in the brackets changes. [counter] means it will run every time counter changes */}
  useEffect(  () => {
    getRecipes();
  }, []);

  {/* An asynchronous call allows following code to be executed immediately without waiting */}
  {/* The 'await' operator is used to wait for a Promise. It can only be used inside an async function */}
  {/* The 'fetch' method retrieves data from a URL. There are many options. */}
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=vegan&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  return(
    <div className="app">
      {/* We assign a className to each HTML element */}
      <form className="search-form">
        <input className="search-bar" type='text'/>
        <button className="search-button" type='Submit'>Search Recipes</button>
      </form>
        {/* For title={recipe.recipe.label}, the first recipe refers to one recipe in the recipes array. */}
        {/* The second .recipe and .label are from the JSON tree called data.hits */}
        {/* We include a unique key for each recipe to improve performance */}
        { recipes.map(recipe => (
          <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          />
        ))}
    </div>
  );

}

export default App;
