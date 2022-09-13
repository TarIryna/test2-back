const { Category } = require("../models");

const addCategory = async (req, res) => {
  const { category } = req.query;
  const { _id: categoryId } = await Category.create({ category });
  res.status(201).json({
    status: "Ok",
    code: 201,
    data: {
      category,
    },
  });
};

module.exports = addCategory;
