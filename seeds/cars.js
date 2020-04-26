exports.seed = async function(knex) {
  // Deletes ALL existing entries

  await knex("cars").truncate();

  await knex("cars").insert([
    {
      model: "BMW",
      yearOfMake: 2020,
      color: "Black",
      $price: 700000,
      "clean title": true
    },
    {
      model: "Mercedes",
      yearOfMake: 2020,
      color: "Red",
      $price: 900000,
      "clean title": true
    },
    {
      model: "Audi",
      yearOfMake: 2020,
      color: "Sliver",
      $price: 600000,
      "clean title": true
    }
  ]);
};
