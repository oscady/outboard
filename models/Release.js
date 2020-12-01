const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const ReleaseSchema = new Schema ({
  name: {
    type: String,
    required: false
  },
  artists: {
    type: [String],
    default: [],
    required: false
  },
  tracks: {
    type: [Object],
    default: [],
    required: false
  },
  artworkThumb: {
    type: String,
    required: false
  },
  artworkSmall: {
    type: String,
    required: false
  },
  artworkLarge: {
    type: String,
    required: false
  },
  favourite: {
    type: Boolean,
    default: false
  },
  dateActive: {
    type: Date,
    default: Date.now
  },
  promoEnd: {
    type: Date
  }
})

module.exports = Release = mongoose.model('release', ReleaseSchema);