import {
	SET_AUDIO_PLAYING,
	SET_AUDIO_PAUSED,
	AUDIO_PLAYING,
	AUDIO_PAUSED,
	GET_PLAYLIST,
	NEXT_TRACK,
	PREV_TRACK,
	SET_CURRENT_TRACK,
	SET_CURRENT_TRACK_MOMENT,
	SET_CURRENT_TRACK_DURATION,
	SET_PLAYLIST_LOADING,
	SET_PLAYLIST_LOADED
} from '../actions/types';

const initialState = {
	playerInitialised: false,
	playlist: [],
	playlistLading: false,
	currentTrack: {},
	currentTrackDuration: 0,
	currentTrackMoment: 0,
	playing: false,
	playingTime: '0: 00'
};
// export items in current state + changes
const audioReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_PLAYLIST:
			return {
				...state, // return state of items
				playlist: action.payload
			};
		case SET_PLAYLIST_LOADING:
			return {
				...state, // return state of items
				playlistLoading: true
			};
		case SET_PLAYLIST_LOADED:
			return {
				...state, // return state of items
				playlistLoading: false
			};
		case SET_AUDIO_PLAYING:
			return {
				...state,
				playing: true
			};
		case SET_AUDIO_PAUSED:
			return {
				...state,
				playing: false
			};
		case SET_CURRENT_TRACK:
			return {
				...state,
				currentTrack: action.payload,
				currentTrackMoment: 0,
				playerInitialised: true,
				playing: true
			};
		case SET_CURRENT_TRACK_DURATION:
			return {
				...state,
				currentTrackDuration: action.payload
			};
		case SET_CURRENT_TRACK_MOMENT:
			return {
				...state,
				currentTrackMoment: action.payload
			};
		case NEXT_TRACK:
			return {
				...state,
				currentTrack: action.payload
			};
		case PREV_TRACK:
			return {
				...state,
				currentTrack: action.payload
			};
		default:
			return state;
	}
};

export default audioReducer;
