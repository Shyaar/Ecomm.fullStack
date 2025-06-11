const express = require("express");
const router = express.Router();

const  {getAllUsersController,getOneUsersController,createUsersController,} = require('../controllers/userCont')

router.get("/users", getAllUsersController);
router.get("/users/:email", getOneUsersController);
router.post("/users/create", createUsersController);

module.exports = {
    router
}