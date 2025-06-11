const { products, users } = require("../models");

const getProducts = async () => {
  return await products.findAll();
};

const getSingleProduct = async (productId) => {
  const product = await products.findOne({ where: { id: productId } });

  if(!product){
    throw new Error ("product does not exists")
  }

  return product;
};

const createProduct = async (user_id,productName, value) => {
  const user = await users.findOne({where:{ id:user_id }})
  const productExist = await products.findOne({ where: { name: productName } });

  if(!user){
    throw new Error("must be a user to create product exists");

  }

  if (productExist) {
    throw new Error("Product already exists");
  }

  return products.create(value);
};

module.exports = {
  getProducts,
  createProduct,
  getSingleProduct,
};
