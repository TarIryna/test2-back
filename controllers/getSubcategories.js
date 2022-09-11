const {getSubcategoryList} = require('../services')

const getSubcategories = async (req, res) => {
  const {category} = req.query
  const subcategories = await getSubcategoryList(category)
  res.status(201).json({
    status: 'Ok',
    code: 201,
    data: subcategories
  });
}

  module.exports = getSubcategories