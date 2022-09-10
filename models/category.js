const { Schema, model } = require('mongoose')

const categorySchema = new Schema(
  {
    category: {
      type: String,
      unique: true
    }
  }
)

const Category = model('Category', categorySchema)

module.exports = {
    Category
}
