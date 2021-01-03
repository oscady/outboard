import { SET_AUDIO_PLAYING, SET_AUDIO_PAUSED, AUDIO_PLAYING, AUDIO_PAUSED, GET_TRACKS } from '../actions/types';

const initialState = {
	playlist: [],
	currentTrack: {},
	playing: false,
	playingTime: '0: 00'
};
// export items in current state + changes
export default function(state = initialState, action) {
	switch (action.type) {
		case GET_TRACKS:
			return {
				...state, // return state of items
				playlist: action.payload,
				loading: false
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

		default:
			return state;
	}
}
