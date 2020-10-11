import React from 'react'; 



{/* The arrow function simply allows you to write functions with a shorter syntax */}
const Recipe = ({title, calories, image, ingredients}) => {
  return(
    <div className='Recipe'>
      <h1>{title}</h1>
      <p>{calories} Calories per serving</p>
      <ul>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <img src={image} alt=""/>

    </div>
  );
}

{/* We export so we can import Recipe in another file */}
export default Recipe;