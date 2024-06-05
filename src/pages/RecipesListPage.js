import React, { useState } from 'react';
import RecipeList from '../components/RecipeList';

const initialRecipes = [
  {
    id: 1,
    title: 'Spaghetti Carbonara',
    shortDescription: 'A classic Italian pasta dish.',
    ingredients: ['Spaghetti', 'Eggs', 'Parmesan cheese', 'Pancetta', 'Black pepper'],
    steps: ['Boil pasta', 'Fry pancetta', 'Mix eggs and cheese', 'Combine all ingredients'],
    picture: 'https://via.placeholder.com/150',
  },
  // Add more recipes as needed
];

const RecipesListPage = () => {
  const [recipes] = useState(initialRecipes);

  return (
    <div className="recipes-list-page">
      <h1>Recipes</h1>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default RecipesListPage;
