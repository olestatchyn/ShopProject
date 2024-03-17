import mongoose from 'mongoose';

const pizzaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: { 
    type: String,
    required: true,
  },
  sizeAndPrice: {
    type: {
      '30': {
        type: Number
      },
      '40': {
        type: Number
      }
    },
    required: true,
    _id: false
  }

}, { versionKey: false });

const Pizza = mongoose.model('Pizza', pizzaSchema);

export default Pizza;