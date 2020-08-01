
exports.up = function (knex) {
    return knex.schema
        .createTable("recipes", tbl => {
            tbl.increments();
            tbl.string("recipe_name", 128).notNullable();
        })
        .createTable("ingredients", tbl => {
            tbl.increments();
            tbl.string("ing_name", 128).notNullable();
        })
        .createTable("instructions", tbl => {
            tbl.increments();
            tbl.integer('step_number')
                .unsigned()
                .notNullable();
            tbl.string("directions")
                .notNullable();
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('recipes.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
        .createTable("recipes_ing", tbl => {
            tbl.integer("recipe_id").unsigned().notNullable().references("recipes.id").onDelete("CASCADE").onUpdate("CASCADE");
            tbl.integer("ing_id").unsigned().notNullable().references("ingredients.id").onDelete("CASCADE").onUpdate("CASCADE");
            tbl.float("quantity").notNullable();
            tbl.primary(["recipe_id", "ing_id"]);
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('recipes_ing')
        .dropTableIfExists("instructions")
        .dropTableIfExists("ingredients")
        .dropTableIfExists('recipes');
};
