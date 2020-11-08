// const { User, Session } = require("../models");
// const { encrypt, uid } = require("../utils");

module.exports = {
  async home(req, res) {
    try {
      res.status(200).json({
        message: "Welcome Home",
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  },
};
