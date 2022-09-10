const {getCategories, getProducts, getSubcategories} = require('../services')

const getAllInfo = async (req, res) => {
    const products = await getProducts()
    const categories = await getCategories()
    const subcategories = await getSubcategories()
    res.status(201).json({
        status: 'Ok',
        code: 201,
        data: {products, categories, subcategories}
      });
}

module.exports = getAllInfo