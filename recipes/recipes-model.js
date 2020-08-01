const db = require("../data/db-config");
const { select } = require("../data/db-config");

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions

};

function getRecipes() {
    return db("recipes");
}

function getShoppingList(id) {
    return db("recipes_ing as ri")
        .join("recipes as r", "r.id", "ri.recipe_id")
        .join("ingredients as i", "i.id", "ri.ing_id")
        .select("r.recipe_name", "i.ing_name as ingredient", "ri.quantity")
        .where({ recipe_id: id })
}

function getInstructions(id) {
    return db("instructions as i")
        .join("recipes as r", "r.id", "i.recipe_id")
        .select("r.recipe_name", "i.step_number", "i.directions")
        .where({recipe_id: id})
        .orderBy("i.step_number")
}