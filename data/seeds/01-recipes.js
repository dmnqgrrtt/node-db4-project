
exports.seed = function(knex) {
  return knex('recipes').insert([
    {recipe_name: "Home Made Cookies"},
    {recipe_name: "Home Made Brownies"},
    {recipe_name: "Simple White Cake"}
  ])
    
    
};
