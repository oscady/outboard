const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Track = require('./Track');

// create schema
const ReleaseSchema = new Schema({
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
		type: [ { type: Schema.Types.ObjectId, ref: Track } ]
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
	date: {
		type: Date,
		default: Date.now
	},
	promoEnd: {
		type: Date
	}
});

ReleaseSchema.methods.getTrackIds = function(callback) {
	return Array.from(this.tracks.map((track) => track._id), callback);
};

ReleaseSchema.methods.getArtistNames = function(callback) {
	return Array.from(this.tracks.map((track) => track.artistName), callback);
};

module.exports = Release = mongoose.model('release', ReleaseSchema);
