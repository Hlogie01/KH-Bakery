import React from 'react';

const RecipeDetail = ({ recipe, goBack }) => {
  if (!recipe) return <div>Recipe not found</div>;

  return (
    <div className="recipe-detail">
      <button onClick={goBack}>Back</button>
      <h2>{recipe.title}</h2>
      <img src={recipe.picture} alt={recipe.title} />
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Preparation Steps</h3>
      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;