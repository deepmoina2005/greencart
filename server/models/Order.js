import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true, ref: 'user' },
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'product' }, // Reference to product model
    quantity: { type: String, required: true },  // Added quantity as part of the item
  }],
  amount: { type: String, required: true },
  address: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'address' }, // Reference to address model
  status: { type: String, default: 'Order Placed' },
  paymentType: { type: String, required: true },
  isPaid: { type: Boolean, required: true, default: false },
}, {
  timestamps: true,
});

const Order = mongoose.models.order || mongoose.model('order', orderSchema);

export default Order;