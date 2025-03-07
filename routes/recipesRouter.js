import {Router} from 'express';
import { createRecipe, deleteRecipe, getAllRecipes, getRecipebyID, recipeUpdate } from '../controller/recipeController.js';

const recipesRouter = Router();

recipesRouter.get('/recipes', getAllRecipes )

recipesRouter.get('/recipes/:id', getRecipebyID )

recipesRouter.post('/recipes', createRecipe )

recipesRouter.put('/recipes/:id', recipeUpdate )

recipesRouter.delete('/recipes/:id', deleteRecipe )

export default recipesRouter;