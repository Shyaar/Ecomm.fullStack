const {  getAllUsers, createUser, getSingleUser} = require('../DB/usersTable')
const {registerSchema, loginSchema,} = require('../validator')


async function getAllUsersController(req, res) {
  try {
    const UserList = await getAllUsers();

    if (UserList.length == 0) {
      return res.status(404).json({
        success: false,
        message: `No User found`,
      });
    }
    console.log(req.url);
    res.status(200).json(UserList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getOneUsersController(req, res) {
    const userMail = req.query.email
  try {
    const UserList = await getSingleUser(userMail);

    if (UserList.length == 0) {
      return res.status(404).json({
        success: false,
        message: `No User found`,
      });
    }
    console.log(req.url);
    res.status(200).json(UserList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createUsersController(req, res) {
  if (!req.body) {
    res.status(406).send({
      success: false,
      message: `Invalid input`,
    });
  }

  const { name, email, password } = req.body;
  console.log(req.body);
  console.log(name);

  try {
    const { error, value } = registerSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: `failure in creating new staff ${error.details[0].message}`,
      });
    }

    const userEmail = value.email

    const newUser = await createUser(userEmail, value);

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: `failed to create new staff ${error.message}`,
    });
  }
}

module.exports = {
  getAllUsersController,
  getOneUsersController,
  createUsersController,
};