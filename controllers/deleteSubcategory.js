const { Subcategory } = require('../models');

const deleteSubcategory = async (req, res) => {
    const { subcategoryId } = req.query;
    const deleting = await Subcategory.findByIdAndRemove(subcategoryId)
    res.status(201).json({
        status: 'Ok',
        code: 201,
        message: "Subcategory deleted"
      });
}

module.exports = deleteSubcategory