const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    brand_name: { type: String, required: true },
    product_name: { type: String, required: true },
    city: { type: String, required: true },
    province: { type: String, required: true },
    pickup_warehouse: { type: String, required: true },
    store_name: { type: String, required: true },
    quantity: { type: Number, required: true, default: 1 },
    tracking_id: { type: String, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
