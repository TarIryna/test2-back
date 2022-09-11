const express = require('express')
const router = express.Router()
const ctrlWrapper = require('../helpers/ctrlWrapper')
const {
  addCategory,
  addSubcategory,
  addProduct,
  getAllInfo,
  getSubcategories,
  getCategories,
  deleteSubcategory,
  deleteCategory,
  deleteProduct
} = require('../controllers')


router.get('/', ctrlWrapper(getCategories))
router.get('/subcategories', ctrlWrapper(getSubcategories))
// router.get('/categories', ctrlWrapper(getCategories))
router.post('/newcategory', ctrlWrapper(addCategory))
router.post('/newsubcategory', ctrlWrapper(addSubcategory))
router.post('/newproduct', ctrlWrapper(addProduct))
router.delete('/delsubcat', ctrlWrapper(deleteSubcategory))
router.delete('/delcat', ctrlWrapper(deleteCategory))
router.delete('/delprod', ctrlWrapper(deleteProduct))


module.exports = router
