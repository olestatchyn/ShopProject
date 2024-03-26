import mongoose from 'mongoose';

const otherItemSchema = new mongoose.Schema({
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

const OtherItem = mongoose.model('OtherItem', otherItemSchema);

export default OtherItem;