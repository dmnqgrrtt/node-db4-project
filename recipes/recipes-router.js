const express = require("express");
const router = express.Router();
const Recipes = require("./recipes-model.js");
const db = require("../data/db-config");

router.get("/", (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.json(recipes);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get recipes' });
        });
});

router.get("/:id/shoppingList", validateId, (req, res) => {
    const { id } = req.params;

    Recipes.getShoppingList(id)
        .then(shoppingList => {
            res.json(shoppingList);
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to get the shopping list" })
        })
})

router.get("/:id/instructions", validateId, (req, res) => {
    const { id } = req.params;

    Recipes.getInstructions(id)
        .then(instructions => {
            res.json(instructions);
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to get the recipe instructions" })
        })
})

function validateId (req, res, next) {
    const { id } = req.params;

    db("recipes")
        .where({ id })
        .first()
        .then(recipe => {
            if(recipe) {
                next();
            } else {
                res.status(404).json({ message: 'Could not find recipe with given id.' })
            }
        })
}

module.exports = router;