import {
	GET_RELEASES,
	ADD_RELEASE,
	SET_RELEASES_LOADING,
	SET_RELEASES_LOADED,
	SET_RELEASE_PLAYLIST
} from '../actions/types';

const initialState = {
	releases: [],
	playlist: [],
	loading: false
};
// export tracks in current state + changes
const releaseReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_RELEASES:
			return {
				...state, // return state of tracks
				releases: action.payload
			};
		case SET_RELEASE_PLAYLIST:
			return {
				...state,
				playlist: action.payload
			};
		case ADD_RELEASE:
			return {
				...state,
				releases: [ action.payload, ...state.tracks ] // copy state and return with new image
			};
		case SET_RELEASES_LOADING:
			return {
				...state,
				loading: true
			};
		case SET_RELEASES_LOADED:
			return {
				...state,
				loading: false
			};
		default:
			return state;
	}
};

export default releaseReducer;
