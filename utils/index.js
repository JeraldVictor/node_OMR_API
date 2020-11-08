const crypto = require("crypto");
const uniqid = require("uniqid");

encrypt = async (password) => {
  try {
    let hash = await crypto
      .pbkdf2Sync(password, "salt", 10, 64, "sha512")
      .toString("hex");
    return hash;
  } catch (e) {
    throw e;
  }
};

module.exports = { uid: uniqid, encrypt };
