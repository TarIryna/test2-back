const express = require('express')
const router = express.Router()
const ctrlWrapper = require('../helpers/ctrlWrapper')
const {
  addCategory,
  addSubcategory,
  getCategories,
  getSubcategories,
  deleteSubcategory,
  deleteCategory
} = require('../controllers')

router.get('/categories', ctrlWrapper(getCategories))
router.get('/subcategories', ctrlWrapper(getSubcategories))
router.post('/newcategory', ctrlWrapper(addCategory))
router.post('/newsubcategory', ctrlWrapper(addSubcategory))
router.delete('/delsubcat', ctrlWrapper(deleteSubcategory))
router.delete('/delcat', ctrlWrapper(deleteCategory))


module.exports = router
