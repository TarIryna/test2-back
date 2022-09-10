const getAllInfo = require('./getAllInfo')
const addCategory = require('./addCategory')
const addSubcategory = require('./addSubcategory')
const addProduct = require('./addProduct')
const deleteSubcategory = require('./deleteSubcategory')
const deleteProduct = require('./deleteProduct')
const deleteCategory = require('./deleteCategory')


module.exports = {
    addCategory,
    addSubcategory,
    addProduct,
    getAllInfo,
    deleteSubcategory,
    deleteCategory,
    deleteProduct
}