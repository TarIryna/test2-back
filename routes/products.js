const express = require('express')
const router = express.Router()
const ctrlWrapper = require('../helpers/ctrlWrapper')
const {
  addCategory,
  addSubcategory,
  addProduct,
  getProducts,
  getSubcategories,
  getCategories,
  deleteSubcategory,
  deleteCategory,
  deleteProduct
} = require('../controllers')


router.get('/', ctrlWrapper(getCategories))
router.get('/subcategories', ctrlWrapper(getSubcategories))
router.get('/products', ctrlWrapper(getProducts))
router.post('/newcategory', ctrlWrapper(addCategory))
router.post('/newsubcategory', ctrlWrapper(addSubcategory))
router.post('/newproduct', ctrlWrapper(addProduct))


module.exports = router
