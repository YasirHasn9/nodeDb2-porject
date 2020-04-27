exports.up = async function(knex) {
  await knex.schema.createTable("cars", table => {
    table.increments("id");
    table.text("model").notNull();
    table.integer("yearOfMake").notNull();
    table.text("color").notNull();
    table.float("$price").notNull();
    table
      .boolean("clean title")
      .notNull()
      .default(true);
  });
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("cars")
};
