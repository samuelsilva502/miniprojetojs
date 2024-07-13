import express from 'express';
import { getRecipesByType, getRecipesByTime, getRecipesByIngredients } from '../controllers/recipeController.js';

const router = express.Router();

router.get('/tipo', getRecipesByType);
router.get('/tempo', getRecipesByTime);
router.get('/ingredientes', getRecipesByIngredients);

export default router;
