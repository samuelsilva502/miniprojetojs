import { recipes } from '../data/recipes.js';


export const getRecipesByType = (req, res) => {
  const { tipo } = req.query; 
  if (!tipo) {
    return res.status(400).json({ error: 'O parâmetro "tipo" é obrigatório' });
  }
  
  const filteredRecipes = recipes.filter(recipe => recipe.type === tipo);
  res.json(filteredRecipes);
};


export const getRecipesByTime = (req, res) => {
  const { tempo } = req.query; 
  if (!tempo) {
    return res.status(400).json({ error: 'O parâmetro "tempo" é obrigatório' });
  }

  const filteredRecipes = recipes.filter(recipe => recipe.time.includes(tempo));
  res.json(filteredRecipes);
};


export const getRecipesByIngredients = (req, res) => {
  const { ingredientes } = req.query; 
  if (!ingredientes) {
    return res.status(400).json({ error: 'O parâmetro "ingredientes" é obrigatório' });
  }

  const ingredientsArray = ingredientes.split(',');
  const filteredRecipes = recipes.filter(recipe =>
    ingredientsArray.every(ingredient => recipe.ingredients.includes(ingredient))
  );
  res.json(filteredRecipes);
};
