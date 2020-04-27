// Update with your config settings.

module.exports = {
  client: "sqlite3", //specifying the db
  connection: {
    filename: "./data/cars.db3" // path of the data
  },
  useNullAsDefault: true
};
