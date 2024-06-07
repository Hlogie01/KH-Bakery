import React from 'react';
import { Link } from 'react-router-dom';
import spaghettiImage from '../images/barito.jpg';
import chickenCurryImage from '../images/burger and fries.jpg';
import beefTacosImage from '../images/seafood.jpg';
import vegetableStirfryImage from '../images/pizza.jpg';
import pancakesImage from '../images/pasta1.jpg';
import caesarSaladImage from '../images/pasta.jpg';
import chocolateCakeImage from '../images/pancakes.jpg';
import tomatoSoupImage from '../images/cheesecake .jpg';
import saladImage from '../images/salad.jpg';
import mojitoImage from '../images/Orange mocktail.jpg';
import lemonadeImage from '../images/mojito mocktail.jpg';
import hotChocolateImage from '../images/mango mocktail.jpg';
import WelcomeImage from '../images/welcome .png';
import '../App.css';

// Welcome section component
const WelcomeSection = () => (
  <div className="welcome-section">
    <img src={WelcomeImage} alt="Welcome to our recipe book" className="welcome-image" />
    <div className="welcome-text">
      <h2>Welcome to Fantasy Flavors Recipe Book</h2>
      <p>Welcome to Fantasy Flavors, your gateway to culinary creativity! Explore a world of delicious possibilities with our curated collection of recipes. From classic favorites to innovative creations, our recipe book is your go-to resource for culinary inspiration. Let's embark on a flavorful journey together!</p>
    </div>
  </div>
);


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
    image: spaghettiImage,
    type: 'food'
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
    image: chickenCurryImage,
    type: 'food'
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
    image: beefTacosImage,
    type: 'food'
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
    image: vegetableStirfryImage,
    type: 'food'
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
    image: pancakesImage,
    type: 'food'
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
    image: caesarSaladImage,
    type: 'food'
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
    image: chocolateCakeImage,
    type: 'food'
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
    image: tomatoSoupImage,
    type: 'food'
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
    image: saladImage,
    type: 'food'
  },
  {
    id: 10,
    title: 'Mojito',
    shortDescription: 'A refreshing cocktail with mint, lime, and rum.',
    ingredients: ['Mint leaves', 'Lime', 'Rum', 'Sugar', 'Soda water'],
    steps: [
      'Muddle mint leaves and lime in a glass.',
      'Add sugar and rum and stir well.',
      'Fill the glass with ice and top with soda water.',
      'Garnish with a mint sprig and lime wedge.'
    ],
    image: mojitoImage,
    type: 'drink'
  },
  {
    id: 11,
    title: 'Lemonade',
    shortDescription: 'A classic, refreshing lemonade.',
    ingredients: ['Lemons', 'Water', 'Sugar'],
    steps: [
      'Juice the lemons and combine with water and sugar.',
      'Stir until the sugar dissolves.',
      'Chill in the refrigerator before serving.',
      'Serve over ice with lemon slices.'
    ],
    image: lemonadeImage,
    type: 'drink'
  },
  {
    id: 12,
    title: 'Hot Chocolate',
    shortDescription: 'A warm and comforting hot chocolate.',
    ingredients: ['Milk', 'Cocoa powder', 'Sugar', 'Vanilla extract', 'Whipped cream'],
    steps: [
      'Heat milk in a saucepan until warm.',
      'Whisk in cocoa powder and sugar until dissolved.',
      'Add vanilla extract and stir well.',
      'Pour into mugs and top with whipped cream.'
    ],
    image: hotChocolateImage,
    type: 'drink'
  }
];

const RecipesListPage = () => {
  const foodRecipes = recipes.filter(recipe => recipe.type === 'food');
  const drinkRecipes = recipes.filter(recipe => recipe.type === 'drink');

  return (
    <div className="container">
      <WelcomeSection />
      <h1>Our Recipes</h1>

      <h2>Food</h2>
      <div className="recipe-list">
        {foodRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe-item">
            <img src={recipe.image} alt={recipe.title} className="recipe-image" />
            <div className="recipe-content">
              <h2><Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link></h2>
              <p>{recipe.shortDescription}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Drinks</h2>
      <div className="recipe-list">
        {drinkRecipes.map((recipe) => (
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