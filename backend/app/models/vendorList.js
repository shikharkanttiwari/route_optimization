const mongoose = require("mongoose");

const VendorSchema = new mongoose.Schema(
  {
    vendor_name: { type: String, required: true },
    vehicle_type: { type: String, required: true },
    service_type: { type: String, required: true},
    pickup_date: { type: Date, required: true },
    delivery_date: { type: Date, required: true },
    pickup_location: { type: String, required: true },
    drop_location: { type: String, required: true },
    shipment_weight: { type: Number, required: true },
    tracking_id: { type: String, unique: true, required: true },
    status: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vendor", VendorSchema);
