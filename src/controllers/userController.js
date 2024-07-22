const User = require("../models/user");

module.exports.findAll = async function (req, res, next) {
  try {
    const users = await User.find()
    return res.status(200).send(users);
  } catch (error) {
    next(Error("Error while getting enabled users"))
  }
}
