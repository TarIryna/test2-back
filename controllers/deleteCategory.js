const { Category } = require('../models');

const deleteCategory = async (req, res) => {
    const { categoryId } = req.query;
    const deleting = await Category.findByIdAndRemove(categoryId)
    res.status(201).json({
        status: 'Ok',
        code: 201,
        message: "Category deleted"
      });
}

module.exports = deleteCategory