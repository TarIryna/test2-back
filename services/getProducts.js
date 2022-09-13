const { Product } = require("../models");

const getProducts = async (req, res) => {
  const products = [];
  const dataList = await Product.find({}, { _id: 0, __v: 0 });
  dataList.map((item) => products.push(item.product));
  return products;
};

module.exports = getProducts;
