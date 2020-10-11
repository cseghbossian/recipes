import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const APP_ID = 'b13bf049';
  const APP_KEY = '30b97669ea8643014a5967d0e402ba50';

  const EXAMPLE_REQ = 
  `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  {/* The State Hook */}
  const [counter, setCounter] = useState(0);

  {/* The Effect Hook lets you perform side effects in function components.*/}
  {/*The second parameter (the empty brackets) keeps useEffect from running every single time our page re-renders */}

  useEffect(() => {
    console.log("Effect has been run once!");
  }, []);

  return(
    <div className="app">
      {/* We assign a className to each HTML element */}
      <form className="search-form">
        <input className="search-bar" type='text'/>
        <button className="search-button" type='Submit'>Search Recipes</button>
      </form>
      <h2 onClick = {() => setCounter(counter+1)}>{counter}</h2>
    </div>
  );
}

export default App;
