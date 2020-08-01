
exports.seed = function(knex) {
  return knex('ingredients').insert([
    {ing_name: "cup of flour"},
    {ing_name: "teaspoon of baking soda"},
    {ing_name: "teaspoon of salt"},
    {ing_name: "cup  of butter"},
    {ing_name: "cup of sugar"},
    {ing_name: "cup of brown sugar"},
    {ing_name: "whole egg"},
    {ing_name: "teaspoon of vanilla extract"},
    {ing_name: "cup of chocolate chips"},
    {ing_name: "cup of cocoa powder"},
    {ing_name: "cup of milk"}
  ])
    
    
};
