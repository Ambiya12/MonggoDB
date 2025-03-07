

export const VerifyRecipeFields = (req, res, next) => {
    try {
        const { title, category, country, description, ingredients, steps, author } = req.body;
        if (!title || !category || !country || !description || !ingredients || !steps || !author) {
            return res.json('All fields are required');
        }
        next();
    }
    catch (err) {
        return res.status(400).json('Internal server error');
    }
}