import React from 'react';
import { Link } from 'react-router-dom';

const recipes = [
  {
    id: 1,
    title: 'Spaghetti Carbonara',
    shortDescription: 'A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.',
    ingredients: ['Spaghetti', 'Eggs', 'Cheese', 'Pancetta', 'Pepper'],
    steps: [
      'Cook spaghetti according to package instructions.',
      'In a bowl, mix eggs and cheese.',
      'Fry pancetta until crispy.',
      'Mix spaghetti with pancetta and egg mixture.',
      'Serve with extra cheese and pepper on top.'
    ],
    image: 'https://example.com/spaghetti.jpg'
  },
  {
    id: 2,
    title: 'Chicken Curry',
    shortDescription: 'A flavorful and spicy chicken curry.',
    ingredients: ['Chicken', 'Onions', 'Tomatoes', 'Garlic', 'Ginger', 'Spices'],
    steps: [
      'Sauté onions, garlic, and ginger.',
      'Add spices and cook until fragrant.',
      'Add chicken and brown.',
      'Add tomatoes and simmer until chicken is cooked.',
      'Serve with rice.'
    ],
    image: 'https://example.com/chicken-curry.jpg'
  },
  {
    id: 3,
    title: 'Beef Tacos',
    shortDescription: 'Delicious beef tacos with fresh toppings.',
    ingredients: ['Beef', 'Taco shells', 'Lettuce', 'Tomatoes', 'Cheese', 'Sour cream'],
    steps: [
      'Cook beef with spices until browned.',
      'Warm taco shells.',
      'Assemble tacos with beef and toppings.',
      'Serve with salsa and sour cream.'
    ],
    image: 'https://example.com/beef-tacos.jpg'
  },
  {
    id: 4,
    title: 'Vegetable Stir-fry',
    shortDescription: 'A healthy and quick vegetable stir-fry.',
    ingredients: ['Vegetables', 'Soy sauce', 'Garlic', 'Ginger', 'Oil'],
    steps: [
      'Heat oil in a pan.',
      'Add garlic and ginger and cook until fragrant.',
      'Add vegetables and stir-fry until tender.',
      'Add soy sauce and mix well.',
      'Serve with rice or noodles.'
    ],
    image: 'https://example.com/vegetable-stirfry.jpg'
  },
  {
    id: 5,
    title: 'Pancakes',
    shortDescription: 'Fluffy pancakes perfect for breakfast.',
    ingredients: ['Flour', 'Eggs', 'Milk', 'Baking powder', 'Sugar'],
    steps: [
      'Mix flour, baking powder, and sugar.',
      'Add eggs and milk and mix until smooth.',
      'Cook pancakes on a griddle until golden brown.',
      'Serve with syrup and butter.'
    ],
    image: 'https://example.com/pancakes.jpg'
  },
  {
    id: 6,
    title: 'Caesar Salad',
    shortDescription: 'A classic Caesar salad with homemade dressing.',
    ingredients: ['Romaine lettuce', 'Croutons', 'Parmesan cheese', 'Caesar dressing'],
    steps: [
      'Chop lettuce and place in a bowl.',
      'Add croutons and Parmesan cheese.',
      'Toss with Caesar dressing.',
      'Serve immediately.'
    ],
    image: 'https://example.com/caesar-salad.jpg'
  },
  {
    id: 7,
    title: 'Chocolate Cake',
    shortDescription: 'Rich and moist chocolate cake.',
    ingredients: ['Flour', 'Sugar', 'Cocoa powder', 'Baking powder', 'Eggs', 'Milk', 'Butter'],
    steps: [
      'Mix dry ingredients together.',
      'Add eggs, milk, and melted butter and mix until smooth.',
      'Pour batter into a cake pan and bake.',
      'Let cool and frost with chocolate icing.'
    ],
    image: 'https://example.com/chocolate-cake.jpg'
  },
  {
    id: 8,
    title: 'Tomato Soup',
    shortDescription: 'A creamy and comforting tomato soup.',
    ingredients: ['Tomatoes', 'Onions', 'Garlic', 'Cream', 'Basil'],
    steps: [
      'Sauté onions and garlic until soft.',
      'Add tomatoes and cook until they break down.',
      'Blend until smooth and add cream.',
      'Simmer and season with basil.',
      'Serve with crusty bread.'
    ],
    image: 'https://example.com/tomato-soup.jpg'
  },
  {
    id: 9,
    title: 'Tomato Soup',
    shortDescription: 'A creamy and comforting tomato soup.',
    ingredients: ['Tomatoes', 'Onions', 'Garlic', 'Cream', 'Basil'],
    steps: [
      'Sauté onions and garlic until soft.',
      'Add tomatoes and cook until they break down.',
      'Blend until smooth and add cream.',
      'Simmer and season with basil.',
      'Serve with crusty bread.'
    ],
    image: 'https://example.com/tomato-soup.jpg'
  }
];

const RecipesListPage = () => {
  return (
    <div className="container">
      <h1>Recipes List</h1>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-item">
            <img src={recipe.image} alt={recipe.title} className="recipe-image" />
            <div className="recipe-content">
              <h2><Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link></h2>
              <p>{recipe.shortDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipesListPage;
