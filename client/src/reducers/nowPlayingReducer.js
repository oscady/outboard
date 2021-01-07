import { RECEIVE_CURRENT_SONG, RECEIVE_NEXT_SONG, PLAY_SONG, PAUSE_SONG } from '../actions/types';

const initialState = {
	currentSong: null,
	playing: false
};

const nowPlayingReducer = (state = initialState, action) => {
	Object.freeze(state);

	switch (action.type) {
		case RECEIVE_CURRENT_SONG:
			const currentSong = action.currentSong;
			return Object.assign({}, state, { currentSong });
		case PLAY_SONG:
			return Object.assign({}, state, { playing: true });
		case PAUSE_SONG:
			return Object.assign({}, state, { playing: false });
		default:
			return state;
	}
};

export default nowPlayingReducer;
