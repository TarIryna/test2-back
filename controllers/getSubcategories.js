const { Subcategory } = require('../models');

const getSubcategories = async (req, res) => {
    const subcategories = []
    const dataList = await Subcategory.find({})
    const data = dataList.map(item => subcategories.push(item.subcategory))
    console.log(dataList)
    res.status(201).json({
        status: 'Ok',
        code: 201,
        data: subcategories
      });
}

module.exports = getSubcategories