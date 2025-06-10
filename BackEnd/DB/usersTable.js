const { where } = require('sequelize');
const {products,users} = require('../models')

const getAllUsers = async () => {
  return await users.findAll();
};

const getSingleUser = async (userMail)=>{
  const user = await users.findOne({ where: { email: userMail } });

  return user
}

const createUser = async(userEmail,value)=>{

    const emailExist = users.findOne({where : {email:userEmail}})

    if(emailExist){
        return `UserFoud ${emailExist}`
    }
    
  return users.create(value)  
}

module.exports = {
  getAllUsers,
  createUser,
  getSingleUser
};