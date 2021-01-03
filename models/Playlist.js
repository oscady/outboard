const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const PlaylistSchema = new Schema({
	name: {
		type: String,
		required: false
	},
	artists: {
		type: [ String ],
		default: [],
		required: false
	},
	tracks: {
		type: [ Number ],
		default: [],
		required: false
	},
	artwork: {
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
});

module.exports = Playlist = mongoose.model('playlist', PlaylistSchema);
