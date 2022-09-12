const fs = require('fs/promises');
const path = require('path');

const filePath = 'E:\\work\\test2-back\\data\\productsNames.json';

const getProducts = async (req, res) => {
  const products = [];
    const data = await fs.readFile(filePath)
    const result = JSON.parse(data);
    result.map(el => el.sub_categories.map(elem => products.push(elem.name)));
    console.log(products)
    res.status(201).json({
        status: 'Ok',
        code: 201,
        data: products
      });

}
module.exports = getProducts