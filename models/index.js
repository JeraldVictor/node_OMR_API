const { Sequelize } = require("sequelize");
const config = require("../configs");
const path = require("path");
const fs = require("fs");

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
);
let db = {
  sequelize,
  Sequelize,
};

//! import Models .js files
fs.readdirSync(__dirname)
  .filter((file) => file !== "index.js")
  .forEach((file) => {
    db[path.basename(file, ".js")] = require(path.join(__dirname, file))(
      sequelize,
      Sequelize
    );
  });

module.exports = db;
