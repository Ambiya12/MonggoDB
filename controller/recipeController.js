import Recipe from "../models/recipe.js";

export const getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find().populate("author");
        if (recipes.length < 1) {
            return res.status(404).json("No recipes found");
        }
        return res.status(200).json(recipes);
    } catch (err) {
        return res.status(500).json("Internal server error");
    }
}

export const getRecipebyID = async (req, res) => {
    const { id } = req.params;
    try {
        const recipeByID = await Recipe.findById(id).populate("author");
        if (!recipeByID) {
            return res.status(404).json("No recipe found");
        }
        return res.status(200).json(recipeByID);
    } catch (err) {
        return res.status(500).json("Internal server error");
    }
}

export const createRecipe = async (req, res) => {
    console.log(req.body);
    const { title, category, country, description, ingredients, steps, author } = req.body;
    try {
        const newRecipe = await Recipe.create(req.body);
        return res.status(201).json(newRecipe);
    } catch (err) {
        return res.status(500).json("Internal server error");
    }
}

export const recipeUpdate = async (req, res) => {
    const { id } = req.params;
    const { title, category, country, description, ingredients, steps, author } = req.body;
    try {
        const recipeByID = await Recipe.findByIdAndUpdate(id, req.body, { new: true });
        if (!recipeByID) {
        return res.status(404).json("No recipe found");
        }
        recipeByID.save();
        return res.json(recipeByID);
    } catch (err) {
        return res.status(500).json("Internal server error");
    }
}

export const deleteRecipe = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(id);
        if (!deletedRecipe) {
        return res.status(404).json("No recipe found");
        }
        return res.status(200).json("Recipe deleted successfully");
    } catch (err) {
        return res.status(500).json("Internal server error");
    }
}