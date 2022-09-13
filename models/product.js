const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  product: {
    type: String,
    unique: true,
  },
  subcategoryId: {
    type: Schema.Types.ObjectId,
    ref: "subcategory",
  },
});

const Product = model("Product", productSchema);

module.exports = {
  Product,
};
