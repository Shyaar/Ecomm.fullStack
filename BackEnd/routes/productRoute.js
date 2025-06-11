const express = require("express");
const productRouter = express.Router();

const { getAllProductsController, getOneProductsController, createProductController,getUserProductsController} = require('../controllers/productCont')

productRouter.get("/products", getAllProductsController);
productRouter.get("/products/:id", getOneProductsController);
productRouter.get("/product/:user_id", getUserProductsController);
productRouter.post("/products/create", createProductController);

module.exports = {productRouter}