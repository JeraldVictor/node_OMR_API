const indexRoute = require("./controllers/main");
const homeRoute = require("./controllers/home");
const auth = require("./controllers/auth");

module.exports = (app) => {
  app.get("/", indexRoute.index);
  app.post("/login", indexRoute.login);
  app.post("/register", indexRoute.register);
  app.get("/logout", indexRoute.logout);
  app.get("/home", auth, homeRoute.home);
};
