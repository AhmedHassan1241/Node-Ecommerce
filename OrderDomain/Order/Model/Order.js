const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Order Schema
const orderSchema = new Schema({
    products: [
        {
          id: {
            type: mongoose.Types.ObjectId,ref :'Product',
          },
          quantity: {
            type: Number,
            default: 1,
          },
        },
      ],
      totalPrice: { type: Number, required: true },
      address: { type: Object, required: false },
      status: { type: String, default: "pending" },
    },
    { timestamps: true }
  );
// Create the Order model
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
