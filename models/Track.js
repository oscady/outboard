const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const TrackSchema = new Schema({
	submittedBy: {
		type: String,
		required: false
	},
	artistName: {
		type: String,
		required: false
	},
	artistBio: {
		type: String,
		required: false
	},
	trackName: {
		type: String,
		required: false
	},
	artwork: {
		type: String,
		required: false
	},
	url: {
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
	downloadedBy: {
		type: [ Object ],
		default: [],
		required: false
	},
	tags: {
		type: [ String ],
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
});

module.exports = Track = mongoose.model('track', TrackSchema);
