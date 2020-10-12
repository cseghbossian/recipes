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
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("vegan");

  {/* The Effect Hook lets you perform side effects in function components.*/}
  {/* useEffect will run everytime something in the brackets changes. [query] means it will run every time query changes */}  
  {/* Empty brackets woule make useEffect run only once when loading page */}
  useEffect(  () => {
    getRecipes();
  }, [query]);

  {/* An asynchronous call allows following code to be executed immediately without waiting */}
  {/* The 'await' operator is used to wait for a Promise. It can only be used inside an async function */}
  {/* The 'fetch' method retrieves data from a URL. There are many options. */}
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  {/* The 'e' means Event! In this case, the event is typing in the search box. We pass the event as a prop to updateSearch */}
  {/* This method updates search for every new char written. */}
  const updateSearch = e => {
    setSearch(e.target.value);
  }

  {/* This method runs everytime our search form is submitted so the query is only updated when pressing the search button */}
  {/* preventDefault keeps the page from reloading */}
  {/* We setSearch back to empty string so the search box is empty after loading new recipes */}
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return(
    <div className="app">
      {/* We assign a className to each HTML element */}
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type='text' value={search} onChange={updateSearch}/>
        <button className="search-button" type='Submit'>Search</button>
      </form>
        {/* For title={recipe.recipe.label}, the first recipe refers to one recipe in the recipes array. */}
        {/* The second .recipe and .label are from the JSON tree called data.hits */}
        {/* We include a unique key for each recipe to improve performance */}
        <div className="recipes">
          {recipes.map(recipe => (
            <Recipe 
            key={recipe.recipe.label}
            title={recipe.recipe.label} 
            calories={Math.round(recipe.recipe.calories / recipe.recipe.yield/5)*5}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
    </div>
  );

}

export default App;
