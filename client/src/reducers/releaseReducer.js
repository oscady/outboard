import { GET_RELEASES, ADD_RELEASE, RELEASES_LOADING } from '../actions/types';

const initialState = {
	tracks: [],
	loading: false
};
// export tracks in current state + changes
export default function(state = initialState, action) {
	switch (action.type) {
		case GET_RELEASES:
			return {
				...state, // return state of tracks
				tracks: action.payload,
				loading: false
			};
		case ADD_RELEASE:
			return {
				...state,
				tracks: [ action.payload, ...state.tracks ] // copy state and return with new image
			};
		case RELEASES_LOADING:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
}
