const { Schema, model } = require('mongoose')

const subcategorySchema = new Schema(
  {
    subcategory: {
      type: String,
      unique: true
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: "category",
      },
  }
)

const Subcategory = model('Subcategory', subcategorySchema)

module.exports = {
    Subcategory
}
