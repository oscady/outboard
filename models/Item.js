const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const ItemSchema = new Schema ({
  favourite: {
    type: Boolean,
    default: false
  },
  productionCompany: {
    type: String,
    required: false,
    unique: false
  },
  brand: {
    type: String,
    required: false,
    unique: false
  },
  agency: {
    type: String,
    required: false,
    unique: false
  },
  title: {
    type: String,
    required: false,
    unique: false
  },
  director: {
    type: String,
    required: false,
    unique: false
  },
  video: {
    type: String,
    required: false,
    unique: false
  },
  gallery: {
    type: String,
    required: false,
    unique: false
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Item = mongoose.model('item', ItemSchema);