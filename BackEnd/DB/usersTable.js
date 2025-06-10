const {products,users} = require('../models')

const getAllUsers = async () => {
  return await users.findAll();
};

const getSingleUser = async (email)=>{
  const user = await users.findOne({ where: { email: email } });

  return user
}

const createUser = async(value)=>{
  return users.create(value)  
}

module.exports = {
  getAllUsers,
  createUser,
  getSingleUser
};