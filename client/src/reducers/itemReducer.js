import { GET_ITEMS, GET_SINGLE_ITEM, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING /*EDIT_ITEM*/ } from '../actions/types';

const initialState = {
	items: [],
	singleItem: {},
	loading: false
};
// export items in current state + changes
export default function(state = initialState, action) {
	switch (action.type) {
		case GET_ITEMS:
			return {
				...state, // return state of items
				items: action.payload,
				loading: false
			};
		case GET_SINGLE_ITEM:
			return {
				...state, // return state of items
				singleItem: state.items.filter((item) => item._id === action.payload),
				loading: false
			};
		case DELETE_ITEM:
			return {
				...state,
				items: state.items.filter((item) => item._id !== action.payload) //return state without selected id
			};
		case ADD_ITEM:
			return {
				...state,
				items: [ action.payload, ...state.items ] // copy state and return with new item
			};
		case ITEMS_LOADING:
			return {
				...state,
				loading: true
			};

		default:
			return state;
	}
}
