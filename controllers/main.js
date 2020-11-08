const { User, Session } = require("../models");
const { encrypt, uid } = require("../utils");

module.exports = {
  async index(req, res) {
    try {
      let users = await User.findAll();
      res.status(200).json({
        message: "Hello",
        users,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  },
  async login(req, res) {
    try {
      let { email, password } = req.body;
      password = await encrypt(password);
      let userList = await User.findOne({
        attributes: ["id", "name", "email"],
        where: {
          email,
          password,
        },
      });
      if (userList === null) {
        throw "Email id or Password Not Found.";
      }
      let user_id = userList.dataValues.id;
      let key = uid();
      await Session.destroy({
        where: { uid: user_id },
      });
      await Session.create({
        uid: user_id,
        session_key: key,
      });
      userList.key = user_id;
      res.status(200).json({
        info: {
          key: key,
          id: userList.id,
          name: userList.name,
          email: userList.email,
        },
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  },
  async register(req, res) {
    try {
      let { name, email, password } = req.body;
      password = await encrypt(password);
      let user_id = await User.create({
        name,
        email,
        password,
      });
      user_id = user_id.dataValues.id;
      let key = uid();
      await Session.create({
        uid: user_id,
        session_key: key,
      });
      res.status(201).json({
        message: "User Created",
        info: {
          name,
          email,
          id: user_id,
          key,
        },
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  },
  async logout(req, res) {
    try {
      let key = req.headers["key"];
      if (key == null) {
        throw { message: "Bad Request" };
      }
      await Session.destroy({
        where: {
          session_key: key,
        },
      });

      res.status(200).json({
        message: "Thank You",
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  },
};
