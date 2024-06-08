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
import welcomeImage from '../images/welcome.png';  // Add your welcome image
import '../App.css';

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
    title: 'Orange Juice MocktailL',
    shortDescription: 'A refreshing fancy, fizzy and never dull, my orange mocktail.',
    ingredients: ['Mint leaves', 'Lemon Juice', 'Orange Juice', 'Ginger Ale', 'Apple CCider Vineger', 'Ice', 'Simple syrup(Optional)'],
    steps: [
      'Add orange juice, lemon juice, apple cider vinegar and simple syrup (if using) into the cocktail shaker.',
      'Clap the mint in your hands to release the scent, then place in a cocktail',
      'Add some ice cubes to the shaker and shake until combined.',
      'Slowly pour into an ice-filled glass and top with ginger ale.',
      'Garnish with orange slices and mint or whatever you have available.',
      'Serve and Enjoy!'
    ],
    image: mojitoImage,
    type: 'drink'
  },
  {
    id: 11,
    title: 'Mojto Mocktail',
    shortDescription: 'A classic homemade mojito mocktail.',
    ingredients: ['Lime', 'Simple syrup', 'fresh mint leaves', 'ice cubes', 'club soda', 'fresh mint sprig'],
    steps: [
      'Add limes to glass. Add 5 of the lime wedges and the syrup to a tall glass (highball).',
      'Muddle limes. Muddle the limes to release the juices and oil.',
      'Add mint. Add the mint leaves.',
      'Top glass with ice and soda. Fill the glass with ice and top it with the soda.',
      'Stir. Give the drink a stir to combine the ingredients.',
      'Slap the mint. Slap the mint sprig in your palm a couple of times to release some oils.',
      'Garnish. Garnish the drink with the mint sprig and the last lime wedge.',
      'Serve. Serve immediately!'
    ],
    image: lemonadeImage,
    type: 'drink'
  },
  {
    id: 12,
    title: 'Mango Mojito Mocktail',
    shortDescription: 'The flavors of mango, mint, and lime and indeed shouting SUMMER! ',
    ingredients: ['half a cup of mango puree', '2 tablespoon water', '1 lime quartered', '6 mint leaves', '1 cup soda water or any sparkling drink (kombucha is also great)', 'Extra mint and lime'],
    steps: [
      'To release the juices, muddle lime slices in your glass or pitcher.',
      'Holding mint in your palms, clap them together until the aroma emerges. Add to the lime. Apply light pressure with the muddler.',
      'Pour your mango puree into the lime and mint mixture.',
      'Gently whisk the mango puree after adding it to the lime and mint mixture.',
      'Ice should be put in the glass. Add sparkling water (or a substitute) on top and gently stir.',
      'Lime wheel and mint are used as a garnish.'
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
      <div className="welcome-section">
        <img src={welcomeImage} alt="Welcome" />
        <div className="welcome-text">
          <h2>Fantasy Flavors Recipe Book</h2>
          <p>Welcome to Fantasy Flavors, your gateway to culinary creativity! Explore a world of delicious possibilities with our curated collection of recipes. From classic favorites to innovative creations, our recipe book is your go-to resource for culinary inspiration brought to you by Lehlogonolo and Kimberly. Let's embark on a flavorful journey together!</p>
        </div>
      </div>

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
