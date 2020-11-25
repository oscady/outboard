const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const ImageSchema = new Schema ({
  cloudName: {
    type: String,
    required: false
  },
  fileType: {
    type: String,
    required: false
  },
  publicId: {
    type: String,
    required: false
  },
  thumbnail: {
    type: String,
    required: false
  },
  tags: {
    type: [String],
    default: [],
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  },
  active: {
    type: Boolean,
    required: false,
    default: false
  }
})

module.exports = Image = mongoose.model('image', ImageSchema);