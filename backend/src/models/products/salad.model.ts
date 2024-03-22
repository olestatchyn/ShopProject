import mongoose from 'mongoose';

const saladSchema = new mongoose.Schema({
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

const Salad = mongoose.model('Salad', saladSchema);

export default Salad;