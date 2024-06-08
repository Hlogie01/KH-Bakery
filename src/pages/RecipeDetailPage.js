import React from 'react';
import { useParams, Link } from 'react-router-dom';
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
import '../App.css'; // Ensure this imports the necessary CSS

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
    shortDescription: 'A comforting bowl of tomato soup.',
    ingredients: ['Tomatoes', 'Onions', 'Garlic', 'Basil', 'Cream'],
    steps: [
      'Sauté onions and garlic.',
      'Add tomatoes and cook until soft.',
      'Blend until smooth and return to pot.',
      'Add basil and cream and heat through.',
      'Serve with crusty bread.'
    ],
    image: tomatoSoupImage,
    type: 'food'
  },
  {
    id: 9,
    title: 'Garden Salad',
    shortDescription: 'A fresh and healthy garden salad.',
    ingredients: ['Lettuce', 'Tomatoes', 'Cucumbers', 'Carrots', 'Salad dressing'],
    steps: [
      'Chop all vegetables and place in a bowl.',
      'Toss with your favorite salad dressing.',
      'Serve immediately.'
    ],
    image: saladImage,
    type: 'food'
  },
  {
    id: 10,
    title: 'Mojito Mocktail',
    shortDescription: 'A refreshing non-alcoholic mojito.',
    ingredients: ['Mint leaves', 'Lime', 'Sugar', 'Soda water', 'Ice'],
    steps: [
      'Muddle mint leaves and sugar in a glass.',
      'Add lime juice and ice.',
      'Top with soda water and stir.',
      'Garnish with mint leaves and a lime wedge.'
    ],
    image: mojitoImage,
    type: 'drink'
  },
  {
    id: 11,
    title: 'Lemonade',
    shortDescription: 'A classic homemade lemonade.',
    ingredients: ['Lemons', 'Sugar', 'Water', 'Ice'],
    steps: [
      'Juice the lemons and pour into a pitcher.',
      'Add sugar and water and stir until dissolved.',
      'Add ice and serve chilled.'
    ],
    image: lemonadeImage,
    type: 'drink'
  },
  {
    id: 12,
    title: 'Hot Chocolate',
    shortDescription: 'A warm and cozy hot chocolate.',
    ingredients: ['Milk', 'Cocoa powder', 'Sugar', 'Vanilla extract', 'Whipped cream'],
    steps: [
      'Heat milk in a saucepan.',
      'Add cocoa powder and sugar and whisk until smooth.',
      'Add vanilla extract and stir.',
      'Pour into mugs and top with whipped cream.'
    ],
    image: hotChocolateImage,
    type: 'drink'
  }
];

const RecipeDetailPage = () => {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === parseInt(id));

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="container recipe-detail">
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="recipe-detail-image" />
      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Preparation Steps</h2>
      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <Link to="/">Back to Recipes List</Link>
    </div>
  );
};

export default RecipeDetailPage;
