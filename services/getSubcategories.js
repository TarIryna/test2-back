const { Subcategory } = require('../models');

const getSubcategories = async (req, res) => {
    const subcategories = []
    const dataList = await Subcategory.find({})
    dataList.map(item => subcategories.push(item.subcategory))
    return subcategories
}

module.exports = getSubcategories