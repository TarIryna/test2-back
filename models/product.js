const { Schema, model } = require('mongoose')

const productSchema = new Schema(
  {
    model: {
      type: String,
      unique: true
    },
    subcategory: {
        type: Schema.Types.ObjectId,
        ref: "subcategory",
      },
  }
)

const Product = model('Product', productSchema)

module.exports = {
    Product
}
