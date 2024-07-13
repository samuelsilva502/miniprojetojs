import { recipes } from '../data/recipes.js';

export const getRecipesByType = (req, res) => {
  const { type } = req.query;
  const filteredRecipes = recipes.filter(recipe => recipe.type === type);
  res.json(filteredRecipes);
};

export const getRecipesByTime = (req, res) => {
  const { time } = req.query;
  const filteredRecipes = recipes.filter(recipe => recipe.time.includes(time));
  res.json(filteredRecipes);
};

export const getRecipesByIngredients = (req, res) => {
  const { ingredients } = req.query;
  const ingredientsArray = ingredients.split(',');
  const filteredRecipes = recipes.filter(recipe =>
    ingredientsArray.every(ingredient => recipe.ingredients.includes(ingredient))
  );
  res.json(filteredRecipes);
};
