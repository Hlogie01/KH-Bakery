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
    title: 'Beef smash burger with fries',
    shortDescription: 'The ultimate juicy, crispy & grilled smashed burgers',
    ingredients: ['Frosen Fries', 'Ground Beef chick(aim for ground beef with 15% fat)', 'Hamburger buns', 'Yellow onion', 'Clarified butter', 'Spices', 'Tomato','lettice', 'Burger sauce'],
    steps: [
      'Preheat the grill. Preheat your flat-top grill, griddle, or 12" cast iron skillet to medium-high heat.',
      'Form the meat patties. Divide the ground beef into 8 even sections. Loosely form the meat into balls and set aside.',
      'Make the homemade burger sauce. Combine all ingredients for the burger sauce in a small bowl and stir to combine.',
      'Grill the smashburgers. Season the flattened meat patties with Beef Seasoning and cook for 3-4 minutes. Flip the burgers, add a slice of American cheese to each patty, and continue grilling for 3-4 minutes.',
      'Toast the buns. While the burgers are cooking, melt more clarified butter on the cast iron skillet next to the burgers and place the buns cut side down on the grill. Brush more butter on the tops of the buns and toast for 1-2 minutes until the buns begin to turn golden brown. Do not flip.',
      'Assemble the smashburgers. Remove the buns and meat from the grill. Place a dollop of burger sauce on the bottom bun, top with a cheesy patty and grilled onions, and finish with a bun. You can also make these with a double patty and 4 buns, if desired.',
      'Prepare where you are going to deep fry your fries.',
      'fry your fries on a high heat so that can be crispy. Fry for 5min.',
      'Serve with your smash burger and enjoy!'
    ],
    image: chickenCurryImage,
    type: 'food'
  },
  {
    id: 3,
    title: 'Cajun Seafood Boil',
    shortDescription: 'Delicious and heart warming seafood bowl with garlic butter sauce.',
    ingredients: ['Water', 'Beer(optional)', 'Cajun & Old Bay seasoning', 'onion & lemon', 'snow crab leg clusters', 'shrimps', 'baby potatoes & corns'],
    steps: [
      'Prepare the boil. In a large stockpot over medium-high heat, combine the water and beer (if using). Bring the liquid to a boil. Season the boil with the Cajun seasoning, Old Bay seasoning, and a few dashes of hot sauce- to taste. Add the sliced onion and lemon wedges into the pot. Stir to combine and let the mixture boil for 15 minutes.',
      'Add the andouille & potatoes into the pot, stirring well. Let the andouille and potatoes cook for 15-20 minutes, until the potatoes are fork-tender.',
      'Add the seafood & corn. Nestle the snow crab clusters into the pot along with the shrimp and corn on the cob. Continue boiling for another 5-7 minutes, cooking until the shrimp is pink. Meanwhile, make the sauce.',
      'Make the garlic butter sauce. On a separate burner, in a small saucepan over medium heat, combine the butter, garlic, lemon juice, Old Bay seasoning, parsley, Cajun seasoning, smoked paprika, and hot sauce- to taste. Stir and simmer the sauce until the butter melts and the sauce is well combined, about 5-7 minutes.',
      'Assemble cajun seafood boil with sauce. Line an extra large baking sheet with newspaper or foil/parchment paper. Use a spider strainer to remove the seafood boil contents from the pot and place onto the prepared baking sheet along with the hard boiled eggs (if using). Pour the garlic butter sauce over the seafood boil ingredients and toss to coat.',
      'Serve this Cajun seafood boil immediately as-is on the baking sheet or divide the boil onto individual plates to serve if you prefer. Enjoy!'
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
    title: 'Cheese Cake',
    shortDescription: 'The best CheeseCake Recipe!',
    ingredients: ['Graham crackers( crushed into crumbs)', 'Butter', 'Salt & Suger', 'Cream Cheese', 'Vanilla extract', 'Eggs'],
    steps: [
      'Prepare the pan. Double wrap the bottom of your pan with foil, ensuring the layers are overlapped to prevent water from getting into the pan. Preheat the oven to 350F.',
      'Make the crust. Combine the graham cracker crumbs, butter, sugar, and salt. Press into the bottom and up the sides of the pan.',
      'Bake the crust. Bake for 8-10 minutes, until lightly golden. Set aside.',
      'Add basil and cream and heat through.',
      'Make the cheesecake filling. Mix the cream cheese and sugar on medium until smooth. Turn the speed to low and add the sour cream and vanilla. Scrape the sides of the bowl as necessary. Add the eggs one at a time, until just mixed. Pour the filling into the crust and spread evenly',
      'Add the water bath. Place the springform pan in another large pan. Fill 3/4″ inch deep with very hot water.',
      'Bake. Bake the cheesecake for 60-70 minutes, until the center is almost set. Run a knife around the rim to gently loosen the cake.',
      'Cool. Cool the homemade cheesecake at room temperature for an hour, then cover and refrigerate for 6 hours or overnight.',
      'Serve. Remove the sides of the springform pan and transfer the cheesecake to a serving.'
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
