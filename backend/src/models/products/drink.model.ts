import mongoose from 'mongoose';

const drinkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: { 
    type: String,
    required: true,
  },
  popularity: { 
    type: Number,
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

const Drink = mongoose.model('Drink', drinkSchema);

export default Drink;