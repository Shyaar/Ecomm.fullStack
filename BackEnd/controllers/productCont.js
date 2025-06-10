const {getProducts, createProduct, getSingleProduct} = require('../DB/productsTable')

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

async function createProductController(req, res) {
  if (!req.body) {
    res.status(406).send({
      success: false,
      message: `Invalid input`,
    });
  }

  const { name, description, price, quantity, image } = req.body;
  console.log(req.body);
  console.log(name);

  const emailExists = await checkEmail(email);
  console.log(emailExists)

  if (emailExists) {
    return res.status(406).send({
      success: false,
      message: "Email already exist",
    });
  }

  try {
    const { error, value } = CreateStaffValidator.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: `failure in creating new staff ${error.details[0].message}`,
      });
    }

    const newStaff = await createStaff(value);

    res.status(201).json(newStaff);
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: `failed to create new staff ${error.message}`,
    });
  }
}

module.exports = {
  getAllProductsController,
  createProductController,
};