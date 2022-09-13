const { Subcategory } = require("../models");
const { Category } = require("../models");

const getSubcategoryList = async (category) => {
  const categoryObj = await Category.find({ category });
  const categoryId = categoryObj[0]._id;
  const subcategories = [];
  const dataList = await Subcategory.find({ categoryId });
  dataList.map((item) => subcategories.push(item.subcategory));
  return subcategories;
};

module.exports = getSubcategoryList;
