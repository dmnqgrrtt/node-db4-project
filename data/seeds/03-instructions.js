
exports.seed = function (knex) {
  return knex('instructions').insert([
    {
      recipe_id: 1,
      step_number: 1,
      directions: "Heat oven to 375 degrees. Mix the flour, baking soda, and salt in a large mixing bowl."
    },
    {
      recipe_id: 1,
      step_number: 2,
      directions: "Mix the butter, sugar, brown sugar in a medium mixing bowl."
    },
    {
      recipe_id: 1,
      step_number: 3,
      directions: "Add the egg and the vanilla extract to the medium mixing bowl. Mix in the flour mixture and add the chocolate chips."
    },
    {
      recipe_id: 1,
      step_number: 4,
      directions: "Add tablespoonfulls, 2 inches apart from each other, on to a cookie baking tray."
    },
    {
      recipe_id: 1,
      step_number: 5,
      directions: "Bake for 8 to 10 minutes. Once removed, let cool for about 30 minutes."
    },
    {
      recipe_id: 2,
      step_number: 1,
      directions: "Heat oven to 375 degrees. Grease and flour a baking pan"
    },
    {
      recipe_id: 2,
      step_number: 2,
      directions: "Mix the butter, sugar, eggs, vanilla, cocoa powder, flour, salt, and baking soda in a large mixing bowl. Spread the batter in the the baking pan"
    },
    {
      recipe_id: 2,
      step_number: 3,
      directions: "Bake for 25 to 30 minutes. Remove from the oven and let cool"
    },
    {
      recipe_id: 3,
      step_number: 1,
      directions: "Heat oven to 350 degrees. Grease ans flour a bbaking pan"
    },
    {
      recipe_id: 3,
      step_number: 2,
      directions: "Mix together the sugar, butter, eggs, vanilla, flour, baking soda, and milk. Once mixed, pour the batter in to the baking pan."
    },
    {
      recipe_id: 3,
      step_number: 3,
      directions: "Bake for 30 to 40 minutes. Allow to cool once removed from the oven."
    },

  ])


};
