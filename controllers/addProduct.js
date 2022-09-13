const { Subcategory } = require('../models');
const { Product } = require('../models');

const addProduct = async (req, res) => {
    const { product, subcategory} = req.query
    if (!subcategory && !product){
        res.status(400).json({
            status: "error",
            code: 400,
            data: 'No name of product or subcategory name'
          });
    }
    const subcategoryObj = await Subcategory.find({subcategory})
    const subcategoryId = subcategoryObj[0]._id
    await Product.create({product, subcategoryId})
    res.status(201).json({
        status: 'Ok',
        code: 201,
        data: {
           product
          }
      });
}
module.exports = addProduct