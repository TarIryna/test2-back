const { Schema, model } = require('mongoose')

const productSchema = new Schema(
  {
    model: {
      type: String
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
