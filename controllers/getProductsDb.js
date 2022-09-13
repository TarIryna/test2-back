const { Product } = require("../models");

const getProductsDb = async (req, res) => {
  const products = [];
  const dataList = await Product.find({}, { _id: 0, __v: 0 });
  dataList.map((item) => products.push(item.product));
  products.sort();
  res.status(201).json({
    status: "Ok",
    code: 201,
    data: products,
  });
};

module.exports = getProductsDb;
