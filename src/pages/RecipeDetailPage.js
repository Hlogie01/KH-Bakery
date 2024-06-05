import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RecipeDetail from '../components/RecipeDetail';

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

const RecipeDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = initialRecipes.find((recipe) => recipe.id === parseInt(id, 10));

  return (
    <RecipeDetail recipe={recipe} goBack={() => navigate('/')} />
  );
};

export default RecipeDetailPage;