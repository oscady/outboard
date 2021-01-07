import { GET_IMAGES, ADD_IMAGE, IMAGES_LOADING } from '../actions/types';

const initialState = {
	images: [],
	loading: false
};
// export images in current state + changes
const imageUploadReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_IMAGES:
			return {
				...state, // return state of images
				images: action.payload,
				loading: false
			};
		case ADD_IMAGE:
			return {
				...state,
				images: [ action.payload, ...state.images ], // copy state and return with new image
				loading: false
			};
		case IMAGES_LOADING:
			return {
				...state,
				loading: true
			};

		default:
			return state;
	}
};

export default imageUploadReducer;
