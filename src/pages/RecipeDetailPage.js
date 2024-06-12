import React from 'react';
import { useParams, Link } from 'react-router-dom';
import baritoImage from '../images/barito.jpg';
import burgerImage from '../images/burger and fries.jpg';
import seafoodImage from '../images/seafood.jpg';
import pizzaImage from '../images/pizza.jpg';
import pasta1Image from '../images/pasta1.jpg';
import pastaImage from '../images/pasta.jpg';
import pancakesImage from '../images/pancakes.jpg';
import cheesecakeImage from '../images/cheesecake .jpg';
import saladImage from '../images/salad.jpg';
import orangeImage from '../images/Orange mocktail.jpg';
import mojitoImage from '../images/mojito mocktail.jpg';
import mangoImage from '../images/mango mocktail.jpg';
import thankyouImage from '../images/thanku.png';
import '../App.css'; // Ensure this imports the necessary CSS

const recipes = [
  {
    id: 1,
    title: 'Vegetable and Protein Wrap',
    shortDescription: 'A nutritious wrap that combines fresh, crunchy vegetables with a choice of protein.',
    ingredients: ['Soft tortillas', 'Diced vegetables (carrots, green peas, and others as preferred)', 'Protein of choice (chicken or tofu)', 'Seasonings (salt, pepper, and any other preferred spices)', 'Optional sauces or spreads (hummus, tzatziki, etc.)'],
    steps: [
      'Prepare the protein: If using chicken, cook it thoroughly until no longer pink. If using tofu, press to remove excess moisture and then sauté until golden.',
      'Cook the vegetables: Sauté the diced vegetables in a pan with some oil until they are tender.',
      'Season: Add your preferred spices to the cooked protein and vegetables.',
      'Warm the tortillas: Heat the tortillas slightly to make them pliable.',
      'Assemble the wraps: Spread your chosen sauce or spread on the tortillas, add the vegetable mixture and protein, and roll them up tightly.',
      'Serve: Cut each wrap in half diagonally and enjoy!'
    ],
    image: baritoImage,
    type: 'food'
  },
  {
    id: 2,
    title: 'Beef smash burger with fries',
    shortDescription: 'The ultimate juicy, crispy & grilled smashed burgers',
    ingredients: ['Frozen Fries', 'Ground Beef chick(aim for ground beef with 15% fat)', 'Hamburger buns', 'Yellow onion', 'Clarified butter', 'Spices', 'Tomato','lettice', 'Burger sauce'],
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
    image: burgerImage,
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
    image: seafoodImage,
    type: 'food'
  },
  {
    id: 4,
    title: 'Crispy Deep Crust Pepperoni Pizza',
    shortDescription: 'The old-fashioned deep-dish pepperoni pizza',
    ingredients: ['Pizza dough', 'Garlic cloves', 'pizza sauce', 'pepperoni', 'Olive oil', 'Mozzarella cheese', 'Italian seasoning'],
    steps: [
      'Preheat oven to 400 degrees. Brush cast-iron skillet with olive oil and dust with flour.',
      'If your pizza dough is not pre-rolled, use a floured surface and roll the dough out to fit your cast iron skillet.',
      'Press the pizza dough into the bottom and up the sides of the skillet, approximately halfway up.',
      'Brush the dough with olive oil and crushed garlic. Do not add any pizza toppings yet. Bake for 18-25 minutes or until the crust turns golden.',
      'While the crust bakes, chop the pepperoni into two small piles and set aside.',
      'Once the crust is golden brown, take it out of the oven.',
      'Spread the pizza sauce evenly over the crust.',
      'Add one half of the chopped pepperoni, then half of the shredded mozzarella cheese.',
      'Add the remaining chopped pepperoni (optional: save some to sprinkle on top before the final bake).',
      'Add the rest of the shredded mozzarella, then evenly place the fresh mozzarella slices around and add the fresh basil.',
      'Sprinkle Italian seasoning over the top of the cheese, adding the leftover chopped pepperoni if saved.',
      'Bake for an additional 15-20 minutes or until the crust is golden brown,',
      'Remove from oven and let cool for a few minutes before slicing and serving. Enjoy!'
    ],
    image: pizzaImage,
    type: 'food'
  },
  {
    id: 5,
    title: 'Pasta with Red Beans and Tomato',
    shortDescription: 'Pasta served with a hearty mix of red beans and fresh tomatoes',
    ingredients: ['Pasta of your choice', 'Cooked red beans (canned or pre-cooked)', 'Fresh tomatoes, diced', 'Garlic, minced', 'Olive oil', 'Salt and pepper to taste', 'Fresh herbs (parsley or basil), for garnish'],
    steps: [
      'Cook the pasta according to the package instructions until al dente.',
      'In a pan, heat olive oil over medium heat and sauté garlic until fragrant.',
      'Add the diced tomatoes and cooked red beans to the pan. Cook until the tomatoes are soft and the beans are heated through.',
      'Season with salt and pepper to your liking.',
      'Drain the pasta and add it to the pan with the tomato and bean mixture. Toss to combine.',
      'Serve hot, garnished with fresh herbs. Enjoy!'
    ],
    image: pasta1Image,
    type: 'food'
  },
  {
    id: 6,
    title: 'Creamy Chicken Pasta with Sun-Dried Tomatoes and Spinach',
    shortDescription: 'A comforting and flavorful chicken pasta dish',
    ingredients: ['Penne pasta', 'Chicken breast, cut into strips', 'Sun-dried tomatoes, chopped', 'Fresh spinach leaves', 'Heavy cream (or a lighter alternative like half-and-half)', 'Parmesan cheese, grated', 'Olive oil', 'Salt and pepper to taste', 'Herbs (such as basil or oregano), for garnish'],
    steps: [
      'Cook the penne pasta according to the package instructions until al dente; drain and set aside.',
      'In a large skillet, heat olive oil over medium heat and cook the chicken strips until golden brown and cooked through.',
      'Add the sun-dried tomatoes to the skillet and sauté for a couple of minutes.',
      'Stir in the spinach leaves and cook until they begin to wilt.',
      'Lower the heat and pour in the heavy cream, stirring well.',
      'Add the cooked pasta to the skillet and toss to combine with the creamy sauce',
      'Sprinkle with grated Parmesan cheese and season with salt and pepper.',
      'Serve hot, garnished with fresh herbs. Enjoy!',
      'Enjoy your delicious homemade creamy chicken pasta!'
    ],
    image: pastaImage,
    type: 'food'
  },
  {
    id: 7,
    title: 'Classic Waffles',
    shortDescription: 'Perfect waffles for any day of the week!',
    ingredients: ['2 cups all-purpose flour', '1 teaspoon salt', '4 teapoons baking powder', '2 tablespoons white suger', '2 Eggs', '1.5 cups warm Milk', 'Butter', '1 teaspoon vanilla extract'],
    steps: [
      'Gather all ingridients',
      'In a large bowl, mix together flour,salt,suger and baking powder; ster aside. Preheat waffle iron to desired temperature.',
      'In a separate bowl, beat the eggs. Stir in the milk, butter and vanilla.',
      'Pour the milk mixture into the flour mixture; beat until blended.',
      'Pour about 1/4 cup of batter onto the center of the waffle iron.',
      'Cook for 3-5 minutes or until golden brown.',
      'Serve with your favorite toppings',
    ],
    image: pancakesImage,
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
    image: cheesecakeImage,
    type: 'food'
  },
  {
    id: 9,
    title: 'Green Delight salad',
    shortDescription: 'A quick and nutritious Avocado and spinach tomato salad.',
    ingredients: ['Baby spinach', 'Tomatoes', 'Avocado', 'Goat cheesd', 'Walnuts', 'Basil leaves', 'Olive oil', 'Sea salt'],
    steps: [
      'Start by washing the baby spinach leaves thoroughly. Pat them dry with clean kitchen towel or paper towel',
      'Next, slice the tomstoes into bitr-sized pieces.',
      'Cut the avocado into small pieces.',
      'Crumble the goat cheese into small pieces.',
      'Assemble all the ingredients in a large bowl.',
      'Drizzle with olive oil and sprinkle with sea salt. Toss gently to combine',
      'Garnish with fresh basil leaves and serve immediately. Enjoy!',
    ],
    image: saladImage,
    type: 'food'
  },
  {
    id: 10,
    title: 'Orange Juice Mocktail',
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
    image: orangeImage,
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
    image: mojitoImage,
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
    image: mangoImage,
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
      <img src={thankyouImage} alt="Thank You" className="thank-you-image" />
      <Link to="/">Back to Recipes List</Link>
      
    </div>
  );
};

export default RecipeDetailPage;
