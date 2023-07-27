const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  products: {
    type: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          default: 1,
        },
      },
    ],
    default: [],
  },
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
