const { Subcategory } = require("../models");
const { Category } = require("../models");

const addSubcategory = async (req, res) => {
  const { subcategory, category } = req.query;
  if (!subcategory && !category) {
    res.status(400).json({
      status: "error",
      code: 400,
      data: "No category or subcategory name",
    });
  }
  const categoryObj = await Category.find({ category });
  const categoryId = categoryObj[0]._id;
  const findSubcat = await Subcategory.find({ subcategory });
  const { _id: subcategoryId } = await Subcategory.create({
    subcategory,
    categoryId,
  });
  res.status(201).json({
    status: "Ok",
    code: 201,
    data: {
      subcategory,
    },
  });
};
module.exports = addSubcategory;
