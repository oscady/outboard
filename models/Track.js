const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const TrackSchema = new Schema ({
  artist: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: false
  },
  artwork: {
    type: String,
    required: false
  },
  streamLink: {
    type: String,
    required: false
  },
  mp3: {
    type: String,
    required: false
  },
  wav: {
    type: String,
    required: false
  },
  totalDownloads: {
    type: Number,
    required: false
  },
  totalPurchased: {
    type: Array,
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

module.exports = Video = mongoose.model('video', TrackSchema);