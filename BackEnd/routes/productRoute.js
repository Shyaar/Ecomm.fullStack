const express = require("express");
const productRouter = express.Router();

const { getAllProductsController, getOneProductsController, createProductController,} = require('../controllers/productCont')

productRouter.get("/products", getAllProductsController);
productRouter.get("/products/:id", getOneProductsController);
productRouter.post("/products/create", createProductController);

module.exports = {productRouter}