import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  order: {
    pizza: [{
      name: String,
      size: String,
      quantity: Number
    }],
    drink: [{
      name: String,
      size: String,
      quantity: Number
    }],
    salad: [{
      name: String,
      size: String,
      quantity: Number
    }],
    other: [{
      name: String,
      size: String,
      quantity: Number
    }]
  },
  contacts: {
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: Number,
      required: true
    },
    email: {
      type: String,
      required: true
    },
  },
  address: {
    street: {
      type: String,
      required: true
    },
    building: {
      type: String,
      required: true
    },
    flat: {
      type: String,
      required: false
    },
  },
  dateAndTime: {
    date: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
  },
  paymentMethod: {
    type: String,
    enum: ['Credit Card', 'Cash'],
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'Delivered', 'Complete', 'Cancelled'],
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
}, { versionKey: false });

const Order = mongoose.model('Order', orderSchema);

export default Order;