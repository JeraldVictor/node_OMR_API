const { Sequelize } = require("sequelize");
const config = require("../configs");

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
);

//! import Models

const db = {
  sequelize,
  Sequelize,
  User: require("./User")(sequelize, Sequelize),
  Session: require("./Session")(sequelize, Sequelize),
};

module.exports = db;
