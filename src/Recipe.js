import React from 'react'; 



{/* The arrow function simply allows you to write functions with a shorter syntax */}
const Recipe = ({title, calories, image}) => {
  return(
    <div>
      <h1>{title}</h1>
      <p>{calories}</p>
      <img src={image} alt=""/>

    </div>
  );
}

{/* We export so we can import in another file */}
export default Recipe;