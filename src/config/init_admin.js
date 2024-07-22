const { User, Role } = require("../models");
const { genSalt, hashPassword } = require("../utils/password-utility");

module.exports = initAdmin = async ()=> {
  const exist_admin = await User.findOne({ email : "admin@mail.com" });
  if(exist_admin){
    return;
  }
  const new_salt = await genSalt();
  const hashed_pwd = await hashPassword("admin", new_salt);
  await User.create({
      firstName: "Admin",
      lastName: "admin",
      phone: "11223344",
      email: "admin@mail.com",
      password: hashed_pwd,
      salt : new_salt,
      role : Role.Admin
    });
  console.log("---------- ADMIN ACCOUNT INITAILIZED ----------")
}