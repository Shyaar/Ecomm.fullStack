const { where } = require("sequelize");
const { products, users } = require("../models");

const getAllUsers = async () => {
  return await users.findAll();
};

const getSingleUser = async (userMail) => {
  const user = await users.findOne({ where: { email: userMail } });

  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

const createUser = async (userEmail, value) => {
  const emailExist = await users.findOne({ where: { email: userEmail } });

  if (emailExist) {
    throw new Error("User already exists");
  }

  return await users.create(value);
};

module.exports = {
  getAllUsers,
  createUser,
  getSingleUser,
};
