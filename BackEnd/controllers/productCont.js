const {getProducts, createProduct, getSingleProduct,getUserProducts} = require('../DB/productsTable')
const {createProductSchema} = require('../validators/validator')
const { products, users } = require("../models");


async function getAllProductsController(req, res) {
  try {
    const productList = await getProducts();

    if (productList.length == 0) {
      return res.status(404).json({
        success: false,
        message: `No productfound`,
      });
    }
    console.log(req.url);
    res.status(200).json(productList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getOneProductsController(req, res) {

    const productId = req.params.id

  try {
    const product = await getSingleProduct(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: `Product not found!!`,
      });
    }
    console.log(req.url);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getUserProductsController(req, res) {

  const {user_id} = req.params

  try {
    const Products = await getUserProducts(user_id);

    res.status(201).json(Products);
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: `failed to create new Product ${error.message}`,
    });
  }
}

async function createProductController(req, res) {

  const {user_id} = req.body

  

  if (!req.body) {
    res.status(406).send({
      success: false,
      message: `Invalid input`,
    });
  }

  const { name, description, price, quantity, image } = req.body;
  console.log(req.body);
  console.log(name);


  try {
    const { error, value } = createProductSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: `failure in creating new Product ${error.details[0].message}`,
      });
    }

    const productName = value.name

    const newProduct = await createProduct(user_id,productName, value);

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: `failed to create new Product ${error.message}`,
    });
  }
}

module.exports = {
  getAllProductsController,
  getOneProductsController,
  createProductController,
  getUserProductsController,
};