
exports.seed = function(knex, Promise) {
  return knex('recipes_ing').insert([
    { recipe_id: 1, ing_id: 1, quantity: 2.25},
    { recipe_id: 1, ing_id: 2, quantity: 1},
    { recipe_id: 1, ing_id: 3, quantity: 0.50},
    { recipe_id: 1, ing_id: 4, quantity: 1},
    { recipe_id: 1, ing_id: 5, quantity: 0.75},
    { recipe_id: 1, ing_id: 6, quantity: 0.75},
    { recipe_id: 1, ing_id: 7, quantity: 1},
    { recipe_id: 1, ing_id: 8, quantity: 1},
    { recipe_id: 1, ing_id: 9, quantity: 2},
    { recipe_id: 2, ing_id: 4, quantity: 0.50},
    { recipe_id: 2, ing_id: 5, quantity: 1},
    { recipe_id: 2, ing_id: 7, quantity: 2},
    { recipe_id: 2, ing_id: 8, quantity: 1},
    { recipe_id: 2, ing_id: 10, quantity: 0.33},
    { recipe_id: 2, ing_id: 1, quantity: 0.50},
    { recipe_id: 2, ing_id: 3, quantity: 0.25},
    { recipe_id: 2, ing_id: 2, quantity: 0.25},
    { recipe_id: 3, ing_id: 5, quantity: 1},
    { recipe_id: 3, ing_id: 4, quantity: 0.50},
    { recipe_id: 3, ing_id: 7, quantity: 2},
    { recipe_id: 3, ing_id: 8, quantity: 2},
    { recipe_id: 3, ing_id: 1, quantity: 1.50},
    { recipe_id: 3, ing_id: 2, quantity: 1.75},
    { recipe_id: 3, ing_id: 11, quantity: 0.50}
  ]);
};
