const getSubcategories = require("./getSubcategories");
const getCategories = require("./getCategories");
const getProducts = require("./getProducts");
const getProductsDb = require("./getProductsDb");
const addCategory = require("./addCategory");
const addSubcategory = require("./addSubcategory");
const addProduct = require("./addProduct");

module.exports = {
  addCategory,
  addSubcategory,
  addProduct,
  getSubcategories,
  getCategories,
  getProducts,
  getProductsDb,
};
