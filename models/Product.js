const { required } = require("joi");
const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please provide a name"],
    maxlength: [100, "Name cannot be more than 100 characters"],
  },
  price: {
    type: Number,
    required: [true, "Please provide a price"],
    default: 0
  },
  description: {
    type: String,
    required: [true, "Please provide a description"],
    maxlength: [1000, "Description cannot be more than 1000 characters"],
  },
  image: {
    type: String,
    default: '/uploads/example.jpg',
  },
  category: {
    type: String,
    required: [true, "Please provide a category"],  
    enum: ['office', 'kitchen', 'bedroom']
  },
  company: {
    type: String,
    required: [true, "Please provide a company"],   
    enum:{
        values: ['ikea', 'liddy', 'marcos'],
        message: '{VALUE} is not supported'
    }
  },
  colors: {
    type: [],
    required: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  freeShipping: {
    type: Boolean,
    default: false
  },
  inventory: {
    type: Number,
    required: true,
    default: 15,
  },
  averageRating: {
    type: Number,
    default: 0
  },
  users:{
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  }
},
{timestamps: true}
);


module.exports = mongoose.model("Product", ProductSchema);