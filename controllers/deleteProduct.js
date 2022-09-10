const { Product } = require('../models');

const deleteProduct = async (req, res) => {
    const { productId } = req.query;
    const deleting = await Product.findByIdAndRemove(productId)
    res.status(201).json({
        status: 'Ok',
        code: 201,
        message: "Product deleted"
      });
}

module.exports = deleteProduct