module.exports = {
  PORT: process.env.PORT || 3000,
  db: {
    connectionLimit: 100,
    host: "localhost",
    user: "root",
    password: "",
    database: "payark",
    debug: false,
    options: {
      host: "localhost",
      dialect: "mariadb",
      logging: false,
      dialectOptions: {
        timezone: "Etc/GMT-5",
      },
    },
  },
};
