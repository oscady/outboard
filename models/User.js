const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const UserSchema = new Schema ({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  registeredDate: {
    type: Date,
    default: Date.now
  },
  activeSub: {
    type: Boolean,
    required: false
  },
  lastActiveSub: {
    type: Date,
    required: false
  },
  favouriteArtists: {
    type: Array,
    required: false
  },
  tracksDownloaded: {
    type: Array,
    required: false
  },
  tracksBought: {
    type: Array,
    required: false
  },
  tracksPlayed: {
    type: Array,
    required: false
  },
})

module.exports = User = mongoose.model('user', UserSchema);