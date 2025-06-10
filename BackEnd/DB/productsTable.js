const {products,users} = require('../models')

const getProducts = async () => {
  return await products.findAll();
};

const getSingleProduct = async (productId)=>{
  const product = await products.findOne({ where: { id: productId } });

  return product
}

const createProduct = async(value)=>{
  return products.create(value)  
}

module.exports = {
  getProducts,
  createProduct,
  getSingleProduct
};