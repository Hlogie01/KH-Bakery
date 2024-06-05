import React from 'react';
import { Link } from 'react-router-dom';

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-item">
          <h2>{recipe.title}</h2>
          <p>{recipe.shortDescription}</p>
          <Link to={`/recipe/${recipe.id}`}>View Recipe</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
