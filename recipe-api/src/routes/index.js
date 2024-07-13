import express from 'express';
import recipeRoutes from './reciperoutes.js';

const router = express.Router();

router.use('/receitas', recipeRoutes);

export default router;
