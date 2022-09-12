const getAllInfo = require('./getAllInfo')
const getSubcategories = require('./getSubcategories')
const getCategories = require('./getCategories')
const getProducts = require('./getProducts')
const addCategory = require('./addCategory')
const addSubcategory = require('./addSubcategory')
const addProduct = require('./addProduct')


module.exports = {
    addCategory,
    addSubcategory,
    addProduct,
    getAllInfo,
    getSubcategories,
    getCategories,
    getProducts
}