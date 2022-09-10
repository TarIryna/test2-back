const { Category } = require('../models');

const getCategories = async (req, res) => {
    const categories = []
    const dataList = await Category.find({}, {_id: 0, __v:0})
    const data = dataList.map(item => categories.push(item.category))
    res.status(201).json({
        status: 'Ok',
        code: 201,
        data: categories
      });
}

module.exports = getCategories