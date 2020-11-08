const express = require("express");
const path = require("path");
const morgan = require("morgan");
const fs = require("fs");
const cors = require("cors");

const { PORT } = require("./configs");
const { sequelize } = require("./models");

const app = express();

//! Initializing dependencies
//* LOGGER
app.use(
  morgan("combined", {
    stream: fs.createWriteStream(path.join(__dirname, "logs/access.log"), {
      flags: "a",
    }),
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//! routes
require("./routes")(app);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT);
  console.log(`Server started on port ${PORT}`);
});
