const { Session } = require("../models");

module.exports = async (req, res, next) => {
  try {
    let key = req.headers["key"];
    if (key == null) {
      throw "No Entry";
    }
    let user_session = await Session.findOne({
      where: {
        session_key: key,
      },
    });
    if (user_session === null) {
      throw "No Entry";
    }
    next();
  } catch (error) {
    res.status(401).json({
      message: error,
    });
  }
};
